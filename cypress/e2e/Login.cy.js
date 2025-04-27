import { lists } from "../../playwright/support/mocks/lists";

describe("Login flow", () => {
  it("allows user to log in", () => {
    cy.intercept(
      {
        method: "POST",
        url: `**/session`,
      },
      (req) => {
        req.reply({
          statusCode: 201,
          body: { user_id: 9 },
        });
      },
    ).as("registerUser");

    cy.intercept(
      {
        method: "GET",
        url: `**/users/9/lists`,
      },
      (req) => {
        req.reply({
          statusCode: 200,
          body: lists,
        });
      },
    );

    cy.visit("/login");

    cy.get("form").should("be.visible");

    // Fill out form
    cy.get("input[type=email]").type("test@email.com");
    cy.get("input[placeholder=Password]").type("a password");

    cy.get("button[type=submit]").click();

    cy.wait("@registerUser").its("response.statusCode").should("eq", 201);

    cy.url().should("include", "/");
    cy.get("h1").should("contain", "Book Tracker");

    cy.get("h3").should("contain", /Reading/i);

    // Cookies are set
    cy.getCookie("userId").should("exist");
    cy.getCookie("userId").should("have.property", "value", "9");
    cy.getCookie("currentBookList").should("exist");
    cy.getCookie("currentBookList").should("have.property", "value", "reading");
  });
});
