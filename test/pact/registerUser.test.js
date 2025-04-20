const { registerUser } = require("../../src/utils/requests");
const { pactWith } = require("jest-pact");
const { Pact, Matchers } = require("@pact-foundation/pact");
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
    describe.only("Register user", () => {
      beforeAll(async () => {
        await provider.setup();
      });

      beforeEach(async () => {
        await provider.addInteraction({
          state: "a user is registered",
          uponReceiving: "a request to register a user",
          withRequest: {
            path: "/users",
            method: "POST",
            body: {
              user: {
                email_address: like("fake@email.com"),
                password: like("fakePassword"),
                password_confirmation: like("fakePassword"),
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
              user_id: integer(9),
            },
          },
        });
      });

      it("returns a created user_id", async () => {
        const responseData = await registerUser({
          email_address: "fake@email.com",
          password: "fakePassword",
          password_confirmation: "fakePassword",
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
