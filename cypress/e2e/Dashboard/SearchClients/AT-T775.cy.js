const { SearchClientsPage } = require('../../../support/pages/SearchClients')
const { rm10 } = require('../../../../users')
const { rm9 } = require('../../../../users')


describe('Open "Search client" MW', () => {
    it('opens "Search client" MW without favorite clients', () => {
        cy.login(rm10)
        SearchClientsPage.openSearchClients()
        cy.snapshot('AT-T775: "Search client" MW is opened')
    })

    it('opens "Search client" MW with favorite clients', () => {
        cy.login(rm9)
        SearchClientsPage.openSearchClients()
        cy.snapshot('AT-T775: "Search client" MW is opened')
    })
})