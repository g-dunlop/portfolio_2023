describe('template spec', () => {

  beforeEach(() => {
    cy.intercept('POST', 'https://dashing-kiwi-64.hasura.app/v1/graphql').as('projects')
  })
  it('loads correctly', () => {
    cy.visit(Cypress.config().baseUrl)

    cy.wait('@projects').then(interception => {
      cy.log(interception.response.body)
      expect(interception.response.statusCode).to.eq(200)
    })
  })
})