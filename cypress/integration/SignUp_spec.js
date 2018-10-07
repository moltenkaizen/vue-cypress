describe('Testing', function() {

  it('should load the app', function      () {
    cy.visit('/')
  })

  // it('should not exist unless button pressed', function() {
  //   cy.visit('/')
  //   cy.get('.thing-paragraph').should('not.exist')
  // })
  //
  // it('should exist when button pressed', function() {
  //   cy.visit('/')
  //   cy.get('[data-cy=clickButton]').click();
  //   cy.get('.thing-paragraph').should('exist')
  // })
  //
  // it('should hide paragraph on button press if it exists', function() {
  //   cy.visit('/')
  //   cy.get('[data-cy=clickButton]').click();
  //
  //   if (cy.get('.thing-paragraph')) {
  //     cy.get('[data-cy=clickButton]').click();
  //     cy.get('.thing-paragraph').should('not.exist')
  //   }
  // })

})
