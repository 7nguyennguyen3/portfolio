"use client";

import Project from "@/components/Project"; // Your Project component
import { Button } from "@/components/ui/button"; // Import Button
import { ChevronDown, ChevronUp } from "lucide-react"; // Icons
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

// Define the structure for project data (matches ProjectProps)
interface ProjectData {
  title: string;
  subtitle?: string;
  technologies: string[];
  description: string;
  href: string;
  link?: string;
  images: string[];
  liveSite: boolean;
}

// Assume allProjectsData array is defined here as before...
const allProjectsData: ProjectData[] = [
  {
    // 1. Chatbot UI Demo
    link: "https://chatbot-ui-demo-three.vercel.app",
    description:
      "This project demonstrates two chatbots: one for lead generation and one for customer service. Built with Next.js, TypeScript, Tailwind CSS, Python, LangGraph, Redis, PostgreSQL, Google Gemini, Docker, and Railway.",
    href: "/projects/chatbot-ui-demo",
    images: [
      "/chatbot-demo-6.webp",
      "/chatbot-demo-3.webp",
      "/chatbot-demo-2.webp",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "LangGraph",
      "Redis",
      "PostgreSQL",
      "Google Gemini",
      "Docker",
      "Railway",
    ],
    title: "Chatbot UI Demo",
    subtitle: "Lead Generation & Customer Service Chatbot",
    liveSite: true,
  },
  {
    // 2. Versa AI
    link: "https://versa-ai.co",
    title: "Versa AI",
    subtitle: "AI-Powered PDF Chatbot",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "OpenAI",
      "LangChain",
      "Python",
      "Node.js",
      "FastAPI",
      "JWT Auth",
      "LLM",
      "Pinecone",
      "Embeddings",
      "Tailwind CSS",
    ],
    description:
      "An AI platform that lets you have a conversation with your PDFs, understanding content to answer questions contextually. Built to be scalable and reliable.",
    href: "/projects/versa-ai",
    images: ["/versa-5.webp", "/versa-2.webp", "/versa-1.webp"],
    liveSite: true,
  },
  {
    // 3. PetalSoft
    link: "https://petalsoft.store",
    title: "PetalSoft",
    subtitle: "E-Commerce Store with AI Chatbot",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Webhook",
      "REST API",
      "AI Chatbot",
      "PostgreSQL",
      "Resend (Email)",
      "Auth",
    ],
    description:
      "An e-commerce store for skincare and perfumes, featuring a specialized chatbot, Stripe payment processing, an admin dashboard, and more.",
    href: "/projects/petalsoft",
    images: ["/petalsoft-1.webp", "/petalsoft-7.webp", "/petalsoft-3.webp"],
    liveSite: true,
  },
  {
    // 4. Microservices
    title: "Microservices",
    subtitle: "Marketplace Architecture",
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Next.js",
      "Event Bus (NATS)",
    ],
    description:
      "A marketplace following microservices architecture where each service functions independently. Built for scalability and reliability using technologies like Docker and Kubernetes.",
    href: "/projects/microservices",
    images: [
      "/microservices-4.webp",
      "/microservices-3.webp",
      "/microservices-6.webp",
    ],
    liveSite: false,
  },
  {
    // 5. Finance Kaiju Mobile
    title: "Finance Kaiju Mobile",
    subtitle: "Personal Finance Tracker App",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Expo",
      "Firebase Auth",
    ],
    description:
      "A mobile, advanced version of Finance Kaiju with improved UI/UX and features. Currently in closed testing and not publicly available.",
    href: "/projects/finance-kaiju-mobile",
    images: [
      "/finance-kaiju-mobile-1.webp",
      "/finance-kaiju-mobile-2.webp",
      "/finance-kaiju-mobile-3.webp",
    ],
    liveSite: false,
  },
  {
    // 6. Hit Anime
    link: "https://hit-anime.vercel.app",
    title: "Hit Anime",
    subtitle: "Quick Anime Search App",
    technologies: [
      "Next.js",
      "TypeScript",
      "REST API",
      "Framer Motion",
      "TanStack Query",
    ],
    description:
      "A friendly and fast anime web app to quickly search for your next series or movie to watch. Optimized for speed and simplicity.",
    href: "/projects/hit-anime",
    images: ["/hit-anime-1.webp", "/hit-anime-5.webp", "/hit-anime-2.webp"],
    liveSite: true,
  },
  {
    // 7. Finance Kaiju
    link: "https://finance-kaiju.vercel.app",
    title: "Finance Kaiju",
    subtitle: "Web-Based Finance Tracker",
    technologies: [
      "Next.js",
      "TypeScript",
      "REST API",
      "AI Chatbot",
      "PostgreSQL",
      "NextAuth",
    ],
    description:
      "A finance and goal tracking web app with real-time updates, making it easier to manage your spending and financial goals.",
    href: "/projects/finance-kaiju",
    images: [
      "/finance-kaiju-1.webp",
      "/finance-kaiju-5.webp",
      "/finance-kaiju-2.webp",
    ],
    liveSite: true,
  },
];

// --- Framer Motion Variants for Project Items ---
const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    // Define exit animation if needed, e.g., when showing less
    opacity: 0,
    y: -30,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// Variants for the buttons
const buttonVariantsMotion = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const Projects = () => {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const projectsToShow = allProjectsData.slice(0, visibleCount);
  const isShowingAll = visibleCount === allProjectsData.length;
  const canShowMore = !isShowingAll && allProjectsData.length > INITIAL_COUNT;
  const canShowLess = isShowingAll && allProjectsData.length > INITIAL_COUNT;

  const showMoreProjects = () => {
    setVisibleCount(allProjectsData.length);
  };

  const showLessProjects = () => {
    setVisibleCount(INITIAL_COUNT);
  };

  return (
    <div className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20">
      {/* Use AnimatePresence to handle animations when items are added/removed */}
      <AnimatePresence initial={false}>
        {projectsToShow.map((project, index) => (
          // Wrap each project in motion.div for animation
          <motion.div
            key={project.href || project.title || index} // Ensure key is stable
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            exit="exit" // Use exit animation
            layout // Enable layout animation for smooth reordering/resizing
            className="w-full" // Ensure motion div takes full width if needed
          >
            <Project {...project} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Conditional Buttons Container with Animation */}
      <div className="mt-8 text-center h-12">
        {" "}
        {/* Added fixed height to prevent layout shift */}
        <AnimatePresence mode="wait">
          {" "}
          {/* Use mode="wait" for smoother button transition */}
          {canShowMore && (
            <motion.div
              key="show-more" // Unique key for AnimatePresence
              variants={buttonVariantsMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="default"
                size="lg"
                onClick={showMoreProjects}
                className="gap-2 shadow hover:shadow-md transition-shadow"
              >
                Show More Projects
                <ChevronDown className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
          {canShowLess && (
            <motion.div
              key="show-less" // Unique key for AnimatePresence
              variants={buttonVariantsMotion}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="default"
                size="lg"
                onClick={showLessProjects}
                className="gap-2 shadow hover:shadow-md transition-shadow"
              >
                Show Less Projects
                <ChevronUp className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
