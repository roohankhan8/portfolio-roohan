/** @vitest-environment jsdom */

import { render } from "@testing-library/react";
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
});
