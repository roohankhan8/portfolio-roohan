import { getTechIcon } from "./tech-icons";

export function getSkillPreviewItems(items: string[], limit = 5): string[] {
  return items.filter((item) => getTechIcon(item) !== null).slice(0, limit);
}
