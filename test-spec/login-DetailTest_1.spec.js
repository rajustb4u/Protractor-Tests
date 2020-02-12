describe('Acumen Login page Detailed Test', function() {

    //Login Page which logs in to the application and validates the first title.
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 59 Login with incorrect credentials (Error conditions)', function() {
        var acumenLogin_Page = new AcumenLoginPage();

    //*Email* and *Password* fields are empty, try to click on "Log in" button
        expect(acumenLogin_Page.logInToApp_state()).toEqual('true');
        console.log('Login button is in disabled state: ');

        //*correct* email and *empty* password field then Login button is *greyed out* and it's not possible to click on it
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName);
        expect(acumenLogin_Page.logInToApp_state()).toEqual('true');
        console.log('Login button is greyed out and it is not possible to click on it when PASSWORD is empty: ');

        // *correct* password and *empty* email field then Login button is *greyed out* and it's not possible to click on it
        acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillPassword(data.loginPage_Data.password);
        expect(acumenLogin_Page.logInToApp_state()).toEqual('true');
        console.log('Login button is greyed out and it is not possible to click on it when USER NAME is empty: ');

        //*correct* email and *incorrect* password validate the error message
        // acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName);
        acumenLogin_Page.passwordClear();
        acumenLogin_Page.fillPassword(data.loginPage_Data.password_Validation1);
        acumenLogin_Page.logInToApp();
        expect(common_Component.getElementErrorByFormName('loginForm')).toEqual(data.loginPage_Data.login_errorMsg);

        //*In correct* email and correct* password validate the error message
        acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName_Validation1);
        acumenLogin_Page.passwordClear();
        acumenLogin_Page.fillPassword(data.loginPage_Data.password);
        acumenLogin_Page.logInToApp();
        expect(common_Component.getElementErrorByFormName('loginForm')).toEqual(data.loginPage_Data.login_errorMsg);

        //Type *correct credentials* and click on Login button User successfully logged into the system and *Get Started* page is opened
        acumenLogin_Page.userNameClear();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName);
        acumenLogin_Page.passwordClear();
        acumenLogin_Page.fillPassword(data.loginPage_Data.password);
        acumenLogin_Page.logInToApp();
        console.log('The User logged in: ');
        acumenLogin_Page.changePasswordCancelButton();
        acumenLogin_Page.productUpdatesOK();
        console.log('Acumen is logged in with AutomationUser :');
      //  expect(acumenLogin_Page.getTheTitle()).toEqual('Get Started');
        browser.sleep(1000);
        acumenLogin_Page.app_Logout();
        console.log('The user logged out: ');
    });
});

