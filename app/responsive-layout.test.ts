import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync("app/globals.css", "utf8");

describe("responsive portfolio geometry", () => {
  it("lets reference sections follow their content at desktop widths", () => {
    expect(css).not.toMatch(
      /@media \(min-width: 1024px\)[\s\S]*#[a-z-]+ \{ height: var\(--[a-z-]+-height\); \}/,
    );
  });

  it("lets work and pipeline cards size themselves to their content", () => {
    expect(css).toMatch(/#work \.grid, #process \.grid \{ align-items: start; \}/);
    expect(css).toMatch(/\.project-card \{[^}]*min-height: 0;/);
    expect(css).toMatch(/\.process-card \{[^}]*min-height: 0;/);
  });

  it("uses the dock instead of the header and lets track record flow on mobile", () => {
    expect(css).toMatch(/@media \(max-width: 767px\)[\s\S]*\.site-header \{ display: none; \}/);
    expect(css).not.toContain("#experience { height: 1404px !important; }");
    expect(css).not.toContain("transform: translateY(-162px)");
  });

  it("lets every mobile section hug its content and starts the hero at the top", () => {
    const mobileCss = css.split("@media (max-width: 767px)")[1];

    expect(mobileCss).not.toMatch(/#[a-z-]+ \{[^}]*height:\s*\d+px/);
    expect(mobileCss).not.toContain("transform: translateY(");
    expect(mobileCss).toMatch(/\.hero-section \{[^}]*padding:\s*1\.5rem 0 3\.5rem;/);
  });
});
