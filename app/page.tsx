import { PageShell } from "./_components/page-shell";
import { AboutSection } from "./_components/about-section";
import { HeroSection } from "./_components/hero-section";
import { ReferenceHeader } from "./_components/reference-header";
import { ReferenceContactSection, ReferenceExperienceSection, ReferenceExplorationSection, ReferenceFooter, ReferenceProcessSection, ReferenceProjectsSection, ReferenceSkillsSection } from "./_components/reference-sections";
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
      <ReferenceHeader items={navItems} socials={socialLinks} />
      <HeroSection />
      <AboutSection />
      <ReferenceProjectsSection />
      <ReferenceSkillsSection />
      <ReferenceProcessSection />
      <ReferenceExperienceSection />
      <ReferenceExplorationSection />
      <ReferenceContactSection />
      <ReferenceFooter />
    </PageShell>
  );
}
