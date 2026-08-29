import { explorationAreas } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";
import { TechBadge } from "./tech-badge";

export function ExplorationSection() {
  return (
    <section className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="Areas I am actively deepening to stay useful in stronger engineering teams."
          description="This is where my current learning effort is going: deeper architecture, better system boundaries, and more capable AI-enabled application design."
        />
        <div className="surface-panel rounded-[1.75rem] p-6 sm:p-8">
          <ul className="flex flex-wrap gap-3">
            {explorationAreas.map((item) => (
              <li key={item}>
                <TechBadge item={item} size="md" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
