import { explorationAreas } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ExplorationSection() {
  return (
    <section className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="[ 07 ] CURRENTLY EXPLORING"
          title="Areas I am actively expanding into."
          description="The portfolio should read as focused growth: deeper backend architecture, cleaner systems, and stronger AI-enabled software workflows."
        />
        <div className="surface-panel rounded-[1.75rem] p-6 sm:p-8">
          <ul className="flex flex-wrap gap-3">
            {explorationAreas.map((item) => (
              <li
                key={item}
                className="chip rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.16em]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
