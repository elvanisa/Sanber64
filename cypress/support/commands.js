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

Cypress.Commands.add('login', (username, password) => {
    cy.get('#user-name').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('verifyContain', (locator, textnya) => {
    cy.get(locator)
    .should('contain.text',textnya)
})

Cypress.Commands.add('verifyText', (locator, textnya) => {
    cy.get(locator)
    .should('contain.text',textnya)
})

Cypress.Commands.add('inputText', (locator, textnya) => {
    cy.get(locator)
    .clear()
    .type(textnya)
})

Cypress.Commands.add('selectProduct', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
})

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