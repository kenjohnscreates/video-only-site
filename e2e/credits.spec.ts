import { test, expect } from "@playwright/test";

test.describe("Credits page", () => {
  test("loads with heading, credit entries, and PDF link", async ({ page }) => {
    await page.goto("/credits");

    await expect(
      page.getByRole("heading", { name: "Credit List", level: 1 })
    ).toBeVisible();

    await expect(page.getByText("Tenable Network Security")).toBeVisible();

    const pdfLink = page.getByRole("link", { name: "Download PDF" });
    await expect(pdfLink).toBeVisible();
    await expect(pdfLink).toHaveAttribute("href", "/credit-list.pdf");
  });
});
