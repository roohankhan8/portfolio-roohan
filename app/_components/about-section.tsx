import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
        <SectionHeading
          eyebrow="[ 02 ] ABOUT"
          title="Backend-first, product-aware, and expanding into deeper system design."
          description="Roohan's public work shows a developer who started with web development, shipped full-stack applications when needed, and kept leaning further into backend structure, APIs, data, and maintainable product workflows."
        />
        <div className="surface-panel rounded-[1.5rem] p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Focus
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Strongest publicly visible work centers on Laravel, PHP,
                REST-style application flows, payment logic, and products that
                need structured persistence instead of shallow UI-only demos.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                Current direction
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                The learning path visible across GitHub and LinkedIn keeps
                moving toward modern backend architecture, AI-enabled workflows,
                cleaner boundaries, and data-centric software engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
