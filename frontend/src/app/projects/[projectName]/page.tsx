"use client";
import { notFound, useParams } from "next/navigation";
import { PROJECT_SLUGS } from "@/app/_global/projects";
import ProjectDetail from "./ProjectDetail";

const ProjectDetailPage = () => {
  const searchParams = useParams();
  const projectName = searchParams.projectName;

  return typeof projectName === "string" &&
    PROJECT_SLUGS.includes(projectName) ? (
    <ProjectDetail projectName={projectName} />
  ) : (
    notFound()
  );
};

export default ProjectDetailPage;
