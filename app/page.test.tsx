/** @vitest-environment jsdom */

import { render, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the reference section order", () => {
    const { container } = render(<Home />);
    const sectionIds = [...container.querySelectorAll("section")]
      .map((section) => section.id)
      .filter(Boolean);

    expect(sectionIds).toEqual([
      "home",
      "about",
      "work",
      "skills",
      "process",
      "experience",
      "exploration",
      "contact",
    ]);
  });

  it("renders an icon for every mobile navigation tab", () => {
    const { container } = render(<Home />);
    const dock = within(container).getByRole("navigation", { name: "Mobile primary" });
    const links = within(dock).getAllByRole("link");

    expect(links).toHaveLength(6);
    expect(links.every((link) => link.querySelector("svg"))).toBe(true);
  });

  it("renders the portfolio identity in the desktop header", () => {
    const { container } = render(<Home />);
    const header = within(container).getByRole("banner");

    expect(within(header).getByRole("link", { name: /Roohan Khan/i })).toBeTruthy();
    expect(within(header).getByText("Backend & Systems Engineer")).toBeTruthy();
  });

  it("shows a logo beside every technology in the stack section", () => {
    const { container } = render(<Home />);
    const technologies = [...container.querySelectorAll("#skills .tag-list li")];

    expect(technologies.length).toBeGreaterThan(0);
    expect(technologies.every((technology) => technology.querySelector("svg"))).toBe(true);
  });

  it("uses distinct brand colors for technology logos", () => {
    const { container } = render(<Home />);
    const technologies = [...container.querySelectorAll("#skills .tag-list li")];
    const logoStyle = (name: string) => technologies
      .find((technology) => technology.textContent === name)
      ?.querySelector("svg")
      ?.getAttribute("style");

    expect(logoStyle("Laravel")).toContain("color");
    expect(logoStyle("React")).toContain("color");
    expect(logoStyle("Laravel")).not.toBe(logoStyle("React"));
    expect(logoStyle("REST APIs")).toBeNull();
  });

  it("groups the requested technologies in the stack cards", () => {
    const { container } = render(<Home />);
    const cards = [...container.querySelectorAll("#skills .skill-card")];
    const itemsIn = (heading: string) => cards
      .find((card) => card.querySelector("h3")?.textContent === heading)
      ?.querySelectorAll(".tag-list li");
    const labelsIn = (heading: string) => [...(itemsIn(heading) ?? [])]
      .map((item) => item.textContent);

    expect(labelsIn("Backend Core")).toEqual(expect.arrayContaining(["Python", "Django"]));
    expect(labelsIn("Data Stores")).toContain("Redis");
    expect(labelsIn("Client Systems")).not.toEqual(expect.arrayContaining(["HTML", "CSS"]));
  });
});
