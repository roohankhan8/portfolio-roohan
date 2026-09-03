import { siteMeta, socialLinks } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="section-block">
      <div className="container-shell">
        <div className="surface-panel rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <SectionHeading
              title="Let’s discuss a backend role or product problem."
              description="I’m open to backend opportunities involving Laravel, APIs, database-backed workflows, integrations, and admin platforms. I’m based in Karachi and available for on-site, hybrid or remote opportunities."
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col">
              <a
                href={siteMeta.resumeUrl}
                download
                className="button-primary inline-flex h-12 items-center justify-center rounded-xl px-5 text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                Download Resume
              </a>
              <a
                href={`mailto:${siteMeta.contactEmail}`}
                className="button-secondary inline-flex h-12 items-center justify-center rounded-xl px-5 text-sm font-medium transition-all hover:-translate-y-0.5"
              >
                {siteMeta.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
