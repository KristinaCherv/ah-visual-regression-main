class Header {

    clickLogo() {
        cy.get('span').contains('Profile options').parent().click()
    }

    clickLogout() {
        cy.get('span').contains('Logout').parent('button').click()
    }

    selectHeaderMenu(groupName) {
        cy.contains('a', groupName).then(menu => {
            cy.wrap(menu).click()
        })
    }

}

module.exports = {
    HeaderPage: new Header()
}