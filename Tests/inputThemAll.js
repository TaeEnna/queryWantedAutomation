var ManagerPage = {}

module.exports = {
    beforeEach: browser => {
        testManager = browser.page.managerPage()
        testManager.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Valid Drivers License': browser => {
        testManager
            .waitForElementPresent('@tab', 5000)
            .clickText('Open Menu')
            .waitForElementVisible('@enterPage')
            .clickText('Enter Wanted')
            .setValue('@header', 'AndyRoach')
            .setValue('@mke', 'DD')
            .setValue('@ori', 'Officer08')
            .setValue('@name', 'Gabby Doofus')
            .clickText('Male')
            .clickText('White')
            .setValue('@height', '508')
            .setValue('@weight', '125')
            .setValue('@hair', 'Red')
            .setValue('@offense', 'Forgery')
            .setValue('@dateWarrant', '02092019')
            .click('@submit')
        testManager.expect.element('@query').text.to.contain('AndyRoach.DD.Officer08.Gabby Doofus.M.W.508.125.Red.Forgery.2019-02-09').before(5000)
        testManager.expect.element('@validMessage').to.be.present
        testManager.expect.element('@submit').to.not.be.enabled

    },
}