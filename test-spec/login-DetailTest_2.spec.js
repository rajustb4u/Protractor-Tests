describe('Acumen Login page Detailed Test', function() {

    //Login Page which logs in to the application and validates the first title.
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1055 Login FE Validation', function() {
        var acumenLogin_Page = new AcumenLoginPage();
        browser.sleep(1000);
        acumenLogin_Page.navigateToMainApp();
        console.log('Open the Acumen login Page for Detailed Validation: ');
        browser.sleep(1000);

        //Try to login with *incorrect* +*Email*+ value: and validate the error messages:
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName_Validation);
        expect(common_Component.getElementErrorByInputName('username')).toEqual(data.loginPage_Data.loginName_errorMsg);
        console.log('Validate the Email error message when we input automation@: ');

        acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName_Validation1);
        expect(common_Component.getElementErrorByInputName('username')).toEqual(data.loginPage_Data.loginName_errorMsg);
        console.log('Validate the Email error message when we input automation: ');

        acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName_Validation2);
        expect(common_Component.getElementErrorByInputName('username')).toEqual(data.loginPage_Data.loginName_errorMsg);
        console.log('Validate the Email error message when we input automation@automation.$ ');

        acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName_Validation3);
        expect(common_Component.getElementErrorByInputName('username')).toEqual(data.loginPage_Data.loginName_errorMsg);
        console.log('Validate the Email error message when we input automation@automation.c$ ');

        //Try to remove the user name the field shows a required:
        acumenLogin_Page.userNameClear();
        expect(common_Component.getElementErrorByInputName('username')).toEqual(data.loginPage_Data.loginName_RequirederrorMsg);
        console.log('Validate the USERNAME with the required message telling to the customer the the filed is mandatory: ');

        //Try to login with *incorrect* +*password*+ value: and validate the error messages:
        acumenLogin_Page.fillPassword(data.loginPage_Data.password_Validation);
        browser.sleep(1000);
        expect(common_Component.getElementErrorByInputName('password')).toEqual(data.loginPage_Data.password_errorMsg);
        console.log('Validate the PASSWORD error message when one character is entered: ');

        acumenLogin_Page.passwordClear();
        expect(common_Component.getElementErrorByInputName('password')).toEqual(data.loginPage_Data.password_RequirederrorMsg);
        console.log('Validate the PASSWORD with the required message telling to the customer the the filed is mandatory: ');

        //Type *correct credentials* and click on Login button User successfully logged into the system and *Get Started* page is opened
        acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName);
        acumenLogin_Page.passwordClear();
        acumenLogin_Page.fillPassword(data.loginPage_Data.password);
        browser.sleep(1000);
        acumenLogin_Page.logInToApp();
        console.log('The User logged in: ');
    });

    it('AC - 1643 Logout Acumen App: ', function() {
        var acumenLogin_Page = new AcumenLoginPage();
        browser.sleep(1000);
        acumenLogin_Page.changePasswordCancelButton();
        console.log('Acumen is logged in with AutomationUser :');
        acumenLogin_Page.productUpdatesOK();
        console.log('Acumen is logged in with AutomationUser :');
        // expect(acumenLogin_Page.getTheTitle()).toEqual('Get Started');
        browser.sleep(1000);
        acumenLogin_Page.app_Logout();
        console.log('The user logged out: ');
        browser.sleep(1000);
    });


});

