var manager = {}
var create = require('../testAssets/arrayAsset')
module.exports = {
    beforeEach: browser => {
        manager = browser.page.managerPage()
        manager.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Input valid values': browser => {
        create.forEach(test => {
            console.log(test) //this will show and log stuff for you
            manager
                .waitForElementPresent('@tab', 5000)
                .clickText('Open Menu')
                .waitForElementVisible('@enterPage')
                .clickText('Enter Wanted')
                .inputFields(test.valid)
                .clickText('Male')
                .clickText('White')
                .click('@submit')
                .expect.element('@query').text.to.contain('AndyRoach.DD.Officer08.Gabby Doofus.M.W.508.125.Red.Forgery.2019-02-09')
            manager.expect.element('@validMessage').to.be.present
            manager.expect.element('@submit').to.not.be.enabled

        })
    }
}