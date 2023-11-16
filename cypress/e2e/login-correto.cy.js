describe('Página de login', () => {
    it('Deve preencher os campos do formulário corretamente e realizar login', () => {
      cy.visit('http://localhost:4200/#/home')

      cy.get('[data-test="loginUserName"]').type('dianalafuente')
    cy.get('[data-test="loginPassword"]').type('diana123')
    cy.contains('button', ' login ').click();
     
  
    })
  })