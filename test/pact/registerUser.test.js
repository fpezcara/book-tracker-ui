const { registerUser } = require("../../src/utils/requests");
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
    describe("New user", () => {
      beforeEach(async () => {
        await provider.addInteraction({
          state: "a user does not exist",
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

            body: {
              user_id: integer(9),
            },
          },
        });
      });

      it("returns successfully", async () => {
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

    describe("Existing user", () => {
      beforeEach(async () => {
        await provider.addInteraction({
          state: "a user exists",
          uponReceiving: "a request to register a user",
          withRequest: {
            path: "/users",
            method: "POST",
            body: {
              user: {
                email_address: "user@exists.com",
                password: "fakePassword",
                password_confirmation: "fakePassword",
              },
            },
            headers: {
              "Content-Type": "application/json",
            },
          },
          willRespondWith: {
            status: 400,
            body: {
              error: { message: "Email has already been taken" },
            },
          },
        });
      });

      it("raises error", async () => {
        await expect(
          registerUser({
            email_address: "user@exists.com",
            password: "fakePassword",
            password_confirmation: "fakePassword",
          }),
        ).rejects.toEqual({
          error: expect.objectContaining({
            message: expect.any(String),
          }),
        });
      });
    });
  },
);
