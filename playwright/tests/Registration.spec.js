import { test, expect } from "@playwright/test";
import { lists } from "../support/mocks/lists";

test.describe("Registration flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("*/**/users", async (route) => {
      const json = { user_id: 9 };

      await route.fulfill({ json });
    });

    await page.route("*/**/users/9/lists", async (route) => {
      const json = { lists: lists };

      await route.fulfill({ json });
    });
  });

  test("user successfully registers", async ({ page }) => {
    await page.goto("/register");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/book tracker/i);
    // await page.getByRole('input', { name: /email address/i }).fill('test@email.com')
    await page.getByPlaceholder("Email address").fill("email@test.com");
    await page
      .getByRole("textbox", { name: "Password", exact: true })
      .fill("password");
    await page
      .getByRole("textbox", { name: "Password Confirmation", exact: true })
      .fill("password");

    await page.getByRole("button", { name: "Register" }).click();

    await page.waitForURL("/reading");
    expect(page.url()).toContain("/reading");

    const cookies = await page.context().cookies();
    expect(cookies).toHaveLength(2);
    expect(cookies[0].name).toBe("userId");
    expect(cookies[0].value).toBe("9");
    expect(cookies[1].name).toBe("currentBookList");
    expect(cookies[1].value).toBe("reading");
  });
});
