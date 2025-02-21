import saucedemoPage from "../../support/page-object/saucedemoPage"

describe('Verify Login Functionality', () => {

  function randomUser(){
    const randomString = Math.random().toString(36).substring(2,10)
    const randomEmail = randomString + '@mail.com'
    return randomEmail
  }
  let namauser = randomUser()

  beforeEach(() => {
    cy.visit('')
  })
  it('Success Login', () => {
    cy.login('standard_user','secret_sauce')
    cy.get(saucedemoPage.logo).should('be.visible')
    cy.verifyText(saucedemoPage.title,'Products')
    cy.url().should('include','inventory')
  })
  it('Failed Login - user locked out', () => {
    cy.login('locked_out_user','secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
    cy.verifyContain('[data-test="error"]','Sorry, this user has been locked out')
  })
  it('Failed Login - wrong username', () => {
    cy.fixture('message').then((message) => {
      const pesan = message
    cy.login('salah_orang','secret_sauce')
    cy.get('[data-test="error"]').should('be.visible')
    cy.verifyContain('[data-test="error"]',pesan.dontMatch)
  })
  })
  it('Failed Login - wrong password', () => {
    cy.login('standard_user','bukan_password')
    cy.get('[data-test="error"]').should('be.visible')
    cy.verifyContain('[data-test="error"]','Username and password do not match any user in this service')
  })
  it('Failed Login - empty password', () => {
    cy.inputText('[data-test="username"]','standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
    cy.verifyContain('[data-test="error"]','Password is required')
  })
  it('Failed Login - env test', () => {
    cy.login(Cypress.env('prod'),'bukan_password')
    cy.get('[data-test="error"]').should('be.visible')
    cy.verifyContain('[data-test="error"]','Username and password do not match any user in this service')
  })
  it('Test Login with Fixtures', () => {
    cy.fixture('users').then((users) => {
      const datauser = users[3];
      cy.login(datauser.name,datauser.pwd)
    })
  })
  it('Failed Login - random user', () => {
    cy.login(randomUser(),'bukan_password')
    cy.get('[data-test="error"]').should('be.visible')
    cy.verifyContain('[data-test="error"]','Username and password do not match any user in this service')
  })

})