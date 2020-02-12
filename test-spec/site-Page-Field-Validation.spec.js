describe('Acumen Site Page Information Section Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Information Section Validation "place holder, name, min length, max length, field label, required', function () {

        var sitePage = new site_Page();
        // sitePage.changePasswordCancelButton();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validation with the SITE NAME attributes "place holder, name, min length, max length, field label, required"
        expect(sitePage.sn_placeholderAttr()).toMatch(data.site_data.siteName_PlaceHolder_Attribute);
        console.log('SITE NAME Placeholder verification done: ' + data.site_data.siteName_PlaceHolder_Attribute);
        expect(sitePage.sn_nameAttr()).toMatch(data.site_data.siteName_Name_Attribute);
        expect(sitePage.sn_fieldLabelAttr()).toMatch(data.site_data.siteName_fieldLabel_Attribute);
        console.log('SITE NAME Field label verification done: ' + data.site_data.siteName_fieldLabel_Attribute);
        expect(sitePage.sn_minlengthAttr()).toMatch(data.site_data.siteName_minLength_Attribute);
        console.log('SITE NAME Min Length verification done: ' + data.site_data.siteName_minLength_Attribute);
        expect(sitePage.sn_maxlengthAttr()).toMatch(data.site_data.siteName_maxLength_Attribute);
        console.log('SITE NAME Max Length verification done: ' + data.site_data.siteName_maxLength_Attribute);
        expect(sitePage.sn_required()).toMatch(data.site_data.siteName_required_Attribute);

        //validation with the LOCATION TYPE attributes "place holder, max length, field label"
        expect(sitePage.lt_placeholderAttr()).toMatch(data.site_data.locationType_PlaceHolder_Attribute);
        console.log('LOCATION TYPE Placeholder verification done: ' + data.site_data.locationType_PlaceHolder_Attribute);
        expect(sitePage.lt_fieldLabelAttr()).toMatch(data.site_data.locationType_fieldLabel_Attribute);
        console.log('LOCATION TYPE Field label verification done: ' + data.site_data.locationType_fieldLabel_Attribute);
        expect(sitePage.lt_maxlengthAttr()).toMatch(data.site_data.locationType_maxLength_Attribute);
        console.log('LOCATION TYPE Max Length verification done: ' + data.site_data.locationType_maxLength_Attribute);

        //validation with the USER COUNT attributes "place holder, name, max length, field label"
        expect(sitePage.uc_placeholderAttr()).toMatch(data.site_data.userCount_PlaceHolder_Attribute);
        console.log('USER COUNT Placeholder verification done: ' + data.site_data.userCount_PlaceHolder_Attribute);
        expect(sitePage.uc_nameAttr()).toMatch(data.site_data.userCount_Name_Attribute);
        expect(sitePage.uc_maxlengthAttr()).toMatch(data.site_data.userCount_maxLength_Attribute);
        console.log('USER COUNT Max Length verification done: ' + data.site_data.siteName_maxLength_Attribute);

        //validation with the SITE TAG attributes "place holder"
        expect(sitePage.stg_placeholderAttr()).toMatch(data.site_data.siteTag_PlaceHolder_Attribute);
        console.log('SITE TAG Placeholder verification done: ' + data.site_data.siteTag_PlaceHolder_Attribute);
        expect(sitePage.stg_fieldLabelAttr()).toMatch(data.site_data.siteTag_fieldLabel_Attribute);
        console.log('SITE TAG Field label verification done: ' + data.site_data.siteTag_fieldLabel_Attribute);
        expect(sitePage.stg_maxlengthAttr()).toMatch(data.site_data.siteTag_maxLength_Attribute);
        console.log('SITE TAG Max Length verification done: ' + data.site_data.siteTag_maxLength_Attribute);

        sitePage.clickCancel();
        browser.sleep(2000);
        common_Component.appLogout();
    });
});
