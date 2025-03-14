import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import { Boxes } from "@/components/ui/background-boxes";
import { buttonVariants } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Coffee, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const SKILLS = [
  // Languages
  { skill: "Typescript", type: "Language" },
  { skill: "Javascript", type: "Language" },
  { skill: "Python", type: "Language" },

  // Front-End
  { skill: "React", type: "Front-End" },
  { skill: "React Native", type: "Front-End" },
  { skill: "Next.js", type: "Front-End" },
  { skill: "HTML", type: "Front-End" },
  { skill: "CSS", type: "Front-End" },
  { skill: "Tailwind CSS", type: "Front-End" },

  // Mobile Development
  { skill: "Expo", type: "Mobile Development" },

  // Back-End
  { skill: "Node.js", type: "Back-End" },
  { skill: "Express", type: "Back-End" },
  { skill: "FastAPI", type: "Back-End" },
  { skill: "RESTful API", type: "Back-End" },
  { skill: "Serverless Functions", type: "Back-End" },

  // Database
  { skill: "SQL", type: "Database" },
  { skill: "NoSQL", type: "Database" },
  { skill: "MongoDB", type: "Database" },
  { skill: "Firebase", type: "Database" },

  // State Management
  { skill: "Zustand", type: "State-Management" },

  // ORM
  { skill: "Prisma", type: "ORM" },

  // Animation
  { skill: "Framer Motion", type: "Animation" },

  // Payment Processing
  { skill: "Stripe", type: "Payment-Processing" },

  // Containerization
  { skill: "Docker", type: "Containerization" },
  { skill: "Kubernetes", type: "Container-Orchestration" },

  // AI/ML Tools
  { skill: "OpenAI", type: "AI/ML Tools" },
  { skill: "Pinecone", type: "Vector Store" },
  { skill: "Langchain", type: "AI/ML Tools" },

  // Tools
  { skill: "Git", type: "Tool" },
  { skill: "Vercel", type: "Tool" },
];

export default function Home() {
  return (
    <div>
      <section className="h-[90vh] max-h-[800px] relative w-full overflow-hidden p-4 bg-slate-900">
        <MaxWidthWrapper>
          <div className="flex flex-col justify-center h-full gap-3">
            <Boxes />
            <h1
              className={cn(
                "md:text-5xl text-3xl text-white relative z-20 max-w-[600px]"
              )}
            >
              👋 Hi, I'm Nguyen |{" "}
              <span className="gra-b-r">Full Stack Developer</span>
            </h1>
            <div className="flex items-center gap-3 relative">
              <a
                href="https://github.com/7nguyennguyen3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-purple-700 hover:bg-purple-600 p-2 rounded-full"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/7nguyennguyen3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-700 hover:bg-blue-600 p-2 rounded-full"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:7nguyennguyen3@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-orange-700 hover:bg-orange-600 p-2 rounded-full"
                title="7nguyennguyen3@gmail.com"
              >
                <Mail size={24} />
              </a>
              <Link
                href="/contact"
                className="text-white bg-green-700 hover:bg-green-600 p-2 rounded-full"
                title="714-468-8426"
              >
                <Phone size={24} />
              </Link>
            </div>
            <p className="mt-2 text-neutral-200 relative z-20 text-lg md:text-xl max-w-[400px]">
              🚀 I love exploring new technologies and building cool
              applications. I hope to be able to learn more by working with
              talented people and companies. Let's connect!
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Skills Section */}
      <div className="my-20">
        <MaxWidthWrapper>
          <section className="grid xs:grid-cols-1 md:grid-cols-[35fr_65fr] gap-10 mb-20">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Skills
              </h2>
              <div className="w-full max-w-[300px] h-full mx-auto max-h-[400px] overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/profile-pic-resized.png"
                  alt="profile picture"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3">
                {SKILLS.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 text-white px-3 py-2 rounded-md text-sm shadow-md cursor-pointer 
                 hover:bg-slate-800 transition-colors"
                  >
                    <HoverCard openDelay={0} closeDelay={0}>
                      <HoverCardTrigger>{skill.skill}</HoverCardTrigger>
                      <HoverCardContent className="bg-zinc-900 border-none text-center text-white max-w-[120px] text-sm">
                        {skill.type}
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                ))}
              </div>

              <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
                I love to build stuff 👨‍💻
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My journey into the world of technology began at the age of
                eight, driven by a fascination with computers and their
                limitless possibilities. From early experiments in game
                development to exploring digital design with tools like
                Photoshop, each project has shaped my growth as a developer.
                Today, as a Full Stack Developer, I remain passionate about
                building innovative solutions and continuously seeking new
                challenges to tackle in the ever-evolving tech landscape.
              </p>
              <Link href="/about">
                <p className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Keep reading my bio →
                </p>
              </Link>
            </div>
          </section>

          <Projects />

          {/* Contact Section */}
          <section className="flex flex-col gap-6 max-w-[500px] mt-20">
            <div className="text-4xl font-bold flex items-center gap-3">
              <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's have a chat!
              </h2>
              ☕
            </div>

            <p className="text-lg font-bold text-gray-700 dark:text-gray-300">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out to me!
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Email:{" "}
              <a
                href="mailto:7nguyennguyen3@gmail.com"
                className="text-blue-600 hover:text-blue-700 transition-colors"
              >
                7nguyennguyen3@gmail.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              If you have any other questions about me, please feel free to ask
              my chatbot on the bottom right of the screen!
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants(), "gap-2 self-start mt-4")}
            >
              Get in touch! <Coffee size={20} />
            </Link>
          </section>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
