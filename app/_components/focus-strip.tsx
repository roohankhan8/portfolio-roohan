import { focusAreas } from "../_lib/portfolio-data";

export function FocusStrip() {
  return (
    <section aria-label="Focus areas" className="pb-4">
      <div className="container-shell">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {focusAreas.map((area) => (
            <article
              key={area.label}
              className="surface-panel rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                {area.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
