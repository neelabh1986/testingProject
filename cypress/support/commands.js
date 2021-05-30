import {testObj} from '../fixtures/testObject'

Cypress.Commands.add('enterContactDetail', () => {
    cy.get(testObj.contactUs, {timeout: 10000}).should('be.visible').contains('Contact Us')
    cy.get(testObj.fullName, {timeout: 10000}).should('be.visible').type(Cypress.env('fullName'))
    cy.get(testObj.phoneNum).should('be.visible').type(Cypress.env('phoneNumber'))
    cy.get(testObj.emailId).should('be.visible').type(Cypress.env('username'))
    cy.get(testObj.textField).should('be.visible').type(Cypress.env('message'))
    cy.get(testObj.sendBtn).should('be.visible').click()
})

Cypress.Commands.add('successMessage', () => {
    cy.get(testObj.successMessage, {timeout: 20000}).should('be.visible').contains('We have received your inquiry successfully!')
})