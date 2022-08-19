/// <reference types="cypress" />

describe('Shop Page', () => {
  // lazy loading shop page.
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="navigation-link-shop"]').click()
    cy.wait(1000)

  })

  it('shows page url ending with "/shop"', () => {
    cy.url().should('include','/shop')
  })

  it('renders all five category titles in page', () => {
    cy.get('[data-test=shop-pg__category]').should('have.length', 5)
  })

  describe('Shop Page - Products', () => {
    it('renders all 20 products in page', () => {
      cy.get('[data-test=shop-pg__product-card]')
        .should('have.length', 20)
    })

    describe('Product Card -"Is Hot Hat"', () => {

      it('should have attribute "data-name" of "Is Hot Hat" ', () => {
        cy.get('[data-category="hats"]').eq(2)
          .should('have.attr', 'data-name', 'Is Hot Hat')
      })

      it('should display "ADD TO CART" when hovering over card', () => {
        cy.get('[data-category="hats"]').eq(2)
          .should('have.attr', 'data-name', 'Is Hot Hat')
          .trigger('mouseover');
        cy.get('[data-category="hats"]').eq(2)
          .should('contain.text', 'ADD TO CART');
      })

      it('should redirect to "/shop/hats/is-hot-hat" when clicked ', () => {
        cy.get('[data-category="hats"]').eq(2)
          .should('have.attr', 'data-name', 'Is Hot Hat')
          .click();
        cy.url().should('include', '/shop/hats/Is%20Hot%20Hat');
      })
    })

  });

});




  // it('renders all product titles in page', () => {
  //   cy.get('[data-test=shop-pg__product-title]').should('have.length', 12)
  // }),
  // it('renders all product prices in page', () => {
  //   cy.get('[data-test=shop-pg__product-price]').should('have.length', 12)
  // }),
  // it('renders all product images in page', () => {
  //   cy.get('[data-test=shop-pg__product-image]').should('have.length', 12)
  // }),
  // it('renders all product add to cart buttons in page', () => {
  //   cy.get('[data-test=shop-pg__product-add-to-cart]').should('have.length', 12)
  // }),
  // it('renders all product remove from cart buttons in page', () => {
  //   cy.get('[data-test=shop-pg__product-remove-from-cart]').should('have.length', 12)
  // }),
  // it('renders all product quantity inputs in page', () => {
  //   cy.get('[data-test=shop-pg__product-quantity]').should('have.length', 12)
  // }),
  // it('renders all product subtotal prices in page', () => {
  //   cy.get('[data-test=shop-pg__product-subtotal]').should('have.length', 12)
  // }),
  // it('renders all product total prices in page', () => {
  //   cy.get('[data-test=shop-pg__product-total]').should('have.length', 12)
  // }),
  // it('renders all product remove from cart buttons in page', () => {
  //   cy.get('[data-test=shop-pg__product-remove-from-cart]').should('have.length', 12)
  // })

