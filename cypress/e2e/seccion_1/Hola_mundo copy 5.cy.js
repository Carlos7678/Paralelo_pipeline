describe("Bienvenidos al curso de Cypress sección 1", () => {
  // Configuración global para evitar que los errores no capturados detengan los tests
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false; // Ignorar excepciones no capturadas
  });

  before(() => {
    cy.log("Inicio del test suite - Preparación inicial");
  });

  beforeEach(() => {
    cy.log("Configuraciones previas a cada test");
  });

  afterEach(() => {
    cy.log("Limpieza después de cada test");
  });

  after(() => {
    cy.log("Finalización del test suite");
  });

  it("Mi primer test -> Hola mundo", () => {
    cy.log("Este es el primer test de la suite");
    cy.log("¡Hola mundo desde Cypress!");
  });

  it("Segundo test -> Interactuar con el campo name", () => {
    cy.log("Navegando a la página DemoQA");
    cy.visit("https://demoqa.com/text-box");

    cy.log("Escribiendo el nombre 'Carlos' en el campo");
    cy.get("#userName").type("Carlos");

    cy.log("Validando que el campo contenga el texto 'Carlos'");
    cy.get("#userName").should("have.value", "Carlos");
  });

  it("Tercer test -> Validación de otros campos", () => {
    cy.log("Navegando a la página DemoQA");
    cy.visit("https://demoqa.com/text-box");

    cy.log("Llenando otros campos");
    cy.get("#userEmail").type("carlos@example.com");
    cy.get("#currentAddress").type("123 Calle Falsa, Ciudad");
    cy.get("#permanentAddress").type("456 Otra Calle, Ciudad");

    cy.log("Validando que los campos contengan los valores ingresados");
    cy.get("#userEmail").should("have.value", "carlos@example.com");
    cy.get("#currentAddress").should("have.value", "123 Calle Falsa, Ciudad");
    cy.get("#permanentAddress").should("have.value", "456 Otra Calle, Ciudad");
  });

  it("Cuarto test -> Enviar formulario", () => {
    cy.log("Navegando a la página DemoQA");
    cy.visit("https://demoqa.com/text-box");

    cy.log("Llenando el formulario");
    cy.get("#userName").type("Carlos");
    cy.get("#userEmail").type("carlos@example.com");
    cy.get("#currentAddress").type("123 Calle Falsa, Ciudad");
    cy.get("#permanentAddress").type("456 Otra Calle, Ciudad");

    cy.log("Haciendo clic en el botón de enviar");
    cy.get("#submit").click();

    cy.log("Verificando que la información enviada se muestre correctamente");
    cy.get("#output").should("be.visible");
    cy.get("#output #name").should("contain.text", "Carlos");

  });
});
