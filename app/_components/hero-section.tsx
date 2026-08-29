import { getTechIcon } from "../_lib/tech-icons";
import { socialLinks } from "../_lib/portfolio-data";

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
            {highlightedStack.map((item) => {
              const Icon = getTechIcon(item);

              return (
                <li key={item}>
                  <div
                    title={item}
                    aria-label={item}
                    className="group flex h-11 items-center overflow-hidden rounded-full border border-[var(--border)] bg-[rgba(17,24,36,0.56)] px-4 text-[var(--text-secondary)] transition-all duration-300 ease-out hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                  >
                    {Icon ? <Icon aria-hidden="true" className="h-4 w-4 shrink-0" /> : null}
                    <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 font-mono text-xs uppercase tracking-[0.12em] opacity-0 transition-all duration-300 ease-out group-hover:max-w-32 group-hover:pl-3 group-hover:opacity-100">
                      {item}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="surface-panel relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8">
          <div className="technical-grid absolute inset-0 opacity-20" />
           <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)]">
                SYSTEM FLOW
              </p>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-emerald-300">
                Online
              </span>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.65)] p-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
                  Request
                </p>
                <p className="mt-2 text-sm text-[var(--text)]">
                  POST /api/workflows/content-project
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.65)] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Services
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                    auth
                    <br />
                    validation
                    <br />
                    payments
                  </p>
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.65)] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                    Data
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text)]">
                    MySQL
                    <br />
                    PostgreSQL
                    <br />
                    durable state
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[rgba(7,11,17,0.65)] p-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                  Response
                </p>
                <p className="mt-2 text-sm text-[var(--text)]">
                  200 OK · product workflows connected
                </p>
              </div>
            </div>
          </div> 
        </div> */}
      </div>
    </section>
  );
}
