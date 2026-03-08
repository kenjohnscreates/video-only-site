import { test, expect } from "@playwright/test";

test.describe("Case studies section", () => {
  test("case studies section is visible and has content", async ({ page }) => {
    await page.goto("/");
    const section = page.locator("#case-studies");
    await expect(section).toBeVisible();
    const hasContent = await section
      .locator(".case-tab, .case-study-detail, [data-accent]")
      .first()
      .isVisible();
    expect(hasContent).toBe(true);
  });
});
