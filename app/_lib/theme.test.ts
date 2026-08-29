import { describe, expect, it } from "vitest";
import { getThemeToggleLabel, getThemeValue, getToggledTheme } from "./theme";

describe("theme helpers", () => {
  it("falls back to light for unknown values", () => {
    expect(getThemeValue(null)).toBe("light");
    expect(getThemeValue(undefined)).toBe("light");
    expect(getThemeValue("sepia")).toBe("light");
  });

  it("accepts light and dark values", () => {
    expect(getThemeValue("light")).toBe("light");
    expect(getThemeValue("dark")).toBe("dark");
  });

  it("toggles between light and dark", () => {
    expect(getToggledTheme("light")).toBe("dark");
    expect(getToggledTheme("dark")).toBe("light");
  });

  it("describes the next toggle action", () => {
    expect(getThemeToggleLabel("light")).toBe("Switch to dark theme");
    expect(getThemeToggleLabel("dark")).toBe("Switch to light theme");
  });
});
