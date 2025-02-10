describe('Cart Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Deve abrir e fechar o carrinho', () => {
    cy.get('[data-testid="ShoppingCartIcon"]').click();
    cy.get('[data-testid="cart-modal"]').should('be.visible');

    cy.get('[data-testid="close-cart-button"]').click();
    cy.get('[data-testid="cart-modal"]').should('not.exist');
  });

  it('Deve adicionar e remover produtos no carrinho', () => {
    cy.get('[data-testid="hero-product-add-to-cart"]').click();
    cy.get('[data-testid="product-add-to-cart-0"]').click();

    cy.get('[data-testid="ShoppingCartIcon"]').click();

    cy.get('[data-testid="cart-item-0"]').should('contain', 'hero Product');
    cy.get('[data-testid="cart-item-1"]').should('contain', 'Product 1');

    cy.get('[data-testid="remove-item-0"]').click();
    cy.get('[data-testid="cart-item-0"]').should('contain', 'Product 1');
    cy.get('[data-testid="cart-item-1"]').should('not.exist');

    cy.get('[data-testid="cart-total-items"]').should('contain', '1');
  });
});