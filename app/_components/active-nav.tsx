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
    <header className="sticky top-0 z-40">
      <div className="container-shell relative py-4">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-4 inset-y-2 rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] opacity-70 blur-2xl"
        />
        <div className="flex min-h-12 items-center justify-between gap-6">
          <div className="relative flex w-full items-center justify-between gap-6 rounded-[1.75rem] border border-white/12 bg-[linear-gradient(135deg,rgba(11,18,30,0.52),rgba(11,18,30,0.22))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[linear-gradient(135deg,rgba(11,18,30,0.42),rgba(11,18,30,0.16))]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
            />
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
                        ? "border-[rgba(124,184,255,0.6)] bg-[linear-gradient(135deg,rgba(78,161,255,0.28),rgba(78,161,255,0.12))] text-[var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_0_1px_rgba(78,161,255,0.14)]"
                        : "border-white/12 bg-[rgba(255,255,255,0.06)] text-[var(--text-secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-[rgba(124,184,255,0.4)] hover:bg-[linear-gradient(135deg,rgba(78,161,255,0.16),rgba(255,255,255,0.08))] hover:text-[var(--text)]"
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
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-[rgba(255,255,255,0.06)] font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out hover:border-white/20 hover:bg-[rgba(255,255,255,0.12)] hover:text-[var(--text)]"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-[rgba(255,255,255,0.08)] text-base text-[var(--text-secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out hover:border-[rgba(124,184,255,0.4)] hover:bg-[rgba(78,161,255,0.14)] hover:text-[var(--text)] lg:hidden"
            >
              {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </div>
        <div
          id="mobile-nav"
          className={`absolute inset-x-0 top-full z-50 mt-3 transition-all duration-300 ease-out lg:hidden ${
            isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="rounded-[1.5rem] border border-white/12 bg-[linear-gradient(135deg,rgba(11,18,30,0.72),rgba(11,18,30,0.42))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
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
                        ? "bg-[linear-gradient(135deg,rgba(78,161,255,0.24),rgba(78,161,255,0.1))] text-[var(--text)]"
                        : "text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--text)]"
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
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/12 bg-[rgba(255,255,255,0.06)] px-4 text-sm font-medium text-[var(--text-secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out hover:border-white/20 hover:bg-[rgba(255,255,255,0.12)] hover:text-[var(--text)]"
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
