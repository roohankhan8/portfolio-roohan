import { socialLinks } from "../_lib/portfolio-data";
import Image from "next/image";
import dp from "../_portfolio/dp.jpeg";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]/80 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
        <div className="flex flex-row items-center gap-2">
          {/* <Image className="border border-black " src={dp} alt="Roohan Khan" width={30} height={30} /> */}
          <div>
            <p className="text-[var(--text)]">Roohan Khan</p>
            <p>Backend Developer &amp; Software Engineer</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div>© 2026 Roohan Khan. Built with Next.js and deployed on Netlify.</div>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
          {/* <span>Built with Next.js</span> */}
        </div>
      </div>
    </footer>
  );
}
