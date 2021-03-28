/* global describe, it, expect, cy */

describe('Petgram', function () {
    it('para ver si la app funciona', function () {
        cy.visit('/')
    })

    it('navavegacion por categoria', function () {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('si podemos regresar al home', function () {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('eq', Cypress.config().baseUrl)
    })

    it('Los usuarios no registrado que visitan /favs deben ver los formularios de aplicacion', function () {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
    })
})