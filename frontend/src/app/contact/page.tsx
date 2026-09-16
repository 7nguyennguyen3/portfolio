"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FileText, Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";
import React from "react";
import { PROFILE } from "../_global/variables";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    cta: "Send an email",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/7nguyennguyen3",
    href: PROFILE.linkedin,
    cta: "View profile",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/7nguyennguyen3",
    href: PROFILE.github,
    cta: "View profile",
    external: true,
  },
];

const ContactPage = () => {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 bg-grid-slate">
        <MaxWidthWrapper className="py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              I&apos;m open to accounting internships, VITA and volunteer tax
              work, and conversations about the profession. The best way to
              reach me is email — I&apos;ll do my best to reply promptly.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-700">
                  <method.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-emerald-600 transition-colors" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                {method.label}
              </p>
              <p className="text-slate-900 font-medium break-words mb-3">
                {method.value}
              </p>
              <span className="text-sm font-semibold text-emerald-700">
                {method.cta} →
              </span>
            </a>
          ))}
        </div>

        {/* Résumé */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-900 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/10 text-white">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-semibold text-white mb-1">
                My résumé
              </h2>
              <p className="text-slate-300 text-sm max-w-md">
                The full rundown of my experience, education, certifications, and
                skills — open it in your browser or download a copy.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              <FileText size={18} /> View
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              <Download size={18} /> Download
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;
