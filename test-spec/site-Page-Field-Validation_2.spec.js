describe('Acumen Site Page Physical Location Point Of Contact Section Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Physical Location Point Of Contact Section Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validation with the Point of CONTACT NAME attributes "place holder, max length, field label"
        expect(sitePage.cn_placeholderAttr()).toMatch(data.site_data.contact_name_PlaceHolder_Attribute);
        console.log('CONTACT NAME Placeholder verification done: ' + data.site_data.contact_name_PlaceHolder_Attribute);
        expect(sitePage.cn_fieldLabelAttr()).toMatch(data.site_data.contact_name_fieldLabel_Attribute);
        console.log('CONTACT NAME Field label verification done: ' + data.site_data.contact_name_fieldLabel_Attribute);
        expect(sitePage.cn_maxlengthAttr()).toMatch(data.site_data.contact_name_maxLength_Attribute);
        console.log('CONTACT NAME Max Length verification done: ' + data.site_data.contact_name_maxLength_Attribute);
        expect(sitePage.cn_minlengthAttr()).toMatch(data.site_data.contact_name_minLength_Attribute);
        console.log('CONTACT NAME Min Length verification done: ' + data.site_data.contact_name_minLength_Attribute);

        //validation with the Point of CONTACT EMAIL attributes "place holder, max length, field label"
        expect(sitePage.ce_placeholderAttr()).toMatch(data.site_data.contact_email_PlaceHolder_Attribute);
        console.log('CONTACT EMAIL Placeholder verification done: ' + data.site_data.contact_email_PlaceHolder_Attribute);
        expect(sitePage.ce_fieldLabelAttr()).toMatch(data.site_data.contact_email_fieldLabel_Attribute);
        console.log('CONTACT EMAIL Field label verification done: ' + data.site_data.contact_email_fieldLabel_Attribute);
        expect(sitePage.ce_maxlengthAttr()).toMatch(data.site_data.contact_email_maxLength_Attribute);
        console.log('CONTACT EMAIL Max Length verification done: ' + data.site_data.contact_email_maxLength_Attribute);

        //validation with the Point of CONTACT PHONE NUMBER "place holder, max length, field label"
        expect(sitePage.cp_placeholderAttr()).toMatch(data.site_data.contact_phone1_PlaceHolder_Attribute);
        console.log('CONTACT PHONE NUMBER Placeholder verification done: ' + data.site_data.contact_phone1_PlaceHolder_Attribute);
        expect(sitePage.cp_fieldLabelAttr()).toMatch(data.site_data.contact_phone1_fieldLabel_Attribute);
        console.log('CONTACT PHONE NUMBER Field label verification done: ' + data.site_data.contact_phone1_fieldLabel_Attribute);
        expect(sitePage.cp_maxlengthAttr()).toMatch(data.site_data.contact_phone1_maxLength_Attribute);
        console.log('CONTACT PHONE NUMBER Max Length verification done: ' + data.site_data.contact_phone1_maxLength_Attribute);

        //validation with the Point of CONTACT CELL PHONE NUMBER "place holder, max length, field label"
        expect(sitePage.ccp_placeholderAttr()).toMatch(data.site_data.contact_phone2_PlaceHolder_Attribute);
        console.log('CELL PHONE NUMBER Placeholder verification done: ' + data.site_data.contact_phone2_PlaceHolder_Attribute);
        expect(sitePage.ccp_fieldLabelAttr()).toMatch(data.site_data.contact_phone2_fieldLabel_Attribute);
        console.log('CELL PHONE NUMBER Field label verification done: ' + data.site_data.contact_phone2_fieldLabel_Attribute);
        expect(sitePage.ccp_maxlengthAttr()).toMatch(data.site_data.contact_phone2_maxLength_Attribute);
        console.log('CELL PHONE NUMBER Max Length verification done: ' + data.site_data.contact_phone2_maxLength_Attribute);

        sitePage.clickCancel();
        browser.sleep(2000);
        // sitePage.addSiteCancelMessageButton();
        common_Component.appLogout();
    });
});
