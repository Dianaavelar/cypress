describe('Página de login', () => {
    it('Verificar mensagem de campo obrigatórios', () => {
      cy.visit('http://localhost:4200/#/home')
      cy.contains('User name is required!').should('be.visible');
      cy.contains( 'Password is required!').should('be.visible');
     
    })
  })