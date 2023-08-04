const { rm9 } = require('../../../users')
const { HeaderPage } = require('../../support/pages/Header')

describe('top navigation menu from dashboard snapshot', () => {
  it('take a snapshot of header', () => {
    cy.login(rm9)
    cy.snapshot('AT-T1881: top navigation in desktop view')

    HeaderPage.clickLogo()
    cy.snapshot('AT-T1881: Profile-menu is opened')

    HeaderPage.clickHeader3lines()
    cy.snapshot('AT-T1881: Top navigation menu is opened')

    cy.get('body').click(0, 0)
    cy.snapshot('AT-T1881: menu is closed by clicking outside of it')

    HeaderPage.ClickTextLogo()
    cy.snapshot('AT-T1881: Dashboard page is refreshed')
 
    HeaderPage.OpenNotificationsPopup()
    cy.snapshot('AT-T1881: Notifications pop-up is opened')

  })
})