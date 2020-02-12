describe('Acumen Login page Detailed Test', function() {

    //Login Page which logs in to the application and validates the first title.
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1641 Profile Top Right Global Admin Validation: ', function() {
        var acumenLogin_Page = new AcumenLoginPage();
        console.log('Top right profile Validation for Global Admin: ');

        acumenLogin_Page.navigateToMainApp();
        browser.sleep(1000);
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName);
        acumenLogin_Page.fillPassword(data.loginPage_Data.password);
        acumenLogin_Page.logInToApp();
        console.log('The User logged in: ');
        browser.sleep(1000);

        acumenLogin_Page.changePasswordCancelButton();
        acumenLogin_Page.productUpdatesOK();
        console.log('Acumen is logged in with AutomationUser :');
        //1. Login with *Global Admin 2. Focus on *Right top profile*. Such information is present:- Customer Admin Full Name
        // - Customer Name- Admin Role (*Global Administrator*)- Two first letters from customer name in circle.
        expect(acumenLogin_Page.customerAdmin_FullName()).toEqual(data.loginPage_Data.customer_ValidateGlobalAdmin);
        console.log('Customer Global Admin full Name: '+data.loginPage_Data.customer_ValidateGlobalAdmin);

        expect(acumenLogin_Page.customerAdmin_Validate()).toEqual(data.loginPage_Data.customer_ValidateGlobalAdmin);
        console.log('Customer Gloabl Admin to Validate its Global Admin or not: '+data.loginPage_Data.customer_ValidateGlobalAdmin);

        expect(acumenLogin_Page.customerAdmin_Initials()).toEqual(data.loginPage_Data.customer_AdminInitials);
        console.log('Customer Gloabl Admin Initials to Validate : '+data.loginPage_Data.customer_AdminInitials);

        acumenLogin_Page.app_Logout();
    });

    it('AC - 1641 Profile Top Right Support Admin Validation: ', function() {
        var acumenLogin_Page = new AcumenLoginPage();
        console.log('Top right profile Validation for Global Admin: ');
        browser.sleep(1000);
        acumenLogin_Page.navigateToMainApp();
        acumenLogin_Page.fillUserName(data.loginPage_Data.loginName_Support);
        acumenLogin_Page.fillPassword(data.loginPage_Data.password);
        acumenLogin_Page.logInToApp();

        browser.sleep(2000);
        common_Component.DuoPassCode();
        browser.sleep(1000);
        console.log('The Customer Dialog:');
        common_Component.TS_Customer();
        browser.sleep(2000);
        console.log('Acumen is logged in with AutomationUser :');
        //1. Login with *Support Admin 2. Focus on *Right top profile*. Such information is present:- Customer Admin Full Name
        // - Customer Name- Admin Role (*Global Administrator*)- Two first letters from customer name in circle.
        expect(acumenLogin_Page.customerAdmin_FullName()).toEqual(data.loginPage_Data.customer_SupportAdminFullName);
        console.log('Customer Support Admin full Name: '+data.loginPage_Data.customer_SupportAdminFullName);
        browser.sleep(1000);
        expect(acumenLogin_Page.customerAdmin_Initials()).toEqual(data.loginPage_Data.customer_SupportAdminInitials);
        console.log('Customer Admin Initials to Validate : '+data.loginPage_Data.customer_SupportAdminInitials);
        browser.sleep(1000);
        expect(acumenLogin_Page.customerName_getText()).toEqual(data.loginPage_Data.customer_Name);
        console.log('Customer Name to Validate : '+data.loginPage_Data.customer_Name);

        browser.sleep(2000);
        acumenLogin_Page.app_Logout();
    });
});

