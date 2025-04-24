import { SkillItem } from "./interface";

export const SKILLS_DATA: SkillItem[] = [
  // == Languages ==
  { skill: "TypeScript", type: "Languages" },
  { skill: "JavaScript", type: "Languages" },
  { skill: "Python", type: "Languages" },
  { skill: "HTML", type: "Languages" },
  { skill: "CSS", type: "Languages" },
  { skill: "SQL", type: "Languages" }, // Query Language

  // == Frontend ==
  { skill: "React", type: "Frontend" },
  { skill: "Next.js", type: "Frontend" },
  { skill: "React Native", type: "Frontend" },
  { skill: "Tailwind CSS", type: "Frontend" },
  { skill: "Framer Motion", type: "Frontend" },
  { skill: "Zustand", type: "Frontend" },
  { skill: "Tanstack React Query", type: "Frontend" },

  // == Backend & Auth ==
  { skill: "Node.js", type: "Backend & Auth" },
  { skill: "Express", type: "Backend & Auth" },
  { skill: "FastAPI", type: "Backend & Auth" },
  { skill: "Serverless Functions", type: "Backend & Auth" },
  { skill: "Prisma", type: "Backend & Auth" }, // ORM related to backend logic
  { skill: "NextAuth", type: "Backend & Auth" },
  { skill: "Firebase Authentication", type: "Backend & Auth" },
  { skill: "JWT Authentication", type: "Backend & Auth" },
  { skill: "Stripe", type: "Backend & Auth" }, // Payment processing

  // == Databases ==
  { skill: "PostgreSQL", type: "Databases" },
  { skill: "MongoDB", type: "Databases" },
  { skill: "Firebase", type: "Databases" }, // Includes Firestore, RTDB, Storage
  { skill: "Redis", type: "Databases" }, // Cache/DB
  { skill: "NoSQL", type: "Databases" }, // Concept, but often listed

  // == AI / ML ==
  { skill: "OpenAI", type: "AI / ML" },
  { skill: "Google Gemini", type: "AI / ML" },
  { skill: "Langchain", type: "AI / ML" },
  { skill: "LangGraph", type: "AI / ML" },
  { skill: "Pinecone", type: "AI / ML" }, // Vector DB for AI

  // == DevOps & Tools ==
  { skill: "Docker", type: "DevOps & Tools" },
  { skill: "Kubernetes", type: "DevOps & Tools" },
  { skill: "Git", type: "DevOps & Tools" },
  { skill: "Nginx", type: "DevOps & Tools" },
  { skill: "Vercel", type: "DevOps & Tools" }, // Platform
  { skill: "Railway", type: "DevOps & Tools" }, // Platform
  { skill: "Expo", type: "DevOps & Tools" }, // Build Tool/Platform
  { skill: "React Email", type: "DevOps & Tools" }, // Tool/Service
];

// Define the mapping from the desired Tab Name (key)
// to the corresponding 'type' string used in the UPDATED SKILLS_DATA (value array)
export const SKILL_CATEGORIES = {
  Languages: ["Languages"],
  Frontend: ["Frontend"],
  "Backend & Auth": ["Backend & Auth"],
  Databases: ["Databases"],
  "AI / ML": ["AI / ML"],
  "DevOps & Tools": ["DevOps & Tools"],
};
