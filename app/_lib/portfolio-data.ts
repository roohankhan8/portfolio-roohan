import projectData from "./projects.json";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin";
};

export type FocusArea = {
  label: string;
  description: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  period?: string;
  role?: string;
  summary: string;
  problem: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  organization: string;
  period?: string;
  location?: string;
  description: string;
};

export type GitHubSummary = {
  label: string;
  href: string;
  note: string;
  repositories: number;
  stars: number;
  followers: number;
  following: number;
};

export const siteMeta = {
  title: "Roohan Khan | Associate Software Engineer - Backend",
  description:
    "Backend-focused software engineer building Laravel APIs, admin systems, integrations, and maintainable web applications.",
  linkedInUrl: "https://pk.linkedin.com/in/roohan-khan8",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/roohankhan8",
    icon: "github",
  },
  // {
  //   label: "Work GitHub",
  //   href: "https://github.com/roohankhan-klabs",
  //   icon: "github",
  // },
  {
    label: "LinkedIn",
    href: "https://pk.linkedin.com/in/roohan-khan8",
    icon: "linkedin",
  },
];

export const focusAreas: FocusArea[] = [
  {
    label: "Backend Systems",
    description: "Laravel-first application design with maintainable service and data layers.",
  },
  {
    label: "REST APIs",
    description: "Structured endpoints for auth, stateful workflows, and third-party integrations.",
  },
  {
    label: "Payment Integrations",
    description: "Checkout logic, payment handling, and secure product delivery flows.",
  },
  {
    label: "Full-Stack Delivery",
    description: "Shipping complete products with React, Next.js, and pragmatic frontend layers.",
  },
  {
    label: "Data and ML",
    description: "Applied machine learning projects with preprocessing, feature engineering, and evaluation.",
  },
];

export const projects: ProjectItem[] = projectData;

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    summary: "Primary lane: Laravel backend systems, REST APIs, RBAC, admin workflows, and maintainable application architecture.",
    items: ["PHP", "Laravel", "Laravel Nova", "Statamic", "Filament", "REST APIs", "Authentication", "Authorization"],
  },
  {
    title: "Frontend",
    summary: "Used pragmatically when product delivery needs it, especially for admin surfaces and connected web applications.",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    summary: "Comfortable working with API-connected application flows beyond the web stack.",
    items: ["Flutter", "Flutter APIs"],
  },
  {
    title: "Data and AI",
    summary: "Applied ML work plus newer AI workflow experimentation, with Python still part of the working toolkit.",
    items: ["Python", "Pandas", "Scikit-learn", "XGBoost", "LangChain", "OpenAI", "Embeddings"],
  },
  {
    title: "Tools and Workflow",
    summary: "Workflow and infrastructure tools used for shipping, testing, documentation, and collaboration.",
    items: ["Git", "GitHub", "Pest", "Unit Testing", "Code Reviews", "Technical Documentation", ".NET Core"],
  },
  {
    title: "Data Stores",
    summary: "Experience working with relational modeling, query optimization, and practical persistence choices across projects.",
    items: ["MySQL", "MongoDB", "Firebase", "SQL", "Relational Data Modeling", "Query Optimization"],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Jr. Backend Developer",
    organization: "K-Labs",
    period: "February 2026 - Present",
    location: "Karachi, Pakistan",
    description:
      "Designs and develops backend systems and RESTful APIs for web and mobile applications using PHP and Laravel, while also building admin and content workflows with Laravel Nova, Statamic, and Filament.",
  },
  {
    title: "Backend Developer",
    organization: "Digital Marketing 30",
    period: "2025 - January 2026",
    location: "Karachi, Pakistan",
    description:
      "Rebuilt the backend of theber.com in Laravel with a more modular structure, designed RBAC for multiple user types, optimized SQL queries on a large production database, and supported project lifecycle APIs and file workflows.",
  },
  {
    title: "Backend Developer",
    organization: "NED Scholars",
    period: "April 2023 - June 2024",
    location: "Karachi, Pakistan",
    description:
      "Worked as a Django backend developer on a university logbook system, implementing authentication, relational data models, and structured record-management workflows.",
  },
  {
    title: "BS in Computational Finance",
    organization: "NED University of Engineering and Technology",
    period: "October 2022 - October 2026",
    description:
      "Formal education backing the software portfolio, with public-facing work spanning backend development, applied ML coursework, and product-oriented engineering projects.",
  },
];

export const engineeringApproach = [
  {
    title: "Understand the workflow",
    description: "Start with the actual product problem, the actors in the system, and the state that needs to be preserved.",
  },
  {
    title: "Model the data carefully",
    description: "Shape database structure and domain records early so product behavior stays predictable as the system grows.",
  },
  {
    title: "Build the API around real use cases",
    description: "Treat endpoints, validation, and auth as first-class product architecture rather than an afterthought.",
  },
  {
    title: "Integrate external services safely",
    description: "Handle payments, third-party services, and background workflows with explicit state and reliable boundaries.",
  },
  {
    title: "Keep the system maintainable",
    description: "Favor separable responsibilities, pragmatic testing, and clear code paths that are easier to extend later.",
  },
];

export const explorationAreas = [
  "NestJS",
  "System design",
  "Advanced Laravel architecture",
  "AI-enabled applications",
  "Data engineering",
  "Clean backend boundaries",
];

export const githubSummaries: GitHubSummary[] = [
  {
    label: "Personal GitHub",
    href: "https://github.com/roohankhan8",
    note: "Public profile currently shows a backend-focused README, 43 repositories, and pinned work including Logbook, Angular-ShopApp, exptracker-NextJs, and Py-Projects.",
    repositories: 43,
    stars: 41,
    followers: 3,
    following: 5,
  },
  // {
  //   label: "Work GitHub",
  //   href: "https://github.com/roohankhan-klabs",
  //   note: "Public work profile currently shows 3 repositories and a lightweight project list under the K-Labs handle.",
  //   repositories: 3,
  //   stars: 4,
  //   followers: 1,
  //   following: 1,
  // },
];
