describe('Acumen Administrator_EditView Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1214 Add / Edit Administrators - Cancel button (1. Open *Add/Edit Administrator* form *click* on several *fields, dropdown. 2. Cancel without any changes.', function() {

        var admin_Page = new administrators_Page();
        //1. Open *Add/Edit Administrator* form and *click* on several *fields, dropdown*, on Passphrase field.
        //2. Click on 'Cancel' button without any changes.
        //Clicking on Administrators link
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(2000);
        admin_Page.adminAddAnother();
        browser.sleep(1000);
        common_Component.selectItemDropDown('btn-append-to-body', 1);

        // common_Component.selectItemDropDown_1('button.dropdown-toggle', 6);
        common_Component.selectItemDropDown_1('div[ng-if="sites"]', 6);
        admin_Page.adminFirstName_Click();

        admin_Page.adminEmailClick();

        admin_Page.adminPrimaryPhoneClick();

        admin_Page.adminCellPhoneClick();

        admin_Page.admin_PassPhraseClick();

        browser.sleep(1000);
        admin_Page.adminPage_CancelButton();
        browser.sleep(1000);
        admin_Page.adminPageCancel_Yes_Button();
        browser.sleep(1000);
    });
});
