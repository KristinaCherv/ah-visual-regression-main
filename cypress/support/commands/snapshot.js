const { visual } = require('../../../timeouts')

Cypress.Commands.add('snapshot', (title) => {
  cy.wait(visual)
  cy.percySnapshot(title)
})
