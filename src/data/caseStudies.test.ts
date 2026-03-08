import { describe, it, expect } from "vitest";
import { caseStudies } from "./caseStudies";

const REQUIRED_KEYS = [
  "clientName",
  "slug",
  "image",
  "goal",
  "role",
  "results",
  "accentColor",
] as const;
const VALID_ACCENT_COLORS = ["blue", "pink", "coral"] as const;

describe("caseStudies data", () => {
  it("has at least one case study", () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(1);
  });

  it("each item has required keys and valid accentColor", () => {
    for (const item of caseStudies) {
      for (const key of REQUIRED_KEYS) {
        expect(item).toHaveProperty(key);
        expect((item as Record<string, unknown>)[key]).toBeDefined();
      }
      expect(VALID_ACCENT_COLORS).toContain(item.accentColor);
      expect(typeof item.slug).toBe("string");
      expect(item.slug.length).toBeGreaterThan(0);
      expect(typeof item.image).toBe("string");
      expect(item.image.startsWith("/")).toBe(true);
    }
  });
});
