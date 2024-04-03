/// <reference types="Cypress" />

describe(" ", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  
    it(" ", () => {
    cy.visit(" ")
    });
  
    
  });
  
  require('cypress-plugin-tab')

  require('cypress-xpath')