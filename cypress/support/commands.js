// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('Campo_visible', (selector,texto,t) => {
    cy.get(selector).should('be.visible').type(texto)
    cy.wait(t)
  })

  Cypress.Commands.add('Campo_visible_xpath', (selector,texto,t) => {
    cy.xpath(selector).should('be.visible').type(texto)
    cy.wait(t)
  })

  Cypress.Commands.add('Click', (selector,t) => {
    cy.get(selector).should('be.visible').click
    cy.wait(t)
  })

  Cypress.Commands.add('Click_force', (selector,t) => {
    cy.get(selector).should('be.visible').click({force:true})
    cy.wait(t)
  })

  Cypress.Commands.add('Click_force_xpath', (selector,t) => {
    cy.xpath(selector).should('be.visible').click({force:true})
    cy.wait(t)
  })


  //Funciones por conjunto
  //Funcion Toolsqa

  Cypress.Commands.add('bloque_ToolsQA', (name, email,dir1,dir2,tiempo) => { 
    cy.get('#userName').should('be.visible').type(name)
    cy.wait(tiempo)
    cy.get('#userEmail').should('be.visible').type(email)
    cy.wait(tiempo)
    cy.get('#currentAddress').should('be.visible').type(dir1)
    cy.wait(tiempo)
    cy.get('#permanentAddress').should('be.visible').type(dir2)
    cy.wait(tiempo)
    cy.get('#submit').should('be.visible').click({force:true})
    cy.wait(tiempo)

   })



   Cypress.Commands.add('reto_custom', (name,surname,email,phone,address,city,state,zip_code,website,hosting,description,tiempo) => { 
    cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(name)
    cy.wait(tiempo)

    cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(surname)
    cy.wait(tiempo)

    cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(email)
    cy.wait(tiempo)

    cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(phone)
    cy.wait(tiempo)

    cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(address)
    cy.wait(tiempo)

    cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(city)
    cy.wait(tiempo)

    cy.get('.selectContainer > .input-group > .form-control').select(state).should('have.value',state)
    cy.wait(tiempo)

    
    cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(zip_code)
    cy.wait(tiempo)
    

    
    cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(website)
    cy.wait(tiempo)

    
    if (hosting.toLowerCase()=='yes'){
        cy.get(':nth-child(1) > label > input').should('be.visible').click()
    }else if (hosting.toLowerCase()=='no'){
        cy.get(':nth-child(2) > label > input').should('be.visible').click()
    }
    cy.wait(tiempo)

    cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(description)
    cy.wait(tiempo)

    cy.get('.btn').should('be.visible').click({force:true})
   })

   Cypress.Commands.add('Validar_campo', (selector,men,nombre_campo,t) => {
    cy.xpath(selector).should("be.visible").then((val)=>{
        let dato=val.text()
        let mensaje=men
        cy.log(dato)
        expect(dato).to.equal(mensaje)
        if(dato==mensaje){
            cy.log("***********************")
            cy.log("El "+nombre_campo+" no es valido")
            cy.log("***********************")
        }
    });
  })

  Cypress.Commands.add('Validar_campo2', (selector,men,nombre_campo,t) => {
    cy.xpath(selector).should("be.visible").should("contain",men).then((val)=>{
            cy.log("***********************")
            cy.log("El "+nombre_campo+" no es valido")
            cy.log("***********************")
        })
      })