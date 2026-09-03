import { PageShell } from "./_components/page-shell";
import { AboutSection } from "./_components/about-section";
import { ContactSection } from "./_components/contact-section";
import { EngineeringApproachSection } from "./_components/engineering-approach-section";
import { ExperienceSection } from "./_components/experience-section";
import { ExplorationSection } from "./_components/exploration-section";
import { FocusStrip } from "./_components/focus-strip";
import { GitHubSection } from "./_components/github-section";
import { HeroSection } from "./_components/hero-section";
import { ProjectsSection } from "./_components/projects-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { SkillsSection } from "./_components/skills-section";
import { navItems, projects, siteMeta, socialLinks } from "./_lib/portfolio-data";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteMeta.url}/#person`,
      name: siteMeta.name,
      url: siteMeta.url,
      jobTitle: "Associate Software Engineer — Backend",
      description: siteMeta.description,
      email: siteMeta.contactEmail,
      sameAs: [siteMeta.githubUrl, siteMeta.linkedInUrl],
      knowsAbout: ["Laravel", "PHP", "REST APIs", "Backend development", "Web application development"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteMeta.url}/#website`,
      name: `${siteMeta.name} Portfolio`,
      url: siteMeta.url,
      description: siteMeta.description,
      author: { "@id": `${siteMeta.url}/#person` },
    },
    {
      "@type": "ItemList",
      name: "Selected projects by Roohan Khan",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary,
          creator: { "@id": `${siteMeta.url}/#person` },
          ...(project.demoUrl ? { url: project.demoUrl } : {}),
          keywords: project.stack.join(", "),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader items={navItems} socials={socialLinks} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EngineeringApproachSection />
      <ExperienceSection />
      <ExplorationSection />
      <FocusStrip />
      {/* <GitHubSection /> */}
      <ContactSection />
      <SiteFooter />
    </PageShell>
  );
}
