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
import { navItems, socialLinks } from "./_lib/portfolio-data";

export default function Home() {
  return (
    <PageShell>
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
