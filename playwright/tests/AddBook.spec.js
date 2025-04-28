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

    // todo: when user adds a book to the list, the table knows because /lists gets called again and by then the list contains this new book there...see how best to do this - shall i then mock it again?

    await page.route("*/**/add_book", async (route) => {
      const json = JSON.stringify({
        id: "6e2875b7-dcec-4e63-b586-6dc071aba2c6",
        name: "Finished",
        user_id: 100,
        created_at: "2025-04-23T20:12:35.104Z",
        updated_at: "2025-04-23T20:12:35.104Z",
        books: [
          {
            id: "6c69a78c-0b5e-4ccc-bdff-f98e35df75e0",
            title: "Lord of the Rings: The Two Towers",
            authors: ["J. R. R. Tolkien"],
            isbn: "9780743273565",
            page_count: 234,
            cover_image:
              "http://books.google.com/books/content?id=8drgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            created_at: "2025-04-23T20:10:35.443Z",
            updated_at: "2025-04-23T20:10:35.443Z",
          },
        ],
      });

      await route.fulfill({
        body: json,
      });
    });
  });

  test("user successfully logs in", async ({ page }) => {
    await page.goto("/finished");
    await expect(page).toHaveTitle(/book tracker/i);
    expect(page.getByText(/no books have been added/i)).toBeTruthy();

    page.getByTestId("add-book-button").click();

    await page.waitForURL("**/finished/add-book");

    await page.getByTestId("search-by-input").fill("lord of the rings");

    expect(page.getByText(/lord of the rings: the two towers/i)).toBeTruthy();

    await page.getByTestId("dropdown-element-1").waitFor();

    await page.getByTestId("dropdown-element-1").click();

    await page.getByTestId("confirmation-modal-accept-button").click();

    await page.route("*/**/users/9/lists", async (route) => {
      const updatedLists = JSON.parse(JSON.stringify(lists));
      const finishedList = updatedLists.find(
        (list) => list.name === "Finished",
      );
      finishedList.books.push({
        id: "new-book-id",
        title: "Lord of the Rings: The Two Towers",
        authors: ["J. R. R. Tolkien"],
        published_date: "2023-11-21",
        isbn: "9780743273565",
        page_count: 234,
        cover_image:
          "http://books.google.com/books/content?id=8drgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(updatedLists),
      });
    });

    await page.waitForURL("**/finished");

    await expect(page.getByText(/the two towers/i)).toBeVisible();
  });
});
