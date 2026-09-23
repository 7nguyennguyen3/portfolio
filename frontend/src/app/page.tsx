"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import {
  ArrowRight,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, staggerItem } from "@/lib/motion";
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

const STATS = [
  { label: "Major GPA", value: "3.52" },
  { label: "CPA Eligible", value: "May 2028" },
  { label: "App Downloads", value: "500+" },
];

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

export default function Home() {
  return (
    <div className="relative bg-background overflow-x-hidden">
      {/* --- Hero --- */}
      <section className="relative border-b border-border bg-section">
        <MaxWidthWrapper className="py-20 md:py-28">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            {/* Left */}
            <div className="flex-1 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/30 bg-brass/10 px-3 py-1 text-xs font-medium text-brass mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                  Accounting Student · CPA-Track · May 2028
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-foreground mb-5">
                  Nguyen Nguyen
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
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
                  className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-semibold text-white hover:bg-brass-hover transition-colors"
                >
                  <FileText className="h-4 w-4" /> View Résumé
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  See my work <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-1 ml-1">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    aria-label="Email"
                    className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-2 text-sm text-muted-foreground mt-6"
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
              <div className="absolute -inset-3 rounded-3xl bg-brass/10 blur-3xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-card bg-card ring-1 ring-border">
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
                className="rounded-xl border border-border bg-card px-4 py-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* --- Education --- */}
      <section id="education" className="py-20 md:py-24">
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Academic background
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.school}
                className="rounded-2xl border border-border bg-card p-6 md:p-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <GraduationCap size={20} className="text-brass" />
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  {edu.school}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {edu.credential}
                </p>
                {edu.details.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {edu.details.map((d) => (
                      <li
                        key={d}
                        className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-md"
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
      </section>

      {/* --- Experience (timeline) --- */}
      <section
        id="experience"
        className="py-20 md:py-24 bg-section border-y border-border"
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Where I&apos;ve worked
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative border-l border-border pl-8 space-y-10"
          >
            {EXPERIENCE.map((exp) => (
              <motion.div
                key={exp.company}
                variants={staggerItem}
                className="relative"
              >
                <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full bg-brass ring-4 ring-section" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-brass font-medium">
                      {exp.company}{" "}
                      <span className="text-muted-foreground font-normal">
                        · {exp.location}
                      </span>
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap md:pt-1">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* --- Projects --- */}
      <section id="projects" className="py-20 md:py-24">
        <MaxWidthWrapper>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Selected work
              </h2>
              <p className="text-muted-foreground">
                Accounting tools and products where I owned both the build and
                the business behind it.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <Projects />
        </MaxWidthWrapper>
      </section>

      {/* --- Campus & Professional Involvement (divided rows) --- */}
      <section
        id="involvement"
        className="py-20 md:py-24 bg-section border-y border-border"
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Campus & professional involvement
            </h2>
          </div>

          <div className="divide-y divide-border border-t border-border">
            {INVOLVEMENT.map((inv) => (
              <div
                key={inv.org}
                className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 py-6"
              >
                <div className="md:w-1/3">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    {inv.org}
                  </h3>
                  {inv.role && (
                    <p className="text-brass font-medium text-sm">
                      {inv.role}
                    </p>
                  )}
                  {inv.period && (
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {inv.period}
                    </p>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed md:w-2/3">
                  {inv.detail}
                </p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* --- Skills & Certifications (inline tag rows) --- */}
      <section id="skills" className="py-20 md:py-24">
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What I work with
            </h2>
          </div>

          <div className="space-y-8 max-w-3xl">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <TagRow key={category} label={category} tags={skills} />
            ))}
            <TagRow label="Certifications" tags={CERTIFICATIONS} />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* --- Beyond work --- */}
      <section
        id="beyond-work"
        className="py-20 md:py-24 bg-section border-y border-border"
      >
        <MaxWidthWrapper>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              A bit more about me
            </h2>
          </div>

          <div className="space-y-8 max-w-3xl">
            <TagRow label="Interests" tags={INTERESTS} />
            <TagRow label="Languages" tags={LANGUAGES} />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* --- Contact CTA --- */}
      <motion.section
        id="contact"
        className="py-20 md:py-28"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MaxWidthWrapper className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-ink px-8 py-14 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
              Let&apos;s connect
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
              I&apos;m open to accounting internships, VITA work, and
              conversations about the profession. Feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brass px-8 py-3.5 text-base font-semibold text-white hover:bg-brass-hover transition-colors w-full sm:w-auto"
              >
                Get in touch
              </Link>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                <Mail size={18} /> {PROFILE.email}
              </a>
            </div>
          </div>
        </MaxWidthWrapper>
      </motion.section>
    </div>
  );
}
