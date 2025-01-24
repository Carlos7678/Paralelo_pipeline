describe("Bienvenidos al curso de Cypress sección 1", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("Mi primer test-> Hola mundo", () => {
    cy.log("Hola mundo");
    
  });

  it("Segundo test -> campo name", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.get("#userName").type("Carlos");
    
  });
  it("Mi primer test-> Hola mundo", () => {
    cy.log("Hola mundo");
    
  });

  it("Segundo test -> campo name", () => {
    cy.visit("https://demoqa.com/text-box");
    cy.get("#userName").type("Carlos");
    
  });
  
});
