describe('Sign Up Form', function() {

  it('Load the app', function() {
    cy.visit('/')
  })

  // Name Input
  it('Render name input', function() {
    cy.visit('/')
    cy.get('input[name="name"]')
  })

  it('Handle name field input', function() {
    cy.visit('/')
    cy.get('input[name="name"]').type('John Denver')
    cy.get('input[name="name"]').should('have.value', 'John Denver')
  })

  it('Output the name', function() {
    cy.visit('/')
    cy.get('input[name="name"]').type('John Denver')
    cy.contains('p[data-cy="name"]', 'Name: John Denver')
  })

  // Username Input
  it('Render username input', function() {
    cy.visit('/')
    cy.get('input[name="username"]')
  })

  it('Handle username field input', function() {
    cy.visit('/')
    cy.get('input[name="username"]').type('jdenver')
    cy.get('input[name="username"]').should('have.value', 'jdenver')
  })

  it('Output the username', function() {
    cy.visit('/')
    cy.get('input[name="username"]').type('test@test.com')
    cy.contains('p[data-cy="username"]', 'Username: test@test.com')
  })

  // Email Input
  it('Render email input', function() {
    cy.visit('/')
    cy.get('input[name="email"]')
  })

  it('Handle email field input with valid input', function() {
    cy.visit('/')
    cy.get('input[name="email"]').type('test@test.com')
    cy.get('input[name="email"]').should('have.value', 'test@test.com')
  })

  it('Show error for invalid email input', function() {
    cy.visit('/')
    cy.get('input[name="email"]').type('test').blur()
    cy.contains('.help.is-danger', 'The email field must be a valid email.')
  })

  it('Show error for invalid email input, then hide again when corrected', function() {
    cy.visit('/')
    cy.get('input[name="email"]').type('test').blur()
    cy.contains('.help.is-danger', 'The email field must be a valid email.')
    cy.get('input[name="email"]').type('test@test.com').blur()
    cy.contains('.help.is-danger', 'The email field must be a valid email.').should('not.exist')
  })

  it('Show error when missing required email input', function() {
    cy.visit('/')
    cy.get('input[name="email"]').focus().blur()
    cy.contains('.help.is-danger', 'The email field is required.')
  })

  it('Output the email', function() {
    cy.visit('/')
    cy.get('input[name="email"]').type('test@test.com')
    cy.contains('p[data-cy="email"]', 'Email: test@test.com')
  })

  // Subject Select
  it('Render subject input', function() {
    cy.visit('/')
    cy.get('select[name="subject"]')
  })

  it('Handle subject select', function() {
    cy.visit('/')
    cy.get('select[name="subject"]').select('Option 1')
    cy.get('select[name="subject"]').should('have.value', 'Option 1')
  })

  it('Output the subject', function() {
    cy.visit('/')
    cy.get('select[name="subject"]').select('Option 1')
    cy.contains('p[data-cy="subject"]', 'Subject: Option 1')
  })

  // Message Input
  it('Render message input', function() {
    cy.visit('/')
    cy.get('textarea[name="message"]')
  })

  it('Handle message select', function() {
    cy.visit('/')
    cy.get('textarea[name="message"]').type('Hello World')
    cy.get('textarea[name="message"]').should('have.value', 'Hello World')
  })

  it('Output the message', function() {
    cy.visit('/')
    cy.get('textarea[name="message"]').type('Hello World')
    cy.contains('p[data-cy="message"]', 'Message: Hello World')
  })

  // TOS Checkbox Input
  it('Render tos-agree input', function() {
    cy.visit('/')
    cy.get('input[name="tos-agree"]')
  })

  it('Handle tosAgree input', function() {
    cy.visit('/')
    cy.get('input[name="tos-agree"]').check()
    cy.get('input[name="tos-agree"]').should('have.value', 'on')
  })

  it('Output the tosAgree', function() {
    cy.visit('/')
    cy.get('input[name="tos-agree"]').check()
    cy.contains('p[data-cy="tos-agree"]', 'TOS Agreed: true')
  })

  it('Output the tosAgree', function() {
    cy.visit('/')
    cy.get('input[name="tos-agree"]').check()
    cy.contains('p[data-cy="tos-agree"]', 'TOS Agreed: true')
    cy.get('input[name="tos-agree"]').uncheck()
    cy.contains('p[data-cy="tos-agree"]', 'TOS Agreed: false')
  })

})
