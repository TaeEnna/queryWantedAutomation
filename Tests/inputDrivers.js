var managerPage = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.managerPage()
            manager.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Valid Drivers License': browser => {
        manager
         manager.inputDriversLicense('a', '') 
},
}