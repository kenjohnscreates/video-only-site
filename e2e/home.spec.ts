import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("loads and main nav links are present", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Kenny Johns/);
    const nav = page.locator("nav[aria-label='Main navigation']");
    await expect(nav).toBeVisible();
    const links = nav.locator('a[href^="#"]');
    const hrefs = await links.evaluateAll((els) =>
      els.map((a) => (a as HTMLAnchorElement).href)
    );
    const fragment = (url: string) => url.split("#")[1] ?? "";
    const ids = hrefs.map(fragment).filter(Boolean);
    expect(ids).toContain("reel");
    expect(ids).toContain("case-studies");
    expect(ids).toContain("clients");
    expect(ids).toContain("services");
    expect(ids).toContain("contact");
  });
});
