"use client";
import { notFound, useParams, useSearchParams } from "next/navigation";
import ProjectDetail from "./ProjectDetail";

const ProjectDetailPage = () => {
  const searchParams = useParams();
  const projectName = searchParams.projectName;

  return typeof projectName === "string" &&
    [
      "versa-ai",
      "petalsoft",
      "finance-kaiju",
      "hit-anime",
      "microservices",
      "finance-kaiju-mobile",
    ].includes(projectName) ? (
    <ProjectDetail projectName={projectName} />
  ) : (
    notFound()
  );
};

export default ProjectDetailPage;
