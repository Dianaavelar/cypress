describe('Api Alurapic', () => {
   // it('Dados da Api', () => {
    //  cy.request({
     //   method: 'POST',
      //  url: 'http://localhost:3000/user/login',
      //  body:Cypress.env()

     // }).then((res) => {
       // expect(res.status).to.be.equal(200)
      //  expect(res.body).is.not.empty
      //  expect(res.body).to.have.property('id')
     //   expect(res.body.id).to.be.equal(4)
     // })
   // })
  //})

  it('Fotos do usuário', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/Diana/login',
      

    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body[O]).to.have.property('description')
      expect(res.body[0]).to.be.equal('carrinho')
    })
  })
})

