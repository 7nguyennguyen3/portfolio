import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
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
};

type Projects = {
  [key: string]: Project;
};

const PROJECTS: Projects = {
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
      "/petalsoft-2.webp",
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
          I built this project as usual with{" "}
          <span className="font-bold">Next.js</span>. I used{" "}
          <span className="font-bold">Prisma</span> as the ORM to connect to{" "}
          <span className="font-bold">PostgreSQL</span> database. I also used{" "}
          <span className="font-bold">Stripe</span> for payment processing,{" "}
          <span className="font-bold">Cloudinary</span> for image hosting for
          products, and <span className="font-bold">Kinde</span> for quick
          authentication.
        </p>
        <p>
          The project is hosted on <span className="font-bold">Vercel</span>. I
          also used <span className="font-bold">Framer Motion</span> for
          animation, <span className="font-bold">Zustand</span> for state
          management, and <span className="font-bold">TailwindCSS</span> for
          styling. In addition, I used{" "}
          <span className="font-bold">React Email</span> to customize email sent
          to user after they made a purchase.
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
      "/finance-kaiju-1.webp",
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
          Built on <span className="font-bold">Next.js</span>, Finance-Kaiju
          leverages server-side rendering, static site generation, and API
          routes. The backend, powered by{" "}
          <span className="font-bold">Node.js</span> and{" "}
          <span className="font-bold">Prisma</span>, connects seamlessly to{" "}
          <span className="font-bold">PostgreSQL</span>.{" "}
          <span className="font-bold">TailwindCSS</span> ensures a modern, clean
          frontend.
        </p>
        <p>
          <span className="font-bold">Langchain</span> drives the AI chatbot,
          while <span className="font-bold">NextAuth</span> ensures secure user
          authentication. The project is hosted on{" "}
          <span className="font-bold">Vercel</span>, guaranteeing fast load
          times and reliability.
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
          <div className="flex gap-5 justify-between items-center w-full xs:flex-col sm:flex-row">
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
