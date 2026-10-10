import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { NavItem, SocialLink } from "../_lib/portfolio-data";

export function ReferenceHeader({ items, socials }: { items: NavItem[]; socials: SocialLink[] }) {
  return <>
    <header className="site-header"><div className="container-shell header-inner"><a className="brand" href="#home"><strong>Roohan Khan</strong><span>Backend &amp; Systems Engineer</span></a><nav aria-label="Primary">{items.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="header-socials">{socials.filter((social) => social.label !== "Work GitHub").map((social) => <a key={social.href} aria-label={social.label} href={social.href} target="_blank" rel="noreferrer">{social.icon === "linkedin" ? <FaLinkedinIn /> : <FaGithub />}</a>)}</div></div></header>
    <nav className="mobile-dock" aria-label="Mobile primary">{items.filter((item) => item.href !== "#about" && item.href !== "#exploration").map((item) => <a key={item.href} href={item.href}><span>{item.label.slice(0, 1)}</span>{item.label}</a>)}</nav>
  </>;
}
