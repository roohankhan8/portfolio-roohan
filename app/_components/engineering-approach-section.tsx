import { engineeringApproach } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function EngineeringApproachSection() {
  return (
    <section className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="How I approach backend work when the goal is reliable software delivery."
          description="Organizations usually need more than code that works once. This outlines the habits behind building systems that stay understandable, extensible, and dependable as product demands grow."
        />
        <div className="grid gap-4 lg:grid-cols-5">
          {engineeringApproach.map((step, index) => (
            <article
              key={step.title}
              className="surface-panel rounded-[1.5rem] p-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
