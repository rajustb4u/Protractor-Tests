describe('Acumen Administrator_ListView Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1156 Administrators List view', function() {

        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        // Create Sites:
        common_Component.siteCreate('TestSite');
        browser.sleep(2000);
        common_Component.siteCreate_More('SiteTest');
        browser.sleep(1000);
        common_Component.appLogout();

        //Add all 2 administrators
        for (i = 0; i < 4; i++) {
            common_Component.appLogin();
            browser.sleep(1000);
            admin_Page.Administrators_Link();
            browser.sleep(1000);
            admin_Page.adminAddAnother();
            browser.sleep(1000);

            expect(admin_Page.adminPage_Title()).toEqual(data.adminPage_data.adminTitle);
            console.log('validating the Title of Admin Page: ' + data.adminPage_data.adminTitle);

            common_Component.selectItemDropDown('btn-append-to-body', i);
            browser.sleep(1000);
            // common_Component.selectItemDropDown_1('button.dropdown-toggle', i + 5);
            common_Component.selectItemDropDown_1('div[ng-if="sites"]', 7);
            browser.sleep(1000);
            //Enter the data into the Administrators
            admin_Page.adminFirstNameEntry(data.adminPage_data.adminName);
            console.log('added Admin Name: ' + data.adminPage_data.adminName);
            admin_Page.adminEmailEntry(data.adminPage_data.adminEmail + i);
            console.log('added Admin Email: ' + data.adminPage_data.adminEmail + i);
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
            browser.sleep(1000);
            common_Component.appLogout();
        };

        element.all(by.css('div[admin="admin"]')).then(function(items) {
            console.log("Total Admins in the list: " + items.length);
            console.log("Admin Names from the site list....");
            });
        element.all(by.binding('admin.user.first_name ')).getText().then(function (text) {
            console.log(text);
        });
        element.all(by.binding(' $ctrl.roles[admin.role_id] ')).getText().then(function (text) {
            console.log(text);
        });

    });

    it('AC - 1156 Administrators List view', function() {
        var admin_Page = new administrators_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        console.log('Deleting all the 2 administrators created: ');
        admin_Page.globalAdmin_detailView1();
        browser.sleep(1000);
        admin_Page.globalAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);

        admin_Page.change_Admin_detailView1();
        browser.sleep(1000);
        admin_Page.changeAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);

        admin_Page.troubleShoo_Admin_detailView1();
        browser.sleep(1000);
        admin_Page.troubleShoot_Admin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);

        admin_Page.dashboard_Admin1_detailView();
        browser.sleep(1000);
        admin_Page.dashboardAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);

        for (i = 1; i < 3; i++) {
            browser.sleep(2000);
            common_Component.siteDelete();
            browser.sleep(1000);

        };
        common_Component.appLogout();
    });
});
