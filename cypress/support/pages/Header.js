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

    ClickTextLogo() {
        cy.get('span').contains('Advisor Hub').parent().click()
    }

    OpenNotificationsPopup() {
        cy.get('span').contains('Notifications').parent().click()
    }

}

module.exports = {
    HeaderPage: new Header()
}