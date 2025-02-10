describe('Carrinho de Compras', () => {
  it('Deve adicionar um produto ao carrinho', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Adicionar ao Carrinho').first().click();
    cy.get('[aria-label="Carrinho"]').should('contain', '1');
  });

  it('Deve exibir a mensagem de carrinho vazio', () => {
    cy.visit('http://localhost:5173');
    cy.get('[aria-label="Carrinho"]').click();
    cy.contains('Nenhum item adicionado ainda.').should('be.visible');
  });
});