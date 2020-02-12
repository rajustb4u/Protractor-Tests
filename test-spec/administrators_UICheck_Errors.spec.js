describe('Acumen Administrator UI Check validation Errors Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-611 Add Administrators - UI check Error Messages: ', function() {

    //Capturing errors and validating
        var admin_Page = new administrators_Page();

        //Open *Add/Edit Administrator* form and click on 'Cancel' button *without any changes*.
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        admin_Page.adminAddAnother();
        browser.sleep(1000);

        //Admin First Name
        admin_Page.adminFirstNameEntry(data.adminPage_data.adminName_Validation);
        expect(common_Component.getElementErrorByName('user_first_name')).toEqual(data.adminPage_data.adminName_errorMsg);
        console.log('Admin First Name error validation when 2 characters are entered: '+data.adminPage_data.adminName_errorMsg);

        admin_Page.adminFirstName_Clear();
        expect(common_Component.getElementErrorByName('user_first_name')).toEqual(data.adminPage_data.adminName_RequirederrorMsg);
        console.log('Admin First Name error validation when we delete the data from the field telling its required: '+data.adminPage_data.adminName_RequirederrorMsg);

        //Admin EMAIL
        admin_Page.adminEmailEntry(data.adminPage_data.adminEmail_Validation);
        expect(common_Component.getElementErrorByName('user_email')).toEqual(data.adminPage_data.adminEmail_errorMsg);
        console.log('Admin EMAIL error validation when wrong email is entered: '+data.adminPage_data.adminEmail_errorMsg);

        admin_Page.adminEmailClear();
        admin_Page.adminEmailEntry(data.adminPage_data.adminEmail_Validation1);
        expect(common_Component.getElementErrorByName('user_email')).toEqual(data.adminPage_data.adminEmail_errorMsg);
        console.log('Admin EMAIL error validation when wrong email is entered: '+data.adminPage_data.adminEmail_errorMsg);

        admin_Page.adminEmailClear();
        admin_Page.adminEmailEntry(data.adminPage_data.adminEmail_Validation2);
        expect(common_Component.getElementErrorByName('user_email')).toEqual(data.adminPage_data.adminEmail_errorMsg);
        console.log('Admin EMAIL error validation when wrong email is entered: '+data.adminPage_data.adminEmail_errorMsg);

        admin_Page.adminEmailClear();
        expect(common_Component.getElementErrorByName('user_email')).toEqual(data.adminPage_data.adminEmail_RequirederrorMsg);
        console.log('Admin EMAIL error validation when we delete the data from the field telling its required: '+data.adminPage_data.adminEmail_RequirederrorMsg);

        //Admin PRIMARY PHONE
        admin_Page.adminPrimaryPhoneEntry(data.adminPage_data.adminPhone_Validation);
        expect(common_Component.getElementErrorByName('primary_phone_number')).toEqual(data.adminPage_data.adminPhone_errorMsg);
        console.log('Admin PRIMARY PHONE error validation when less numbers are entered: '+data.adminPage_data.adminPhone_errorMsg);

        admin_Page.adminPrimaryPhoneClear();
        expect(common_Component.getElementErrorByName('primary_phone_number')).toEqual(data.adminPage_data.adminPhone_RequirederrorMsg);
        console.log('Admin PRIMARY PHONE error validation when we delete the data from the field telling its required: '+data.adminPage_data.adminPhone_RequirederrorMsg);

        //Admin CELL PHONE
        admin_Page.adminCellPhoneEntry(data.adminPage_data.adminCellPhone_Validation);
        expect(common_Component.getElementErrorByName('cell_phone_number')).toEqual(data.adminPage_data.adminCellPhone_errorMsg);
        console.log('Admin CELL PHONE error validation when less numbers are entered: '+data.adminPage_data.adminCellPhone_errorMsg);

        admin_Page.adminCellPhoneClear();
        expect(common_Component.getElementErrorByName('cell_phone_number')).toEqual(data.adminPage_data.adminCellPhone_RequirederrorMsg);
        console.log('Admin CELL PHONE error validation when we delete the data from the field telling its required: '+data.adminPage_data.adminCellPhone_RequirederrorMsg);

        //Admin Pass Phrase
        admin_Page.admin_PassPhraseEntry(data.adminPage_data.adminPassPhrase_Validation);
        expect(common_Component.getElementErrorByName('passphrase')).toEqual(data.adminPage_data.adminPassPhrase_errorMsg);
        console.log('Admin First Name error validation when 2 characters are entered: '+data.adminPage_data.adminPassPhrase_errorMsg);

        // admin_Page.admin_PassPhraseClear();
        // expect(common_Component.getElementErrorByName('passphrase')).toEqual(data.adminPage_data.adminPassPhrase_RequirederrorMsg);
        // console.log('Admin First Name error validation when we delete the data from the field telling its required: '+data.adminPage_data.adminPassPhrase_RequirederrorMsg);

        expect(admin_Page.adminAdd_Button_State()).toEqual('true');
        console.log('The ADD ADMINISTRATOR button is in disabled state: ');
        browser.sleep(1000);
        admin_Page.adminPage_CancelButton();
        browser.sleep(1000);
        admin_Page.adminPageCancel_Yes_Button();
        browser.sleep(1000);
        common_Component.siteDelete();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
