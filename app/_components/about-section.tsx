import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-block section-muted">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading eyebrow="Core philosophy" title="Backend engineering shaped by product needs, data, and real operational workflows." />
        <div>
          <p className="text-base leading-8 text-[var(--text-secondary)]">I’m a backend developer based in Karachi, currently working with PHP and Laravel at K-Labs. My experience includes rebuilding a production Laravel portal and developing ecommerce, booking, payment, admin, and AI-assisted workflows. I’m especially interested in systems where backend architecture, financial logic, and data intersect.</p>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {[["100%", "Production-minded"], ["64+", "Reusable lessons"], ["5+", "Systems & roles"]].map(([value, label]) => <div key={label} className="metric-card"><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
