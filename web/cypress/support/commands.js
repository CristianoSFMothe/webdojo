import "cypress-real-events";

Cypress.Commands.add("startPage", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:3000");
});

Cypress.Commands.add("submitLoginForm", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);

  cy.contains("button", "Entrar").click();
});

Cypress.Commands.add("goTo", (buttonName, pageTile) => {
  cy.contains("button", buttonName).should("be.visible").click();

  cy.contains("h1", pageTile).should("be.visible");
});

Cypress.Commands.add("login", () => {
  cy.startPage();
  cy.submitLoginForm("papito@webdojo.com", "katana123");
});
