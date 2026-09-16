"use client";

import { PROJECTS } from "@/app/_global/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {PROJECTS.map((project) => (
        <motion.div key={project.slug} variants={item} className="h-full">
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
