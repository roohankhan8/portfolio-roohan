/** @vitest-environment jsdom */

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SkillsSection } from "./skills-section";

describe("SkillsSection", () => {
  it("hides summary preview badges when a card is open", () => {
    const { container } = render(<SkillsSection />);
    const previewLists = container.querySelectorAll("summary ul");

    expect(previewLists[0]?.className).toContain("group-open:hidden");
  });
});
