export const THEME_STORAGE_KEY = "portfolio-theme";

export type Theme = "light" | "dark";

const themes = new Set<Theme>(["light", "dark"]);

function isTheme(value: string | null | undefined): value is Theme {
  return value !== null && value !== undefined && themes.has(value as Theme);
}

export function getThemeValue(value: string | null | undefined): Theme {
  return isTheme(value) ? value : "light";
}

export function getInitialTheme(
  documentTheme: string | null | undefined,
  storedTheme: string | null | undefined,
): Theme {
  return isTheme(documentTheme) ? documentTheme : getThemeValue(storedTheme);
}

export function getToggledTheme(theme: Theme): Theme {
  return theme === "light" ? "dark" : "light";
}

export function getThemeToggleLabel(theme: Theme): string {
  return `Switch to ${getToggledTheme(theme)} theme`;
}
