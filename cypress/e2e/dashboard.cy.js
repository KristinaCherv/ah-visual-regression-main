const { rm9 } = require('../../users')

describe('dashboard snapshot', () => {
  it('makes a snapshot of the dashboard', () => {
    cy.login(rm9)
    cy.snapshot('dashboard')
  })
})
