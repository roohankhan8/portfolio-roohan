import { engineeringApproach, experienceItems, focusAreas, projects, siteMeta, skillGroups, socialLinks } from "../_lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ReferenceProjectsSection() {
  return <section id="work" className="section-block"><div className="container-shell space-y-10">
    <SectionHeading eyebrow="Production systems / selected work" title="Selected backend work: the problems, decisions, and systems behind the product." description="Confidential client systems distilled via architectural boundaries, data models, and API logic without exposing proprietary vendor assets." />
    <div className="grid gap-4 lg:grid-cols-2">{projects.map((project, index) => <article key={project.slug} className="project-card">
      <div className="flex flex-wrap items-center justify-between gap-2"><p className="eyebrow-label">{String(index + 1).padStart(2, "0")} / {project.role ?? "Backend project"}</p>{project.period ? <span className="status-chip">{project.period}</span> : null}</div>
      <h3>{project.title}</h3><p className="summary">{project.summary}</p>
      <div className="problem"><span>Problem</span><p>{project.problem}</p></div>
      <div><p className="eyebrow-label mb-3">Engineered workflows</p><ul className="project-points">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <ul className="tag-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>)}</div>
  </div></section>;
}

export function ReferenceSkillsSection() {
  const referenceGroups = [
    { ...skillGroups[0], title: "Backend Core" },
    { ...skillGroups[5], title: "Data Stores" },
    { ...skillGroups[1], title: "Client Systems" },
    { ...skillGroups[4], title: "Tooling & AI" },
  ];

  return <section id="skills" className="section-block section-muted"><div className="container-shell space-y-9">
    <SectionHeading eyebrow="Technical services" title="Technologies I use to build and support backend products." description="My primary stack is PHP, Laravel, relational databases, and REST APIs. I also work across frontend, mobile, CMS, data, and AI tooling when a product requires end-to-end delivery." />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{referenceGroups.map((group, index) => <article key={group.title} className="skill-card"><p className="eyebrow-label">0{index + 1}</p><h3>{group.title}</h3><p>{group.summary}</p><ul className="tag-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
  </div></section>;
}

export function ReferenceProcessSection() {
  return <section id="process" className="section-block"><div className="container-shell space-y-9"><SectionHeading eyebrow="Reliability pipeline" title="How I turn product requirements into maintainable backend workflows." description="I start with actors, states, and failure cases; model the data around those rules; then design API and integration boundaries that remain understandable as the product changes." />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{engineeringApproach.map((step, index) => <article className="process-card" key={step.title}><p>0{index + 1}</p><h3>{step.title}</h3><span>{step.description}</span></article>)}</div>
  </div></section>;
}

export function ReferenceExperienceSection() {
  return <section id="experience" className="section-block section-dark"><div className="container-shell space-y-9"><SectionHeading eyebrow="Track record" title="Professional experience building backend systems and product workflows." description="My experience spans Laravel APIs, admin platforms, legacy modernization, database-backed workflows, CMS development, and production support across commercial and academic products." />
    <div className="space-y-3">{experienceItems.map((item) => <article className="experience-card" key={`${item.organization}-${item.title}`}><div><h3>{item.organization}</h3><strong>{item.title}</strong></div><div className="experience-meta"><span>{item.period}</span><span>{item.location}</span></div><p>{item.description}</p></article>)}</div>
  </div></section>;
}

export function ReferenceExplorationSection() {
  return <section id="exploration" className="section-block section-muted"><div className="container-shell space-y-9"><SectionHeading eyebrow="Technical roadmap" title="What I’m deepening next." description="I’m currently strengthening the areas that matter most for larger backend systems." />
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{focusAreas.slice(0, 6).map((area) => <article className="next-card" key={area.label}><h3>{area.label}</h3><p>{area.description}</p></article>)}</div>
  </div></section>;
}

export function ReferenceContactSection() {
  return <section id="contact" className="section-block"><div className="container-shell"><div className="contact-panel"><div><p className="eyebrow-label">Let’s connect</p><h2>Let’s discuss a backend role or product problem.</h2><p>I’m open to backend opportunities involving Laravel, APIs, database-backed workflows, integrations, and admin platforms.</p></div><div className="flex flex-col gap-3 sm:flex-row"><a className="button-primary" href={siteMeta.resumeUrl} download>Download Resume</a><a className="button-secondary" href={`mailto:${siteMeta.contactEmail}`}>{siteMeta.contactEmail}</a></div></div></div></section>;
}

export function ReferenceFooter() {
  return <footer><div className="container-shell footer-inner"><div><strong>Roohan Khan</strong><p>Backend Developer &amp; Software Engineer</p></div><nav>{socialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</nav><p>© 2026 Roohan Khan. All systems operational.</p></div></footer>;
}
