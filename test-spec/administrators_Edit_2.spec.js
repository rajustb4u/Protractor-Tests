describe('Acumen Administrator_EditView Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1214 Add / Edit Administrators - Cancel button *Check UI* of confirmation dialog. Click on *No* button, Click on *Yes* button', function() {
        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        // common_Component.appLogin();
        // browser.sleep(1000);
        console.log("Edit & Remove the Administrators: ");
        //*Check UI* of confirmation dialog. Click on *'No'* button, Click on *'Yes'* button
        admin_Page.Administrators_Link();
        browser.sleep(2000);

        admin_Page.change_Admin_detailView1();
        browser.sleep(1000);
        console.log("Administrators Detail view: ");
        browser.sleep(2000);
        admin_Page.changeAdmin1_Edit();
        admin_Page.adminFirstNameEntry(data.adminPage_data.adminName);
        console.log('add Admin Edit');
        admin_Page.admin_PassPhraseEntry(data.adminPage_data.adminPassPhrase);
        console.log('added Admin PassPhrase: ' + data.adminPage_data.adminPassPhrase);
        admin_Page.admin_UpdateButton();
        browser.sleep(1000);
        admin_Page.change_Admin_detailView1();
        browser.sleep(1000);
        admin_Page.changeAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
