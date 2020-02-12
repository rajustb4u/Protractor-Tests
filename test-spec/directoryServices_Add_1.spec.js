describe('Acumen Add_DirectoryServices Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-628 & AC-655, AC-656  Add Directory Service - UI check: Validate Placeholders, labels, errors, Max, Min Length.', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickAddDirectoryServices();
        browser.sleep(1000);

        //validation with the Directory Services NAME attributes "place holder, name, min length, max length, field label, required"
        directoryService_Page.clickNameField();
        expect(directoryService_Page.dsN_placeholderAttr()).toMatch(data.directoryServicesPage_data.directoryServicesName_PlaceHolder_Attribute);
        console.log('Directory Services NAME Placeholder verification done: ' + data.directoryServicesPage_data.directoryServicesName_PlaceHolder_Attribute);
        expect(directoryService_Page.dsN_nameAttr()).toMatch(data.directoryServicesPage_data.directoryServicesName_Name_Attribute);
        expect(directoryService_Page.dsN_fieldLabelAttr()).toMatch(data.directoryServicesPage_data.directoryServicesName_LabelAttribute);
        console.log('Directory Services NAME Field label verification done: ' + data.directoryServicesPage_data.directoryServicesName_LabelAttribute);
        expect(directoryService_Page.dsN_minlengthAttr()).toMatch(data.directoryServicesPage_data.directoryServicesName_minLength_Attribute);
        console.log('Directory Services NAME Min Length verification done: ' + data.directoryServicesPage_data.directoryServicesName_minLength_Attribute);
        expect(directoryService_Page.dsN_maxlengthAttr()).toMatch(data.directoryServicesPage_data.directoryServicesName_maxLength_Attribute);
        console.log('Directory Services NAME Max Length verification done: ' + data.directoryServicesPage_data.directoryServicesName_maxLength_Attribute);

        browser.sleep(1000);
        //validation with the Directory Services BASE DN attributes "place holder, name, min length, max length, field label, required"
        directoryService_Page.clickBaseDN();
        expect(directoryService_Page.dsBADN_placeholderAttr()).toMatch(data.directoryServicesPage_data.directoryServicesBaseDN_PlaceHolder_Attribute);
        console.log('Directory Services BASE DN Placeholder verification done: ' + data.directoryServicesPage_data.directoryServicesBaseDN_PlaceHolder_Attribute);
        expect(directoryService_Page.dsBADN_nameAttr()).toMatch(data.directoryServicesPage_data.directorServicesBaseDN_NameAttribute);
        expect(directoryService_Page.dsBADN_fieldLabelAttr()).toMatch(data.directoryServicesPage_data.directoryServicesBaseDN_FieldLabel_Attribute);
        console.log('Directory Services BASE DN Field label verification done: ' + data.directoryServicesPage_data.directoryServicesBaseDN_FieldLabel_Attribute);
        expect(directoryService_Page.dsBADN_minlengthAttr()).toMatch(data.directoryServicesPage_data.directoryServicesBaseDN_minLength_Attribute);
        console.log('Directory Services BASE DN Min Length verification done: ' + data.directoryServicesPage_data.directoryServicesBaseDN_minLength_Attribute);
        expect(directoryService_Page.dsBADN_maxlengthAttr()).toMatch(data.directoryServicesPage_data.directoryServicesBaseDN_maxLength_Attribute);
        console.log('Directory Services BASE DN Max Length verification done: ' + data.directoryServicesPage_data.directoryServicesBaseDN_maxLength_Attribute);

        browser.sleep(1000);
        // //validation with the Directory Services BIND DN attributes "place holder, name, min length, max length, field label, required"
        // directoryService_Page.clickBindDN();
        // expect(directoryService_Page.dsBIDN_placeholderAttr()).toMatch(data.directoryServicesPage_data.directoryServicesBindDN_PlaceHolder_Attribute);
        // console.log('Directory Services BIND DN Placeholder verification done: ' + data.directoryServicesPage_data.directoryServicesBindDN_PlaceHolder_Attribute);
        // expect(directoryService_Page.dsBIDN_nameAttr()).toMatch(data.directoryServicesPage_data.directorServicesBindDN_NameAttribute);
        // expect(directoryService_Page.dsBIDN_fieldLabelAttr()).toMatch(data.directoryServicesPage_data.directoryServicesBindDN_FieldLabel_Attribute);
        // console.log('Directory Services BIND DN Field label verification done: ' + data.directoryServicesPage_data.directoryServicesBindDN_FieldLabel_Attribute);
        // expect(directoryService_Page.dsBIDN_minlengthAttr()).toMatch(data.directoryServicesPage_data.dsBIDN_minlengthAttr);
        // console.log('Directory Services BIND DN Min Length verification done: ' + data.directoryServicesPage_data.dsBIDN_minlengthAttr);
        // expect(directoryService_Page.dsBIDN_maxlengthAttr()).toMatch(data.directoryServicesPage_data.directoryServicesBindDN_maxLength_Attribute);
        // console.log('Directory Services BIND DN Max Length verification done: ' + data.directoryServicesPage_data.directoryServicesBindDN_maxLength_Attribute);

        browser.sleep(1000);
        directoryService_Page.checkboxSSLTLS();

        browser.sleep(1000);
        //validation with the Directory Services USER NAME attributes "place holder, name, min length, max length, field label, required"
        directoryService_Page.clickUserName();
        expect(directoryService_Page.dsUN_nameAttr()).toMatch(data.directoryServicesPage_data.directorServicesUserName_NameAttribute);
        expect(directoryService_Page.dsUN_fieldLabelAttr()).toMatch(data.directoryServicesPage_data.directoryServicesUserName_FieldLabel_Attribute);
        console.log('Directory Services USER NAME Field label verification done: ' + data.directoryServicesPage_data.directoryServicesUserName_FieldLabel_Attribute);
        expect(directoryService_Page.dsUN_maxlengthAttr()).toMatch(data.directoryServicesPage_data.directoryServicesUserName_maxLength_Attribute);
        console.log('Directory Services  USER NAME Max Length verification done: ' + data.directoryServicesPage_data.directoryServicesUserName_maxLength_Attribute);

        browser.sleep(1000);
        //validation with the Directory Services USER PASSWORD attributes "place holder, name, min length, max length, field label, required"
        directoryService_Page.clickPassword();
        expect(directoryService_Page.dsUPW_nameAttr()).toMatch(data.directoryServicesPage_data.directorServicesPWD_NameAttribute);
        expect(directoryService_Page.dsPW_fieldLabelAttr()).toMatch(data.directoryServicesPage_data.directoryServicesPWD_FieldLabel_Attribute);
        console.log('Directory Services USER PASSWORD Field label verification done: ' + data.directoryServicesPage_data.directoryServicesPWD_FieldLabel_Attribute);
        expect(directoryService_Page.dsPW_maxlengthAttr()).toMatch(data.directoryServicesPage_data.directoryServicesPWD_maxLength_Attribute);
        console.log('Directory Services  USER PASSWORD Max Length verification done: ' + data.directoryServicesPage_data.directoryServicesPWD_maxLength_Attribute);

        browser.sleep(1000);
        //validation with the Directory Services SERVER attributes "place holder, name, min length, max length, field label, required"
        directoryService_Page.click_ServerName();
        expect(directoryService_Page.dsServer_nameAttr()).toMatch(data.directoryServicesPage_data.directorServicesServer_NameAttribute);
        expect(directoryService_Page.dsServer_fieldLabelAttr()).toMatch(data.directoryServicesPage_data.directoryServicesServer_FieldLabel_Attribute);
        console.log('Directory Services SERVER Field label verification done: ' + data.directoryServicesPage_data.directoryServicesServer_FieldLabel_Attribute);
        expect(directoryService_Page.dsServer_placeholderAttr()).toMatch(data.directoryServicesPage_data.directoryServicesServer_PlaceHolder_Attribute);
        console.log('Directory Services SERVER PLace Holder verification done: ' + data.directoryServicesPage_data.directoryServicesServer_PlaceHolder_Attribute);

        // browser.sleep(2000);
        // //validation with the Directory Services PORT attributes "place holder, name, min length, max length, field label, required"
        // directoryService_Page.click_Port();
        // expect(directoryService_Page.dsPort_nameAttr()).toMatch(data.directoryServicesPage_data.directorServicesPort_NameAttribute);
        // expect(directoryService_Page.dsPort_fieldLabelAttr()).toMatch(data.directoryServicesPage_data.dsPort_fieldLabelAttr);
        // console.log('Directory Services PORT Field label verification done: ' + data.directoryServicesPage_data.dsPort_fieldLabelAttr);
        // expect(directoryService_Page.dsPort_placeholderAttr()).toMatch(data.directoryServicesPage_data.directoryServicesPort_PlaceHolder_Attribute);
        // console.log('Directory Services PORT PLace Holder verification done: ' + data.directoryServicesPage_data.directoryServicesPort_PlaceHolder_Attribute);

        browser.sleep(1000);
        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        //Click cancel on message box
        directoryService_Page.addDirecotoryServices_CancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });


});