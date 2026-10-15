import Image from "next/image";
import { projects } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { TechBadge } from "./tech-badge";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="work" className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="Selected backend work: the problems, decisions, and systems behind the product."
          description="These projects highlight my responsibilities across application logic, data modeling, APIs, authorization, integrations, and production workflows. Confidential client work is described without product names, links, screenshots, or proprietary details."
        />
        <div className="grid gap-5">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              id={project.slug}
              className="surface-panel rounded-[1.75rem] p-6 sm:p-8"
            >
              <div
                className={`grid gap-8 lg:items-center ${project.screenshots?.length
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
                      My contribution
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
                    <div className="grid grid-cols-2 gap-3">
                      {project.screenshots.map((shot) => {
                        const href = shot.url ?? project.demoUrl;
                        // Phone captures (narrower than 3:5) get a phone frame; anything wider is a desktop page and gets a browser window.
                        const isPhone = shot.src.width / shot.src.height < 0.6;
                        const figure = (
                          <figure
                            className={`w-full ${!isPhone ? "col-span-2" : project.screenshots!.length % 2 === 1 && project.screenshots!.at(-1) === shot ? "col-span-2 mx-auto max-w-[17rem]" : ""}`}
                          >
                            {isPhone ? (
                              <div className="project-shot-frame rounded-[2rem] border border-[var(--border-strong)] p-2">
                                <div className="project-shot-inner relative aspect-[9/19.5] overflow-hidden rounded-[1.1rem]">
                                  <Image
                                    src={shot.src}
                                    alt={shot.alt}
                                    fill
                                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 272px"
                                    className="object-cover object-top"
                                  />
                                </div>
                              </div>
                            ) : (
                              <div className="project-shot-frame overflow-hidden rounded-xl border border-[var(--border-strong)]">
                                <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-[var(--border)] px-3 py-2">
                                  <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
                                  <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
                                  <span className="h-2 w-2 rounded-full bg-[var(--border-strong)]" />
                                  <span className="ml-2 h-4 flex-1 rounded-md bg-[var(--surface-strong)]" />
                                </div>
                                {/* Tall pages clip at the bottom like a real viewport instead of being squeezed or cropped on the sides. */}
                                <div className="project-shot-inner max-h-[22rem] overflow-hidden">
                                  <Image
                                    src={shot.src}
                                    alt={shot.alt}
                                    sizes="(max-width: 1024px) 90vw, 560px"
                                    className="h-auto w-full"
                                  />
                                </div>
                              </div>
                            )}
                            {shot.label ? (
                              <figcaption className="mt-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                                {shot.label}
                              </figcaption>
                            ) : null}
                          </figure>
                        );
                        const key = `${project.slug}-${shot.alt}`;

                        return href ? (
                          <Link href={href} key={key} target="_blank" rel="noreferrer" className="group">
                            {figure}
                          </Link>
                        ) : (
                          <div key={key}>{figure}</div>
                        );
                      })}
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
