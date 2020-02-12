describe('Acumen Add_Site Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-71 - Validating PHYSICAL ADDRESS field validation errors, and checking the Add Site State when those errors exist: ', function () {
        var sitePage = new site_Page();
        // //click on Configuration button
        // browser.sleep(1000);
        // common_Component.appLogin();
        // browser.sleep(1000);
        // sitePage.start_Configuration();
        // browser.sleep(2000);
        // console.log('Start Configuration button is clicked.');

        browser.sleep(1000);
        sitePage.physicalAddress(data.site_data.address_Validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Address with 2 characters.
        expect(common_Component.getElementErrorByName('street_address')).toEqual(data.site_data.address_errorMsg);
        console.log('The Error message captured for street_address: '+data.site_data.address_errorMsg);
        browser.sleep(1000);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.physicalAddress_Clear();
        sitePage.physicalAddress(data.site_data.address);
        browser.sleep(1000);

        sitePage.suiteUnit(data.site_data.suite_unit_Validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Suite/Unit with 2 characters.
        expect(common_Component.getElementErrorByInputName('suite_unit')).toEqual(data.site_data.suite_unit_errorMsg);
        console.log('The Error message captured for suite_unit: '+data.site_data.suite_unit_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.suiteUnit_Clear();
        sitePage.suiteUnit(data.site_data.suite_unit);
        browser.sleep(1000);

        sitePage.city(data.site_data.city_Validation);
        //capturing the error message and validating when we enter the City with 2 characters.
        expect(common_Component.getElementErrorByInputName('city')).toEqual(data.site_data.city_errorMsg);
        console.log('The Error message captured for city: '+data.site_data.city_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.city_Clear();
        sitePage.city(data.site_data.city);
        browser.sleep(2000);

        sitePage.state(data.site_data.state_Validation);
        //capturing the error message and validating when we enter the state with 1 character.
        browser.sleep(1000);
        expect(common_Component.getElementErrorByName('state')).toEqual(data.site_data.state_errorMsg);
        browser.sleep(1000);
        console.log('The Error message captured for state: '+data.site_data.state_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.state_Clear();
        sitePage.state(data.site_data.state);
        browser.sleep(1000);

        sitePage.zipcode(data.site_data.zipcode_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Zipcode with 1 character.
        expect(common_Component.getElementErrorByInputName('zipcode')).toEqual(data.site_data.zipcode_errorMsg);
        console.log('The Error message captured for zipcode: '+data.site_data.zipcode_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.zipcode_Clear();
        sitePage.zipcode(data.site_data.zipcode);

        browser.sleep(1000);
        //Validating the Add Site button is enabled
        expect(sitePage.submitAddSite_State()).toEqual(null);
        console.log('Add Site Button is enabled after all the fields from Physical Address section are correctly entered: ');
    });

    it('Test Case AC-413 - POINT OF CONTACT field validation errors, and checking the Add Site State when those errors exist: ', function () {
        var sitePage = new site_Page();

        sitePage.contactName(data.site_data.contact_name_validation);
        //capturing the error message and validating when we enter the Contact Name with 1 character.
        expect(common_Component.getElementErrorByInputName('contact_name')).toEqual(data.site_data.contact_name_errorMsg);
        console.log('The Error message captured for contact_name: '+data.site_data.contact_name_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.contactName_Clear();
        sitePage.contactName(data.site_data.contact_name);
        browser.sleep(1000);

        sitePage.contactEmail(data.site_data.contact_email_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Contact Email with 2 characters.
        expect(common_Component.getElementErrorByInputName('contact_email')).toEqual(data.site_data.contact_email_error_Msg);
        console.log('The Error message captured for contact_email: '+data.site_data.contact_email_error_Msg);
        browser.sleep(1000);
        sitePage.contactEmail_Clear();
        sitePage.contactEmail(data.site_data.contact_email_validation1);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Contact Email with 2 characters.
        expect(common_Component.getElementErrorByInputName('contact_email')).toEqual(data.site_data.contact_email_error_Msg);
        console.log('The Error message captured for contact_email: '+data.site_data.contact_email_error_Msg);

        sitePage.contactEmail_Clear();
        browser.sleep(1000);
        sitePage.contactEmail(data.site_data.contact_email_validation2);
        //capturing the error message and validating when we enter the Contact Email with 2 characters.
        expect(common_Component.getElementErrorByInputName('contact_email')).toEqual(data.site_data.contact_email_error_Msg);
        console.log('The Error message captured for contact_email: '+data.site_data.contact_email_error_Msg);

        browser.sleep(1000);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');

        sitePage.contactEmail_Clear();
        sitePage.contactEmail(data.site_data.contact_email);
        browser.sleep(1000);

        sitePage.contactPhone(data.site_data.city_Validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the contact_phone_1 with 2 characters.
        expect(common_Component.getElementErrorByInputName('contact_phone_1')).toEqual(data.site_data.contact_phone1_errorMsg);
        console.log('The Error message captured for contact_phone_1: '+data.site_data.contact_phone1_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.contactPhone_Clear();
        sitePage.contactPhone(data.site_data.contact_phone1);
        browser.sleep(2000);

        sitePage.contactCellPhone(data.site_data.contact_phone2_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the contact Cell Phone with 1 character.
        expect(common_Component.getElementErrorByInputName('contact_phone_2')).toEqual(data.site_data.contact_phone2_errorMsg);
        console.log('The Error message captured for contact_phone_2: '+data.site_data.contact_phone2_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.contactCellPhone_Clear();
        sitePage.contactCellPhone(data.site_data.contact_phone2);
        browser.sleep(1000);

        //Validating the Add Site button is enabled
        expect(sitePage.submitAddSite_State()).toEqual(null);
        console.log('Add Site Button is enabled after all the fields from POINT OF CONTACT section are correctly entered: ');

        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
