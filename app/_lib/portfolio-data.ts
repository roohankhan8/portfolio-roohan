import projectData from "./projects.json";
import type { StaticImageData } from "next/image";
import bhiveScreenshot from "../_screenshots/bhive.png";
import faz3aClient1Screenshot from "../_screenshots/faz3a-client-1.png";
import faz3aClient2Screenshot from "../_screenshots/faz3a-client-2.png";
import faz3aVendor1Screenshot from "../_screenshots/faz3a-vendor-1.png";
import faz3aVendor2Screenshot from "../_screenshots/faz3a-vendor-2.png";
import theberScreenshot from "../_screenshots/theber.png";

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
  screenshots?: ProjectScreenshot[];
};

export type ProjectScreenshot = {
  src: StaticImageData;
  alt: string;
  label?: string;
};

type ProjectScreenshotRecord = {
  file: string;
  alt: string;
  label?: string;
};

type ProjectRecord = Omit<ProjectItem, "screenshots"> & {
  screenshots?: ProjectScreenshotRecord[];
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
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
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
    description: "Service-oriented backend work across frameworks, APIs, and maintainable system boundaries.",
  },
  {
    label: "Frontend",
    description: "Responsive interfaces spanning component systems, app shells, and product-facing frontend delivery.",
  },
  {
    label: "Payment Integration",
    description: "Checkout flows, gateway handling, and reliable payment-state management across products.",
  },
  {
    label: "AI",
    description: "AI-assisted workflows and local tooling used to speed delivery, exploration, and product implementation.",
  },
  {
    label: "Data and ML",
    description: "Python-led analysis, applied ML, business reporting, and practical data tooling.",
  },
];

const screenshotAssets: Record<string, StaticImageData> = {
  "bhive.png": bhiveScreenshot,
  "faz3a-client-1.png": faz3aClient1Screenshot,
  "faz3a-client-2.png": faz3aClient2Screenshot,
  "faz3a-vendor-1.png": faz3aVendor1Screenshot,
  "faz3a-vendor-2.png": faz3aVendor2Screenshot,
  "theber.png": theberScreenshot,
};

export const projects: ProjectItem[] = (projectData as ProjectRecord[]).map((project) => ({
  ...project,
  screenshots: project.screenshots?.map((shot) => ({
    src: screenshotAssets[shot.file],
    alt: shot.alt,
    label: shot.label,
  })),
}));

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    summary: "Primary lane: Laravel application development spanning APIs, database design, RBAC, admin workflows, and maintainable backend architecture.",
    items: ["PHP", "Laravel", "REST APIs", "Authentication", "Authorization", "MVC Architecture", "Eloquent ORM"],
  },
  {
    title: "Frontend",
    summary: "Frontend stack used for modern interfaces, responsive product work, and shipping complete web experiences when the product needs it.",
    items: ["Vue", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    summary: "Mobile technologies used for API-connected application flows across cross-platform product work.",
    items: ["React Native", "Flutter"],
  },
  {
    title: "Data and AI",
    summary: "Data and AI work grounded in practical Python analysis, visualization, and experimentation workflows.",
    items: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Tools and Workflow",
    summary: "Tools used for building, debugging, collaborating, and moving product work from implementation into delivery.",
    items: ["Codex", "GitHub", "Postman"],
  },
  {
    title: "Data Stores",
    summary: "Primary databases used across application work, spanning relational systems and document-oriented storage.",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
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
    period: "June 2025 - July 2026",
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
  // {
  //   title: "BS in Computational Finance",
  //   organization: "NED University of Engineering and Technology",
  //   period: "October 2022 - October 2026",
  //   description:
  //     "Formal education backing the software portfolio, with public-facing work spanning backend development, applied ML coursework, and product-oriented engineering projects.",
  // },
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
