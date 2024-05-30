"use client";
import { buttonVariants } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
  {
    name: "PetalSoft",
    description:
      "An e-commerce store that sells skin care and perfumes. It has a lot of cool stuff like specialized chatbot, stripe payment processing, admin dashboard, and more!",
    link: "/projects/petalsoft",
    bgColor: "bg-blue-300 hover:bg-blue-200",
  },
  {
    name: "Finance Kaiju",
    description:
      "A finance and goal tracking app that make it easier to get on top of your spending. It has real time updates whenever you add or update any goal or finance record.",
    link: "/projects/finance-kaiju",
    bgColor: "bg-green-300 hover:bg-green-200",
  },
  {
    name: "Hit Anime",
    description:
      "A friendly anime web app that let you quickly search for your next anime to watch. It is optimized to be quick and simple so you can find your next series or movie!",
    link: "/projects/petalsoft",
    bgColor: "bg-red-300 hover:bg-red-200",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <div className="py-20">
            <div className="flex xs:mt-[400px] lg:mt-[0px] md:flex-row flex-wrap items-end justify-center gap-5">
              {PROJECTS.map((project) => (
                <div className="" key={project.name}>
                  <div className="w-full relative max-w-[300px]">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                      <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-2 w-2 text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                          />
                        </svg>
                      </div>
                      <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                        {project.name}
                      </h1>
                      <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                        {project.description}
                      </p>
                      <Link
                        href={project.link}
                        className={cn(
                          buttonVariants(),
                          `text-white ${project.bgColor} gap-2`
                        )}
                      >
                        Explore
                        <ArrowRight size={22} />
                      </Link>
                      <Meteors number={30} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default ProjectsPage;
