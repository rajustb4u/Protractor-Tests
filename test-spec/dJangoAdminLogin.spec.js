var protractor = require('protractor');
require('C:/acumen-automated-regression-tests/acumen-automated-BDD-E2E-tests/node_modules/jasminewd');
describe('dJango Admin Login', function() {
    it('Lets login : ', function() {
            var ptor = protractor.getInstance();
            var driver = ptor.driver;
            driver.get('https://qa.opaqnetworks.net/admin/login/?next=/admin/');
            var findByName = function(name) {
                return driver.findElement(protractor.By.name(name));
            };

            driver.get(config.url);
            findByName('username').sendKeys('testing_support@opaqnetworks.com');
            findByName('password').sendKeys('test1234');
            findByName('Log in').click();

    });
});
