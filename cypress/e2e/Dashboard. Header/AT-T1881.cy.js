const { rm9 } = require('../../../users')
const { HeaderPage } = require('../../support/pages/Header')

describe('top navigation menu from dashboard snapshot', () => {
  it('take a snapshot of header', () => {
    cy.login(rm9)
    cy.snapshot('top navigation in desktop view')

    HeaderPage.clickLogo()
    cy.snapshot('Profile-menu is opened')

    HeaderPage.clickHeader3lines()
    cy.snapshot('Top navigation menu is opened')

  })
})