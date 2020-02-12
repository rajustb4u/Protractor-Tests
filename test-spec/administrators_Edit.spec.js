describe('Acumen Administrator_EditView Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1214 Add / Edit Administrators - Cancel button (Add few sites, add Another admin enter the details and validate the cancel button: ', function() {

        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        //Open *Add/Edit Administrator* form and click on 'Cancel' button *without any changes*.
        common_Component.siteCreate('TestSite');
        browser.sleep(2000);
        common_Component.siteCreate_More('SiteTest');
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        admin_Page.adminAddAnother();
        browser.sleep(1000);
        common_Component.selectItemDropDown('btn-append-to-body', 1);
        console.log('Administrator drop down verified: ');

        // common_Component.selectItemDropDown_1('button.dropdown-toggle', 6);
        common_Component.selectItemDropDown_1('div[ng-if="sites"]', 6);
        console.log('Sites drop down verified: ');
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
        browser.sleep(1000);
        // Add the admin
        admin_Page.adminAdd_Button();
        browser.sleep(1000);
        admin_Page.admin_ResetPasswordNo_Click();
        browser.sleep(1000);
        console.log('add Admin: ');

        admin_Page.Administrators_Link();
        browser.sleep(1000);
        admin_Page.adminAddAnother();
        browser.sleep(1000);
        admin_Page.adminPage_CancelButton();
        browser.sleep(1000);
    });
});
