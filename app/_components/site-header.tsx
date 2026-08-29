import type { NavItem, SocialLink } from "../_lib/portfolio-data";
import { ActiveNav } from "./active-nav";

type SiteHeaderProps = {
  items: NavItem[];
  socials: SocialLink[];
};

export function SiteHeader({ items, socials }: SiteHeaderProps) {
  return <ActiveNav items={items} socials={socials} />;
}
