export const THEME_STORAGE_KEY = "portfolio-theme";

export type Theme = "light" | "dark";

const themes = new Set<Theme>(["light", "dark"]);

export function getThemeValue(value: string | null | undefined): Theme {
  return value && themes.has(value as Theme) ? (value as Theme) : "light";
}

export function getToggledTheme(theme: Theme): Theme {
  return theme === "light" ? "dark" : "light";
}

export function getThemeToggleLabel(theme: Theme): string {
  return `Switch to ${getToggledTheme(theme)} theme`;
}
