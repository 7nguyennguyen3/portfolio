"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import {
  INVOLVEMENT,
  INTERESTS,
  LANGUAGES,
  PROFILE,
} from "../_global/variables";

const TagRow = ({ label, tags }: { label: string; tags: string[] }) => (
  <div>
    <h3 className="text-sm font-semibold text-brass mb-3">{label}</h3>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-md"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const AboutMePage = () => {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-section">
        <MaxWidthWrapper className="py-16 md:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center"
          >
            <div className="md:col-span-1 flex justify-center md:justify-start">
              <div className="relative w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-2xl border-4 border-card ring-1 ring-border">
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
              <p className="text-sm font-semibold uppercase tracking-widest text-brass mb-3">
                About
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Hi, I&apos;m Nguyen
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
          variants={fadeUp}
          className="max-w-3xl"
        >
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
            My story
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl">
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
              How I got here
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Running my own LLC turned abstract business concepts into real,
              recurring work — closing the books, reconciling accounts, and
              keeping clean records. I found I genuinely enjoyed the rigor of it,
              which led me to pursue accounting and the CPA track.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
              What&apos;s next
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m completing my IRS VITA certification, staying active in Beta
              Alpha Psi and other professional organizations, and looking for
              accounting internships where I can contribute and keep learning the
              profession from the inside.
            </p>
          </div>
        </div>

        {/* Involvement */}
        <section>
          <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
            Campus & professional involvement
          </h2>
          <div className="divide-y divide-border border-t border-border">
            {INVOLVEMENT.map((item) => (
              <div
                key={item.org}
                className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 py-5"
              >
                <div className="md:w-1/3">
                  <h3 className="font-heading font-semibold text-foreground">
                    {item.org}
                  </h3>
                  {item.role && (
                    <p className="text-brass font-medium text-sm">
                      {item.role}
                    </p>
                  )}
                  {item.period && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.period}
                    </p>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed md:w-2/3">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond work */}
        <div className="space-y-8 max-w-3xl">
          <TagRow label="Beyond the books" tags={INTERESTS} />
          <TagRow label="Languages" tags={LANGUAGES} />
        </div>

        {/* Close */}
        <section className="border-t border-border pt-10 text-center max-w-lg mx-auto">
          <h2 className="text-xl font-heading font-semibold text-foreground mb-2">
            Want the full picture?
          </h2>
          <p className="text-muted-foreground mb-6">
            My résumé has the complete rundown of my experience, education, and
            certifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={PROFILE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-white hover:bg-brass-hover transition-colors w-full sm:w-auto"
            >
              <FileText size={18} /> View Résumé
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors w-full sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutMePage;
