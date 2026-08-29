import { skillGroups } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="[ 04 ] TECHNICAL STACK"
          title="Capabilities grouped by how they are used in real product work."
          description="The stack is organized around product responsibilities rather than a wall of logos."
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
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-colors group-open:text-[var(--text)]">
                    Open
                  </span>
                </div>
              </summary>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="chip rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em]"
                  >
                    {item}
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
