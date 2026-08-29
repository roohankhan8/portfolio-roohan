import { experienceItems } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="Experience that maps directly to backend ownership and team contribution."
          description="For recruiters, clients, and engineering leads, this section highlights the roles and responsibilities most relevant to API development, admin systems, data workflows, and production support."
        />
        <div className="grid gap-4">
          {experienceItems.map((item) => (
            <article
              key={`${item.organization}-${item.title}`}
              className="surface-panel rounded-[1.5rem] p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--text)]">
                    {item.organization}
                  </h3>
                  <p className="text-sm font-medium text-[var(--text)]">
                    {item.title}
                  </p>
                </div>
                <div className="space-y-2 text-sm text-[var(--text-secondary)] md:text-right">
                  {item.period ? <p>{item.period}</p> : null}
                  {item.location ? <p>{item.location}</p> : null}
                </div>
              </div>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
