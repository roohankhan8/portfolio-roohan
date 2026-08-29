import { skillGroups } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { TechBadge } from "./tech-badge";

export function SkillsSection() {
  return (
    <section id="skills" className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="Capabilities organized around delivery, architecture, and product responsibility."
          description="Instead of listing tools without context, this section shows the technologies and practices I use in the kinds of systems teams actually need shipped and maintained."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <details
              key={group.title}
              open={index === 0}
              className="surface-panel group rounded-[1.5rem] p-6"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      {group.title}
                    </p>
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                      {group.summary}
                    </p>
                  </div>
                  {/* <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors group-open:text-[var(--text)]">
                    Open
                  </span> */}
                </div>
              </summary>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechBadge item={item} />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
