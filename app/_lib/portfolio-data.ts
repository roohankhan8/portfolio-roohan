export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  label: string;
  href: string;
  shortLabel: string;
};

export type FocusArea = {
  label: string;
  description: string;
};

export type ProjectItem = {
  slug: string;
  title: string;
  period?: string;
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
  title: "Roohan Khan | Backend Developer & Software Engineer",
  description:
    "Backend-focused software engineer building APIs, integrations, ecommerce systems, and complete digital products.",
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
    shortLabel: "GH",
  },
  {
    label: "Work GitHub",
    href: "https://github.com/roohankhan-klabs",
    shortLabel: "WK",
  },
  {
    label: "LinkedIn",
    href: "https://pk.linkedin.com/in/roohan-khan8",
    shortLabel: "LI",
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

export const projects: ProjectItem[] = [
  {
    slug: "ai-content-workflow-app",
    title: "AI Content Workflow App",
    period: "2026",
    summary:
      "Laravel and React application that turns AI generation into a stateful writing workflow instead of a single prompt screen.",
    problem:
      "Create a durable content workspace where briefs, analysis, drafts, conversations, and final output stay connected across the full writing lifecycle.",
    stack: ["Laravel 13", "React 19", "Laravel AI", "MySQL", "Pest"],
    highlights: [
      "Used a shared ContentProject model to persist briefs, drafts, model settings, and final output.",
      "Separated AI agents by workflow responsibility instead of pushing everything through one prompt layer.",
      "Stored conversation threads, prompt runs, and streaming results to make the product stateful.",
    ],
  },
  {
    slug: "revamping-ber-to-laravel",
    title: "Revamping The BER To Laravel",
    period: "Sep 2025",
    summary:
      "Publicly listed modernization project focused on moving BER functionality into a Laravel application.",
    problem:
      "Rework an existing BER workflow into a Laravel-based product structure that is easier to extend and maintain.",
    stack: ["Laravel"],
    highlights: [
      "Positioned as a modernization effort rather than a greenfield build.",
      "Fits the portfolio narrative around backend restructuring and maintainable product development.",
    ],
  },
  {
    slug: "price-predictor-for-houses-in-pakistan",
    title: "Price Predictor For Houses In Pakistan",
    period: "Aug 2024",
    summary:
      "Machine learning project for predicting house prices using multiple regression models and structured preprocessing.",
    problem:
      "Improve price prediction quality on a Kaggle housing dataset by handling missing data, outliers, and feature engineering carefully.",
    stack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost"],
    highlights: [
      "Built custom data cleaning and categorical conversion functions.",
      "Created engineered features such as floor ratio and used mutual information scoring.",
      "Evaluated models with MAE while refining data quality and model behavior.",
    ],
  },
  {
    slug: "money-manager",
    title: "Money Manager",
    period: "Sep 2023",
    summary:
      "Full-stack expense tracker built with Next.js and MongoDB to manage income, expenses, and spending analysis.",
    problem:
      "Provide a practical personal finance workflow with authentication, visual analysis, and a cleaner review of spending behavior.",
    stack: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth", "Chart.js"],
    highlights: [
      "Integrated Google authentication for account access.",
      "Used Chart.js for spending visualizations and review workflows.",
      "Built as a full-stack product rather than a static frontend showcase.",
    ],
    repoUrl: "https://github.com/roohankhan8/exptracker-NextJs",
  },
  {
    slug: "logbook",
    title: "Logbook",
    period: "Jul 2023 - Jun 2024",
    summary:
      "Django-based web application for creating, editing, and managing structured logbook entries collaboratively.",
    problem:
      "Give teams and individuals a cleaner way to record activities, processes, and experiments in a shared web workflow.",
    stack: ["Django", "Python", "HTML"],
    highlights: [
      "Focused on structured entry management rather than simple note storage.",
      "Designed for collaborative record keeping in web form.",
    ],
    repoUrl: "https://github.com/roohankhan8/Logbook",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    summary: "Roohan's strongest lane: Laravel applications, APIs, data models, and integration-heavy product logic.",
    items: ["PHP", "Laravel", "REST APIs", "Authentication", "Payment Integrations", "MySQL", "PostgreSQL"],
  },
  {
    title: "Frontend",
    summary: "Used where product delivery needs it, with emphasis on practical interfaces over visual excess.",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Mobile",
    summary: "Comfortable working with API-connected application flows beyond the web stack.",
    items: ["Flutter", "Flutter APIs"],
  },
  {
    title: "Data and AI",
    summary: "Applied ML and newer AI workflow experimentation grounded in real product behavior.",
    items: ["Python", "Pandas", "Scikit-learn", "XGBoost", "LangChain", "OpenAI", "Embeddings"],
  },
  {
    title: "Tools and Workflow",
    summary: "Tooling used to ship, learn, and document work publicly.",
    items: ["Git", "GitHub", "Kaggle", "Pest"],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    title: "Public Experience Entry",
    organization: "K-Labs",
    location: "Karachi, Pakistan",
    description:
      "Public LinkedIn experience lists K-Labs in Karachi. The accessible profile view does not expose a role title or date range, so the portfolio should keep this entry concise.",
  },
  {
    title: "Engineering Education",
    organization: "NED University of Engineering and Technology",
    period: "2022 - 2026",
    description:
      "University timeline listed publicly alongside the software projects, machine learning work, and backend learning path.",
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
  {
    label: "Work GitHub",
    href: "https://github.com/roohankhan-klabs",
    note: "Public work profile currently shows 3 repositories and a lightweight project list under the K-Labs handle.",
    repositories: 3,
    stars: 4,
    followers: 1,
    following: 1,
  },
];
