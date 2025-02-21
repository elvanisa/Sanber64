import saucedemoPage from "../../support/page-object/saucedemoPage"

describe('Verify add to cart functionality', () => {
  beforeEach(() => {
    cy.visit('')
  })
  it('Add a product to cart', () => {
    cy.login('standard_user','secret_sauce')
    cy.get('.app_logo').should('be.visible')
    cy.get('[data-test="title"]').should('have.text','Products')
    cy.url().should('include','inventory')
    //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    saucedemoPage.selectBackpack()
    //cy.get('[data-test="remove-sauce-labs-backpack"]').should('have.text','Remove')
    saucedemoPage.verifyRemoveBackpack()
    saucedemoPage.verifyCart(1)
    saucedemoPage.selectBikeLight()
    saucedemoPage.verifyCart(2)
    cy.get(saucedemoPage.cart).click()
    cy.url().should('include','cart')
    cy.get(saucedemoPage.title).should('have.text','Your Cart')
    cy.get(saucedemoPage.cart_list).should('contain.text','Backpack')
  })
})