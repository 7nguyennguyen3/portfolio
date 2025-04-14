import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Projects from "@/components/Projects";
import { Boxes } from "@/components/ui/background-boxes";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  BrainCircuit,
  Code2,
  Coffee,
  Component,
  Database,
  Github,
  LayoutPanelLeft,
  Linkedin,
  LucideProps,
  Mail,
  MessageSquare,
  Server,
  TerminalSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SKILL_CATEGORIES, SKILLS_DATA } from "./_global/variables";

const groupSkillsForHybrid = (skillsData: typeof SKILLS_DATA) => {
  const grouped = {} as Record<string, string[]>;
  const categoryOrder = [
    "Languages",
    "Frontend",
    "Backend & Auth",
    "Databases",
    "AI / ML",
    "DevOps & Tools",
  ];

  categoryOrder.forEach((cat) => {
    grouped[cat] = [];
  });

  skillsData.forEach((skill) => {
    for (const [category, types] of Object.entries(SKILL_CATEGORIES)) {
      if (types.includes(skill.type)) {
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(skill.skill);
        break;
      }
    }
  });
  return Object.fromEntries(
    Object.entries(grouped).filter(([_, skills]) => skills.length > 0)
  );
};

const hybridGroupedSkills = groupSkillsForHybrid(SKILLS_DATA);
const hybridSkillCategories = Object.keys(hybridGroupedSkills);

const categoryIcons: Record<string, React.ElementType<LucideProps>> = {
  Languages: Code2,
  Frontend: LayoutPanelLeft,
  "Backend & Auth": Server,
  Databases: Database,
  "AI / ML": BrainCircuit,
  "DevOps & Tools": TerminalSquare,
};

export default function Home() {
  return (
    <div>
      <section
        id="hero"
        className="relative flex items-center justify-center w-full
        min-h-[80vh] md:min-h-[70vh] overflow-hidden p-4 bg-black text-white"
      >
        <div className="absolute inset-0 z-0">
          <Boxes />
        </div>
        <MaxWidthWrapper className="relative z-10 flex flex-col items-center text-center gap-6 md:gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-4xl">
            👋 Hi, I&apos;m Nguyen
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>
          <p className="mt-2 text-lg md:text-xl text-neutral-300 max-w-xl">
            🚀 Passionate about exploring new technologies and building
            innovative applications. Let&apos;s connect and create something
            amazing together!
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href="https://github.com/7nguyennguyen3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-neutral-300 hover:text-white hover:bg-white/10 rounded-full"
              )}
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/7nguyennguyen3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-neutral-300 hover:text-white hover:bg-white/10 rounded-full"
              )}
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:7nguyennguyen3@gmail.com"
              aria-label="Email Me"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-neutral-300 hover:text-white hover:bg-white/10 rounded-full"
              )}
            >
              <Mail size={24} />
            </a>
            <Link
              href="/contact"
              aria-label="Contact Page"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-neutral-300 hover:text-white hover:bg-white/10 rounded-full"
              )}
            >
              <MessageSquare size={24} />
            </Link>
          </div>
          <div className="mt-6 md:mt-8">
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 gap-2"
              )}
            >
              View My Work <ArrowDown size={20} />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      <section
        id="about-me"
        className="py-16 md:py-24 bg-background dark:bg-slate-900"
      >
        <MaxWidthWrapper>
          {/* Centered content container */}
          <div className="flex flex-col items-center text-center gap-6">
            {/* Smaller, Rounded Image */}
            <div className="relative w-40 h-40 overflow-hidden rounded-full shadow-lg border-2 border-primary/10 mb-4">
              <Image
                src="/profile-pic-resized.png" // Ensure this path is correct
                alt="Nguyen - Profile Picture"
                layout="fill" // Use fill to adapt to container
                objectFit="cover"
                priority
              />
            </div>

            {/* Text Content Container (Constrained Width) */}
            <div className="max-w-2xl flex flex-col items-center gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                A Bit About Me
              </h2>

              {/* Revised Introduction / Core Statement */}
              <p className="text-muted-foreground leading-relaxed mt-2">
                As a Full-Stack Developer, I focus on building practical web
                solutions. An early interest in computers, beginning with games
                and digital design, guided me towards development. My goal is
                creating functional, user-friendly applications, and I make it a
                point to keep learning new technologies.
              </p>

              {/* Link to full bio remains the same, text slightly adjusted */}
              <div className="mt-4">
                <Link
                  href="/about" // Link to the full detailed about page
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    "p-0 h-auto text-primary hover:text-primary/90 inline-block"
                  )}
                >
                  Learn more about my journey →
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section id="skills" className="py-16 md:py-24 bg-muted/30">
        <MaxWidthWrapper>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <Tabs
            defaultValue={hybridSkillCategories[0]}
            className="w-full max-w-5xl mx-auto"
          >
            <TabsList className="grid w-full grid-cols-1 400:grid-cols-2 g sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6 h-auto">
              {hybridSkillCategories.map((type) => {
                const Icon = categoryIcons[type] || Component;
                return (
                  <TabsTrigger
                    key={type}
                    value={type}
                    className={cn(
                      "justify-center px-3 py-2.5 text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md hover:bg-accent hover:text-accent-foreground transition-all rounded-md flex items-center gap-2",
                      "text-xs sm:text-sm"
                    )}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {type}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {Object.entries(hybridGroupedSkills).map(([type, skills]) => (
              <TabsContent
                key={type}
                value={type}
                // Removed min-height, added focus style for accessibility
                className="mt-0 rounded-lg border bg-card p-6 pb-8 shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                tabIndex={-1} // Make content focusable if needed, though usually not required
              >
                {/* Badge Grid - More columns on larger screens */}
                <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline" // Using outline as base
                      className={cn(
                        "cursor-default whitespace-nowrap rounded-md border", // Use md rounding
                        "px-3 py-1.5 text-sm", // Adjusted padding/text size
                        // Refined Colors: Slightly more saturated border/text on base
                        "border-border bg-background text-foreground",
                        // Refined Hover: Clearer background/border change
                        "transition-colors duration-150 ease-in-out",
                        "hover:bg-accent hover:border-accent-foreground/50 hover:text-accent-foreground",
                        // Centering text within badge
                        "flex items-center justify-center text-center"
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </MaxWidthWrapper>
      </section>

      <section
        id="projects"
        className="py-16 md:py-24 bg-background dark:bg-slate-900"
      >
        <MaxWidthWrapper>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <Projects />
        </MaxWidthWrapper>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <MaxWidthWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Have a Chat!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={18} />
              <a
                href="mailto:7nguyennguyen3@gmail.com"
                className="hover:text-blue-600 transition-colors"
              >
                7nguyennguyen3@gmail.com
              </a>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 text-sm italic">
            P.S. Have quick questions? Ask my personal chatbot assistant in the
            bottom right!
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 bg-foreground text-background hover:bg-foreground/90"
            )}
          >
            Get In Touch <Coffee size={20} />
          </Link>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
