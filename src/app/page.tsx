import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
import Project from "./Project";

const SKILLS = [
  { skill: "Typescript", type: "Language" },
  { skill: "React", type: "Front-End" },
  { skill: "Node.js", type: "Back-End" },
  { skill: "HTML", type: "Front-End" },
  { skill: "CSS", type: "Front-End" },
  { skill: "Javascript", type: "Language" },
  { skill: "Python", type: "Language" },
  { skill: "Next.js", type: "Front-End" },
  { skill: "RESTful API", type: "Back-End" },
  { skill: "Serverless Functions", type: "Back-End" },
  { skill: "MySQL", type: "Database" },
  { skill: "PostgreSQL", type: "Database" },
  { skill: "Git", type: "Tool" },
  { skill: "Zustand", type: "State-Management" },
  { skill: "Redux", type: "State-Management" },
  { skill: "Prisma", type: "ORM" },
  { skill: "Framer Motion", type: "Animation" },
  { skill: "Redis", type: "Database" },
  { skill: "Sentry", type: "Error-Tracking" },
  { skill: "Stripe", type: "Payment-Processing" },
  { skill: "LangChain | Chatbot Creation", type: "AI" },
];

export default function Home() {
  return (
    <div>
      <section
        className="h-[90vh] max-h-[800px] relative w-full overflow-hidden p-4
    bg-slate-900"
      >
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
                href="mailto:hello@2nguyen.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-orange-700 hover:bg-orange-600 p-2 rounded-full"
                title="hello@2nguyen.info"
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
              applications. I'm a lifelong learner 📚 and I watch animals do
              their things and being themselves 🐾 when I'm not coding.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
      <div className="my-20">
        <MaxWidthWrapper>
          <section className="grid xs:grid-cols-1 md:grid-cols-[35fr_65fr] gap-10 mb-20">
            <div className="flex flex-col gap-3 w-full">
              <h2 className="text-3xl font-bold gra-b-r">My Skills</h2>
              <div
                className="w-full max-w-[300px] h-full mx-auto
              max-h-[400px] overflow-hidden rounded-xl"
              >
                <img
                  src="/profile-pic-resized.png"
                  alt="profile picture"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 pb-10">
              <div className="flex items-center gap-2 flex-wrap">
                {SKILLS.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-slate-700 dark:bg-slate-500 text-white p-2 rounded-md text-[13px] shadow-md cursor-pointer"
                    >
                      <HoverCard openDelay={0} closeDelay={0}>
                        <HoverCardTrigger>{skill.skill}</HoverCardTrigger>
                        <HoverCardContent
                          className="bg-blue-600 border-none text-center
                         text-white max-w-[120px] text-[13px]"
                        >
                          {skill.type}
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  );
                })}
              </div>
              <p className="text-lg font-bold">I love to build stuff 👨‍💻</p>
              <p>
                I discovered the magic of computers at the age of 8, and it was
                love at first 'byte'. Since then, I've been on a journey of
                discovery and creation. From trying to make the next plant vs
                zombie 🌱🧟‍♂️ to crafting designs in Photoshop, each experience
                has been a stepping stone in my path as a developer. Now, as a
                Full Stack Developer, I continue to explore and innovate, always
                looking for the next challenge to conquer. 🚀
              </p>
              <Link href="/about">
                <p className="text-lg font-bold text-blue-600">
                  Keep reading my bio
                </p>
              </Link>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-heading pb-10">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-10">
              <Project
                link="https://petalsoft.store"
                title="PetalSoft: E-Commerce Store with AI-Powered Chatbot"
                technologies={[
                  "Next.js",
                  "Typescript",
                  "Stripe & Webhook",
                  "Restful API",
                  "AI Chatbot",
                  "PostgreSQL",
                  "Custom Email",
                  "Authentication",
                ]}
                description="An e-commerce store that sells skin care and perfumes. It has a lot of cool stuff like specialized chatbot, stripe payment processing, admin dashboard, and more!"
                href="/projects/petalsoft"
                img1="/petalsoft-3.webp"
                img2="/petalsoft-2.webp"
              />

              <Project
                link="https://goal-tracker-nine-iota.vercel.app"
                title="Finance Kaiju - Personal Finance Tracker"
                technologies={[
                  "Next.js",
                  "Typescript",
                  "Restful API",
                  "AI Chatbot",
                  "PostgreSQL | Cloud Database",
                  "NextAuth",
                ]}
                description="A finance and goal tracking app that make it easier to get on top of your spending. It has real time updates whenever you add or update any goal or finance record."
                href="/projects/finance-kaiju"
                img1="/finance-kaiju-2.webp"
                img2="/finance-kaiju-1.webp"
              />

              <Project
                link="https://hit-anime.vercel.app"
                title="Hit Anime - Your Anime App for Quickly Searching Your Next Anime"
                technologies={[
                  "Next.js",
                  "Typescript",
                  "RESTful API",
                  "Framer Motion",
                  "Tanstack React Query",
                ]}
                description="A friendly anime web app that let you quickly search for your next anime to watch. It is optimized to be quick and simple so you can find your next series or movie!"
                href="/projects/hit-anime"
                img1="/hit-anime-1.webp"
                img2="/hit-anime-2.webp"
              />
            </div>
          </section>

          <section className="flex flex-col gap-5 max-w-[400px]">
            <div className="text-3xl font-bold flex items-center gap-2">
              <h2 className="gra-b-r">Let's have a chat!</h2>
              <Coffee className="text-red-500" size={30} />
            </div>

            <p className="text-lg font-bold">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out to me!
            </p>
            <p className="text-lg">
              Email:{" "}
              <a href="mailto:hello@2nguyen.info" className="text-blue-600">
                hello@2nguyen.info
              </a>
            </p>
            <p>
              If you have any other questions about me, please feel free to ask
              my chatbot on the bottom right of the screen!
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants(), "gap-2 self-start")}
            >
              Get in touch! <Coffee size={20} />
            </Link>
          </section>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
