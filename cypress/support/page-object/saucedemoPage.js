class saucedemoPage {
    title = '[data-test="title"]'
    logo = '.app_logo'
    select_backpack = '[data-test="add-to-cart-sauce-labs-backpack"]'
    remove_backpack = '[data-test="remove-sauce-labs-backpack"]'
    cart = '[data-test="shopping-cart-link"]'
    select_bike_light = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    cart_list = '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]'
    first_name = '#first-name'

    selectBackpack(){
        cy.get(this.select_backpack).click()
    }
    verifyRemoveBackpack(){
        cy.get(this.remove_backpack).should('have.text','Remove')
    }
    selectBikeLight(){
        cy.get(this.select_bike_light).click()
    }
    inputUsername(x){
        cy.get('#user-name').type(x)
    }
    verifyCart(angka){
        cy.get(this.cart).should('have.text',angka)
    }
}
export default new saucedemoPage()