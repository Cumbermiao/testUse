const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('百度首页测试', function () {
    var driver

    beforeAll(() => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments(['headless']))
            .build();
    })
    test("should have title 百度一下，你就知道", (done) => {
        driver.get("http://www.baidu.com").then(() => {
            driver.getTitle().then((title) => {
                expect(title).toBe('百度一下，你就知道')
                done()
            })
        })
    }, 5000)
    afterAll(() => {
        driver.quit()
    })
})