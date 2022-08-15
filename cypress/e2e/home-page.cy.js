/// <reference types="cypress" />

describe('Shop React Five App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders "We\'re loaded! Browse our huge inventory! near top of home page"', () => {
    let heading = "We're loaded! Browse our huge inventory!"
    cy.get("[data-test='home-pg-heading']").should('have.text', heading)
  })

  it('shows five categories buttons in home page', () => {
    cy.get('[data-test=home-pg-category]').should('have.length', 5)
  })

  it('should redirect a user to "/shop/hats" when clicking on "hats" category', () => {
    cy.get('[data-test=home-pg-category]').eq(0).click()
    cy.url().should('include', '/shop/hats')
  })
  it('should redirect a user to "/shop/jackets" when clicking on "jackets" category', () => {
    cy.get('[data-test=home-pg-category]').eq(1).click()
    cy.url().should('include', '/shop/jackets')
  })
  it('should redirect a user to "/shop/sneakers" when clicking on "sneakers" category', () => {
    cy.get('[data-test=home-pg-category]').eq(2).click()
    cy.url().should('include', '/shop/sneakers')
  })
  it('should redirect a user to "/shop/women" when clicking on "women" category', () => {
    const categoryEle = cy.get('[data-test=home-pg-category]')
    categoryEle.eq(3).click()
    cy.url().should('include', '/shop/women')
  })
  it('should redirect a user to "/shop/men" when clicking on "men" category', () => {
    cy.get('[data-test=home-pg-category]').eq(4).click()
    cy.url().should('include', '/shop/men')
  })
})
