"use client";

import { ProjectItem } from "@/app/_global/projects";
import {
  ArrowRight,
  ExternalLink,
  Apple,
  PlayCircle,
  Github,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  return (
    <div className="group flex flex-col h-full rounded-2xl border border-border bg-card p-6 md:p-7 transition-all duration-200 hover:border-brass/40 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap pt-1">
          {project.type}
        </span>
        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap pt-1">
          {project.period}
        </span>
      </div>

      <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
        {project.title}
      </h3>
      <p className="text-sm font-medium text-brass mb-3">
        {project.subtitle}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary border border-border rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-brass transition-colors"
        >
          View details
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Live <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {project.appStoreLink && (
          <a
            href={project.appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            App Store <Apple className="h-3.5 w-3.5" />
          </a>
        )}
        {project.playStoreLink && (
          <a
            href={project.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Google Play <PlayCircle className="h-3.5 w-3.5" />
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Code <Github className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
