var AcumenLoginPage = function() {

    var inputUserName = element(by.id('username'));
    LoginUser = element(by.tagName('h1'));
    userName_ErrorMsg = element(by.css('p.help-block.error'));

    this.navigateToMainApp = function () {
        browser.get('http://10.0.80.25');
        // browser.get('https://opaq360.staging.opaqnetworks.com/#/login');
    };

    //****************************************************************
    //UserName
    this.fillUserName = function (name) {
        inputUserName.sendKeys(name);
    };

    this.userNameClear = function () {
        inputUserName.clear();
    };

    this.userNameErrorMsg = function () {
        return userName_ErrorMsg.getText();
    };

    this.userNamePlaceHolder = function () {
        return inputUserName.getAttribute('placeholder');
    };

    this.userNameMaxLength = function () {
        return inputUserName.getAttribute('maxlength');
    };

    this.userNameName = function () {
        return inputUserName.getAttribute('name');
    };

    this.userNameRequired = function () {
        return inputUserName.getAttribute('required');
    };

    //****************************************************************
    //Password
    var inputPassword = element(by.id('password'));

    this.fillPassword = function (password) {
        inputPassword.sendKeys(password);
    };

    this.passwordClear = function () {
        inputPassword.clear();
    };

    this.passwordErrorMsg = function () {
        return userName_ErrorMsg.getText();
    };

    this.passwordPlaceHolder = function () {
        return inputPassword.getAttribute('placeholder');
    };

    this.passwordMaxLength = function () {
        return inputPassword.getAttribute('maxlength');
    };

    this.passwordeMinLength = function () {
        return inputPassword.getAttribute('ng-minlength');
    };

    this.passwordName_Attribute = function () {
        return inputPassword.getAttribute('name');
    };

    this.passwordRequired = function () {
        return inputPassword.getAttribute('required');
    };

    //****************************************************************
    //Password Show/Hide button
    var passwordShow_Button = element(by.css('span[ng-if="$ctrl.showhidebutton"]'));

    this.password_Show_Button = function () {
        passwordShow_Button.click();
    };

    var getPasswordValue = element(by.id('password'));
    this.getPassword_Value = function() {
        return getPasswordValue.getAttribute('value');
    };

    //****************************************************************
    //LoginButton
    var appLogIn = element(by.buttonText('Login'));
    this.logInToApp = function() {
        appLogIn.click();
    };

    this.logInToApp_state = function() {
        return appLogIn.getAttribute('disabled')
    };

    this.logInToApp_getText = function() {
        return appLogIn.getText();
    };

    var login_ErrorMsg = element(by.css('div[ng-repeat="error in loginForm.globalErrors"]'));
    this.loginToApp_ErrorMsg = function() {
        return login_ErrorMsg.getText();
    };

    //****************************************************************

    var homePageTitle = element(by.css('div[ui-view="configuration"] h1'));
    this.getTheTitle = function() {
        return homePageTitle.getText();
    };

    var changePassword_Cancel = element.all(by.buttonText('Cancel'));
    this.changePasswordCancelButton = function() {
        changePassword_Cancel.click();
    };

    var productUpdates_OK = element.all(by.css('button[ng-click="$close()"]'));
    this.productUpdatesOK = function() {
        productUpdates_OK.click();
    };

    //**********************************************************************
    //Top right profile
    var customerAdminFullName = element(by.binding(' userData.roleName '));
    this.customerAdmin_FullName = function() {
        return customerAdminFullName.getText();
    };

    var customerAdminValidate = element(by.css('.col-sm-8.user-profile h3'));
    this.customerAdmin_Validate = function() {
        return customerAdminValidate.getText();
    };

    var customerAdminInitials = element(by.binding(' userData.initials '));
    this.customerAdmin_Initials = function() {
        return customerAdminInitials.getText();
    };

    var selectCustomerDialog_cancel = element(by.css('button[ng-click="$dismiss()"]'));
    this.select_CustomerDialog_cancel = function() {
        selectCustomerDialog_cancel.click();
    };

    var customerName = element(by.binding(' userData.customerName '));
    this.customerName_getText = function() {
        return customerName.getText();
    };

    //**********************************************************************
    //Logout
    var appLogout = element.all(by.css('a[href="#"]'));
    this.app_Logout = function() {
        appLogout.click();
    };

};
module.exports = AcumenLoginPage;
