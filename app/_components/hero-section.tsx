import { siteMeta } from "../_lib/portfolio-data";

const heroStack = ["Laravel / PHP", "REST APIs", "MySQL / PostgreSQL"];

export function HeroSection() {
  return (
    <section id="home" className="section-block pt-16 sm:pt-24">
      <div className="container-shell flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Available for backend &amp; product roles
            </p>
            <div className="space-y-4">
              <h1 className="text-[clamp(3rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                Roohan Khan
              </h1>
              <p className="text-xl font-medium text-[var(--text)] sm:text-2xl">
                Backend Developer &amp; Software Engineer
              </p>
              <p className="text-lg leading-8 text-[var(--text-secondary)]">
                I build APIs and database-backed systems for ecommerce, service platforms, admin workflows, and third-party integrations. My focus is reliable application logic, clear data models, and software that remains maintainable as product requirements grow.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#work"
              className="button-primary inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              Explore Selected Work
            </a>
            <a
              href={siteMeta.resumeUrl}
              download
              className="button-secondary inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              Download Resume
            </a>
            <a
              href={`mailto:${siteMeta.contactEmail}`}
              className="button-secondary inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
          <ul className="flex flex-wrap justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
            {heroStack.map((item) => (
              <li key={item} className="chip rounded-md px-3 py-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
