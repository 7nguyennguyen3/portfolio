import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  Github,
  LoaderPinwheel,
  PictureInPicture2,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

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

const ProjectDetail = ({ projectName }: { projectName: string }) => {
  const camelCaseProjectName = kebabToCamel(projectName);
  console.log(projectName);
  console.log(camelCaseProjectName);
  const project = PROJECTS[camelCaseProjectName];

  const projectArray = Object.values(PROJECTS);
  const otherProjects = projectArray.filter((p) => p.id !== project.id);

  return (
    <div className="py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5">
          <h1 className="text-heading flex items-center gap-5">
            {project.title}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-purple-700 hover:bg-purple-600 p-2 rounded-full"
            >
              <Github size={20} />
            </a>
          </h1>
          {project.noSite ? (
            <Button
              className={cn(
                buttonVariants(),
                "gap-2 cursor-pointer text-white bg-gradient-to-r from-blue-600 to bg-red-500 hover:from-blue-500 hover:to-red-400 w-[200px]"
              )}
              disabled={project.noSite}
            >
              No Site Available
            </Button>
          ) : (
            <a
              className={cn(
                buttonVariants(),
                "gap-2 cursor-pointer text-white bg-gradient-to-r from-blue-600 to bg-red-500 hover:from-blue-500 hover:to-red-400 w-[200px]"
              )}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
              <PictureInPicture2 />
            </a>
          )}
          <h2 className="text-lg font-medium">{project.quickSummary}</h2>
          <LoaderPinwheel className="animate-spin text-blue-600" />
          <h2 className="text-heading">Type: {project.type}</h2>
          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="bg-black text-white p-[6px] text-[12px] rounded-md pointer-events-none"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="w-full transform hover:scale-[1.035] transition-transform duration-200">
            <img
              alt="project image"
              loading="lazy"
              src={project.imageSrc}
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 object-contain"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-heading">Web Stack & Explanation</h3>
            {Array.isArray(project.webStackExplanation) ? (
              project.webStackExplanation.map(
                (explanation: string, index: number) => (
                  <p key={index} className="flex items-center gap-2">
                    <Rocket className="text-blue-600" />
                    {explanation}
                  </p>
                )
              )
            ) : (
              <>{project.webStackExplanation}</>
            )}
          </div>
          <h3 className="text-heading">Features</h3>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 mb-2">
                <Check className="text-blue-600" />
                {feature}
              </li>
            ))}
          </ul>
          <h3 className="text-heading">Project Purpose and Goal</h3>
          <div>{project.projectPurpose}</div>
          <div
            className="grid xs:grid-cols-1 sm:grid-cols-2 
           gap-5 sm:gap-10 lg:gap-14 my-28"
          >
            {project.images.map((image, index) => (
              <div
                key={index}
                className="w-[90%] mx-auto transform hover:scale-105 transition-transform duration-200"
              >
                <img
                  alt="project image"
                  loading="lazy"
                  src={image}
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-5 justify-between items-center w-full xs:flex-col sm:flex-row flex-wrap">
            <a
              className={cn(
                buttonVariants(),
                "gap-2 cursor-pointer text-white bg-gradient-to-r from-blue-600 to bg-red-500 hover:from-blue-500 hover:to-red-400 w-[200px]"
              )}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {project.title}
              <PictureInPicture2 />
            </a>
            {otherProjects.map((otherProject) => (
              <Link
                className={cn(buttonVariants(), "gap-2 w-[200px]")}
                key={otherProject.id}
                href={`/projects/${otherProject.title.toLocaleLowerCase()}`}
              >
                View {otherProject.title}
                <ArrowRight size={22} />
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProjectDetail;
