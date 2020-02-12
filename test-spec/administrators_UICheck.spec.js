describe('Acumen Administrator UI Check Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-611 Add Administrators - UI check Placeholder, Labels, Max  Min Length: ', function() {

        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.siteCreate('TestSite', 'TestDevice', '11.12.13.14');

        //Open *Add/Edit Administrator* form and click on 'Cancel' button *without any changes*.
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);

        // //Form title is *Add Administrator*
        // expect(admin_Page.AdminPage_Header()).toEqual(data.adminPage_data.adminHeader);
        // console.log('validating the Header of Admin Page: '+data.adminPage_data.adminHeader);
        browser.sleep(1000);
        admin_Page.adminAddAnother();
        browser.sleep(1000);

        // expect(admin_Page.adminPage_Title()).toEqual(data.adminPage_data.adminTitle);
        // console.log('validating the Title of Admin Page: '+data.adminPage_data.adminTitle);

        //*Role drop-down* contains 3 options (*Global, Change and TroubleShooting* Admins)
        common_Component.displayDropDownItems('btn-append-to-body');

        //validating Admin First Name Placeholders, min length, max length, Name & required attributes.
        expect(admin_Page.an_placeholderAttr()).toMatch(data.adminPage_data.adminName_PlaceHolder_Attribute);
        console.log('ADMIN FIRST NAME Placeholder verification done: ' +data.adminPage_data.adminName_PlaceHolder_Attribute);
        expect(admin_Page.an_minlengthAttr()).toMatch(data.adminPage_data.adminName_minLength_Attribute);
        console.log('ADMIN FIRST NAME Min Length verification done: ' +data.adminPage_data.adminName_minLength_Attribute);
        expect(admin_Page.an_maxlengthAttr()).toMatch(data.adminPage_data.adminName_maxLength_Attribute);
        console.log('ADMIN FIRST NAME Max Length verification done: ' +data.adminPage_data.adminName_maxLength_Attribute);
        expect(admin_Page.an_nameAttr()).toMatch(data.adminPage_data.adminName_Name_Attribute);
        console.log('ADMIN FIRST NAME Attribute Name verification done: ' +data.adminPage_data.adminName_Name_Attribute);
        expect(admin_Page.an_required()).toMatch(data.adminPage_data.adminName_required_Attribute);
        console.log('ADMIN FIRST NAME Attribute Name verification done: ' +data.adminPage_data.adminName_required_Attribute);
        browser.sleep(1000);

        //validating //Admin Email Placeholders, max length, Name & required attributes.
        expect(admin_Page.ae_placeholderAttr()).toMatch(data.adminPage_data.adminEmail_PlaceHolder_Attribute);
        console.log('ADMIN EMAIL Placeholder verification done: ' +data.adminPage_data.adminEmail_PlaceHolder_Attribute);
        expect(admin_Page.ae_maxlengthAttr()).toMatch(data.adminPage_data.adminEmail_maxLength_Attribute);
        console.log('ADMIN EMAIL Max Length verification done: ' +data.adminPage_data.adminEmail_maxLength_Attribute);
        expect(admin_Page.ae_nameAttr()).toMatch(data.adminPage_data.adminEmail_Name_Attribute);
        console.log('ADMIN EMAIL Attribute Name verification done: ' +data.adminPage_data.adminEmail_Name_Attribute);
        expect(admin_Page.ae_required()).toMatch(data.adminPage_data.adminEmail_required_Attribute);
        console.log('ADMIN EMAIL Attribute Name verification done: ' +data.adminPage_data.adminEmail_required_Attribute);
        browser.sleep(1000);

        //validating Admin Primary Phone Placeholders, max length, Name & required attributes.
        expect(admin_Page.ap_placeholderAttr()).toMatch(data.adminPage_data.adminPhone_PlaceHolder_Attribute);
        console.log('ADMIN PRIMARY PHONE Placeholder verification done: ' +data.adminPage_data.adminPhone_PlaceHolder_Attribute);
        expect(admin_Page.ap_maxlengthAttr()).toMatch(data.adminPage_data.adminPhone_maxLength_Attribute);
        console.log('ADMIN PRIMARY PHONE Max Length verification done: ' +data.adminPage_data.adminPhone_maxLength_Attribute);
        expect(admin_Page.ap_nameAttr()).toMatch(data.adminPage_data.adminPhone_Name_Attribute);
        console.log('ADMIN PRIMARY PHONE Attribute Name verification done: ' +data.adminPage_data.adminPhone_Name_Attribute);
        expect(admin_Page.ap_required()).toMatch(data.adminPage_data.adminPhone_required_Attribute);
        console.log('ADMIN PRIMARY PHONE Attribute Name verification done: ' +data.adminPage_data.adminPhone_required_Attribute);
        browser.sleep(1000);

        //validating Admin Cell Phone Placeholders, max length, Name & required attributes.
        expect(admin_Page.ac_placeholderAttr()).toMatch(data.adminPage_data.adminCellPhone_PlaceHolder_Attribute);
        console.log('ADMIN CELL PHONE Placeholder verification done: ' +data.adminPage_data.adminCellPhone_PlaceHolder_Attribute);
        expect(admin_Page.ac_maxlengthAttr()).toMatch(data.adminPage_data.adminCellPhone_maxLength_Attribute);
        console.log('ADMIN CELL PHONE Max Length verification done: ' +data.adminPage_data.adminCellPhone_maxLength_Attribute);
        expect(admin_Page.ac_nameAttr()).toMatch(data.adminPage_data.adminCellPhone_Name_Attribute);
        console.log('ADMIN CELL PHONE Attribute Name verification done: ' +data.adminPage_data.adminCellPhone_Name_Attribute);
        expect(admin_Page.ac_required()).toMatch(data.adminPage_data.adminCellPhone_required_Attribute);
        console.log('ADMIN CELL PHONE Attribute Name verification done: ' +data.adminPage_data.adminCellPhone_required_Attribute);
        browser.sleep(1000);

        //validating Admin PASS PHRASE Placeholders, min length, max length, Name & required attributes.
        expect(admin_Page.app_placeholderAttr()).toMatch(data.adminPage_data.adminPassPhrase_PlaceHolder_Attribute);
        console.log('ADMIN PASS PHRASE Placeholder verification done: ' +data.adminPage_data.adminPassPhrase_PlaceHolder_Attribute);
        expect(admin_Page.app_minlengthAttr()).toMatch(data.adminPage_data.adminPassPhrase_minLength_Attribute);
        console.log('ADMIN PASS PHRASE Min Length verification done: ' +data.adminPage_data.adminPassPhrase_minLength_Attribute);
        expect(admin_Page.app_maxlengthAttr()).toMatch(data.adminPage_data.adminPassPhrase_maxLength_Attribute);
        console.log('ADMIN PASS PHRASE Max Length verification done: ' +data.adminPage_data.adminPassPhrase_maxLength_Attribute);
        expect(admin_Page.app_nameAttr()).toMatch(data.adminPage_data.adminPassPhrase_Name_Attribute);
        console.log('ADMIN PASS PHRASE Attribute Name verification done: ' +data.adminPage_data.adminPassPhrase_Name_Attribute);
        // expect(admin_Page.app_required()).toMatch(data.adminPage_data.adminPassPhrase_required_Attribute);
        // console.log('ADMIN PASS PHRASE Attribute Name verification done: ' +data.adminPage_data.adminPassPhrase_required_Attribute);
        browser.sleep(1000);

        //*Sites* drop-down contains *list of existing devices*
        common_Component.displayDropDownItems('multiselect_sites_not_expanded');
        if(expect(admin_Page.adminAdd_Button_State()).toEqual('true')) {
            console.log('The ADD ADMINISTRATOR button is in disabled state: ');
            browser.sleep(1000);
            admin_Page.adminPage_CancelButton();
            browser.sleep(1000);
            admin_Page.adminPageCancel_Yes_Button();
            browser.sleep(1000);
        }
    });
});
