describe("Formulário de Consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.startPage();
    cy.submitLoginForm("papito@webdojo.com", "katana123");

    cy.goTo("Formulários", "Consultoria");
  });
});
