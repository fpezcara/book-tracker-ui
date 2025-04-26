const { removeBookFromList } = require("../../src/utils/requests");
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
    const bookId = "41111ea4-91d5-4e53-be43-7b1d76d0392b";

    describe("Add new book to list", () => {
      beforeEach(async () => {
        await provider.addInteraction({
          state: "a user is logged in",
          uponReceiving: "a request to remove a book from a list",
          withRequest: {
            path: `/users/${userId}/lists/${listId}/remove_book`,
            method: "DELETE",
            body: {
              book_id: bookId,
            },
            credentials: "include",
          },
          willRespondWith: {
            status: 204,
          },
        });
      });

      it("returns successfully", async () => {
        const responseData = await removeBookFromList(userId, listId, bookId);

        expect(responseData.status).toBe(204);
      });
    });
  },
);
