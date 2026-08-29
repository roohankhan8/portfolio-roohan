import { describe, expect, it } from "vitest";
import { getScrollProgress } from "./scroll-progress";

describe("getScrollProgress", () => {
  it("returns zero when the page cannot scroll", () => {
    expect(getScrollProgress(900, 900, 300)).toBe(0);
    expect(getScrollProgress(600, 800, 100)).toBe(0);
  });

  it("clamps negative and overflow scroll positions", () => {
    expect(getScrollProgress(2000, 1000, -100)).toBe(0);
    expect(getScrollProgress(2000, 1000, 3000)).toBe(1);
  });

  it("maps a scroll position to a normalized progress value", () => {
    expect(getScrollProgress(3000, 1000, 500)).toBe(0.25);
    expect(getScrollProgress(3000, 1000, 1000)).toBe(0.5);
  });
});
