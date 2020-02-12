describe('Acumen Site Page Network Settings External Section Primary Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Network Settings External Section Primary Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validation with the External PRIMARY ISP "place holder, max length, min length, field label"
        expect(sitePage.pisp_placeholderAttr()).toMatch(data.site_data.primary_ISP_PlaceHolder_Attribute);
        console.log('PRIMARY ISP Placeholder verification done: ' + data.site_data.primary_ISP_PlaceHolder_Attribute);
        expect(sitePage.pisp_fieldLabelAttr()).toMatch(data.site_data.primary_ISP_fieldLabel_Attribute);
        console.log('PRIMARY ISP Field label verification done: ' + data.site_data.primary_ISP_fieldLabel_Attribute);
        expect(sitePage.pisp_maxlengthAttr()).toMatch(data.site_data.primary_ISP_maxLength_Attribute);
        console.log('PRIMARY ISP Max Length verification done: ' + data.site_data.primary_ISP_maxLength_Attribute);
        expect(sitePage.pisp_minlengthAttr()).toMatch(data.site_data.primary_ISP_minLength_Attribute);
        console.log('PRIMARY ISP Min Length verification done: ' + data.site_data.primary_ISP_minLength_Attribute);

        //validation with the External PRIMARY ISP IP ADDRESS "place holder, field label"
        expect(sitePage.pspIP_placeholderAttr()).toMatch(data.site_data.primaryISP_ip_PlaceHolder_Attribute);
        console.log('PRIMARY ISP IP ADDRESS Placeholder verification done: ' + data.site_data.primaryISP_ip_PlaceHolder_Attribute);
        expect(sitePage.pspIP_fieldLabelAttr()).toMatch(data.site_data.primaryISP_ip_fieldLabel_Attribute);
        console.log('PRIMARY ISP IP ADDRESS Field label verification done: ' + data.site_data.primaryISP_ip_fieldLabel_Attribute);

        //validation with the External PRIMARY ISP UP Bandwidth "place holder, field label"
        expect(sitePage.pspUP_placeholderAttr()).toMatch(data.site_data.primaryISP_UP_PlaceHolder_Attribute);
        console.log('PRIMARY ISP UP Bandwidth Placeholder verification done: ' + data.site_data.primaryISP_UP_PlaceHolder_Attribute);

        //validation with the External PRIMARY ISP DOWN Bandwidth "place holder, field label"
        expect(sitePage.pspDN_placeholderAttr()).toMatch(data.site_data.primaryISP_Down_PlaceHolder_Attribute);
        console.log('PRIMARY ISP UP Bandwidth Placeholder verification done: ' + data.site_data.primaryISP_Down_PlaceHolder_Attribute);

        //validation with the External PRIMARY ISP GATEWAY "place holder, field label"
        expect(sitePage.pspGW_placeholderAttr()).toMatch(data.site_data.primaryISP_Gateway_PlaceHolder_Attribute);
        console.log('PRIMARY ISP GATEWAY Placeholder verification done: ' + data.site_data.primaryISP_Gateway_PlaceHolder_Attribute);
        expect(sitePage.pspGW_fieldLabelAttr()).toMatch(data.site_data.primaryISP_Gateway_fieldLabel_Attribute);
        console.log('PRIMARY ISP GATEWAY Field label verification done: ' + data.site_data.primaryISP_Gateway_fieldLabel_Attribute);

        //validation with the External PRIMARY ISP NETMASK "place holder, field label"
        expect(sitePage.pspNM_placeholderAttr()).toMatch(data.site_data.primaryISP_Netmask_PlaceHolder_Attribute);
        console.log('PRIMARY ISP NETMASK Placeholder verification done: ' + data.site_data.primaryISP_Netmask_PlaceHolder_Attribute);
        expect(sitePage.pspNM_fieldLabelAttr()).toMatch(data.site_data.primaryISP_Netmask_fieldLabel_Attribute);
        console.log('PRIMARY ISP NETMASK Field label verification done: ' + data.site_data.primaryISP_Netmask_fieldLabel_Attribute);

        sitePage.clickCancel();
        browser.sleep(2000);
        // sitePage.addSiteCancelMessageButton();
        common_Component.appLogout();

    });
});
