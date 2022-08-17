describe('Test success', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.wait(1*1000)

    cy.contains(`Success`)
  })
})