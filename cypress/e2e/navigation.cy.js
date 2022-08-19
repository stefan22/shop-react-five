/// <reference types="cypress" />

describe('Main top navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=home-pg-category]').as('category');
  })

  describe('User not logged in', () => {

    it('should redirect a user to "/" whenever "DUCK" logo link is clicked in navigation', () => {
      cy.get('@category').eq(0).click()
      cy.url().should('include', '/shop/hats')
    })

    it('should redirect a user to "/shop" whenever "SHOP" link is clicked in navigation', () => {
      cy.get('@category').eq(0).click()
      cy.url().should('include', '/shop/hats')
    })
    it('should redirect a user to "/signin" whenever "SIGNIN" link is clicked in navigation', () => {
      cy.get('@category').eq(0).click()
      cy.url().should('include', '/shop/hats')
    })

    it('should redirect a user to "/cart" whenever "CART" icon link is clicked in navigation', () => {
      cy.get('@category').eq(0).click()
      cy.url().should('include', '/shop/hats')
    })
  })
})
