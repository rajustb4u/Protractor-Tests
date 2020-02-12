describe('Acumen Administrator_Help Text Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC -1155 Add Administrators - Help Section - validating help text for all fields & add the admin: ', function() {

        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        //Open *Add/Edit Administrator* form and click on on each field and check the help text.
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        admin_Page.adminAddAnother();
        browser.sleep(2000);

        common_Component.selectItemDropDown('btn-append-to-body', 1);
        browser.sleep(2000);
        expect(admin_Page.help_Admin_Type()).toEqual(data.adminPage_data.helpSelectAdministrator);
        console.log('Help text for Select Administrator verified: '+data.adminPage_data.helpSelectAdministrator);

        // common_Component.selectItemDropDown_1('button.dropdown-toggle', 6);
        common_Component.selectItemDropDown_1('div[ng-if="sites"]', 6);
        expect(admin_Page.help_AdminSelect_Sites()).toEqual(data.adminPage_data.helpAdminSelectSites);
        console.log('Help text for Select Sites verified: '+data.adminPage_data.helpAdminSelectSites);

        admin_Page.adminFirstNameEntry(data.adminPage_data.adminName);
        expect(admin_Page.help_Admin_fullName()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Full Name verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.adminEmailEntry(data.adminPage_data.adminEmail);
        expect(admin_Page.help_Admin_Email()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Email verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.adminPrimaryPhoneEntry(data.adminPage_data.adminPhone);
        expect(admin_Page.help_Admin_Phone()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Primary Phone verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.adminCellPhoneEntry(data.adminPage_data.adminCellPhone);
        expect(admin_Page.help_Admin_CellPhone()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Cell Phone verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.admin_PassPhraseEntry(data.adminPage_data.adminPassPhrase);
        expect(admin_Page.help_Admin_PassPhrase()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Pass Phrase verified: '+data.adminPage_data.helpAdmin_ContactInfo);
        browser.sleep(1000);
        // Add the admin
        admin_Page.adminAdd_Button();
        browser.sleep(1000);
        admin_Page.admin_ResetPasswordNo_Click();
        browser.sleep(1000);
        console.log('add Admin: ');
    });

    it('AC -1155 Edit Administrators - Help Section, validate help for all the fields and cancel the form: ', function() {

        var admin_Page = new administrators_Page();
        //Edit the Administrator created, click on each field and validate the help text.
        browser.sleep(1000);
        //Clicking on Administrators link
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        admin_Page.change_Admin_detailView1();
        browser.sleep(1000);
        admin_Page.changeAdmin1_Edit();
        browser.sleep(1000);
        common_Component.selectItemDropDown('btn-append-to-body', 2);
        expect(admin_Page.help_Admin_Type()).toEqual(data.adminPage_data.helpSelectAdministrator);
        console.log('Help text for Select Administrator verified: '+data.adminPage_data.helpSelectAdministrator);

        // common_Component.selectItemDropDown_1('button.dropdown-toggle', 6);
        common_Component.selectItemDropDown_1('div[ng-if="sites"]', 6);
        expect(admin_Page.help_AdminSelect_Sites()).toEqual(data.adminPage_data.helpAdminSelectSites);
        console.log('Help text for Select Sites verified: '+data.adminPage_data.helpAdminSelectSites);

        admin_Page.adminFirstName_Click();
        expect(admin_Page.help_Admin_fullName()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Full Name verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.adminEmailClick();
        expect(admin_Page.help_Admin_Email()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Email verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.adminPrimaryPhoneClick();
        expect(admin_Page.help_Admin_Phone()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Primary Phone verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.adminCellPhoneClick();
        expect(admin_Page.help_Admin_CellPhone()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Cell Phone verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        admin_Page.admin_PassPhraseClick();
        expect(admin_Page.help_Admin_PassPhrase()).toEqual(data.adminPage_data.helpAdmin_ContactInfo);
        console.log('Help text for Admin Pass Phrase verified: '+data.adminPage_data.helpAdmin_ContactInfo);

        browser.sleep(1000);
        admin_Page.adminPage_CancelButton();
        browser.sleep(1000);
        admin_Page.adminPageCancel_Yes_Button();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
