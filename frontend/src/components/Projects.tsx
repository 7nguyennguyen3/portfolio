import Project from "@/components/Project";
import React from "react";

const Projects = () => {
  return (
    <section className="mb-20">
      <h2 className="text-heading pb-10">My Projects</h2>
      <div className="flex flex-col gap-10">
        <Project
          link="https://versa-ai.co"
          title="Versa AI - Conversation with PDFs"
          technologies={[
            "Next.js",
            "Typescript",
            "Firebase Database & Storage",
            "OpenAI",
            "LangChain",
            "Python",
            "Node.js",
            "FastAPI",
            "JWT Authentication",
            "LLM",
            "Pinecone",
            "Embedding",
            "Custom Memory",
          ]}
          description="A platform that let you have a conversation with your PDFs. It uses AI to understand the content of the PDF and let you ask questions about it. It is built to be scalable and reliable."
          href="/projects/versa-ai"
          images={[
            "/versa-1.webp",
            "/versa-2.webp",
            "/versa-3.webp",
            "/versa-4.webp",
            "/versa-5.webp",
          ]}
        />
        <Project
          link="/projects/microservices"
          title="Microservices - Marketplace"
          technologies={[
            "Node.js",
            "Express",
            "Typescript",
            "MongoDB",
            "Redis",
            "Docker",
            "Kubernetes",
            "Nginx",
            "Next.js",
          ]}
          description="A marketplace that let user list and sell products. It follows the microservices architecture where each service is independently functioning from each other. It is built to be scalable and reliable."
          href="/projects/microservices"
          images={[
            "/microservices-1.webp",
            "/microservices-2.webp",
            "/microservices-3.webp",
            "/microservices-4.webp",
            "/microservices-5.webp",
          ]}
        />
        <Project
          link="/projects/finance-kaiju-mobile"
          title="Finance Kaiju Mobile - Personal Finance Tracker App"
          technologies={[
            "React Native",
            "Typescript",
            "Firebase | Cloud Database",
            "Firebase Authentication",
            "Expo",
          ]}
          description="A mobile yet more advanced version of the original finance kaiju. With better UI/UX and more features, it is a great app to keep track of your finance. Currently in closed testing in Play Store and not available for download."
          href="/projects/finance-kaiju-mobile"
          images={[
            "/finance-kaiju-mobile-1.webp",
            "/finance-kaiju-mobile-2.webp",
            "/finance-kaiju-mobile-3.webp",
            "/finance-kaiju-mobile-4.webp",
          ]}
        />
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
          images={[
            "/petalsoft-1.webp",
            "/petalsoft-2.webp",
            "/petalsoft-3.webp",
            "/petalsoft-4.webp",
            "/petalsoft-5.webp",
            "/petalsoft-6.webp",
          ]}
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
          images={[
            "/hit-anime-1.webp",
            "/hit-anime-2.webp",
            "/hit-anime-3.webp",
            "/hit-anime-4.webp",
            "/hit-anime-5.webp",
          ]}
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
          images={[
            "/finance-kaiju-1.webp",
            "/finance-kaiju-2.webp",
            "/finance-kaiju-3.webp",
            "/finance-kaiju-4.webp",
            "/finance-kaiju-5.webp",
            "/finance-kaiju-6.webp",
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
