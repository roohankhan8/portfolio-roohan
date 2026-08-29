import { socialLinks } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="section-block">
      <div className="container-shell">
        <div className="surface-panel rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <SectionHeading
              eyebrow="[ 07 ] CONTACT"
              title="Let's build something useful."
              description="Open to backend-focused product work, collaboration, and conversations around APIs, integrations, and application architecture."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary inline-flex h-12 items-center justify-center rounded-xl px-5 text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
