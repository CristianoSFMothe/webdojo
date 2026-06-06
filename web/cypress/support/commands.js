Cypress.Commands.add("acessarPagina", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:3000");
});

Cypress.Commands.add("submeterLogin", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);

  cy.contains("button", "Entrar").click();
});
