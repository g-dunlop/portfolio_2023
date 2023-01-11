describe('template spec', () => {

  beforeEach(() => {
    
    cy.intercept('POST', 'https://dashing-kiwi-64.hasura.app/v1/graphql').as('projects')
    cy.visit('/')
    // cy.log(Cypress.env('baseUrl'))
  })
  it('loads correctly', () => {
    

    cy.wait('@projects').then(interception => {
      cy.log(interception.response.body)
      expect(interception.response.statusCode).to.eq(200)
    })
  })
})