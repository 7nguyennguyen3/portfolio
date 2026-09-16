import { SkillItem } from "./interface";

/* ------------------------------------------------------------------ */
/*  Contact / profile                                                  */
/* ------------------------------------------------------------------ */
export const PROFILE = {
  name: "Nguyen Nguyen",
  email: "7nguyennguyen3@gmail.com",
  github: "https://github.com/7nguyennguyen3",
  linkedin: "https://www.linkedin.com/in/7nguyennguyen3",
  resume: "/Nguyen_Nguyen_Resume.pdf",
  location: "Orange County, CA",
};

/* ------------------------------------------------------------------ */
/*  Skills — grouped for the homepage                                  */
/* ------------------------------------------------------------------ */
export const SKILLS_DATA: SkillItem[] = [
  // == Accounting & Finance ==
  { skill: "Bookkeeping", type: "Accounting & Finance" },
  { skill: "Bank Reconciliations", type: "Accounting & Finance" },
  { skill: "Internal Controls Documentation", type: "Accounting & Finance" },
  { skill: "Financial Operations", type: "Accounting & Finance" },
  { skill: "Expense Tracking", type: "Accounting & Finance" },
  { skill: "ASC 842 Lease Accounting", type: "Accounting & Finance" },
  { skill: "Tax Prep (IRS VITA)", type: "Accounting & Finance" },

  // == Data & Analytics ==
  { skill: "Microsoft Excel", type: "Data & Analytics" },
  { skill: "SQL", type: "Data & Analytics" },
  { skill: "Python", type: "Data & Analytics" },
  { skill: "Business Data Analytics", type: "Data & Analytics" },

  // == Software & Tools ==
  { skill: "TypeScript", type: "Software & Tools" },
  { skill: "Stripe", type: "Software & Tools" },
  { skill: "Git", type: "Software & Tools" },
];

// Map from the Tab / card name (key) to the `type` values it contains
export const SKILL_CATEGORIES = {
  "Accounting & Finance": ["Accounting & Finance"],
  "Data & Analytics": ["Data & Analytics"],
  "Software & Tools": ["Software & Tools"],
};

/* ------------------------------------------------------------------ */
/*  Certifications                                                      */
/* ------------------------------------------------------------------ */
export const CERTIFICATIONS = [
  "IBM AI Developer",
  "IBM Full Stack Software Developer",
  "Python for Data Science & AI",
];

/* ------------------------------------------------------------------ */
/*  Experience                                                          */
/* ------------------------------------------------------------------ */
export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  category: "Relevant Experience" | "Additional Experience";
  bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Embercore LLC",
    role: "Founder & Business Administrator",
    location: "Orange, CA",
    period: "Jun 2025 – Jun 2026",
    category: "Relevant Experience",
    bullets: [
      "Managed business and financial operations for a self-funded LLC, including bookkeeping, monthly bank reconciliations, expense tracking, pricing, and entity administration.",
      "Designed basic controls around payments and access: kept cardholder data with Stripe to limit PCI scope, and stored API credentials outside of source code and version control.",
      "Developed and published Ember on the App Store and Google Play, reaching 500+ combined downloads and testing with 100+ users.",
      "Built Insights Crucible, an AI podcast summarization platform, using separate TypeScript and Python backend services with Stripe subscription billing.",
    ],
  },
  {
    company: "Santa Ana Zoo",
    role: "Education Staff Member",
    location: "Santa Ana, CA",
    period: "Mar 2026 – Present",
    category: "Additional Experience",
    bullets: [
      "Greet and orient 500+ daily visitors, communicating information on animal species and habitats.",
      "Monitor exhibits and enforce safety policies, addressing unsafe guest behavior before escalation.",
      "Perform habitat opening/closing procedures and assist school groups during educational visits.",
    ],
  },
  {
    company: "Strategic Kids",
    role: "Chess Instructor",
    location: "Laguna Hills, CA",
    period: "Jan 2026 – Present",
    category: "Additional Experience",
    bullets: [
      "Teach chess fundamentals to classes of 15–30 students ages 6–14 across school sites in Orange County.",
      "Simplify chess strategies into age-appropriate steps for students of varying skill levels.",
      "Manage attendance and classroom behavior and communicate with parents and school staff.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Education                                                           */
/* ------------------------------------------------------------------ */
export interface EducationItem {
  school: string;
  credential: string;
  period: string;
  details: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    school: "California State University, Fullerton",
    credential: "B.A. in Business Administration — Concentration in Accounting",
    period: "Expected May 2028",
    details: [
      "Minor in Business Data Analytics",
      "Major GPA: 3.52",
      "CPA Eligibility: May 2028",
    ],
  },
  {
    school: "Coastline College",
    credential: "A.S. in Business Administration",
    period: "Jan 2023 – May 2026",
    details: [],
  },
];

/* ------------------------------------------------------------------ */
/*  Involvement                                                         */
/* ------------------------------------------------------------------ */
export const INVOLVEMENT = [
  {
    org: "Beta Alpha Psi",
    role: "Candidate",
    period: "Aug 2026 – Present",
    detail:
      "Attending 30+ hours of professional development workshops, community service, and firm-hosted speaker meetings to engage with accounting professionals and explore service lines.",
  },
  {
    org: "Volunteer Income Tax Assistance (VITA)",
    role: "Member",
    period: "Aug 2026 – Present",
    detail:
      "Completing IRS VITA certification to prepare federal and state tax returns for local clients.",
  },
  {
    org: "Additional Involvement",
    role: "",
    period: "",
    detail:
      "Accounting Society, CalCPA, ALPFA, Ascend, and Sigma Upsilon Mu.",
  },
];

/* ------------------------------------------------------------------ */
/*  Interests & languages                                              */
/* ------------------------------------------------------------------ */
export const INTERESTS = [
  "Pickleball",
  "Golf",
  "Japanese Culture",
  "Hot Pot",
  "Baldur's Gate 3",
  "Poker",
  "Thirteen (Card Game)",
];

export const LANGUAGES = ["English", "Vietnamese (Native)"];
