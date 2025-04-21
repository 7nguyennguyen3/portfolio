"use client"; // Required for Framer Motion

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ExternalLink,
  Github,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion"; // Import motion

// --- Project Data (PROJECTS, Project type, Projects type) ---
// (Keep your existing PROJECTS data and types here)
type Project = {
  id: number;
  title: string;
  quickSummary: string;
  type: string;
  stack: string[];
  imageSrc: string;
  images: string[];
  projectPurpose: ReactNode;
  webStackExplanation: string[] | ReactNode;
  features: string[];
  link: string;
  githubLink: string;
  noSite?: true;
};

type Projects = {
  [key: string]: Project;
};

const PROJECTS: Projects = {
  chatbotDemo: {
    githubLink: "https://github.com/7nguyennguyen3/chatbot-ui-demo", // Added from previous context
    id: 7, // Assign a unique ID
    title: "Chatbot Demo",
    quickSummary:
      "Demonstrates lead generation & customer service AI chatbots.", // Shortened summary
    type: "AI Chatbot Application", // Define project type
    stack: [
      // Combine from props and description
      "Next.js",
      "TypeScript", // Corrected capitalization
      "Tailwind CSS",
      "Python",
      "LangGraph",
      "Redis",
      "PostgreSQL",
      "OpenAI",
      "Google Gemini",
      "Docker",
      "Railway",
    ],
    imageSrc: "/chatbot-demo-0.webp",
    images: [
      // Copied from props
      "/chatbot-demo-6.webp",
      "/chatbot-demo-3.webp",
      "/chatbot-demo-2.webp",
      "/chatbot-demo-4.webp",
      "/chatbot-demo-5.webp",
    ],
    // Expanded from description
    projectPurpose: (
      <div className="flex flex-col gap-5">
        <p>
          This project serves as a demonstration platform for two distinct
          AI-powered chatbots, showcasing different use cases within a web
          interface. 🤖💬
        </p>
        <p>
          It features a lead generation assistant designed to capture potential
          customer interest and a customer service bot tailored to handle
          inquiries for an online store, illustrating practical AI applications
          in business.
        </p>
      </div>
    ),
    webStackExplanation: [
      // Derived from description and stack
      "The responsive frontend is built using Next.js, TypeScript, and Tailwind CSS, providing a modern and interactive user experience for chatting.",
      "The backend logic is powered by Python, utilizing LangGraph for creating stateful, multi-actor chatbot applications. It leverages models from both OpenAI and Google Gemini.",
      "Redis and PostgreSQL are used for managing application state and potentially storing conversation history, ensuring persistence and scalability.",
      "The entire application is containerized using Docker and deployed on Railway, showcasing a cloud-native deployment strategy.",
    ],
    features: [
      // Derived from description and purpose
      "Lead Generation Chatbot Example",
      "Customer Service Chatbot Example",
      "Dual AI Model Integration (OpenAI/Gemini)",
      "State Management with LangGraph",
      "Persistent Storage (Redis/PostgreSQL)",
      "Responsive Chat Interface (Next.js/Tailwind)",
      "Dockerized Application",
      "Cloud Deployment (Railway)",
    ],
    link: "https://chatbot-ui-demo-three.vercel.app", // Copied from props
  },
  versaAi: {
    githubLink: "https://github.com/7nguyennguyen3/versa-ai",
    id: 6,
    title: "Versa-AI",
    quickSummary:
      "AI-powered document interaction platform with intelligent PDF conversations.",
    type: "AI-Powered Web App",
    stack: [
      "Typescript",
      "React",
      "Next.js",
      "Zustand",
      "Firebase",
      "Firebase Storage",
      "NoSQL",
      "Python",
      "FastAPI",
      "Langchain",
      "LLM",
      "OpenAI",
      "JWT (Cookie-Based)",
      "TailwindCSS",
      "Rate Limiting",
      "Production-Grade Security",
    ],
    imageSrc: "/versa-0.png",
    images: [
      "/versa-1.webp",
      "/versa-2.webp",
      "/versa-3.webp",
      "/versa-4.webp",
      "/versa-7.webp",
      "/versa-8.webp",
      "/versa-9.webp",
      "/versa-10.webp",
      "/versa-11.webp",
      "/versa-14.webp",
      "/versa-12.webp",
      "/versa-13.webp",
    ],
    projectPurpose: (
      <div className="flex flex-col gap-5">
        <p>
          Versa-AI is a cutting-edge document intelligence platform 🧠📄. It
          allows users to interact with PDFs as if they were chatting with an
          expert. Whether it's extracting key insights, summarizing reports, or
          answering questions contextually, Versa-AI makes working with
          documents effortless.
        </p>
        <p>
          Built with a dual-backend system, Versa-AI leverages Node.js for
          authentication and Python (FastAPI) for AI processing. The system
          ensures secure, high-performance interactions with documents, thanks
          to advanced rate limiting, JWT (cookie-based) authentication, and a
          production-ready UI.
        </p>
      </div>
    ),
    webStackExplanation: [
      "The frontend is built with Next.js, TypeScript, and TailwindCSS, ensuring a responsive, fast, and accessible user experience. Zustand manages the application state, providing a smooth UI across desktop and mobile devices.",
      "The backend consists of two parts: - Node.js handles authentication and security with JWT-based cookie authentication. - FastAPI (Python) powers the AI capabilities, including document parsing, context-aware search, and intelligent conversations using Langchain and OpenAI.",
      "The app is built with Firebase for NoSQL storage and Firebase Storage for document uploads, ensuring scalability and real-time performance. Security-first architecture includes advanced rate limiting to prevent abuse.",
    ],
    features: [
      "AI-Powered PDF Conversations",
      "Context-Aware Document Search",
      "Dual-Backend System (Node.js & FastAPI)",
      "JWT Authentication (Cookie-Based)",
      "Advanced Rate Limiting & Security",
      "Responsive UI with Next.js & TailwindCSS",
      "Firebase Storage for Document Management",
      "Production-Grade Authentication System",
    ],
    link: "https://versa-ai.co",
  },

  petalsoft: {
    githubLink: "https://github.com/7nguyennguyen3/petalsoft",
    id: 1,
    title: "PetalSoft",
    quickSummary: "An E-Commerce Web App for selling skincares and perfumes.",
    type: "E-Commerce Web App",
    stack: [
      "Typescript",
      "React",
      "Next.js",
      "Restful APIs",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Vercel",
      "Cloudinary",
      "Stripe",
      "Framer Motion",
      "Zustand",
      "TailwindCSS",
      "Chatbot",
      "Custom Email",
      "Kinde Authentication",
    ],
    imageSrc: "/portfolio-petalsoft.webp",
    images: [
      "/petalsoft-6.webp",
      "/petalsoft-7.webp",
      "/petalsoft-4.webp",
      "/petalsoft-5.webp",
    ],
    projectPurpose: (
      <div className="flex flex-col gap-5">
        <p>
          Petalsoft is my third project 🌱. This is where I challenge myself to
          build modern applications that will actually be useful to others 👥. I
          wanted to see if I could create a custom e-commerce store from scratch
          💻 that processes payment 💳, has its own chatbot for customer support
          🤖, and a real dashboard for the admin to manage the store like
          updating inventories 📦, changing shipping status on an order 🚚,
          checking sales 💹, and more.
        </p>{" "}
      </div>
    ),
    webStackExplanation: (
      <div className="flex flex-col gap-5">
        <p>
          For my latest project, I chose{" "}
          <span className="font-bold">Next.js</span> for its robust features. I
          connected to the <span className="font-bold">PostgreSQL</span>{" "}
          database using <span className="font-bold">Prisma</span> as my ORM.
          Handling payments was a breeze with{" "}
          <span className="font-bold">Stripe</span>, and for storing product
          images, I went with <span className="font-bold">Cloudinary</span>.
          Quick user authentication? No problem, thanks to{" "}
          <span className="font-bold">Kinde</span>.
        </p>
        <p>
          I'm hosting the project on <span className="font-bold">Vercel</span>{" "}
          for its lightning-fast performance. For a touch of flair, I added
          animations with <span className="font-bold">Framer Motion</span>,
          managed the app state using <span className="font-bold">Zustand</span>
          , and styled everything to perfection with{" "}
          <span className="font-bold">Tailwind CSS and Shadcn-UI</span>. Plus, I
          personalized the post-purchase emails with{" "}
          <span className="font-bold">React Email</span>.
        </p>
      </div>
    ),
    features: [
      "Stripe Payment Processing",
      "AI Chatbot",
      "Custom Email",
      "Authentication",
      "Custom Admin Dashboard",
      "Real-Time Inventory Updates",
    ],
    link: "https://petalsoft.store",
  },

  financeKaiju: {
    githubLink: "https://github.com/7nguyennguyen3/finance-kaiju",
    id: 2,
    title: "Finance-Kaiju",
    quickSummary:
      "A dynamic web app designed to empower users with financial goal-setting and real-time expense tracking, complemented by an engaging AI chatbot.",
    type: "Finance Tracker Web App",
    stack: [
      "Typescript",
      "React",
      "Next.js",
      "Restful APIs",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Vercel",
      "Cloudinary",
      "TailwindCSS",
      "Chatbot",
      "NextAuth",
    ],
    imageSrc: "/portfolio-finance-kaiju.webp",
    images: [
      "/finance-kaiju-6.webp",
      "/finance-kaiju-3.webp",
      "/finance-kaiju-4.webp",
      "/finance-kaiju-5.webp",
    ],
    projectPurpose: (
      <div className="flex flex-col gap-5">
        <p>
          Finance-Kaiju was my first major project post-learning. It served as a
          practical testbed for applying my accumulated knowledge. The
          development process was intense and enlightening, teaching me far
          beyond what courses could. 🚀
        </p>{" "}
        <p>
          In 3 weeks, I tackled database integration with{" "}
          <span className="font-bold">Prisma</span> 🗃️, implemented custom
          authentication with <span className="font-bold">NextAuth</span> 🔐,
          set up API endpoints 🌐, and working with new libraries, frameworks,
          and tools 🛠️.
        </p>
        <p>
          This project was also my introduction to{" "}
          <span className="font-bold">Tanstack React Query</span> 📊 and{" "}
          <span className="font-bold">Langchain</span> 🤖 for chatbot creation.
          While my TypeScript use was still developing, this experience
          significantly sharpened my skills. ✨
        </p>
      </div>
    ),
    webStackExplanation: (
      <div className="flex flex-col gap-5">
        <p>
          I built Finance-Kaiju with <span className="font-bold">Next.js</span>,
          taking advantage of features like server-side rendering and static
          site generation to create a fast and reliable platform. I used{" "}
          <span className="font-bold">Node.js</span> and{" "}
          <span className="font-bold">Prisma</span> for the backend, which
          connects smoothly to my <span className="font-bold">PostgreSQL</span>{" "}
          database. The design is clean and modern, thanks to{" "}
          <span className="font-bold">TailwindCSS</span>.
        </p>
        <p>
          I integrated <span className="font-bold">Langchain</span> to power the
          AI chatbot, making it smart and helpful. For logging in, I set up{" "}
          <span className="font-bold">NextAuth</span> to keep user accounts
          secure. I chose <span className="font-bold">Vercel</span> for hosting
          because it's fast and reliable.
        </p>
      </div>
    ),
    features: [
      "Real-Time Update on Finance & Goal Records",
      "AI Chatbot to talk about a variety of topics",
      "Custom Sign-In & Sign-Up with NextAuth",
      "Prisma ORM & PostgreSQL Database Integration",
      "Real-Time Data Update with Tanstack React Query",
    ],
    link: "https://finance-kaiju.vercel.app",
  },

  financeKaijuMobile: {
    githubLink: "https://github.com/7nguyennguyen3/finance-kaiju-mobile",
    id: 4,
    title: "Finance-Kaiju-Mobile",
    quickSummary:
      "A mobile version of Finance-Kaiju, advanced features and better UI. It is designed to be accessible on the go.",
    type: "Finance Tracker Mobile App",
    stack: ["React Native", "Expo", "TailwindCSS", "Typescript", "Firebase"],
    imageSrc: "/finance-kaiju-mobile-1.webp",
    images: [
      "/finance-kaiju-mobile-1.webp",
      "/finance-kaiju-mobile-2.webp",
      "/finance-kaiju-mobile-3.webp",
      "/finance-kaiju-mobile-4.webp",
    ],
    link: "",
    features: [
      "Custom Sign-In & Sign-Up with Firebase",
      "Real-Time Data Update with Firebase",
      "Responsive Design",
      "Fast and Reliable",
    ],
    projectPurpose: (
      <div className="flex flex-col gap-5">
        <p>
          📱 Finance-Kaiju-Mobile is the mobile version of my Finance-Kaiju
          project. I wanted to create a mobile app that could be used on the go
          🏃. I learned how to build a mobile app from scratch using React
          Native and Expo 🚀. I also learned how to use Firebase for
          authentication and real-time data updates 🔥.
        </p>{" "}
      </div>
    ),
    webStackExplanation: [
      "Built with React Native and Expo",
      "Utilized TailwindCSS for styling",
      "Used Typescript for type safety",
      "Firebase for authentication and real-time data updates",
    ],
    noSite: true,
  },

  microservices: {
    githubLink: "https://github.com/7nguyennguyen3/microservices",
    id: 5,
    title: "Microservices",
    quickSummary:
      "A simple microservices project to learn how to build and deploy microservices.",
    type: "Microservices Project",
    stack: [
      "Node.js",
      "Express",
      "Typescript",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Nginx",
      "Next.js",
    ],
    imageSrc: "/microservices-6.webp",
    images: [
      "/microservices-6.webp",
      "/microservices-3.webp",
      "/microservices-4.webp",
      "/microservices-5.webp",
      "/microservices-1.webp",
    ],
    projectPurpose: (
      <div className="flex flex-col gap-5">
        <p>
          🚀 Microservices is a project I built to learn how to build and deploy
          microservices. I learned how to build a simple microservices project
          using Node.js, Express, and Typescript. I also learned how to deploy
          the project using Docker and Kubernetes. 📦
        </p>{" "}
      </div>
    ),
    webStackExplanation: [
      "Built with Node.js, Express, and Typescript",
      "MongoDB for database",
      "Redis for caching",
      "Docker for containerization",
      "Kubernetes and Nginx",
    ],
    features: [
      "Simple Microservices Project",
      "Docker and Kubernetes Deployment",
      "MongoDB and Redis",
      "Nginx Reverse Proxy",
    ],
    link: "/projects/microservices",
    noSite: true,
  },

  hitAnime: {
    githubLink: "https://github.com/7nguyennguyen3/hit-anime",
    id: 3,
    title: "Hit-Anime",
    quickSummary:
      "Your friendly anime app for quickly searching and discovering new anime series and movies.",
    type: "Anime Search Web App",
    stack: ["Typescript", "Next.js", "Vercel", "Framer Motion", "TailwindCSS"],
    imageSrc: "/portfolio-hit-anime.webp",
    images: [
      "/hit-anime-1.webp",
      "/hit-anime-2.webp",
      "/hit-anime-3.webp",
      "/hit-anime-5.webp",
    ],
    projectPurpose: (
      <div className="flex flex-col gap-5">
        <p>
          🚀 A fun side project where I tried to solve a problem I had. I wanted
          to search 🔍 for anime quickly without loading back and forth between
          anime detail page and the anime list page. This is where I learned to
          handle and manipulate large amount of datas. 📚
        </p>{" "}
      </div>
    ),
    webStackExplanation: [
      "Built with Next.js and deployed on Vercel",
      "Utilized Framer Motion to bring site to live.",
    ],

    features: [
      "Awesome Animation",
      "Customized Search",
      "Simple and Clean UI",
      "Quick to Load",
      "Responsive Design",
    ],
    link: "https://hit-anime.vercel.app",
  },
};

function kebabToCamel(str: string) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
}

function isStringArray(value: any): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

function shuffleArray(array: Project[]): Project[] {
  let currentIndex = array.length,
    randomIndex;
  const newArray = [...array]; // Create a copy to avoid mutating the original if needed elsewhere

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Adjust delay between items
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

// --- Component ---
const ProjectDetail = ({ projectName }: { projectName: string }) => {
  const camelCaseProjectName = kebabToCamel(projectName);
  const project: Project | undefined =
    PROJECTS[camelCaseProjectName as keyof typeof PROJECTS];

  // --- Not Found Handling (keep as is) ---
  if (!project) {
    return (
      <div className="py-20 min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center">
        {/* ... Not found content ... */}
        <MaxWidthWrapper>
          <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">
            Could not find details for a project named "{projectName}".
          </p>
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Back to Projects
          </Link>
        </MaxWidthWrapper>
      </div>
    );
  }

  const projectArray = Object.values(PROJECTS);
  const filteredProjects = projectArray.filter((p) => p.id !== project.id);
  const shuffledProjects = shuffleArray(filteredProjects);
  const otherProjects = shuffledProjects.slice(0, 3);
  const hasLiveSite = project.link && !project.noSite;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-16 pb-20 md:pb-24 lg:pb-32"
    >
      <MaxWidthWrapper>
        {/* Main layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* --- Main Content Area --- */}
          <div className="lg:col-span-2 flex flex-col gap-8 md:gap-10">
            {/* Header */}
            <motion.div // Animate header block
              variants={fadeInUp}
              initial="hidden"
              animate="visible" // Animate immediately on load
            >
              <motion.h1
                variants={fadeInUp} // Can apply same variant or specific one
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3"
              >
                {project.title}
              </motion.h1>
              <motion.p
                variants={fadeInUp} // Can apply same variant or specific one
                transition={{ delay: 0.1 }} // Slight delay for summary
                className="text-lg md:text-xl text-muted-foreground"
              >
                {project.quickSummary}
              </motion.p>
            </motion.div>

            {/* Main Project Image */}
            <motion.div // Animate image block
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }} // Animate when 10% visible
              className="relative overflow-hidden rounded-lg shadow-lg border aspect-video"
            >
              <Image
                src={project.imageSrc}
                alt={`${project.title} main screenshot`}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </motion.div>

            {/* Project Purpose */}
            <motion.section // Animate section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
                Project Purpose
              </h2>
              {/* Animate the text container if desired */}
              <motion.div
                variants={fadeInUp}
                className="prose prose-invert max-w-none text-muted-foreground"
              >
                {project.projectPurpose}
              </motion.div>
            </motion.section>

            {/* Web Stack Explanation */}
            <motion.section // Animate section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
                Web Stack & Explanation
              </h2>
              {/* Stagger list items */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col gap-4"
              >
                {isStringArray(project.webStackExplanation) ? (
                  project.webStackExplanation.map((explanation, index) => (
                    <motion.div // Animate each item
                      key={index}
                      variants={staggerItem}
                      className="flex items-start gap-3"
                    >
                      <Rocket className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{explanation}</p>
                    </motion.div>
                  ))
                ) : (
                  // If it's rich text, animate the container
                  <motion.div
                    variants={staggerItem}
                    className="prose prose-invert max-w-none text-muted-foreground"
                  >
                    {project.webStackExplanation}
                  </motion.div>
                )}
              </motion.div>
            </motion.section>

            {/* Features */}
            <motion.section // Animate section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
                Key Features
              </h2>
              {/* Stagger list items */}
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-3"
              >
                {project.features.map((feature, index) => (
                  <motion.li // Animate each list item
                    key={index}
                    variants={staggerItem}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <motion.section // Animate section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
                  Gallery
                </h2>
                {/* Stagger grid items */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                >
                  {project.images.map((image, index) => (
                    <motion.div // Animate each gallery item container
                      key={index}
                      variants={staggerItem}
                      className="relative aspect-video overflow-hidden rounded-lg shadow-md border group"
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Ensure image fills container
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            )}
          </div>{" "}
          {/* End Main Content Area */}
          {/* --- Sidebar Area --- */}
          <motion.aside // Animate sidebar
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible" // May trigger based on when its *top* enters viewport
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-1 lg:sticky lg:top-24 h-fit flex flex-col gap-6 p-6 border rounded-lg shadow-sm bg-card"
          >
            <h3 className="text-xl font-semibold border-b pb-3">
              Project Info
            </h3>
            {/* Call to Action Buttons */}
            <motion.div // Stagger buttons/badges within sidebar if desired
              variants={staggerContainer}
              initial="hidden"
              animate="visible" // Animate immediately as sidebar appears
              className="flex flex-col gap-3"
            >
              {hasLiveSite ? (
                <motion.a // Animate button
                  variants={staggerItem}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white"
                  )}
                >
                  Visit Live Site
                  <ExternalLink size={18} />
                </motion.a>
              ) : (
                <motion.div variants={staggerItem}>
                  {" "}
                  {/* Wrap disabled Button */}
                  <Button size="lg" disabled className="w-full gap-2">
                    No Site Available
                  </Button>
                </motion.div>
              )}
              {project.githubLink && (
                <motion.a // Animate button
                  variants={staggerItem}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "gap-2 w-full"
                  )}
                >
                  View on GitHub
                  <Github size={18} />
                </motion.a>
              )}
            </motion.div>

            {/* Project Type */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h4 className="font-semibold mb-1 text-sm text-muted-foreground uppercase tracking-wider">
                Type
              </h4>
              <p>{project.type}</p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wider">
                Tech Stack
              </h4>
              {/* Stagger badges */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible" // Could also use animate="visible" if parent animates immediately
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-wrap gap-2"
              >
                {project.stack.map((tech, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    {" "}
                    {/* Wrap Badge */}
                    <Badge variant="secondary">{tech}</Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wider border-t pt-4">
                  Other Projects
                </h4>
                {/* Stagger links */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex flex-col gap-3"
                >
                  {otherProjects.map((otherProject) => (
                    <motion.div key={otherProject.id} variants={staggerItem}>
                      <Link
                        // Assuming your URL structure is /projects/[kebab-case-title]
                        // You might need a slug field or a function to generate this reliably
                        href={`/projects/${otherProject.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-sm hover:text-blue-500 hover:underline flex items-center justify-between group"
                      >
                        {otherProject.title}
                        <ArrowRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </motion.aside>{" "}
          {/* End Sidebar Area */}
        </div>{" "}
        {/* End Main Grid */}
      </MaxWidthWrapper>
    </motion.div>
  );
};

export default ProjectDetail;
