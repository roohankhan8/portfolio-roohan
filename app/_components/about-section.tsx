import { SectionHeading } from "./section-heading";

const metrics = [
  ["100%", "Production-minded"],
  ["64+", "Reusable lessons"],
  ["5+", "Systems & roles"],
];

export function AboutSection() {
  return (
    <section id="about" className="section-block section-muted">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading title="Backend engineering shaped by product needs, data, and real operational workflows." />
        <div>
          <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            I’m a backend developer based in Karachi, currently working with PHP and Laravel at K-Labs. My experience includes rebuilding a production Laravel portal and developing ecommerce, booking, payment, admin, and AI-assisted workflows. I’m especially interested in systems where backend architecture, financial logic, and data intersect.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-3">
            {metrics.map(([value, label]) => (
              <div key={label} className="stat-card rounded-2xl border border-[var(--border)] p-4">
                <dd className="text-2xl font-semibold text-[var(--accent)]">{value}</dd>
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
