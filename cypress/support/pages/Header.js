class Header {

    clickLogo() {
        cy.get('span').contains('Profile options').parent().click()
    }

    clickLogout() {
        cy.get('span').contains('Logout').parent('button').click()
    }


    clickHeader3lines() {
        cy.get('span').contains('Open main menu').parent().click()
    }

}

module.exports = {
    HeaderPage: new Header()
}