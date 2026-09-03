import { explorationAreas } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { TechBadge } from "./tech-badge";

export function ExplorationSection() {
  return (
    <section className="section-block">
      <div className="container-shell flex flex-col items-center gap-10">
        <SectionHeading
          align="center"
          title="What I’m deepening next."
          description="I’m currently strengthening the areas that matter most for larger backend systems: system design, automated testing, queues and event-driven workflows, observability, advanced Laravel architecture, and AI-enabled application patterns."
        />
        {/* <div className="surface-panel rounded-[1.75rem] p-6 sm:p-8">
          <ul className="flex flex-wrap justify-center gap-3">
            {explorationAreas.map((item) => (
              <li key={item}>
                <TechBadge item={item} size="md" showLabel />
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  );
}
