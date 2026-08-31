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
  FaMoon,
  FaRegBuilding,
  FaSun,
  FaTimes,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import type { NavItem, SocialLink } from "../_lib/portfolio-data";
import logoTransparent from "../_logos/logo-transparent.png";
import {
  getInitialTheme,
  getThemeToggleLabel,
  getToggledTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "../_lib/theme";

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
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined" || typeof window === "undefined") {
      return "light";
    }

    return getInitialTheme(
      document.documentElement.dataset.theme,
      window.localStorage.getItem(THEME_STORAGE_KEY),
    );
  });

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      const activeSection =
        [...sections]
          .reverse()
          .find((section) => section.getBoundingClientRect().top <= activationLine) ?? sections[0];

      setActiveHref(`#${activeSection.id}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
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

  useEffect(() => {
    setTheme(
      getInitialTheme(
        document.documentElement.dataset.theme,
        window.localStorage.getItem(THEME_STORAGE_KEY),
      ),
    );
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-40">
      <div className="container-shell relative py-4">
        <div
          aria-hidden="true"
          className="nav-ambient-glow pointer-events-none absolute inset-x-4 inset-y-2 rounded-[1.75rem] opacity-70 blur-2xl"
        />
        <div className="flex min-h-12 items-center justify-between gap-6">
          <div className="nav-shell relative flex w-full items-center justify-between gap-6 rounded-[1.75rem] px-4 py-3 backdrop-blur-2xl">
            <div
              aria-hidden="true"
              className="nav-shell-ring pointer-events-none absolute inset-0 rounded-[1.75rem]"
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
                    onClick={() => setActiveHref(item.href)}
                    className={`nav-pill group flex h-11 items-center overflow-hidden rounded-full border px-4 transition-all duration-300 ease-out ${
                      isActive
                        ? "nav-pill-active text-[var(--text)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text)]"
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
              {/* <button
                type="button"
                aria-label={getThemeToggleLabel(theme)}
                onClick={() => setTheme((currentTheme) => getToggledTheme(currentTheme))}
                className="nav-icon-button inline-flex h-10 w-10 items-center justify-center rounded-xl text-[var(--text-secondary)] transition-all duration-300 ease-out hover:text-[var(--text)]"
              >
                {theme === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
              </button> */}
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="nav-icon-button flex h-10 w-10 items-center justify-center rounded-xl font-mono text-xs uppercase tracking-[0.16em] text-[var(--text-secondary)] transition-all duration-300 ease-out hover:text-[var(--text)]"
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
              className="nav-icon-button inline-flex h-11 w-11 items-center justify-center rounded-xl text-base text-[var(--text-secondary)] transition-all duration-300 ease-out hover:text-[var(--text)] lg:hidden"
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
          <div className="nav-mobile-panel rounded-[1.5rem] p-4 backdrop-blur-2xl">
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {items.map((item) => {
                const isActive = item.href === activeHref;
                const Icon = navIcons[item.href] ?? FaHome;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setIsOpen(false);
                    }}
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
              {/* <button
                type="button"
                aria-label={getThemeToggleLabel(theme)}
                onClick={() => setTheme((currentTheme) => getToggledTheme(currentTheme))}
                className="nav-icon-button inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 ease-out hover:text-[var(--text)]"
              >
                {theme === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
                <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
              </button> */}
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon-button inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 ease-out hover:text-[var(--text)]"
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
