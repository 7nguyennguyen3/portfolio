"use client";
import { buttonVariants } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Consider adding brief, consistent alt text or labels if these were images
const PROJECTS = [
  {
    name: "Chatbot Demo",
    description:
      "Two chatbots powered by Google's Gemini Flash: one for lead generation, the other for customer support in a cosmetic store.", // Slightly rephrased
    link: "/projects/chatbot-demo",
    bgColor: "bg-blue-500 hover:bg-blue-300", // Keep background colors for buttons
  },
  {
    name: "Versa-AI",
    description:
      "An AI platform for intelligent PDF conversations, context-aware search, and more, featuring a dual-backend architecture.", // Slightly rephrased
    link: "/projects/versa-ai",
    bgColor: "bg-purple-500 hover:bg-purple-300",
  },
  {
    name: "PetalSoft",
    description:
      "An e-commerce store for skincare/perfumes with features like a specialized chatbot, Stripe payments, admin dashboard, etc.", // Slightly rephrased
    link: "/projects/petalsoft",
    bgColor: "bg-blue-300 hover:bg-blue-200",
  },
  {
    name: "Microservices",
    description:
      "A scalable microservices architecture project exploring Docker, Kubernetes, Nginx, and Virtual Machines.", // Slightly rephrased
    link: "/projects/microservices",
    bgColor: "bg-yellow-300 hover:bg-yellow-200",
  },
  {
    name: "Finance Kaiju Mobile",
    description:
      "A mobile finance tracker with improved UI/UX, features, and performance compared to its predecessor.", // Slightly rephrased
    link: "/projects/finance-kaiju-mobile",
    bgColor: "bg-purple-300 hover:bg-purple-200",
  },
  {
    name: "Hit Anime",
    description:
      "A fast and simple web app to quickly search for your next anime series or movie to watch.", // Slightly rephrased
    link: "/projects/hit-anime",
    bgColor: "bg-red-300 hover:bg-red-200",
  },
  {
    name: "Finance Kaiju",
    description:
      "A finance and goal tracking web app with real-time updates for easier spending management.", // Slightly rephrased
    link: "/projects/finance-kaiju",
    bgColor: "bg-green-300 hover:bg-green-200",
  },
];

const ProjectsPage = () => {
  return (
    // Ensure outer container allows scrolling if content overflows vertically
    <div className="min-h-screen w-full overflow-x-hidden">
      {" "}
      {/* Added overflow-x-hidden */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          // Add horizontal padding to the motion container for screen edges
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          {/* Adjusted vertical padding, removed weird xs margin */}
          <div className="py-20 md:py-24 lg:py-32">
            {" "}
            {/* Consistent vertical padding */}
            {/* --- GRID LAYOUT --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 pt-[300px] sm:pt-[30vh]">
              {PROJECTS.map((project) => (
                // Grid item - the card itself
                <div
                  key={project.name}
                  // Removed fixed width/height - let grid and content dictate size
                  className="w-full relative h-full" // Use h-full to make cards in same row equal height
                >
                  {/* Background blur effect - consider performance impact */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl opacity-30 md:opacity-50" />{" "}
                  {/* Reduced opacity */}
                  {/* Card Content Box */}
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800 p-6 h-full overflow-hidden rounded-2xl flex flex-col justify-between items-start">
                    {" "}
                    {/* Changed padding, justify-between */}
                    {/* Top section (Icon and Title) */}
                    <div>
                      <div
                        className="h-5 w-5 rounded-full border flex items-center 
                      justify-center mb-4 border-gray-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-2 w-2 text-gray-300"
                          aria-hidden="true" // Decorative icon
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                          />
                        </svg>
                      </div>
                      <h2 className="font-bold text-xl text-white mb-2 relative z-10">
                        {" "}
                        {/* Use h2 for semantics */}
                        {project.name}
                      </h2>
                      <p className="font-normal text-base text-slate-400 mb-4 relative z-10">
                        {" "}
                        {/* Changed text color slightly */}
                        {project.description}
                      </p>
                    </div>
                    {/* Bottom section (Button) */}
                    <Link
                      href={project.link}
                      className={cn(
                        buttonVariants(),
                        `text-white ${project.bgColor} gap-2 mt-4`, // Added margin-top
                        "relative z-10" // Ensure button is above meteors if they overlap
                      )}
                    >
                      Explore
                      <ArrowRight size={20} /> {/* Slightly smaller icon */}
                    </Link>
                    {/* Meteors Effect - ensure it doesn't interfere with interaction */}
                    <Meteors number={20} /> {/* Reduced number slightly */}
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
