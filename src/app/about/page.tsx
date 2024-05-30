import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const AboutMePage = () => {
  return (
    <MaxWidthWrapper className="py-20 flex flex-col gap-5">
      <h1 className="gra-b-r text-4xl">About Me: Nguyen Nguyen</h1>
      <h2 className="text-xl gra-b-r">
        Passionate Full-Stack Developer | Aspiring Creator | Animal Enthusiast
        🐾
      </h2>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-lg">Introduction</p>
        <p>
          Hello! I'm Nguyen Nguyen, a technology enthusiast with a passion for
          creating intuitive and engaging web applications 🌐. My journey began
          at a young age when I immersed myself in video games 🎮, sparking my
          curiosity about computers 💻 and the web 🕸️. Over time, I've honed my
          skills 👨‍💻 and built several projects from scratch 🔨. Let me share a
          bit more about my background and aspirations 🚀.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">Skills</p>
        <ul className="list-disc ml-6">
          <li>
            <span className="font-semibold">Languages</span>: I'm proficient in
            TypeScript, JavaScript, Python, and write semantic HTML and CSS.
          </li>
          <li>
            <span className="font-semibold">Front-End</span>: I specialize in
            React and Next.js, and I've also explored Vue.
          </li>
          <li>
            <span className="font-semibold">Back-End</span>: I've dabbled in
            Node.js, serverless functions, and API routes (RESTful APIs).
          </li>
          <li>
            <span className="font-semibold">Databases</span>: I've worked with
            MySQL, PostgreSQL, Supabase, and cloud databases.
          </li>
          <li>
            <span className="font-semibold">Tools and Libraries</span>: Git,
            GitHub, Redux, Zustand, Prisma, Tailwind CSS, Framer Motion, Redis,
            and Sentry.
          </li>
          <li>
            <span className="font-semibold">Other</span>: I've integrated
            payment systems with Stripe and harnessed the power of the LangChain
            framework for AI-powered chatbot creation.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">Learning Journey</p>
        <p>
          I'm an avid learner, always open to new challenges. Starting with
          front-end development, I gradually expanded my skills to become a
          full-stack developer. My goal? To create complex software that solves
          real-world problems 🌐.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">Coding Philosophy</p>
        <p>
          I believe in the "brute force" approach: tackling challenges head-on
          until I truly understand them. Once I grasp a concept, it becomes a
          lifelong skill 💡.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">Beyond Technology</p>
        <p>When I'm not coding, you'll find me exploring two passions:</p>
        <p>
          House MD 📺: A series that I've been watching lately is House MD, it's
          an enthralling medical drama featuring the genius Dr. Gregory House
          solving complex cases with unconventional methods at
          Princeton-Plainsboro Hospital. 🏥🔍
        </p>
        <p>
          Nature 🌿: Watching animals in their natural habitat relaxes me.
          There's something magical about observing their behaviors.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutMePage;
