"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaRegBuilding,
  FaTimes,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import type { NavItem, SocialLink } from "../_lib/portfolio-data";
import logoTransparent from "../_logos/logo-transparent.png";

type ActiveNavProps = {
  items: NavItem[];
  socials: SocialLink[];
};

const navIcons: Record<NavItem["href"], IconType> = {
  "#home": FaHome,
  "#about": FaUserAlt,
  "#work": FaBriefcase,
  "#skills": FaTools,
  "#experience": FaRegBuilding,
  "#contact": FaEnvelope,
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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/80 bg-[color:rgba(7,11,17,0.82)] backdrop-blur-xl">
      <div className="container-shell relative py-4">
        <div className="flex min-h-12 items-center justify-between gap-6">
          <a
            href="#home"
            aria-label="Go to home"
            className="relative h-11 w-28 transition-transform duration-300 ease-out hover:scale-[1.03]"
          >
            <Image
              src={logoTransparent}
              alt="Roohan Khan"
              fill
              sizes="112px"
              preload
              className="object-contain object-left"
            />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-3 lg:flex">
            {items.map((item) => {
              const isActive = item.href === activeHref;
              const Icon = navIcons[item.href] ?? FaHome;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group flex h-11 items-center overflow-hidden rounded-full border px-4 transition-all duration-300 ease-out ${
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--text)] shadow-[0_0_0_1px_rgba(78,161,255,0.2)]"
                      : "border-[var(--border)] bg-[rgba(17,24,36,0.56)] text-[var(--text-secondary)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                  }`}
                >
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
                  <span
                    className={`overflow-hidden whitespace-nowrap pl-0 text-sm transition-all duration-300 ease-out ${
                      isActive
                        ? "max-w-32 pl-3 opacity-100"
                        : "max-w-0 opacity-0 group-hover:max-w-32 group-hover:pl-3 group-hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
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
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(17,24,36,0.75)] font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              >
                {social.icon === "linkedin" ? <FaLinkedinIn aria-hidden="true" /> : <FaGithub aria-hidden="true" />}
              </a>
            ))}
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(17,24,36,0.72)] text-base text-[var(--text-secondary)] transition-all duration-300 ease-out hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)] lg:hidden"
          >
            {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
        <div
          id="mobile-nav"
          className={`absolute inset-x-0 top-full z-50 mt-3 transition-all duration-300 ease-out lg:hidden ${
            isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="surface-panel rounded-[1.5rem] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {items.map((item) => {
                const isActive = item.href === activeHref;
                const Icon = navIcons[item.href] ?? FaHome;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-300 ease-out ${
                      isActive
                        ? "bg-[var(--accent-soft)] text-[var(--text)]"
                        : "text-[var(--text-secondary)] hover:bg-[rgba(17,24,36,0.72)] hover:text-[var(--text)]"
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
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
        </div>
      </div>
    </header>
  );
}
