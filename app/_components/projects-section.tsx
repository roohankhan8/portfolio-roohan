import Image from "next/image";
import { projects } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { TechBadge } from "./tech-badge";

export function ProjectsSection() {
  return (
    <section id="work" className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="Projects that show how I turn requirements into working software."
          description="This is a focused selection of backend-heavy builds, product systems, and implementation work that an organization can evaluate for execution, ownership, and technical range."
        />
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              id={project.slug}
              className="surface-panel rounded-[1.75rem] p-6 sm:p-8"
            >
              <div
                className={`grid gap-8 ${
                  project.screenshots?.length
                    ? "lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)]"
                    : "lg:grid-cols-[minmax(0,1fr)]"
                }`}
              >
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
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item}>
                        <TechBadge item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
                {project.screenshots?.length ? (
                  <div className="space-y-4">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                      Product View
                    </p>
                    <div className="grid grid-cols-2">
                      {project.screenshots.map((shot) => (
                        <figure
                          key={`${project.slug}-${shot.alt}`}
                          className={`w-full ${project.screenshots!.length % 2 === 1 && project.screenshots!.at(-1) === shot ? "col-span-2 mx-auto max-w-[17rem]" : ""}`}
                        >
                          <div className="rounded-[2rem] border border-[var(--border-strong)] bg-[rgba(7,11,17,0.78)] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.34)]">
                            {/* <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(17,24,36,0.92)] p-2"> */}
                              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.1rem] bg-[rgba(7,11,17,0.92)]">
                                <Image
                                  src={shot.src}
                                  alt={shot.alt}
                                  fill
                                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 272px"
                                  className="object-cover object-top"
                                />
                              </div>
                            {/* </div> */}
                          </div>
                          {shot.label ? (
                            <figcaption className="mt-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                              {shot.label}
                            </figcaption>
                          ) : null}
                        </figure>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
