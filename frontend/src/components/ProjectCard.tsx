"use client";

import { cn } from "@/lib/utils";
import { ProjectItem } from "@/app/_global/projects";
import {
  ArrowRight,
  Calculator,
  Sparkles,
  Smartphone,
  ExternalLink,
  Apple,
  PlayCircle,
  Github,
  LucideProps,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const iconMap: Record<ProjectItem["icon"], React.ElementType<LucideProps>> = {
  calculator: Calculator,
  sparkles: Sparkles,
  smartphone: Smartphone,
};

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const Icon = iconMap[project.icon];

  return (
    <div className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
            project.accent
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs font-medium text-slate-400 whitespace-nowrap pt-1">
          {project.period}
        </span>
      </div>

      <h3 className="text-xl font-heading font-semibold text-slate-900 mb-1">
        {project.title}
      </h3>
      <p className="text-sm font-medium text-emerald-700 mb-3">
        {project.subtitle}
      </p>
      <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
        >
          View details
          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Live <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
        {project.appStoreLink && (
          <a
            href={project.appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            App Store <Apple className="h-3.5 w-3.5" />
          </a>
        )}
        {project.playStoreLink && (
          <a
            href={project.playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Google Play <PlayCircle className="h-3.5 w-3.5" />
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            Code <Github className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
