"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import LeaseCalculator from "@/components/LeaseCalculator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROJECTS, getProject } from "@/app/_global/projects";
import {
  AlertTriangle,
  Apple,
  ArrowLeft,
  ArrowRight,
  Calculator,
  Check,
  ExternalLink,
  Github,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  LucideProps,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, staggerItem } from "@/lib/motion";

const iconMap: Record<string, React.ElementType<LucideProps>> = {
  calculator: Calculator,
  sparkles: Sparkles,
  smartphone: Smartphone,
};

const ProjectDetail = ({ projectName }: { projectName: string }) => {
  const project = getProject(projectName);

  if (!project) {
    return (
      <div className="py-20 min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center">
        <MaxWidthWrapper>
          <AlertTriangle className="w-16 h-16 text-brass mb-4 mx-auto" />
          <h1 className="text-3xl font-heading font-bold mb-2 text-foreground">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            Could not find details for a project named &quot;{projectName}&quot;.
          </p>
          <Link
            href="/projects"
            className={cn(
              buttonVariants(),
              "bg-ink text-white hover:bg-ink/90"
            )}
          >
            Back to Projects
          </Link>
        </MaxWidthWrapper>
      </div>
    );
  }

  const Icon = iconMap[project.icon] ?? Calculator;
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="pb-20 md:pb-24"
    >
      {/* Banner */}
      <div className="border-b border-border bg-section">
        <MaxWidthWrapper className="py-12 md:py-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Icon className="h-9 w-9 text-brass shrink-0" />
            <div>
              <p className="text-sm font-medium text-brass mb-1">
                {project.type} · {project.period}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-foreground">
                {project.title}
              </h1>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper className="pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <motion.section
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-heading font-semibold mb-4 border-b border-border pb-2 text-foreground">
                Overview
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                {project.purpose.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.section>

            <motion.section
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-2xl font-heading font-semibold mb-4 border-b border-border pb-2 text-foreground">
                Highlights
              </h2>
              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-3"
              >
                {project.highlights.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-brass flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 lg:sticky lg:top-24 h-fit flex flex-col gap-6 p-6 border border-border rounded-2xl bg-card"
          >
            <h3 className="text-lg font-heading font-semibold border-b border-border pb-3 text-foreground">
              Project Info
            </h3>

            <div className="flex flex-col gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "gap-2 w-full bg-brass hover:bg-brass-hover text-white"
                  )}
                >
                  Visit Live Site <ExternalLink size={18} />
                </a>
              )}
              {project.appStoreLink && (
                <a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "gap-2 w-full bg-brass hover:bg-brass-hover text-white"
                  )}
                >
                  Download on the App Store <Apple size={18} />
                </a>
              )}
              {project.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 w-full border-border text-foreground/80 hover:bg-accent"
                  )}
                >
                  Get it on Google Play <PlayCircle size={18} />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 w-full border-border text-foreground/80 hover:bg-accent"
                  )}
                >
                  View on GitHub <Github size={18} />
                </a>
              )}
              {project.privacyLink && (
                <Link
                  href={project.privacyLink}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2 w-full border-border text-foreground/80 hover:bg-accent"
                  )}
                >
                  Privacy Policy <ShieldCheck size={18} />
                </Link>
              )}
            </div>

            {project.storeNote && (
              <p className="text-sm text-muted-foreground -mt-2">{project.storeNote}</p>
            )}

            <div>
              <h4 className="font-semibold mb-1 text-xs text-muted-foreground uppercase tracking-wider">
                Type
              </h4>
              <p className="text-foreground/80 text-sm">{project.type}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-xs text-muted-foreground uppercase tracking-wider">
                Tech & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {otherProjects.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-xs text-muted-foreground uppercase tracking-wider border-t border-border pt-4">
                  Other Projects
                </h4>
                <div className="flex flex-col gap-3">
                  {otherProjects.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/projects/${other.slug}`}
                      className="text-sm text-muted-foreground hover:text-brass flex items-center justify-between group"
                    >
                      {other.title}
                      <ArrowRight
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.aside>
        </div>

        {project.slug === "asc-842-lease-calculator" && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-14 md:mt-20"
          >
            <LeaseCalculator />
          </motion.div>
        )}
      </MaxWidthWrapper>
    </motion.div>
  );
};

export default ProjectDetail;
