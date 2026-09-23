"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/app/_global/projects";
import { stagger, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <section className="border-b border-border bg-section">
        <MaxWidthWrapper className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brass mb-3">
              Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Things I&apos;ve built
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A mix of accounting tools and products where I handled both the
              build and the business behind it — from lease accounting under
              ASC 842 to shipping and running a self-funded software company.
            </p>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      {/* Grid */}
      <MaxWidthWrapper className="py-16 md:py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.slug} variants={staggerItem} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProjectsPage;
