"use client";
import { notFound, useParams, useSearchParams } from "next/navigation";
import ProjectDetail from "./ProjectDetail";

const ProjectDetailPage = () => {
  const searchParams = useParams();
  const projectName = searchParams.projectName;
  console.log(projectName);

  return typeof projectName === "string" &&
    ["petalsoft", "finance-kaiju", "hit-anime"].includes(projectName) ? (
    <ProjectDetail projectName={projectName} />
  ) : (
    notFound()
  );
};

export default ProjectDetailPage;
