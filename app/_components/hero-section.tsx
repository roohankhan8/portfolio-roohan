import { socialLinks } from "../_lib/portfolio-data";
import { Hero3DScene } from "./hero-3d-scene";
import { TechBadge } from "./tech-badge";

const highlightedStack = [
  "PHP",
  "Laravel",
  "REST APIs",
  "Blade Templating",
  "MySQL",
  "AI Workflows",
];

export function HeroSection() {
  return (
    <section id="home" className="section-block pt-16 sm:pt-24">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)]">
        <div className="space-y-8">
          <div className="space-y-5">
            {/* <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              [ 01 ] BACKEND ENGINEERING
            </p> */}
            <div className="space-y-4">
              <h1 className="max-w-5xl text-[clamp(3rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                Roohan Khan
              </h1>
              <p className="max-w-3xl text-xl font-medium text-[var(--text)] sm:text-2xl">
                Backend Developer &amp; Software Engineer
              </p>
              <p className="max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                I build APIs, backend systems, integrations, and complete
                digital products with a strong focus on Laravel, scalable web
                applications, ecommerce workflows, and data-driven software.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="button-primary inline-flex h-13 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              View My Work
            </a>
            {socialLinks.slice(0, 2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="button-secondary inline-flex h-13 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ul className="flex flex-wrap gap-3">
            {highlightedStack.map((item) => (
              <li key={item}>
                <TechBadge item={item} size="md" />
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <Hero3DScene />
          <div className="hero-scene-caption surface-panel rounded-[1.5rem] p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                  Interactive Look
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                  A lightweight 3D scene adds motion and depth without pulling
                  the whole portfolio into a heavy WebGL stack.
                </p>
              </div>
              <span className="hero-status-pill">Live</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
