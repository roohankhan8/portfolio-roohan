import projectData from "./projects.json";
import type { StaticImageData } from "next/image";
import bhiveScreenshot from "../_screenshots/bhive.png";
import bhiveOrderDetailScreenshot from "../_screenshots/bhive-order-detail.jpeg";
import faz3aClient1Screenshot from "../_screenshots/faz3a-client-1.png";
import faz3aClient2Screenshot from "../_screenshots/faz3a-client-2.png";
import faz3aVendor1Screenshot from "../_screenshots/faz3a-vendor-1.png";
import faz3aVendor2Screenshot from "../_screenshots/faz3a-vendor-2.png";
import theberScreenshot from "../_screenshots/theber.png";
import theberportalScreenshot from "../_screenshots/theber-portal.png";
import abaytySplashScreenshot from "../_screenshots/abayty-splash.webp";
import abaytyFlowScreenshot from "../_screenshots/abayty-flow.webp";

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
  technologies?: string[];
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
  url?: string;
};

type ProjectScreenshotRecord = {
  file: string;
  alt: string;
  label?: string;
  url?: string;
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
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-roohan.netlify.app",
  name: "Roohan Khan",
  title: "Roohan Khan | Associate Software Engineer - Backend",
  description:
    "Backend-focused software engineer building Laravel APIs, admin systems, integrations, and maintainable web applications.",
  linkedInUrl: "https://pk.linkedin.com/in/roohan-khan8",
  githubUrl: "https://github.com/roohankhan8",
  contactEmail: "roohankhan8@gmail.com",
  resumeUrl: "/Roohan_Khan_Resume_Backend.pdf",
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
  {
    label: "Work GitHub",
    href: "https://github.com/roohankhan-klabs",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://pk.linkedin.com/in/roohan-khan8",
    icon: "linkedin",
  },
];

export const focusAreas: FocusArea[] = [
  {
    label: "Backend Systems",
    description: "Laravel applications, REST APIs, authentication, authorization, background workflows, and maintainable service boundaries.",
  },
  {
    label: "Database & Domain Design",
    description: "Relational data models, Eloquent workflows, query optimization, migrations, and business rules designed around real product behavior.",
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
  },
  {
    label: "Payment & Integration",
    description: "Checkout orchestration, payment-state handling, webhooks, external APIs, and failure-aware integration workflows.",
    technologies: ["Stripe", "Tap Payment", "Safepay"],
  },
  {
    label: "Admin & Business Workflows",
    description: "Role-aware admin systems, approval queues, file processing, reporting, and operational tools built with Nova, Filament, and Statamic.",
    technologies: ["Laravel", "Filament", "Statamic"],
  },
  {
    label: "Frontend",
    description: "Responsive interfaces spanning component systems, app shells, and product-facing frontend delivery.",
  },

  {
    label: "Data and ML",
    description: "Python-led analysis, applied ML, business reporting, and practical data tooling.",
  },
  {
    label: "Wordpress and CMS",
    description: "Wordpress and CMS work for content-driven products, marketing sites, and client-facing web experiences.",
    technologies: ["WordPress", "Statamic", "Shopify"],
  },
];

const screenshotAssets: Record<string, StaticImageData> = {
  "bhive.png": bhiveScreenshot,
  "bhive-order-detail.jpeg": bhiveOrderDetailScreenshot,
  "faz3a-client-1.png": faz3aClient1Screenshot,
  "faz3a-client-2.png": faz3aClient2Screenshot,
  "faz3a-vendor-1.png": faz3aVendor1Screenshot,
  "faz3a-vendor-2.png": faz3aVendor2Screenshot,
  "theber.png": theberScreenshot,
  "theber-portal.png": theberportalScreenshot,
  "abayty-splash.webp": abaytySplashScreenshot,
  "abayty-flow.webp": abaytyFlowScreenshot,
};

export const projects: ProjectItem[] = (projectData as ProjectRecord[]).map((project) => ({
  ...project,
  screenshots: project.screenshots?.map((shot) => ({
    src: screenshotAssets[shot.file],
    alt: shot.alt,
    label: shot.label,
    url: shot.url,
  })),
}));

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    summary: "My primary area: Laravel applications, REST APIs, relational data modeling, authentication, authorization, queues, integrations, and admin workflows.",
    items: ["PHP", "Laravel", "REST APIs", "Authentication", "Authorization", "MVC Architecture", "Eloquent ORM"],
  },
  {
    title: "Frontend",
    summary: "Supporting frontend experience used to integrate APIs, build internal tools, and deliver complete product workflows when needed.",
    items: ["Vue", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    summary: "Cross-platform experience consuming APIs and implementing product flows in Flutter and React Native.",
    items: ["React Native", "Flutter"],
  },
  {
    title: "Data and AI",
    summary: "Supporting experience with Python analysis, machine-learning experimentation, retrieval workflows, and AI-enabled application features.",
    items: ["Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Tools and Workflow",
    summary: "Tools I use for source control, API testing, debugging, code review, and AI-assisted development.",
    items: ["Codex", "GitHub", "Postman"],
  },
  {
    title: "Data Stores",
    summary: "Relational and document databases used for transactional applications, structured workflows, and experimentation.",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Associate Software Engineer — Backend",
    organization: "K-Labs",
    period: "Feb 2026 - Present",
    location: "Karachi, Pakistan",
    description:
      "Build and maintain PHP and Laravel backends for web and mobile products, including REST APIs, relational data workflows, and administrative tooling with Laravel Nova, Statamic, and Filament. Collaborate with frontend, mobile, and product teammates to translate requirements into validated application behavior.",
  },
  {
    title: "Backend Developer - Part-time",
    organization: "Digital Marketing 30",
    period: "Jun 2025 - Jul 2026",
    location: "Karachi, Pakistan",
    description:
      "Rebuilt core workflows from The BER’s legacy PHP portal in Laravel, implemented authorization for multiple user roles, improved data access on production admin screens, and developed APIs and file workflows spanning document review and project lifecycle operations.",
  },
  {
    title: "Wordpress Developer",
    organization: "Freelance",
    period: "Jul 2024 - Feb 2025",
    location: "Karachi, Pakistan",
    description:
      "Delivered WordPress websites for clients, adapting themes and plugins, implementing responsive interfaces, and handling deployment, compatibility, and performance requirements.",
  },
  {
    title: "Backend Developer · University Project",
    organization: "NED Scholars",
    period: "Apr 2023 - Jun 2024",
    location: "Karachi, Pakistan",
    description:
      "Developed backend features for a Django-based academic logbook, including authentication, relational data models, and structured workflows for creating and maintaining records.",
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
    description: "Identify the users, business rules, state transitions, constraints, and failure cases before choosing an implementation.",
  },
  {
    title: "Model the data carefully",
    description: "Design records and relationships around domain behavior so validation, authorization, and reporting remain predictable.",
  },
  {
    title: "Build the API around real use cases",
    description: "Shape endpoints around complete application workflows rather than exposing database operations directly.",
  },
  {
    title: "Integrate external services safely",
    description: "Treat payments, webhooks, external APIs, retries, and partial failures as explicit stateful workflows.",
  },
  {
    title: "Keep the system maintainable",
    description: "Use clear responsibilities, focused tests, observable failures, and code paths that another engineer can extend safely.",
  },
];

export const explorationAreas = [
  "System design",
  "Automated and integration testing",
  "Queues and event-driven workflows",
  "Observability and production debugging",
  "Advanced Laravel architecture",
  "AI-enabled backend applications"
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
