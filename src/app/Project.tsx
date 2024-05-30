import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectProps {
  title: string;
  technologies: string[];
  description: string;
  href: string;
  link: string;
  img1: string;
  img2: string;
}

const Project = ({
  title,
  technologies,
  description,
  href,
  link,
  img1,
  img2,
}: ProjectProps) => (
  <>
    <div className="flex flex-col gap-8 max-w-[500px]">
      <h3 className="text-2xl gra-b-r">{title}</h3>
      <div className="flex flex-wrap items-center gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-black text-white p-[6px] text-[12px] rounded-md pointer-events-none"
          >
            {tech}
          </span>
        ))}
      </div>
      <p>{description}</p>
      <div className="flex items-center gap-5">
        <Link href={href} className={cn(buttonVariants())}>
          View Project
        </Link>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "cursor-pointer text-white bg-gradient-to-r from-blue-600 to bg-red-500 hover:from-blue-500 hover:to-red-400"
          )}
        >
          Visit Site
        </a>
      </div>
    </div>
    <div className="w-full h-[450px] relative mb-20">
      <img
        alt="project image"
        loading="lazy"
        src={img2}
        className="absolute top-0 right-0 w-3/4 h-[80%] object-cover rounded-lg shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
      />
      <img
        alt="project image"
        loading="lazy"
        src={img1}
        className="absolute bottom-0 left-0 w-3/4 h-[80%] object-cover rounded-lg shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
      />
    </div>
  </>
);

export default Project;
