import { test, expect } from "@playwright/test";

test.describe("404 page", () => {
  test("404 route renders", async ({ page }) => {
    const response = await page.goto("/nonexistent-page");
    expect(response?.status()).toBe(404);
    await expect(
      page.getByText("Page not found", { exact: true })
    ).toBeVisible();
  });
});
