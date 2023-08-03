const { visual } = require('../../../timeouts')

class SearchClients {

    // open "Search clients" MW by clicking on it
    openSearchClients() {
        cy.wait(visual)
        cy.get('span').contains('Search clients...').parent().click()
    }

    // open "Search clients" Mw using the shortcut
    openSearchClientsShortcut() {
        cy.wait(visual)
        cy.get('body').type('{ctrl+k}')
    }

    // type a client name in "Search" field
    typeInSearchField(clientName) {
        cy.wait(visual)
        cy.get('[placeholder="Search..."]').type(clientName)
    }

    // clear "Search" field
    clearSearchField() {
        cy.wait(visual)
        cy.get('input[placeholder="Search..."]').clear({ force: true })
    }
}

module.exports = {
    SearchClientsPage: new SearchClients()
}