"use client";
import { notFound, useParams } from "next/navigation";
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
      "chatbot-demo",
    ].includes(projectName) ? (
    <ProjectDetail projectName={projectName} />
  ) : (
    notFound()
  );
};

export default ProjectDetailPage;
