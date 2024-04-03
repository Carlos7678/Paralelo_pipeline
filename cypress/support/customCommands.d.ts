declare namespace Cypress {
    interface Chainable<Subject> {
        Campo_visible(selector: any, texto: any, t: any): Chainable<any>
        Campo_visible_xpath(selector: any, texto: any, t: any): Chainable<any>
        Click(selector: any, t: any): Chainable<any>
        Click_force(selector: any, t: any): Chainable<any>
        Click_force_xpath(selector: any, t: any): Chainable<any>
        bloque_ToolsQA(name: any, email: any, dir1: any, dir2: any, tiempo: any): Chainable<any>
        reto_custom(name: any, surname: any, email: any, phone: any, address: any, city: any, state: any, zip_code: any, website: any, hosting: any, description: any, tiempo: any): Chainable<any>
        Validar_campo(selector: any, men: any, nombre_campo: any, t: any): Chainable<any>
        Validar_campo2(selector: any, men: any, nombre_campo: any, t: any): Chainable<any>
  }
}