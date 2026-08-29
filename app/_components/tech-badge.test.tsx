/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TechBadge } from "./tech-badge";

describe("TechBadge", () => {
  it("keeps preview badges icon-first and reveals text on hover", () => {
    render(<TechBadge item="React" previewOnly />);

    const badge = screen.getByLabelText("React");
    const label = screen.getByText("React");

    expect(` ${badge.className} `).not.toContain(" w-10 ");
    expect(badge.className).toContain("group-hover/tech:max-w-40");
    expect(label.className).toContain("max-w-0");
    expect(label.className).toContain("group-hover/tech:max-w-40");
  });
});
