import { projects } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="work" className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="[ 03 ] FEATURED WORK"
          title="Selected projects that reflect backend thinking and product delivery."
          description="A focused selection of public work across Laravel applications, full-stack products, and applied machine learning."
        />
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              id={project.slug}
              className="surface-panel rounded-[1.75rem] p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)]">
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.period ? (
                      <span className="chip rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em]">
                        {project.period}
                      </span>
                    ) : null}
                    {project.role ? (
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                        {project.role}
                      </span>
                    ) : null}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
                      {project.summary}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      Problem
                    </p>
                    <p className="text-sm leading-7 text-[var(--text)]">
                      {project.problem}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="chip rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[1.5rem] border border-[var(--border)] bg-[rgba(7,11,17,0.65)] p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                      Case Study
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`#${project.slug}`}
                      className="button-secondary inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-medium"
                    >
                      View Case Study
                    </a>
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button-ghost inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-medium"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="button-ghost inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
