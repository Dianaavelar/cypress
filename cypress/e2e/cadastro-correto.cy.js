import Cadastro from '../support/pages/cadastro/pagina-cadastro';


describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    
    //cy.visit('http://localhost:4200/#/home')
    //cy.contains('a', 'Register now').click();
    //cy.get('[data-test="email"]').type('sralafuente@email.com.br')
    //cy.get('[data-test="fullName"]').type('Diana Lafuente')
    //cy.get('[data-test="registerUserName"]').type('dianalafuente')
    //cy.get('[data-test="registerPassword"]').type('diana123')
    //cy.contains('button', 'Register').click();
    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();
  })
})