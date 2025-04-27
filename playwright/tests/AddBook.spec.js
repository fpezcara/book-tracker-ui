import { test, expect } from "@playwright/test";
import { lists } from "../support/mocks/lists";

test.describe("Adding a book to a list flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.context().addCookies([
      { name: "userId", value: "9", url: "http://localhost:3000" },
      {
        name: "currentBookList",
        value: "finished",
        url: "http://localhost:3000",
      },
    ]);

    await page.route("*/**/users/9/lists", async (route) => {
      const json = JSON.stringify(lists);

      await route.fulfill({
        body: json,
      });
    });

    await page.route("*/**/books/search", async (route) => {
      await route.fulfill();
    });

    await page.routeWebSocket("ws://localhost:3001/cable", (ws) => {
      const json = [
        {
          title: "Lord of the Rings: The Fellowship of the Ring",
          authors: ["J. R. R. Tolkien"],
          published_date: "2011-09-28",
          page_count: 111,
        },
        {
          title: "Lord of the Rings: The Two Towers",
          authors: ["J. R. R. Tolkien"],
          published_date: "2023-11-21",
        },
        {
          title: "Lord of the Rings: The Return of the King",
          authors: ["J. R. R. Tolkien"],
          published_date: "1976",
        },
      ];

      ws.onMessage((message) => {
        console.log("WebSocket message received:", message);
        ws.send(
          JSON.stringify({
            message: {
              message: {
                data: json,
              },
            },
          }),
        );
      });
    });
  });

  test("user successfully logs in", async ({ page }) => {
    await page.goto("/finished");
    await expect(page).toHaveTitle(/book tracker/i);
    expect(page.getByText(/no books have been added/i)).toBeTruthy();

    page.getByTestId("add-book-button").click();

    await page.waitForURL("**/finished/add-book");

    await page.getByTestId("search-by-input").fill("Lord of the Rings");

    expect(page.getByText(/the two towers/i)).toBeTruthy();

    await page.getByText(/the two towers/i).click();

    expect(page.getByTestId("confirmation-modal")).toBeTruthy();

    await page.getByTestId("confirmation-modal-accept-button").click();

    await page.waitForURL("**/finished");

    expect(page.getByText(/the two towers/i)).toBeTruthy();
  });
});
