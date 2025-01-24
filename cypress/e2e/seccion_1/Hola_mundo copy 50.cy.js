describe("Bienvenidos al curso de Cypress sección 1", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("Mi primer test-> Hola mundo", () => {
    cy.log("Hola mundo");
    
  });

  
  
});
