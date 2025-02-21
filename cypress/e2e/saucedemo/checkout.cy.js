import saucedemoPage from "../../support/page-object/saucedemoPage"

describe('Verify add to cart functionality', () => {
    beforeEach(() => {
      cy.visit('')
      cy.login('standard_user','secret_sauce')
      cy.selectProduct()
      cy.get('#checkout').click()
      cy.url().should('include','checkout')
    })
    it('Success Checkout', () => {
      cy.inputText(saucedemoPage.first_name,'sanbercode')
      cy.inputText('#last-name','bootcamp')
      cy.inputText('#postal-code','53647')
      cy.get('#continue')
    })
    it('Failed Checkout - Empty Last Name', () => {
      cy.inputText(saucedemoPage.first_name,'sanbercode')
      cy.inputText('#postal-code','53647')
      cy.get('#continue').click()
      cy.verifyContain('[data-test="error"]','Last Name is required')
    })
  })