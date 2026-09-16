export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  summary: string; // one-liner used on cards
  type: string;
  period: string;
  technologies: string[];
  purpose: string[]; // paragraphs for the "Overview" section
  highlights: string[]; // key features / accomplishments
  icon: "calculator" | "sparkles" | "smartphone";
  accent: string; // tailwind gradient for the icon tile
  liveLink?: string;
  githubLink?: string;
  privacyLink?: string;
  storeNote?: string;
  appStoreLink?: string;
  playStoreLink?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: "asc-842-lease-calculator",
    title: "ASC 842 Lease Calculator",
    subtitle: "Lease amortization & classification tool",
    summary:
      "A web-based ASC 842 calculator that generates amortization schedules and computes right-of-use asset and lease liability balances.",
    type: "Personal Project · Accounting Tool",
    period: "July 2026",
    technologies: ["TypeScript", "Next.js", "Vercel"],
    icon: "calculator",
    accent: "from-emerald-500 to-teal-600",
    purpose: [
      "Lease accounting under ASC 842 requires lessees to recognize a right-of-use (ROU) asset and a corresponding lease liability for most leases. Working the schedules by hand is tedious and error-prone, so I built a tool to generate them reliably.",
      "The calculator takes lease inputs and produces a full amortization schedule, calculating the ROU asset and lease liability balances period by period, along with the appropriate lease classification.",
    ],
    highlights: [
      "Generates period-by-period lease amortization schedules",
      "Calculates right-of-use asset and lease liability balances",
      "Determines lease classification from the input terms",
      "Validated calculation logic against textbook lease scenarios",
      "Reconciled outputs to expected classifications and balances",
      "Documented test cases before deploying on Vercel",
    ],
  },
  {
    slug: "insights-crucible",
    title: "Insights Crucible",
    subtitle: "AI podcast summarization platform",
    summary:
      "An AI platform that summarizes podcasts, built on separate TypeScript and Python backend services with Stripe subscription billing.",
    type: "Embercore LLC · AI Platform",
    period: "2025 – 2026",
    technologies: ["TypeScript", "Python", "Stripe", "AI / LLM"],
    icon: "sparkles",
    accent: "from-indigo-500 to-violet-600",
    liveLink: "https://insights-crucible-61mskh3y4-shields-projects-61a21ea9.vercel.app/",
    githubLink: "https://github.com/7nguyennguyen3",
    storeNote:
      "Note: Embercore LLC has since shut down, and the Google Cloud Platform services and hosting behind this product were turned off to stop billing. The live link above is a visual walkthrough of the UI only — the AI summarization, auth, and billing features are no longer live. Code is browsable on GitHub.",
    purpose: [
      "Insights Crucible is an AI podcast summarization platform I built under Embercore LLC. It turns long-form audio into concise, readable summaries so listeners can capture the key ideas without committing hours.",
      "The system is split into separate TypeScript and Python backend services, with Stripe handling recurring subscription billing. Building it end-to-end also meant thinking through pricing and the basic financial controls behind a paid product.",
      "Embercore LLC has since shut down, and running this product cost real money in Google Cloud Platform compute, storage, and hosting. To stop incurring charges, I turned off those services, so what's live today is a visual-only representation of the product with no working backend features.",
    ],
    highlights: [
      "AI-powered podcast summarization",
      "Separate TypeScript and Python backend services",
      "Stripe subscription billing integration",
      "Subscription pricing and revenue operations",
    ],
  },
  {
    slug: "ember",
    title: "Ember",
    subtitle: "Published mobile app",
    summary:
      "A mobile app published on the App Store and Google Play, reaching 500+ combined downloads and 100+ testers.",
    type: "Embercore LLC · Mobile App",
    period: "2025 – 2026",
    technologies: ["Mobile", "Stripe", "App Store", "Google Play"],
    icon: "smartphone",
    accent: "from-amber-500 to-orange-600",
    storeNote: "Available on the App Store and Google Play",
    privacyLink: "/ember-privacy-policy",
    appStoreLink: "https://apps.apple.com/is/app/ember-minimalistic-focus/id6757570126",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.x7nguyennguyen3.embermobileapp",
    purpose: [
      "Ember is a mobile app I developed and shipped under Embercore LLC, published on both the App Store and Google Play.",
      "Beyond building the product, I ran the business side: managing releases, testing with 100+ users, and handling the pricing and financial operations that come with a live, self-funded product that reached 500+ combined downloads.",
    ],
    highlights: [
      "Published on the App Store and Google Play",
      "500+ combined downloads",
      "Tested with 100+ users",
      "Payments handled through Stripe to limit PCI scope",
    ],
  },
];

export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug);

export const getProject = (slug: string): ProjectItem | undefined =>
  PROJECTS.find((p) => p.slug === slug);
