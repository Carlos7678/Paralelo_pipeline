class ProyectoUno_PO{
    visitHome(){
        let tiempo=600
        //Cypress.config("defaultCommandTimeout", 20000);

        beforeEach(() => {      
            cy.visit(
                "https://demo.seleniumeasy.com/input-form-demo.html"
              );
              cy.title().should("eq", "Selenium Easy - Input Form Demo with Validations");
              cy.wait(tiempo);
    
          })
        }

        Seccion_uno(name,surname,email,tiempo){
            cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(name)
            cy.screenshot("Campo Nombre")
        
            cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(surname)
            cy.wait(tiempo)
        
            cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(email)
            cy.wait(tiempo)
        }

        Seccion_dos(phone,address,city,state,tiempo){
            cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(phone)
            cy.wait(tiempo)
        
            cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(address)
            cy.wait(tiempo)
        
            cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').clear().should('be.visible').type(city)
            cy.wait(tiempo)
        
            cy.get('.selectContainer > .input-group > .form-control').select(state).should('have.value',state)
            cy.wait(tiempo)

        }

        Seccion_tres(zip_code,website,hosting,description,tiempo){
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
        }
}//final

export default ProyectoUno_PO;