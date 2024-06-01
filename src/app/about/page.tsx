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
          curiosity about computers 💻 and the web. Over time, I've honed my
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
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">Current Endeavors</p>
        <p>
          At present, I’m immersed in developing an innovative platform that
          leverages the latest in web technologies to deliver a seamless user
          experience. My focus is on creating responsive, accessible, and
          performant applications that not only meet but exceed user
          expectations. 🌐
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">Professional Goals</p>
        <p>
          Looking ahead, my professional aspirations include leading a dynamic
          team of developers 👨‍💻👩‍💻, contributing to open-source projects 🌍, and
          continuously pushing the boundaries of what’s possible with modern web
          development. 💡
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">Personal Achievements</p>
        <p>
          I am proud of my contributions to meaningful projects that have had a
          tangible impact on users. PetalSoft has enhanced the online retail
          experience by providing a seamless shopping platform with advanced
          features like a chatbot 🤖 and an admin dashboard for business
          operations 📊. Finance Kaiju has been instrumental in helping users
          track their finances 💸, offering a practical tool for better
          financial management. Hit Anime has brought joy to anime fans by
          providing a streamlined way to browse their favorite content 📺,
          improving accessibility and user engagement. ❤️
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutMePage;
