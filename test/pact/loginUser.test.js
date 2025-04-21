const { loginUser } = require("../../src/utils/requests");
const { pactWith } = require("jest-pact");
const { Matchers } = require("@pact-foundation/pact");
const { integer, like } = Matchers;
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

    describe("Unauthorized user", () => {
      beforeEach(async () => {
        await provider.addInteraction({
          state: "a user does not exist",
          uponReceiving: "a request to login a user",
          withRequest: {
            path: "/session",
            method: "POST",
            body: {
              session: {
                email_address: like("fake@email.com"),
                password: like("fakePassword"),
              },
            },
            headers: {
              "Content-Type": "application/json",
            },
          },
          willRespondWith: {
            status: 401,
          },
        });
      });

      it("raises error", async () => {
        await expect(
          loginUser({
            email_address: "fake@email.com",
            password: "fakePassword",
          }),
        ).rejects.toMatchObject({ status: 401 });
      });
    });

    describe("Logs user in", () => {
      beforeEach(async () => {
        await provider.addInteraction({
          state: "a user exists",
          uponReceiving: "a request to login a user",
          withRequest: {
            path: "/session",
            method: "POST",
            body: {
              session: {
                email_address: "user@exists.com",
                password: "fakePassword",
              },
            },
            headers: {
              "Content-Type": "application/json",
            },
          },
          willRespondWith: {
            status: 201,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: {
              user_id: like(4),
            },
          },
        });
      });

      it("returns successfully", async () => {
        const responseData = await loginUser({
          email_address: "user@exists.com",
          password: "fakePassword",
        });

        expect(responseData).toEqual(
          expect.objectContaining({
            user_id: expect.any(Number),
          }),
        );
      });
    });
  },
);
