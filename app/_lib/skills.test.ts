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
});
