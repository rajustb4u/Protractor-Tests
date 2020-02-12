describe('Acumen Login page Detailed Test', function() {

    //Login Page which logs in to the application and validates the first title.
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');


    it('AC - 60 Login Page UI Check', function() {

        var acumenLogin_Page = new AcumenLoginPage();
        console.log('Login to Acumen App');

        acumenLogin_Page.navigateToMainApp();
        console.log('Open the Acumen login Page for UI check: ');

        expect(acumenLogin_Page.userNamePlaceHolder()).toMatch(data.loginPage_Data.loginName_PlaceHolder_Attribute);
        console.log('USER NAME Placeholder verification done: ' + data.loginPage_Data.loginName_PlaceHolder_Attribute);

        expect(acumenLogin_Page.userNameName()).toMatch(data.loginPage_Data.loginName_Name_Attribute);
        console.log('USER NAME Field Name verification done: ' + data.loginPage_Data.loginName_Name_Attribute);

        expect(acumenLogin_Page.userNameMaxLength()).toMatch(data.loginPage_Data.loginName_maxLength_Attribute);
        console.log('USER NAME Max Length verification done: ' + data.loginPage_Data.loginName_maxLength_Attribute);

        expect(acumenLogin_Page.userNameRequired()).toMatch(data.loginPage_Data.loginName_required_Attribute);
        console.log('User Name is a required Filed: '+data.loginPage_Data.loginName_required_Attribute);

        expect(acumenLogin_Page.passwordPlaceHolder()).toMatch(data.loginPage_Data.password_PlaceHolder_Attribute);
        console.log('PASSWORD Placeholder is Empty');

        expect(acumenLogin_Page.passwordName_Attribute()).toMatch(data.loginPage_Data.password_Name_Attribute);
        console.log('PASSWORD Field Name verification done: ' + data.loginPage_Data.password_Name_Attribute);

        expect(acumenLogin_Page.passwordMaxLength()).toMatch(data.loginPage_Data.password_maxLength_Attribute);
        console.log('PASSWORD Max Length verification done: ' + data.loginPage_Data.password_maxLength_Attribute);

        expect(acumenLogin_Page.passwordeMinLength()).toMatch(data.loginPage_Data.password_minLength_Attribute);
        console.log('PASSWORD Max Length verification done: ' + data.loginPage_Data.password_minLength_Attribute);

        expect(acumenLogin_Page.passwordRequired()).toMatch(data.loginPage_Data.password_required_Attribute);
        console.log('PASSWORD is a required Filed: '+data.loginPage_Data.password_required_Attribute);
    });
});

