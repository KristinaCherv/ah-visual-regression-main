const { SearchClientsPage } = require('../../../support/pages/SearchClients')
const { rm9 } = require('../../../../users')

describe('"Search clients" functionality testing', () => {
    it('tests "Search clients" functionality', () => {
        cy.login(rm9)

        SearchClientsPage.openSearchClientsShortcut()
        cy.snapshot('AT-T776: "Search clients" MW is opened using shortcut')

        SearchClientsPage.typeInSearchField('Franz')
        cy.snapshot('AT-T776: Client was found')

        cy.get('body').click(0, 0)
        cy.snapshot('AT-T776: MW is closed by clicking outside of it')

        SearchClientsPage.openSearchClientsShortcut()
        cy.snapshot('AT-T776: MW is opened with previously entered client name')

        SearchClientsPage.clearSearchField()
        cy.snapshot('AT-T776: "Search" field is cleared')

        SearchClientsPage.typeInSearchField('Celine')
        cy.snapshot('AT-T776: Client was not found')
        SearchClientsPage.clearSearchField()

        SearchClientsPage.typeInSearchField('anj')
        cy.snapshot('AT-T776: Few clients were found')

    })
})