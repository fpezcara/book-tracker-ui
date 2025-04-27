import { test, expect } from "@playwright/test";
import { lists } from "../support/mocks/lists";

test.describe("Login flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("*/**/session", async (route) => {
      const json = { user_id: 9 };

      await route.fulfill({ json });
    });

    await page.route("*/**/users/9/lists", async (route) => {
      const json = { lists: lists };

      await route.fulfill({ json });
    });
  });

  test("user successfully logs in", async ({ page }) => {
    await page.goto("/login");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/book tracker/i);
    // await page.getByRole('input', { name: /email address/i }).fill('test@email.com')
    await page.getByPlaceholder("Email address").fill("email@test.com");
    await page.getByPlaceholder("Password").fill("password");

    await page.getByRole("button", { name: "Login" }).click();

    await page.waitForURL("/reading");
    expect(page.url()).toContain("/reading");
    // await expect(page.getByText('Reading')).toBeVisible()

    const cookies = await page.context().cookies();

    expect(cookies).toHaveLength(2);
    expect(cookies[0].name).toBe("userId");
    expect(cookies[0].value).toBe("9");
    expect(cookies[1].name).toBe("currentBookList");
    expect(cookies[1].value).toBe("reading");
  });
});
