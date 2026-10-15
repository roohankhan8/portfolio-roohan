import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLayerGroup,
  FaLinkedinIn,
  FaProjectDiagram,
  FaRegBuilding,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import type { NavItem, SocialLink } from "../_lib/portfolio-data";

const mobileIcons: Record<string, IconType> = {
  "#home": FaHome,
  "#work": FaBriefcase,
  "#skills": FaLayerGroup,
  "#process": FaProjectDiagram,
  "#experience": FaRegBuilding,
  "#contact": FaEnvelope,
};

export function ReferenceHeader({
  items,
  socials,
}: {
  items: NavItem[];
  socials: SocialLink[];
}) {
  return (
    <>
      <header className="site-header">
        <div className="container-shell header-inner">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">RK</span>
            <span className="brand-copy">
              <strong>Roohan Khan</strong>
              <span>Backend &amp; Systems Engineer</span>
            </span>
          </a>
          <nav aria-label="Primary">
            {items.map((item) => (
              <a key={item.href} href={item.href} className={item.href in mobileIcons ? undefined : "nav-optional"}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-socials">
            {socials
              .filter((social) => social.label !== "Work GitHub")
              .map((social) => (
                <a
                  key={social.href}
                  aria-label={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon === "linkedin" ? <FaLinkedinIn /> : <FaGithub />}
                </a>
              ))}
          </div>
        </div>
      </header>
      <nav className="mobile-dock" aria-label="Mobile primary">
        {items
          .filter((item) => item.href in mobileIcons)
          .map((item) => {
            const Icon = mobileIcons[item.href];
            return (
              <a key={item.href} href={item.href}>
                <Icon aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
      </nav>
    </>
  );
}
