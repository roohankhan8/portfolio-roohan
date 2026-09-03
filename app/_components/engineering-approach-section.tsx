import { engineeringApproach } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function EngineeringApproachSection() {
  return (
    <section className="section-block">
      <div className="container-shell space-y-10">
        <SectionHeading
          title="How I turn product requirements into maintainable backend workflows."
          description="I start with actors, states, and failure cases; model the data around those rules; then design API and integration boundaries that remain understandable as the product changes."
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
