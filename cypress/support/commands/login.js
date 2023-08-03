const { authUrl } = require('../../../endpoints')

Cypress.Commands.add('login', (user) => {
  cy.visit('/')
  cy.origin(authUrl, { args: { user } }, ({ user }) => {
    cy.get('#Username').type(user.login)
    cy.get('#Password').type(user.password)
    cy.get('.ant-btn-primary').click()
  })
})
