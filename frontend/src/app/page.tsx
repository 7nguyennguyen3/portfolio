"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Calculator,
  Database,
  FileText,
  Github,
  GraduationCap,
  Heart,
  Languages as LanguagesIcon,
  Linkedin,
  Mail,
  MapPin,
  Users,
  Wrench,
  BadgeCheck,
  LucideProps,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  SKILL_CATEGORIES,
  SKILLS_DATA,
  CERTIFICATIONS,
  EXPERIENCE,
  EDUCATION,
  INVOLVEMENT,
  INTERESTS,
  LANGUAGES,
  PROFILE,
} from "./_global/variables";

/* --- Group skills by category --- */
const groupSkills = () => {
  const grouped: Record<string, string[]> = {};
  Object.keys(SKILL_CATEGORIES).forEach((cat) => (grouped[cat] = []));
  SKILLS_DATA.forEach((skill) => {
    for (const [category, types] of Object.entries(SKILL_CATEGORIES)) {
      if (types.includes(skill.type)) {
        grouped[category].push(skill.skill);
        break;
      }
    }
  });
  return Object.fromEntries(
    Object.entries(grouped).filter(([, s]) => s.length > 0),
  );
};

const groupedSkills = groupSkills();

const categoryIcons: Record<string, React.ElementType<LucideProps>> = {
  "Accounting & Finance": Calculator,
  "Data & Analytics": Database,
  "Software & Tools": Wrench,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const STATS = [
  { label: "Major GPA", value: "3.52" },
  { label: "CPA Eligible", value: "May 2028" },
  { label: "App Downloads", value: "500+" },
];

export default function Home() {
  return (
    <div className="relative bg-white overflow-x-hidden">
      {/* --- Hero --- */}
      <section className="relative border-b border-slate-200 bg-slate-50 bg-grid-slate">
        <MaxWidthWrapper className="py-20 md:py-28">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            {/* Left */}
            <div className="flex-1 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Accounting Student · CPA-Track · May 2028
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-slate-900 mb-5">
                  Nguyen Nguyen
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mb-8">
                  Accounting student at Cal State Fullerton with a minor in
                  Business Data Analytics. I care about clean books, sound
                  internal controls, and using data to make better financial
                  decisions — with a builder&apos;s background from running my
                  own LLC.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition-colors"
                >
                  <FileText className="h-4 w-4" /> View Résumé
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  See my work <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-1 ml-1">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    aria-label="Email"
                    className="p-2.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 text-sm text-slate-500 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MapPin className="h-4 w-4" /> {PROFILE.location}
              </motion.div>
            </div>

            {/* Right — profile */}
            <motion.div
              className="relative w-full max-w-[260px] md:max-w-[320px] aspect-square"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-200/50 to-slate-200/50 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-white bg-white shadow-xl ring-1 ring-slate-200">
                <Image
                  src="/LinkedIn_Headshot.jpg"
                  alt="Nguyen Nguyen"
                  fill
                  className="object-cover object-[50%_15%] scale-[1.3] translate-x-[8%]"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-6 mt-14 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center shadow-sm"
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-slate-500 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* --- Education --- */}
      <motion.section
        id="education"
        className="py-20 md:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              Education
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Academic background
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.school}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                    <GraduationCap size={22} />
                  </div>
                  <span className="text-sm text-slate-500">{edu.period}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-slate-900 mb-1">
                  {edu.school}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{edu.credential}</p>
                {edu.details.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {edu.details.map((d) => (
                      <li
                        key={d}
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-md"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </motion.section>

      {/* --- Experience --- */}
      <motion.section
        id="experience"
        className="py-20 md:py-24 bg-slate-50 border-y border-slate-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Where I&apos;ve worked
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
              <div
                key={exp.company}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-700 font-medium">
                      {exp.company}{" "}
                      <span className="text-slate-400 font-normal">
                        · {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 whitespace-nowrap md:pt-1">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </motion.section>

      {/* --- Projects --- */}
      <motion.section
        id="projects"
        className="py-20 md:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
                Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">
                Selected work
              </h2>
              <p className="text-slate-600">
                Accounting tools and products where I owned both the build and
                the business behind it.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <Projects />
        </MaxWidthWrapper>
      </motion.section>

      {/* --- Campus & Professional Involvement --- */}
      <motion.section
        id="involvement"
        className="py-20 md:py-24 bg-slate-50 border-y border-slate-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              Involvement
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              Campus & professional involvement
            </h2>
          </div>

          <div className="space-y-6">
            {INVOLVEMENT.map((inv) => (
              <div
                key={inv.org}
                className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-slate-900">
                        {inv.org}
                      </h3>
                      {inv.role && (
                        <p className="text-emerald-700 font-medium text-sm">
                          {inv.role}
                        </p>
                      )}
                    </div>
                  </div>
                  {inv.period && (
                    <span className="text-sm text-slate-500 whitespace-nowrap md:pt-1">
                      {inv.period}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {inv.detail}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </motion.section>

      {/* --- Skills & Certifications --- */}
      <motion.section
        id="skills"
        className="py-20 md:py-24"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              What I work with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(groupedSkills).map(([category, skills]) => {
              const Icon = categoryIcons[category] || Wrench;
              return (
                <div
                  key={category}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-slate-900">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                <BadgeCheck size={20} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-slate-900">
                Certifications
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg"
                >
                  <BadgeCheck size={14} className="text-emerald-600" />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </motion.section>

      {/* --- Beyond work --- */}
      <motion.section
        id="beyond-work"
        className="py-20 md:py-24 bg-slate-50 border-y border-slate-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              Beyond work
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
              A bit more about me
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                  <Heart size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900">
                  Interests
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-md"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                  <LanguagesIcon size={20} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-md"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </motion.section>

      {/* --- Contact CTA --- */}
      <motion.section
        id="contact"
        className="py-20 md:py-28"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MaxWidthWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-5">
            Let&apos;s connect
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
            I&apos;m open to accounting internships, VITA work, and
            conversations about the profession. Feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-3.5 text-base font-semibold text-white hover:bg-slate-800 transition-colors w-full sm:w-auto"
            >
              Get in touch
            </Link>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              <Mail size={18} /> {PROFILE.email}
            </a>
          </div>
        </MaxWidthWrapper>
      </motion.section>
    </div>
  );
}
