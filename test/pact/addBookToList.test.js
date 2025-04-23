const { addBookToList } = require("../../src/utils/requests");
const { pactWith } = require("jest-pact");
const { Matchers } = require("@pact-foundation/pact");
const { like, eachLike } = Matchers;
import "./setup";

pactWith(
  {
    consumer: "Book_Tracker_UI",
    provider: "Book_Tracker_API",
    port: 4015,
    pactfileWriteMode: "merge",
  },
  (provider) => {
    afterEach(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1100)); // Wait for keep-alive socket to die
    });
    const userId = 100;
    const listId = "6e2875b7-dcec-4e63-b586-6dc071aba2c6";
    const book = {
      title: "The Great Gatsby",
      authors: ["F. Scott Fitzgerald"],
      isbn: "9780743273565",
      cover_image:
        "http://books.google.com/books/content?id=8drgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      page_count: 234,
      isbn: "9780743273565",
    };

    describe("Add new book to list", () => {
      beforeEach(async () => {
        await provider.addInteraction({
          state: "a user is logged in",
          uponReceiving: "a request to add new book to a list",
          withRequest: {
            path: `/users/${userId}/lists/${listId}/add_book`,
            method: "POST",
            body: {
              book: like(book),
            },
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          },
          willRespondWith: {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: {
              id: like(listId),
              name: like("Fiction"),
              user_id: like(userId),
              created_at: like("2025-04-23T20:12:35.104Z"),
              updated_at: like("2025-04-23T20:12:35.104Z"),
              books: eachLike({
                id: like("6c69a78c-0b5e-4ccc-bdff-f98e35df75e0"),
                title: like(book.title),
                authors: like(book.authors),
                isbn: like(book.isbn),
                page_count: like(book.page_count),
                cover_image: like(book.cover_image),
                created_at: like("2025-04-23T20:10:35.443Z"),
                updated_at: like("2025-04-23T20:10:35.443Z"),
              }),
            },
          },
        });
      });

      it("returns successfully", async () => {
        const responseData = await addBookToList(userId, listId, book);

        expect(responseData).toEqual(
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            user_id: expect.any(Number),
            created_at: expect.any(String),
            updated_at: expect.any(String),
            books: expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                title: expect.any(String),
                authors: expect.any(Array),
                isbn: expect.any(String),
                page_count: expect.any(Number),
                cover_image: expect.any(String),
                created_at: expect.any(String),
                updated_at: expect.any(String),
              }),
            ]),
          }),
        );
      });
    });
  },
);
