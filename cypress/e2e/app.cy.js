describe('App Component', () => {
  beforeEach(() => {
    cy.visit('localhost:5173');
  });

  it('should render the hero product correctly', () => {
    cy.get('[data-testid="hero-product"]').should('be.visible');
    cy.get('[data-testid="hero-product-image"]').should('have.attr', 'src').should('include', 'placehold.co/940x300/999/CCC');
    cy.get('[data-testid="hero-product-name"]').should('contain.text', 'hero Product');
    cy.get('[data-testid="hero-product-detail"]').should('contain.text', 'Lorem ipsum dolor sit amet');
    cy.get('[data-testid="hero-product-price"]').should('contain.text', 'R$');
    cy.get('[data-testid="hero-product-add-to-cart"]').should('be.visible');
  });

  it('should render other products correctly', () => {
    cy.get('[data-testid^="product-card-"]').each(($el, index) => {
      cy.wrap($el).should('be.visible');
      cy.get(`[data-testid="product-image-${index}"]`).should('have.attr', 'src').should('include', 'placehold.co');
      cy.get(`[data-testid="product-name-${index}"]`).should('contain.text', `Product ${index+1}`);
      cy.get(`[data-testid="product-detail-${index}"]`).should('contain.text', 'Lorem ipsum dolor sit amet');
      cy.get(`[data-testid="product-price-${index}"]`).should('contain.text', 'R$');
      cy.get(`[data-testid="product-add-to-cart-${index}"]`).should('be.visible');
    });
  });
});

