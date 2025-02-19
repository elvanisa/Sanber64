describe('Verify Login Functionality', () => {
    it('Success Login', () => {
      cy.visit('https://elva-hrm.com/')
      cy.get('#user-name').type('standard_user')
      cy.get('[data-test="password"]').type('secret_sauce')
      cy.get('.submit-button btn_action').click()
    })
  })