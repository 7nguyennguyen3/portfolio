"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/app/_global/projects";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 bg-grid-slate">
        <MaxWidthWrapper className="py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 mb-3">
              Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4">
              Things I&apos;ve built
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
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
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.slug} variants={item} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProjectsPage;
