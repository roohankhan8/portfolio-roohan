import { describe, expect, it } from "vitest";
import { getSkillPreviewItems } from "./skills";

describe("getSkillPreviewItems", () => {
  it("returns the first icon-backed items in their original order", () => {
    expect(
      getSkillPreviewItems(
        ["HTML5", "CSS3", "JavaScript", "Blade Templating", "React", "Next.js"],
        4,
      ),
    ).toEqual(["HTML5", "CSS3", "JavaScript", "Blade Templating"]);
  });

  it("skips items without icons and respects the preview limit", () => {
    expect(
      getSkillPreviewItems(
        ["Unknown Stack", "Laravel", "Another Unknown", "React", "TypeScript"],
        2,
      ),
    ).toEqual(["Laravel", "React"]);
  });

  it("supports the updated frontend and workflow stack labels", () => {
    expect(
      getSkillPreviewItems(
        ["Vue", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
        6,
      ),
    ).toEqual(["Vue", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"]);

    expect(getSkillPreviewItems(["Codex", "GitHub", "Postman"], 3)).toEqual([
      "Codex",
      "GitHub",
      "Postman",
    ]);
  });
});
