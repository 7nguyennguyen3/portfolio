import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const AboutMePage = () => {
  return (
    <MaxWidthWrapper className="py-20 space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me: Nguyen Nguyen
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400">
          Passionate Full-Stack Developer | Aspiring Creator | Animal Enthusiast
          🐾
        </h2>
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Introduction Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Introduction
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hello! I'm Nguyen Nguyen, a technology enthusiast with a passion for
          creating intuitive and engaging web applications 🌐. My journey began
          at a young age when I immersed myself in video games 🎮, sparking my
          curiosity about computers 💻 and the web. Over time, I've honed my
          skills 👨‍💻 and built several projects from scratch 🔨. Let me share a
          bit more about my background and aspirations 🚀.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Skills Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Skills
        </h3>
        <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>
            <span className="font-semibold">Languages:</span> I'm proficient in
            TypeScript, JavaScript, Python, and write semantic HTML and CSS.
          </li>
          <li>
            <span className="font-semibold">Front-End:</span> I specialize in
            React and Next.js, and I've also explored Vue.
          </li>
          <li>
            <span className="font-semibold">Back-End:</span> I've dabbled in
            Node.js, Python, FastAPI, Flask, serverless functions, and API
            routes (RESTful APIs).
          </li>
          <li>
            <span className="font-semibold">Databases:</span> I've worked with
            SQL, PostgreSQL, MongoDB, Firebase & Firebase Storage, and Vercel
            Blob.
          </li>
          <li>
            <span className="font-semibold">Tools and Libraries:</span> Git,
            GitHub, Redux, Zustand, Prisma, Tailwind CSS, Framer Motion, Redis,
            Jest, and Sentry.
          </li>
          <li>
            <span className="font-semibold">Other:</span> I've integrated
            payment systems with Stripe and harnessed the power of the LangChain
            framework for AI-powered chatbot creation. I've also worked with
            Docker and Kubernetes for containerization and deployment on virtual
            machines.
          </li>
        </ul>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Learning Journey Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Learning Journey
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm an avid learner, always open to new challenges. Starting with
          front-end development, I gradually expanded my skills to become a
          full-stack developer. My goal is to create software and application
          that are useful to other 🌐.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Coding Philosophy Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Coding Philosophy
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I believe in the "brute force" approach: tackling challenges head-on
          until I truly understand them. Once I grasp a concept, it becomes a
          lifelong skill 💡.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Beyond Technology Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Beyond Technology
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          When I'm not coding, I enjoy immersing myself in two fulfilling
          activities:
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Learning to Cook 🍳:</strong> I love experimenting in the
          kitchen by following cooking videos or guides. It's feel great when
          the dish came out declious.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <strong>Walking in Nature 🌳:</strong> Taking long walks in nature
          helps me recharge and stay grounded. Usually in a park, being
          surrounded by greenery and fresh air is both refreshing and inspiring.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Current Endeavors Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Current Endeavors
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          At present, I’m immersed in developing an innovative platform that
          leverages the latest in web technologies to deliver a seamless user
          experience. My focus is on creating responsive, accessible, and
          performant applications that not only meet but exceed user
          expectations. 🌐
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Professional Goals Section */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Professional Goals
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Looking ahead, my professional aspirations include leading a dynamic
          team of developers 👨‍💻👩‍💻, contributing to open-source projects 🌍, and
          continuously pushing the boundaries of what’s possible with modern web
          development. 💡
        </p>
      </section>
    </MaxWidthWrapper>
  );
};

export default AboutMePage;
