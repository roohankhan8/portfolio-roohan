# Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the default Next.js starter with a polished single-page portfolio that presents Roohan Khan as a backend-focused software engineer through a cohesive dark technical design system and factual, reusable content structures.

**Architecture:** Build the portfolio as a server-rendered App Router page composed from focused section components and typed content data. Express the design system through CSS variables in `app/globals.css`, keep interactivity isolated to small client components for active navigation and any expandable skills UI, and use reusable primitives to avoid section-by-section styling drift.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, `next/font` with Geist and Geist Mono

**Spec:** `plan.md`, `design-system.md`

## Global Constraints

- Framework: Next.js `16.3.3`
- Router: App Router (`app/`)
- Styling: Tailwind CSS `v4` via `app/globals.css`
- Fonts already available: `Geist` and `Geist Mono`
- Existing dependencies are minimal; do not add packages unless there is clear implementation value
- Use server components by default
- Add client components only where interaction requires them
- Keep the site as a single-page experience unless project case-study routing becomes necessary
- Reuse shared data structures for projects, skills, experience, and social links
- Avoid unnecessary dependencies
- Respect reduced-motion preferences
- Maintain semantic HTML and accessible focus states
- Ensure mobile-first responsiveness
- Do not invent project facts
- Do not invent experience details
- Do not invent GitHub statistics
- Do not add placeholder lorem ipsum
- If a section lacks enough verified content, design for brevity rather than filler

---

### Task 1: Replace Starter Content With Typed Portfolio Data And Page Composition

**Files:**
- Create: `app/_lib/portfolio-data.ts`
- Create: `app/_components/section-heading.tsx`
- Create: `app/_components/page-shell.tsx`
- Modify: `app/page.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: none
- Produces: `siteMeta`, `navItems`, `focusAreas`, `projects`, `skillGroups`, `experienceItems`, `explorationAreas`, `socialLinks` from `app/_lib/portfolio-data.ts`; `SectionHeading(props: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; })`; `PageShell(props: { children: React.ReactNode; })`

- [ ] **Step 1: Write the failing integration state**

Replace `app/page.tsx` imports with the future composition shape so the build fails until the data module and shell exist.

```tsx
import {
  focusAreas,
  projects,
  skillGroups,
  experienceItems,
  explorationAreas,
  socialLinks,
} from "./_lib/portfolio-data";
import { PageShell } from "./_components/page-shell";

export default function Home() {
  return <PageShell>{projects.length}</PageShell>;
}
```

- [ ] **Step 2: Run build to verify it fails**

Run: `npm run build`
Expected: FAIL with module resolution errors for `./_lib/portfolio-data` and `./_components/page-shell`

- [ ] **Step 3: Write the minimal typed data layer and page shell**

Create a focused content module and shell component.

```ts
export type NavItem = { label: string; href: `#${string}` };
export type SocialLink = { label: string; href: string; shortLabel: string };
export type FocusArea = { label: string; description: string };
export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  stack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
```

```tsx
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="min-h-screen">{children}</main>;
}
```

```tsx
import { PageShell } from "./_components/page-shell";
import { projects } from "./_lib/portfolio-data";

export default function Home() {
  return <PageShell>{projects.length}</PageShell>;
}
```

- [ ] **Step 4: Run build to verify it passes**

Run: `npm run build`
Expected: PASS with the new data module and shell resolving successfully

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/_lib/portfolio-data.ts app/_components/page-shell.tsx app/_components/section-heading.tsx
git commit -m "feat: scaffold portfolio data and page shell"
```

### Task 2: Establish The Global Design System And Metadata

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `siteMeta` from `app/_lib/portfolio-data.ts`
- Produces: global CSS tokens for colors, spacing, type rhythm, buttons, cards, and section layout; `metadata: Metadata` for portfolio title, description, OG basics, and social metadata

- [ ] **Step 1: Write the failing metadata and styling state**

Update `app/layout.tsx` to reference the future portfolio metadata and apply body classes that depend on new CSS tokens.

```tsx
import { siteMeta } from "./_lib/portfolio-data";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
};

<body className="min-h-full bg-[var(--bg)] text-[var(--text)] font-sans">
  {children}
</body>
```

- [ ] **Step 2: Run build to verify it fails or remains incomplete**

Run: `npm run build`
Expected: FAIL if `siteMeta` is missing, or PASS with an obviously incomplete UI if CSS tokens are not yet defined

- [ ] **Step 3: Implement the portfolio metadata and design tokens**

Add `siteMeta` to the data file, replace the starter CSS, and wire layout metadata to the portfolio brief.

```ts
export const siteMeta = {
  title: "Roohan Khan | Backend Developer & Software Engineer",
  description:
    "Backend-focused software engineer building APIs, integrations, ecommerce systems, and complete digital products.",
  url: "https://example.com",
};
```

```css
@import "tailwindcss";

:root {
  --bg: #070b11;
  --bg-elevated: #0d121a;
  --surface: #111824;
  --surface-strong: #16202d;
  --border: #233044;
  --border-strong: #31435f;
  --text: #f3f7fb;
  --text-secondary: #a6b4c8;
  --text-muted: #6f8098;
  --accent: #4ea1ff;
  --accent-hover: #78b8ff;
  --accent-soft: rgba(78, 161, 255, 0.12);
}
```

```tsx
export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: siteMeta.title,
  description: siteMeta.description,
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
  },
};
```

- [ ] **Step 4: Run build to verify it passes**

Run: `npm run build`
Expected: PASS with no metadata type errors and no CSS import issues

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/globals.css app/_lib/portfolio-data.ts
git commit -m "feat: add portfolio metadata and design tokens"
```

### Task 3: Build Navigation, Hero, About, Focus, And Contact Foundations

**Files:**
- Create: `app/_components/site-header.tsx`
- Create: `app/_components/hero-section.tsx`
- Create: `app/_components/focus-strip.tsx`
- Create: `app/_components/about-section.tsx`
- Create: `app/_components/contact-section.tsx`
- Modify: `app/page.tsx`
- Test: `npm run build`

**Interfaces:**
- Consumes: `navItems`, `focusAreas`, `socialLinks`, `siteMeta` from `app/_lib/portfolio-data.ts`; `SectionHeading`
- Produces: `SiteHeader(props: { items: NavItem[]; socials: SocialLink[]; })`; `HeroSection()`; `FocusStrip()`; `AboutSection()`; `ContactSection()`

- [ ] **Step 1: Write the failing composition state**

Change `app/page.tsx` to render the future section components before creating them.

```tsx
import { AboutSection } from "./_components/about-section";
import { ContactSection } from "./_components/contact-section";
import { FocusStrip } from "./_components/focus-strip";
import { HeroSection } from "./_components/hero-section";
import { SiteHeader } from "./_components/site-header";
import { navItems, socialLinks } from "./_lib/portfolio-data";

export default function Home() {
  return (
    <PageShell>
      <SiteHeader items={navItems} socials={socialLinks} />
      <HeroSection />
      <FocusStrip />
      <AboutSection />
      <ContactSection />
    </PageShell>
  );
}
```

- [ ] **Step 2: Run build to verify it fails**

Run: `npm run build`
Expected: FAIL with missing module errors for the new section components

- [ ] **Step 3: Implement the top-level portfolio foundation sections**

Create the header, hero, focus strip, about, and contact sections with semantic section IDs and builder-approved copy.

```tsx
export function SiteHeader({
  items,
  socials,
}: {
  items: NavItem[];
  socials: SocialLink[];
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[color:rgba(7,11,17,0.82)] backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-mono text-sm uppercase tracking-[0.24em]">
          RK
        </a>
      </nav>
    </header>
  );
}
```

```tsx
export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-5 py-24 sm:px-6 lg:px-10">
      <h1 className="max-w-4xl text-[clamp(3rem,7vw,5rem)] font-semibold leading-none tracking-tight">
        Roohan Khan
      </h1>
    </section>
  );
}
```

```tsx
export function ContactSection() {
  return (
    <section id="contact">
      <SectionHeading
        eyebrow="[ 06 ] CONTACT"
        title="Let's build something useful."
        description="For collaborations, product work, and backend-focused development opportunities."
      />
    </section>
  );
}
```

- [ ] **Step 4: Run build to verify it passes**

Run: `npm run build`
Expected: PASS with semantic sections rendering and no import/type errors

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/_components/site-header.tsx app/_components/hero-section.tsx app/_components/focus-strip.tsx app/_components/about-section.tsx app/_components/contact-section.tsx
git commit -m "feat: add portfolio foundation sections"
```

### Task 4: Build Work, Skills, Experience, Exploration, Footer, And Assemble The Full Page

**Files:**
- Create: `app/_components/projects-section.tsx`
- Create: `app/_components/skills-section.tsx`
- Create: `app/_components/engineering-approach-section.tsx`
- Create: `app/_components/experience-section.tsx`
- Create: `app/_components/exploration-section.tsx`
- Create: `app/_components/github-section.tsx`
- Create: `app/_components/site-footer.tsx`
- Modify: `app/page.tsx`
- Modify: `app/_lib/portfolio-data.ts`
- Test: `npm run build`

**Interfaces:**
- Consumes: `projects`, `skillGroups`, `experienceItems`, `explorationAreas`, `socialLinks`, and any GitHub summary data from `app/_lib/portfolio-data.ts`; `SectionHeading`
- Produces: `ProjectsSection()`; `SkillsSection()`; `EngineeringApproachSection()`; `ExperienceSection()`; `ExplorationSection()`; `GitHubSection()`; `SiteFooter()`

- [ ] **Step 1: Write the failing full-page composition state**

Expand `app/page.tsx` to import and render every remaining section before creating them.

```tsx
import { EngineeringApproachSection } from "./_components/engineering-approach-section";
import { ExperienceSection } from "./_components/experience-section";
import { ExplorationSection } from "./_components/exploration-section";
import { GitHubSection } from "./_components/github-section";
import { ProjectsSection } from "./_components/projects-section";
import { SiteFooter } from "./_components/site-footer";
import { SkillsSection } from "./_components/skills-section";
```

```tsx
<ProjectsSection />
<SkillsSection />
<EngineeringApproachSection />
<ExperienceSection />
<ExplorationSection />
<GitHubSection />
<ContactSection />
<SiteFooter />
```

- [ ] **Step 2: Run build to verify it fails**

Run: `npm run build`
Expected: FAIL with missing module errors for the remaining section components

- [ ] **Step 3: Implement the remaining factual sections**

Create the work, skills, engineering approach, experience, exploration, GitHub, and footer components using the shared content module and restrained card patterns.

```tsx
export function ProjectsSection() {
  return (
    <section id="work" className="px-5 py-20 sm:px-6 lg:px-10">
      <SectionHeading
        eyebrow="[ 03 ] FEATURED WORK"
        title="Selected projects"
        description="Applications, systems, and technical work that best represent backend thinking and product delivery."
      />
    </section>
  );
}
```

```ts
export const explorationAreas = [
  "NestJS",
  "System design",
  "Advanced Laravel architecture",
  "AI-enabled applications",
];
```

```tsx
export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-8 text-sm text-[var(--text-secondary)]">
      <p>Roohan Khan · Backend Developer & Software Engineer</p>
    </footer>
  );
}
```

- [ ] **Step 4: Run build to verify it passes**

Run: `npm run build`
Expected: PASS with the full page rendered through reusable sections and typed data

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx app/_lib/portfolio-data.ts app/_components/projects-section.tsx app/_components/skills-section.tsx app/_components/engineering-approach-section.tsx app/_components/experience-section.tsx app/_components/exploration-section.tsx app/_components/github-section.tsx app/_components/site-footer.tsx
git commit -m "feat: assemble portfolio content sections"
```

### Task 5: Add Required Interactivity, Responsive Polish, And Final Verification

**Files:**
- Create: `app/_components/active-nav.tsx`
- Modify: `app/_components/site-header.tsx`
- Modify: `app/_components/skills-section.tsx`
- Modify: `app/globals.css`
- Test: `npm run build`

**Interfaces:**
- Consumes: `navItems` and any skill-group content
- Produces: `ActiveNav(props: { items: NavItem[]; })` as a client component for active-section tracking and mobile navigation; optional expandable skill-group interaction if needed

- [ ] **Step 1: Write the failing interactive state**

Refactor `site-header.tsx` to import a future client component that handles active states and mobile behavior.

```tsx
import { ActiveNav } from "./active-nav";

export function SiteHeader({
  items,
  socials,
}: {
  items: NavItem[];
  socials: SocialLink[];
}) {
  return <ActiveNav items={items} />;
}
```

- [ ] **Step 2: Run build to verify it fails**

Run: `npm run build`
Expected: FAIL with a missing module error for `./active-nav`

- [ ] **Step 3: Implement the minimal client-side interactions and polish**

Create a small client component for active-section tracking and mobile menu behavior, and refine any global utilities needed for motion, focus, and responsive spacing.

```tsx
"use client";

import { useEffect, useState } from "react";

export function ActiveNav({ items }: { items: NavItem[] }) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#home");
  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    const observer = new IntersectionObserver(() => {}, {
      rootMargin: "-40% 0px -45% 0px",
      threshold: [0.2, 0.5, 0.8],
    });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);
  return <nav aria-label="Primary">{items.map((item) => item.label).join(" ")}</nav>;
}
```

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    scroll-behavior: auto !important;
    transition-duration: 0ms !important;
  }
}
```

- [ ] **Step 4: Run final verification**

Run: `npm run build`
Expected: PASS with the final page compiling successfully and client/server boundaries correctly isolated

Run: `npm run lint`
Expected: PASS with no ESLint errors

- [ ] **Step 5: Commit**

```bash
git add app/_components/active-nav.tsx app/_components/site-header.tsx app/_components/skills-section.tsx app/globals.css
git commit -m "feat: add portfolio navigation polish and final responsiveness"
```

## Self-Review

### Spec coverage

- `plan.md` section order is covered by Tasks 3 through 5
- `plan.md` reusable data and single-page constraints are covered by Tasks 1 and 4
- `plan.md` metadata and semantic structure are covered by Task 2
- `design-system.md` tokens, spacing, typography, colors, borders, and motion are covered by Tasks 2 and 5
- `design-system.md` navigation, project card, and accessibility requirements are covered by Tasks 3 through 5

No uncovered spec requirements remain at the planning level.

### Placeholder scan

- No `TODO`, `TBD`, or “implement later” placeholders remain
- Every task names concrete files and commands
- Every code-writing step includes concrete code snippets

### Type consistency

- Shared data exports are defined in Task 1 and consumed consistently in later tasks
- Reusable components introduced in earlier tasks keep the same names in later composition steps
- Client-only navigation behavior is isolated to `ActiveNav` and consumed by `SiteHeader`
