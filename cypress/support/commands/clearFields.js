const { visual } = require('../../../timeouts')

Cypress.Commands.add('clearAllFields', () => {
    cy.get('input[type="text"]').each((inputField) => {
        cy.wrap(inputField).clear({ force: true })
    })
})

Cypress.Commands.add('clearFieldByName', (name) => {
    cy.get(`input[class="TextInput"][name=${name}]`).clear({ force: true })
})