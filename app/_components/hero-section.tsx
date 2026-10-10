import { siteMeta } from "../_lib/portfolio-data";

export function HeroSection() {
  return (
    <section id="home" className="section-block hero-section">
      <div className="container-shell">
        <div className="max-w-4xl space-y-7">
          <p className="eyebrow"><span /> Available for backend &amp; product roles</p>
          <div className="space-y-4">
            <h1 className="text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]">Roohan Khan <span className="text-[var(--accent)]">.</span></h1>
            <p className="text-lg font-semibold sm:text-2xl">Backend Developer &amp; Software Engineer</p>
            <p className="max-w-3xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8">I build APIs and database-backed systems for ecommerce, service platforms, admin workflows, and third-party integrations. My focus is reliable application logic, clear data models, and software that remains maintainable as product requirements grow.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#work" className="button-primary inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium">Explore Selected Work</a>
            <a href={siteMeta.resumeUrl} download className="button-secondary inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium">Download Resume</a>
            <a href={`mailto:${siteMeta.contactEmail}`} className="button-secondary inline-flex h-11 items-center justify-center rounded-lg px-5 text-sm font-medium">Contact Me</a>
          </div>
          <ul className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-[var(--text-muted)]">
            <li className="chip rounded-md px-3 py-2">Laravel / PHP</li><li className="chip rounded-md px-3 py-2">REST APIs</li><li className="chip rounded-md px-3 py-2">MySQL / PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
