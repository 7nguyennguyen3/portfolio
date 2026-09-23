"use client";

import { PROJECTS } from "@/app/_global/projects";
import ProjectCard from "@/components/ProjectCard";
import { stagger, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
    >
      {PROJECTS.map((project) => (
        <motion.div key={project.slug} variants={staggerItem} className="h-full">
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
