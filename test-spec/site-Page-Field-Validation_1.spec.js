describe('Acumen Site Page Physical Location Physical Address Section Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Physical Location Physical Address Section Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validation with the Physical ADDRESS attributes "place holder, max length, field label"
        expect(sitePage.pa_placeholderAttr()).toMatch(data.site_data.addres_PlaceHolder_Attribute);
        console.log('Physical ADDRESS Placeholder verification done: ' + data.site_data.addres_PlaceHolder_Attribute);
        expect(sitePage.pa_fieldLabelAttr()).toMatch(data.site_data.addres_fieldLabel_Attribute);
        console.log('Physical ADDRESS Field label verification done: ' + data.site_data.addres_fieldLabel_Attribute);
        expect(sitePage.pa_maxlengthAttr()).toMatch(data.site_data.addres_maxLength_Attribute);
        console.log('Physical ADDRESS Max Length verification done: ' + data.site_data.addres_maxLength_Attribute);

        //validation with the Physical SUITE/UNIT attributes "place holder, max length, min length, field label"
        expect(sitePage.su_placeholderAttr()).toMatch(data.site_data.suite_unit_PlaceHolder_Attribute);
        console.log('SUITE/UNIT Placeholder verification done: ' + data.site_data.suite_unit_PlaceHolder_Attribute);
        expect(sitePage.su_fieldLabelAttr()).toMatch(data.site_data.suite_unit_fieldLabel_Attribute);
        console.log('SUITE/UNIT Field label verification done: ' + data.site_data.suite_unit_fieldLabel_Attribute);
        expect(sitePage.su_maxlengthAttr()).toMatch(data.site_data.suite_unit_maxLength_Attribute);
        console.log('SUITE/UNIT Max Length verification done: ' + data.site_data.suite_unit_maxLength_Attribute);
        expect(sitePage.su_minlengthAttr()).toMatch(data.site_data.suite_unit_minLength_Attribute);
        console.log('SUITE/UNIT Min Length verification done: ' + data.site_data.suite_unit_minLength_Attribute);

        //validation with the Physical CITY attributes "place holder, max length, min length, field label"
        expect(sitePage.ct_placeholderAttr()).toMatch(data.site_data.city_PlaceHolder_Attribute);
        console.log('CITY Placeholder verification done: ' + data.site_data.city_PlaceHolder_Attribute);
        expect(sitePage.ct_fieldLabelAttr()).toMatch(data.site_data.city_fieldLabel_Attribute);
        console.log('CITY Field label verification done: ' + data.site_data.city_fieldLabel_Attribute);
        expect(sitePage.ct_maxlengthAttr()).toMatch(data.site_data.city_maxLength_Attribute);
        console.log(('CITY Max Length verification done: ' + data.site_data.city_maxLength_Attribute));
        expect(sitePage.ct_minlengthAttr()).toMatch(data.site_data.city_minLength_Attribute);
        console.log('CITY Min Length verification done: ' + data.site_data.city_minLength_Attribute);

        //validation with the Physical STATE attributes "place holder, max length, min length, field label"
        expect(sitePage.st_placeholderAttr()).toMatch(data.site_data.state_PlaceHolder_Attribute);
        console.log('STATE Placeholder verification done: ' + data.site_data.state_PlaceHolder_Attribute);
        expect(sitePage.st_fieldLabelAttr()).toMatch(data.site_data.state_fieldLabel_Attribute);
        console.log('STATE Field label verification done: ' + data.site_data.state_fieldLabel_Attribute);
        expect(sitePage.st_maxlengthAttr()).toMatch(data.site_data.state_maxLength_Attribute);
        console.log('STATE Max Length verification done: ' + data.site_data.state_maxLength_Attribute);
        expect(sitePage.st_minlengthAttr()).toMatch(data.site_data.state_minLength_Attribute);
        console.log('STATE Min Length verification done: ' + data.site_data.state_minLength_Attribute);

        //validation with the Physical ZIPCODE attributes "place holder, max length, field label"
        expect(sitePage.zc_placeholderAttr()).toMatch(data.site_data.zipcode_PlaceHolder_Attribute);
        console.log('ZIPCODE Placeholder verification done: ' + data.site_data.zipcode_PlaceHolder_Attribute);
        expect(sitePage.zc_fieldLabelAttr()).toMatch(data.site_data.zipcode_fieldLabel_Attribute);
        console.log('ZIPCODE Field label verification done: ' + data.site_data.zipcode_fieldLabel_Attribute);

        sitePage.clickCancel();
        browser.sleep(2000);
        // sitePage.addSiteCancelMessageButton();
        common_Component.appLogout();
    });
});
