const { rm9 } = require('../../../users')
const { HeaderPage } = require('../../support/pages/Header')

describe('top navigation menu from dashboard snapshot', () => {
  it('makes a snapshot of desktop view', () => {
    cy.login(rm9)
    cy.snapshot('top navigation desktop')

    HeaderPage.clickLogo()
    cy.snapshot('Profile-menu is opened')

  })
})