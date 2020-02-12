var AcumenHomePage = function() {

    var inputUserName = element.all(by.id('username'));
    inputPassword = element.all(by.id('password'));
    appLogIn = element.all(by.buttonText('Login'));
    homePageTitle = element(by.css('div.header'));
    LoginUser = element(by.tagName('h1'));
    changePassword_Cancel = element.all(by.buttonText('Cancel'));

    this.navigateToMainApp = function() {
        browser.get('http://10.0.80.25');
        // browser.get('http://10.0.80.27');
    };

    this.fillUserName = function(name) {
        inputUserName.sendKeys(name);
    };

    this.fillPassword = function(password) {
        inputPassword.sendKeys(password);
    };

    this.logInToApp = function() {
        appLogIn.click();
    };

    this.getTheTitle = function() {
        return homePageTitle.getText();
    };

    this.changePasswordCancelButton = function() {
        changePassword_Cancel.click();
    };

};
module.exports = AcumenHomePage;
