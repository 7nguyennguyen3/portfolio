"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { Calculator, Download, Info, Sheet } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

type Frequency = "monthly" | "quarterly" | "annually";
type Timing = "end" | "begin";

const FREQUENCY_OPTIONS: { value: Frequency; label: string; periodsPerYear: number; periodUnit: string }[] = [
  { value: "monthly", label: "Monthly", periodsPerYear: 12, periodUnit: "months" },
  { value: "quarterly", label: "Quarterly", periodsPerYear: 4, periodUnit: "quarters" },
  { value: "annually", label: "Annually", periodsPerYear: 1, periodUnit: "years" },
];

const currency = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);

const percent = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(Number.isFinite(n) ? n : 0);

interface ScheduleRow {
  period: number;
  beginningLiability: number;
  interest: number;
  payment: number;
  endingLiability: number;
  beginningROU: number;
  rouAmortization: number;
  endingROU: number;
  periodExpense: number;
}

function computeSchedule(params: {
  term: number;
  payment: number;
  periodicRate: number;
  timing: Timing;
  rouAsset0: number;
  liability0: number;
  isFinance: boolean;
}): ScheduleRow[] {
  const { term, payment, periodicRate, timing, rouAsset0, liability0, isFinance } = params;
  if (term <= 0) return [];

  const totalCashPaid = payment * term;
  const straightLineExpense = term > 0 ? totalCashPaid / term : 0;
  const straightLineROUAmort = term > 0 ? rouAsset0 / term : 0;

  const rows: ScheduleRow[] = [];
  let liabilityBal = liability0;
  let rouBal = rouAsset0;

  for (let i = 1; i <= term; i++) {
    const beginningLiability = liabilityBal;
    const beginningROU = rouBal;

    let interest: number;
    let endingLiability: number;

    if (timing === "begin") {
      const afterPayment = beginningLiability - payment;
      interest = afterPayment * periodicRate;
      endingLiability = afterPayment + interest;
    } else {
      interest = beginningLiability * periodicRate;
      endingLiability = beginningLiability + interest - payment;
    }

    // clean up floating point dust / final period rounding to zero
    if (i === term) endingLiability = 0;

    let rouAmortization: number;
    let periodExpense: number;

    if (isFinance) {
      rouAmortization = i === term ? beginningROU : straightLineROUAmort;
      periodExpense = interest + rouAmortization;
    } else {
      periodExpense = straightLineExpense;
      rouAmortization = i === term ? beginningROU : periodExpense - interest;
    }

    const endingROU = Math.max(beginningROU - rouAmortization, 0);
    rouBal = endingROU;
    liabilityBal = endingLiability;

    rows.push({
      period: i,
      beginningLiability,
      interest,
      payment,
      endingLiability,
      beginningROU,
      rouAmortization,
      endingROU,
      periodExpense,
    });
  }

  return rows;
}

const fieldLabelCls = "text-xs font-medium text-muted-foreground mb-1.5 block";
const inputCls =
  "w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brass/30 focus:border-brass transition-colors";
const selectCls = inputCls + " appearance-none";

const LeaseCalculator = () => {
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [term, setTerm] = useState<number>(36);
  const [payment, setPayment] = useState<number>(2000);
  const [annualRate, setAnnualRate] = useState<number>(6);
  const [timing, setTiming] = useState<Timing>("end");
  const [initialDirectCosts, setInitialDirectCosts] = useState<number>(0);
  const [leaseIncentives, setLeaseIncentives] = useState<number>(0);
  const [fairValue, setFairValue] = useState<number>(0);
  const [economicLife, setEconomicLife] = useState<number>(0);
  const [transferOwnership, setTransferOwnership] = useState(false);
  const [bargainPurchase, setBargainPurchase] = useState(false);
  const [specializedAsset, setSpecializedAsset] = useState(false);

  const freqConfig = FREQUENCY_OPTIONS.find((f) => f.value === frequency)!;

  const {
    periodicRate,
    liability0,
    rouAsset0,
    isFinance,
    classification,
    tests,
    schedule,
  } = useMemo(() => {
    const periodicRate = annualRate / 100 / freqConfig.periodsPerYear;
    const n = Math.max(0, Math.floor(term));
    const pmt = Math.max(0, payment);

    let pvOrdinary: number;
    if (periodicRate === 0) {
      pvOrdinary = pmt * n;
    } else {
      pvOrdinary = pmt * ((1 - Math.pow(1 + periodicRate, -n)) / periodicRate);
    }
    const pv = timing === "begin" ? pvOrdinary * (1 + periodicRate) : pvOrdinary;

    const liability0 = pv;
    const rouAsset0 = Math.max(
      0,
      liability0 + Math.max(0, initialDirectCosts) - Math.max(0, leaseIncentives)
    );

    const testEconomicLife = economicLife > 0 ? n / economicLife >= 0.75 : false;
    const testFairValue = fairValue > 0 ? liability0 / fairValue >= 0.9 : false;

    const tests = [
      {
        key: "ownership",
        label: "Ownership transfers to lessee at end of term",
        met: transferOwnership,
      },
      {
        key: "bpo",
        label: "Lease contains a bargain purchase option",
        met: bargainPurchase,
      },
      {
        key: "life",
        label: "Lease term is ≥75% of the asset's remaining economic life",
        met: testEconomicLife,
        detail:
          economicLife > 0
            ? `${n} / ${economicLife} = ${percent(n / economicLife)}`
            : "Enter economic life to test",
      },
      {
        key: "fv",
        label: "PV of payments is ≥90% of the asset's fair value",
        met: testFairValue,
        detail: fairValue > 0 ? percent(liability0 / fairValue) : "Enter fair value to test",
      },
      {
        key: "specialized",
        label: "Asset is specialized with no alternative use to lessor",
        met: specializedAsset,
      },
    ];

    const isFinance = tests.some((t) => t.met);
    const classification = isFinance ? "Finance Lease" : "Operating Lease";

    const schedule = computeSchedule({
      term: n,
      payment: pmt,
      periodicRate,
      timing,
      rouAsset0,
      liability0,
      isFinance,
    });

    return { periodicRate, liability0, rouAsset0, isFinance, classification, tests, schedule };
  }, [
    annualRate,
    freqConfig,
    term,
    payment,
    timing,
    initialDirectCosts,
    leaseIncentives,
    fairValue,
    economicLife,
    transferOwnership,
    bargainPurchase,
    specializedAsset,
  ]);

  const totals = schedule.reduce(
    (acc, r) => ({
      payment: acc.payment + r.payment,
      interest: acc.interest + r.interest,
      rouAmortization: acc.rouAmortization + r.rouAmortization,
      periodExpense: acc.periodExpense + r.periodExpense,
    }),
    { payment: 0, interest: 0, rouAmortization: 0, periodExpense: 0 }
  );

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = 16;

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("ASC 842 Lease Amortization Schedule", 14, y);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(120);
    doc.text(
      `Generated ${new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}`,
      pageWidth - 14,
      y,
      { align: "right" }
    );
    doc.setTextColor(0);
    y += 8;

    autoTable(doc, {
      startY: y,
      theme: "plain",
      styles: { fontSize: 9, cellPadding: 1.5 },
      columnStyles: { 0: { fontStyle: "bold", cellWidth: 60 } },
      body: [
        ["Classification", classification],
        [
          "Payment frequency / term",
          `${freqConfig.label} / ${term} ${freqConfig.periodUnit}`,
        ],
        ["Payment per period", currency(payment)],
        ["Discount rate (annual)", `${annualRate}%`],
        [
          "Payment timing",
          timing === "begin" ? "Beginning of period (annuity due)" : "End of period (ordinary annuity)",
        ],
        ["Initial direct costs", currency(initialDirectCosts)],
        ["Lease incentives received", currency(leaseIncentives)],
        ["Initial lease liability", currency(liability0)],
        ["Initial ROU asset", currency(rouAsset0)],
      ],
    });

    y = (doc as any).lastAutoTable.finalY + 8;

    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Classification Tests", 14, y);
    y += 4;

    autoTable(doc, {
      startY: y,
      theme: "grid",
      headStyles: { fillColor: [28, 33, 41] },
      styles: { fontSize: 8.5, cellPadding: 2 },
      head: [["Met?", "Test", "Detail"]],
      body: tests.map((t) => [
        t.met ? "Yes" : "No",
        t.label,
        "detail" in t && t.detail ? t.detail : "",
      ]),
    });

    y = (doc as any).lastAutoTable.finalY + 8;

    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("Amortization Schedule", 14, y);
    y += 4;

    autoTable(doc, {
      startY: y,
      theme: "striped",
      headStyles: { fillColor: [28, 33, 41] },
      styles: { fontSize: 8, cellPadding: 1.8 },
      head: [
        [
          "#",
          "Beg. Liability",
          "Interest",
          "Payment",
          "End Liability",
          "ROU Amort.",
          "End ROU",
          "Period Expense",
        ],
      ],
      body: schedule.map((row) => [
        row.period,
        currency(row.beginningLiability),
        currency(row.interest),
        currency(row.payment),
        currency(row.endingLiability),
        currency(row.rouAmortization),
        currency(row.endingROU),
        currency(row.periodExpense),
      ]),
      foot: [
        [
          "Total",
          "",
          currency(totals.interest),
          currency(totals.payment),
          "",
          currency(totals.rouAmortization),
          "",
          currency(totals.periodExpense),
        ],
      ],
      footStyles: { fillColor: [243, 239, 230], textColor: [28, 33, 41], fontStyle: "bold" },
      didDrawPage: () => {
        const pageCount = doc.getNumberOfPages();
        doc.setFontSize(7.5);
        doc.setTextColor(150);
        doc.text(
          "For illustration only. Not a substitute for professional judgment under ASC 842.",
          14,
          doc.internal.pageSize.getHeight() - 8
        );
        doc.text(
          `Page ${pageCount}`,
          pageWidth - 14,
          doc.internal.pageSize.getHeight() - 8,
          { align: "right" }
        );
      },
    });

    doc.save(`ASC842-Lease-Schedule-${Date.now()}.pdf`);
  };

  const handleExportExcel = () => {
    const currencyFmt = "#,##0.00";

    const summarySheet = XLSX.utils.aoa_to_sheet([
      ["ASC 842 Lease Amortization Schedule"],
      [`Generated ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`],
      [],
      ["Classification", classification],
      ["Payment frequency", freqConfig.label],
      ["Lease term", term, freqConfig.periodUnit],
      ["Payment per period", payment],
      ["Discount rate (annual %)", annualRate],
      ["Payment timing", timing === "begin" ? "Beginning of period (annuity due)" : "End of period (ordinary annuity)"],
      ["Initial direct costs", initialDirectCosts],
      ["Lease incentives received", leaseIncentives],
      ["Initial lease liability", liability0],
      ["Initial ROU asset", rouAsset0],
      [],
      ["Classification Tests"],
      ["Met?", "Test", "Detail"],
      ...tests.map((t) => [t.met ? "Yes" : "No", t.label, "detail" in t && t.detail ? t.detail : ""]),
    ]);
    summarySheet["!cols"] = [{ wch: 30 }, { wch: 45 }, { wch: 25 }];
    ["B7", "B8", "B11", "B12", "B13", "B14"].forEach((cell) => {
      if (summarySheet[cell]) summarySheet[cell].z = currencyFmt;
    });

    const scheduleSheet = XLSX.utils.json_to_sheet(
      schedule.map((row) => ({
        "#": row.period,
        "Beg. Liability": row.beginningLiability,
        Interest: row.interest,
        Payment: row.payment,
        "End Liability": row.endingLiability,
        "ROU Amort.": row.rouAmortization,
        "End ROU": row.endingROU,
        "Period Expense": row.periodExpense,
      }))
    );
    const scheduleCols = ["B", "C", "D", "E", "F", "G", "H"];
    const range = XLSX.utils.decode_range(scheduleSheet["!ref"] || "A1");
    for (let r = range.s.r + 1; r <= range.e.r; r++) {
      scheduleCols.forEach((col) => {
        const cell = scheduleSheet[`${col}${r + 1}`];
        if (cell) cell.z = currencyFmt;
      });
    }
    scheduleSheet["!cols"] = [
      { wch: 6 },
      { wch: 14 },
      { wch: 12 },
      { wch: 12 },
      { wch: 14 },
      { wch: 12 },
      { wch: 12 },
      { wch: 14 },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, summarySheet, "Summary");
    XLSX.utils.book_append_sheet(workbook, scheduleSheet, "Amortization Schedule");
    XLSX.writeFile(workbook, `ASC842-Lease-Schedule-${Date.now()}.xlsx`);
  };

  return (
    <section className="mt-4">
      <div className="flex items-center justify-between gap-2.5 mb-4 border-b border-border pb-2">
        <div className="flex items-center gap-2.5">
          <Calculator className="h-5 w-5 text-brass" />
          <h2 className="text-2xl font-heading font-semibold text-foreground">
            Try the Calculator
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleExportExcel}
            disabled={schedule.length === 0}
            className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Sheet className="h-3.5 w-3.5" />
            Export Excel
          </button>
          <button
            type="button"
            onClick={handleExportPDF}
            disabled={schedule.length === 0}
            className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/80 hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-2 flex flex-col gap-5 p-5 border border-border rounded-2xl bg-card h-fit">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={fieldLabelCls}>Payment frequency</label>
              <select
                className={selectCls}
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as Frequency)}
              >
                {FREQUENCY_OPTIONS.map((f) => (
                  <option key={f.value} value={f.value}>
                    {f.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={fieldLabelCls}>
                Lease term ({freqConfig.periodUnit})
              </label>
              <input
                type="number"
                min={0}
                className={inputCls}
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={fieldLabelCls}>Payment per period</label>
              <input
                type="number"
                min={0}
                className={inputCls}
                value={payment}
                onChange={(e) => setPayment(Number(e.target.value))}
              />
            </div>
            <div>
              <label className={fieldLabelCls}>Discount rate (annual %)</label>
              <input
                type="number"
                min={0}
                step={0.1}
                className={inputCls}
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
              />
            </div>
          </div>

          <div>
            <label className={fieldLabelCls}>Payment timing</label>
            <select
              className={selectCls}
              value={timing}
              onChange={(e) => setTiming(e.target.value as Timing)}
            >
              <option value="end">End of period (ordinary annuity)</option>
              <option value="begin">Beginning of period (annuity due)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={fieldLabelCls}>Initial direct costs</label>
              <input
                type="number"
                min={0}
                className={inputCls}
                value={initialDirectCosts}
                onChange={(e) => setInitialDirectCosts(Number(e.target.value))}
              />
            </div>
            <div>
              <label className={fieldLabelCls}>Lease incentives received</label>
              <input
                type="number"
                min={0}
                className={inputCls}
                value={leaseIncentives}
                onChange={(e) => setLeaseIncentives(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="pt-3 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Classification test inputs
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className={fieldLabelCls}>Fair value of asset</label>
                <input
                  type="number"
                  min={0}
                  className={inputCls}
                  value={fairValue}
                  onChange={(e) => setFairValue(Number(e.target.value))}
                />
              </div>
              <div>
                <label className={fieldLabelCls}>
                  Remaining economic life ({freqConfig.periodUnit})
                </label>
                <input
                  type="number"
                  min={0}
                  className={inputCls}
                  value={economicLife}
                  onChange={(e) => setEconomicLife(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-brass focus:ring-brass/30"
                  checked={transferOwnership}
                  onChange={(e) => setTransferOwnership(e.target.checked)}
                />
                Ownership transfers at end of term
              </label>
              <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-brass focus:ring-brass/30"
                  checked={bargainPurchase}
                  onChange={(e) => setBargainPurchase(e.target.checked)}
                />
                Bargain purchase option
              </label>
              <label className="flex items-center gap-2 text-sm text-foreground/80 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border text-brass focus:ring-brass/30"
                  checked={specializedAsset}
                  onChange={(e) => setSpecializedAsset(e.target.checked)}
                />
                Specialized asset, no alternative use
              </label>
            </div>
          </div>

          <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <Info className="h-3.5 w-3.5 shrink-0 mt-0.5" />
            For illustration only. Not a substitute for professional judgment
            under ASC 842.
          </p>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-border bg-card">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Classification
              </p>
              <p
                className={cn(
                  "text-lg font-heading font-semibold",
                  isFinance ? "text-amber-700 dark:text-amber-500" : "text-brass"
                )}
              >
                {classification}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Initial Lease Liability
              </p>
              <p className="text-lg font-heading font-semibold text-foreground">
                {currency(liability0)}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-border bg-card">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Initial ROU Asset
              </p>
              <p className="text-lg font-heading font-semibold text-foreground">
                {currency(rouAsset0)}
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Classification tests
            </p>
            <ul className="flex flex-col gap-2">
              {tests.map((t) => (
                <li key={t.key} className="flex items-start gap-2 text-sm">
                  <span
                    className={cn(
                      "mt-0.5 h-4 w-4 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold",
                      t.met
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                        : "bg-secondary text-muted-foreground"
                    )}
                  >
                    {t.met ? "Y" : "N"}
                  </span>
                  <span className="text-muted-foreground">
                    {t.label}
                    {"detail" in t && t.detail ? (
                      <span className="text-muted-foreground/70"> — {t.detail}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/70 mt-3">
              Any test met classifies the lease as a finance lease; otherwise
              it is an operating lease.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 pt-4 pb-3">
              Amortization schedule
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[720px]">
                <thead>
                  <tr className="border-y border-border bg-section text-left text-xs text-muted-foreground uppercase tracking-wider">
                    <th className="px-4 py-2 font-medium">#</th>
                    <th className="px-4 py-2 font-medium">Beg. Liability</th>
                    <th className="px-4 py-2 font-medium">Interest</th>
                    <th className="px-4 py-2 font-medium">Payment</th>
                    <th className="px-4 py-2 font-medium">End Liability</th>
                    <th className="px-4 py-2 font-medium">ROU Amort.</th>
                    <th className="px-4 py-2 font-medium">End ROU</th>
                    <th className="px-4 py-2 font-medium">Period Expense</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row) => (
                    <tr
                      key={row.period}
                      className="border-b border-border/60 last:border-0 text-muted-foreground"
                    >
                      <td className="px-4 py-2">{row.period}</td>
                      <td className="px-4 py-2">{currency(row.beginningLiability)}</td>
                      <td className="px-4 py-2">{currency(row.interest)}</td>
                      <td className="px-4 py-2">{currency(row.payment)}</td>
                      <td className="px-4 py-2">{currency(row.endingLiability)}</td>
                      <td className="px-4 py-2">{currency(row.rouAmortization)}</td>
                      <td className="px-4 py-2">{currency(row.endingROU)}</td>
                      <td className="px-4 py-2">{currency(row.periodExpense)}</td>
                    </tr>
                  ))}
                  {schedule.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-4 py-6 text-center text-muted-foreground">
                        Enter a lease term to generate a schedule.
                      </td>
                    </tr>
                  )}
                </tbody>
                {schedule.length > 0 && (
                  <tfoot>
                    <tr className="border-t border-border bg-section font-medium text-foreground/80">
                      <td className="px-4 py-2">Total</td>
                      <td className="px-4 py-2" />
                      <td className="px-4 py-2">{currency(totals.interest)}</td>
                      <td className="px-4 py-2">{currency(totals.payment)}</td>
                      <td className="px-4 py-2" />
                      <td className="px-4 py-2">{currency(totals.rouAmortization)}</td>
                      <td className="px-4 py-2" />
                      <td className="px-4 py-2">{currency(totals.periodExpense)}</td>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseCalculator;
