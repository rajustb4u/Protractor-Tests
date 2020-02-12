describe('Acumen Dashboard Administrator Detail View Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 11158 Administrators Detail View, adding Dashboard admin & validating the detailed view buttons: ', function() {

        var admin_Page = new administrators_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        //Add Dashboard administrator
        admin_Page.adminAddAnother();
        browser.sleep(1000);

        if(expect(admin_Page.adminPage_Title()).toEqual(data.adminPage_data.adminTitle)) {
            console.log('validating the Title of Admin Page: ' + data.adminPage_data.adminTitle);
            common_Component.selectItemDropDown('btn-append-to-body', 3);
            browser.sleep(1000);
            common_Component.selectItemDropDown_1('div[ng-if="sites"]', 7);
            browser.sleep(1000);

            //Enter the data into the Administrators
            admin_Page.adminFirstNameEntry(data.adminPage_data.adminName);
            console.log('added Admin Name: ' + data.adminPage_data.adminName);
            admin_Page.adminEmailEntry(data.adminPage_data.adminEmail);
            console.log('added Admin Email: ' + data.adminPage_data.adminEmail);
            admin_Page.adminPrimaryPhoneEntry(data.adminPage_data.adminPhone);
            console.log('added Admin Phone Number: ' + data.adminPage_data.adminPhone);
            admin_Page.adminCellPhoneEntry(data.adminPage_data.adminCellPhone);
            console.log('added Admin Cell Phone: ' + data.adminPage_data.adminCellPhone);
            admin_Page.admin_PassPhraseEntry(data.adminPage_data.adminPassPhrase);
            console.log('added Admin PassPhrase: ' + data.adminPage_data.adminPassPhrase);
            admin_Page.adminPassPhraseShowButton();
            expect(admin_Page.app_Value()).toEqual(data.adminPage_data.adminPassPhrase);
            console.log('Passphrase validated after show button: ' + data.adminPage_data.adminPassPhrase);
            browser.sleep(3000);
            // Add the admin
            admin_Page.adminAdd_Button();
            browser.sleep(1000);
            admin_Page.admin_ResetPasswordNo_Click();
            browser.sleep(1000);
            console.log('add Admin: ');
        }
    });

    it('AC - 11158 Administrators Detail View, validating the detailed view buttons for Dashboard administrator created: ', function() {
        var admin_Page = new administrators_Page();

        //*'Details' buttons present* for all Administrators.
        if(expect(admin_Page.dashboardAdmin1_detailView_State()).toEqual(null)) {
            admin_Page.dashboard_Admin1_detailView();
            console.log('Dashboard Admin which was created had Detail View button enabled : ');

            if(expect(admin_Page.dashboardAdmin1_Edit_State()).toEqual(null)) {
                console.log('Dashboard Admin which was created Edit button is in enabled state: ');
            }

            if(expect(admin_Page.dashboardAdmin1_Delete_State()).toEqual(null)) {
                console.log('Dashboard Admin which was created Delete button is in enabled state: ');
            }

            if(expect(admin_Page.globalAdminRole_getText()).toEqual(data.adminPage_data.DashboardAdminRole)) {
                console.log('Dashboard Admin Detail View Role data validation: '+data.adminPage_data.DashboardAdminRole);
            }
            if(expect(admin_Page.globalAdminEmail_getText()).toEqual(data.adminPage_data.globalAdminEmail)) {
                console.log('Dashboard Admin Detail View Email data validation: '+data.adminPage_data.globalAdminEmail);
            }
            if(expect(admin_Page.globalAdminPrimaryPhone_getText()).toEqual(data.adminPage_data.DashboardAdminPrimaryPhone)) {
                console.log('Dashboard Admin Detail View Primary Phone data validation: '+data.adminPage_data.DashboardAdminPrimaryPhone);
            }
            if(expect(admin_Page.globalAdminCellPhone_getText()).toEqual(data.adminPage_data.DashboardAdminCellPhone)) {
                console.log('Dashboard Admin Detail View Cell Phone data validation: '+data.adminPage_data.DashboardAdminCellPhone);
            }
        }
        browser.sleep(1000);
        admin_Page.dashboardAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);
        for (i = 1; i < 3; i++) {
            browser.sleep(1000);
            common_Component.siteDelete();
        };
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
