import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-block">
      <div className="container-shell gap-10 flex flex-col items-center">
        <SectionHeading
          title="Backend engineering shaped by product needs, data, and real operational workflows."
          description="I’m a backend developer based in Karachi, currently working with PHP and Laravel at K-Labs. My experience includes rebuilding a production Laravel portal and developing ecommerce, booking, payment, admin, and AI-assisted workflows. I’m especially interested in systems where backend architecture, financial logic, and data intersect."
          // subtext="I enjoy turning ambiguous requirements into explicit business rules, predictable data models, and APIs that frontend and mobile teams can depend on. I’m currently deepening my knowledge of system design, testing, queues, observability, and AI-enabled application architecture."
          align="center"
          align_description="center"
        />
      </div>
    </section>
  );
}
