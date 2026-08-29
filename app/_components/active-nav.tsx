"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { NavItem, SocialLink } from "../_lib/portfolio-data";

type ActiveNavProps = {
  items: NavItem[];
  socials: SocialLink[];
};

export function ActiveNav({ items, socials }: ActiveNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "#home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/80 bg-[var(--surface-translucent)] backdrop-blur-xl">
      <div className="container-shell py-4">
        <div className="flex min-h-12 items-center justify-between gap-6">
          <a
            href="#home"
            className="font-mono text-sm uppercase tracking-[0.3em] text-[var(--text)]"
          >
            RK
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {items.map((item) => {
              const isActive = item.href === activeHref;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[var(--text)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              >
                {social.icon === "linkedin" ? <FaLinkedinIn aria-hidden="true" /> : <FaGithub aria-hidden="true" />}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-[var(--border)] px-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)] lg:hidden"
          >
            Menu
          </button>
        </div>
        {isOpen ? (
          <div
            id="mobile-nav"
            className="surface-panel mt-4 rounded-[1.5rem] p-4 lg:hidden"
          >
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {items.map((item) => {
                const isActive = item.href === activeHref;

                return (
                  <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-[var(--accent-soft)] text-[var(--text)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            <div className="mt-4 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-medium"
                >
                  {social.icon === "linkedin" ? <FaLinkedinIn aria-hidden="true" /> : <FaGithub aria-hidden="true" />}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
