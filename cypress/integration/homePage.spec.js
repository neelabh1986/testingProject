/// <reference types="Cypress" />

describe('Home Page', () => {
    before(() => {
        Cypress.config('userAgent')
    })

    it('Visit website', () => {
        cy.visit(Cypress.env('domain'))
    })

    it('contact us', () => {
        cy.enterContactDetail()
    })

    it('logout page', () => {
        cy.successMessage()
    })
})