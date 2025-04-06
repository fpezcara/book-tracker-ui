/// <reference types="cypress" />

describe("template spec", () => {
  it("allows user to register", () => {
    cy.visit("/register");

    cy.get("form").should("be.visible");

    // Fill out form
    cy.get("input[type=email]").type("test@email.com");
    cy.get("input[placeholder=Password]").type("a password");
    cy.get("input[placeholder='Password Confirmation']").type("a password");

    cy.get("button[type=submit]").click();

    // todo: add api mock call to check if the user was created & redirected to Home
  });
});
