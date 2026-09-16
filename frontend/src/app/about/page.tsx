"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Target,
  Heart,
  Users,
  Languages as LanguagesIcon,
  FileText,
} from "lucide-react";
import {
  INVOLVEMENT,
  INTERESTS,
  LANGUAGES,
  PROFILE,
} from "../_global/variables";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutMePage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-slate-50 bg-grid-slate">
        <MaxWidthWrapper className="py-16 md:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
          >
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-2xl border-4 border-white shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/LinkedIn_Headshot.jpg"
                  alt="Nguyen Nguyen"
                  fill
                  className="object-cover object-top scale-[1.3]"
                  priority
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
                Hi, I&apos;m Nguyen
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Accounting student · CPA-track · Aspiring tax & assurance
                professional
              </p>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      <MaxWidthWrapper className="py-16 md:py-20 space-y-14">
        {/* Intro */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="max-w-3xl"
        >
          <h2 className="text-2xl font-heading font-semibold text-slate-900 flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            My story
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              I&apos;m an accounting student at California State University,
              Fullerton, with a concentration in Accounting and a minor in
              Business Data Analytics. I&apos;m on track to be CPA-eligible in
              May 2028.
            </p>
            <p>
              Before committing to accounting, I founded and ran Embercore LLC —
              a self-funded software company. That experience taught me the
              financial side of running a business firsthand: bookkeeping,
              monthly bank reconciliations, expense tracking, pricing, and
              building basic internal controls around payments and access. It&apos;s
              what pulled me toward accounting as a career.
            </p>
            <p>
              Today I&apos;m focused on tax and assurance, sharpening my Excel and
              data-analytics skills, and getting hands-on experience through VITA
              and campus organizations. I still keep a foot in tech — I built an
              ASC 842 lease calculator to connect the accounting standards
              I&apos;m learning with tools I can actually build.
            </p>
          </div>
        </motion.section>

        {/* Journey & Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <h3 className="flex items-center gap-2 text-xl font-heading font-semibold text-slate-900 mb-3">
              <GraduationCap className="w-6 h-6 text-emerald-600" />
              How I got here
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Running my own LLC turned abstract business concepts into real,
              recurring work — closing the books, reconciling accounts, and
              keeping clean records. I found I genuinely enjoyed the rigor of it,
              which led me to pursue accounting and the CPA track.
            </p>
          </motion.section>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
            className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <h3 className="flex items-center gap-2 text-xl font-heading font-semibold text-slate-900 mb-3">
              <Target className="w-6 h-6 text-emerald-600" />
              What&apos;s next
            </h3>
            <p className="text-slate-600 leading-relaxed">
              I&apos;m completing my IRS VITA certification, staying active in Beta
              Alpha Psi and other professional organizations, and looking for
              accounting internships where I can contribute and keep learning the
              profession from the inside.
            </p>
          </motion.section>
        </div>

        {/* Involvement */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={sectionVariants}
        >
          <h2 className="text-2xl font-heading font-semibold text-slate-900 flex items-center gap-2 mb-6">
            <Users className="w-6 h-6 text-emerald-600" />
            Campus & professional involvement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INVOLVEMENT.map((item) => (
              <div
                key={item.org}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading font-semibold text-slate-900">
                    {item.org}
                  </h3>
                  {item.role && (
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {item.role}
                    </span>
                  )}
                </div>
                {item.period && (
                  <p className="text-xs text-slate-400 mb-2">{item.period}</p>
                )}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Beyond work */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-heading font-semibold text-slate-900 mb-4">
              <Heart className="w-6 h-6 text-emerald-600" />
              Beyond the books
            </h3>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-heading font-semibold text-slate-900 mb-4">
              <LanguagesIcon className="w-6 h-6 text-emerald-600" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="rounded-2xl border border-slate-200 bg-slate-900 p-8 md:p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
            Want the full picture?
          </h2>
          <p className="text-slate-300 mb-6 max-w-lg mx-auto">
            My résumé has the complete rundown of my experience, education, and
            certifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors w-full sm:w-auto"
            >
              <FileText size={18} /> View Résumé
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </motion.section>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutMePage;
