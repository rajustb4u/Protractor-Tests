describe('Acumen Site Page Network Settings Secondary Section Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Network Settings Secondary Section Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validation with the External SECONDARY ISP "place holder, max length, min length, field label"
        expect(sitePage.sisp_placeholderAttr()).toMatch(data.site_data.secondary_ISP_PlaceHolder_Attribute);
        console.log('SECONDARY ISP Placeholder verification done: ' + data.site_data.secondary_ISP_PlaceHolder_Attribute);
        expect(sitePage.sisp_fieldLabelAttr()).toMatch(data.site_data.secondary_ISP_fieldLabel_Attribute);
        console.log('SECONDARY ISP Field label verification done: ' + data.site_data.secondary_ISP_fieldLabel_Attribute);
        expect(sitePage.sisp_maxlengthAttr()).toMatch(data.site_data.secondary_ISP_maxLength_Attribute);
        console.log('SECONDARY ISP Max Length verification done: ' + data.site_data.secondary_ISP_maxLength_Attribute);
        expect(sitePage.sisp_minlengthAttr()).toMatch(data.site_data.secondary_ISP_minLength_Attribute);
        console.log('SECONDARY ISP Min Length verification done: ' + data.site_data.secondary_ISP_minLength_Attribute);

        //validation with the External SECONDARY ISP IP ADDRESS "place holder, field label"
        expect(sitePage.sspIP_placeholderAttr()).toMatch(data.site_data.secondaryISP_ip_PlaceHolder_Attribute);
        console.log('SECONDARY ISP IP ADDRESS Placeholder verification done: ' + data.site_data.secondaryISP_ip_PlaceHolder_Attribute);
        expect(sitePage.sspIP_fieldLabelAttr()).toMatch(data.site_data.secondaryISP_ip_fieldLabel_Attribute);
        console.log('SECONDARY ISP IP ADDRESS Field label verification done: ' + data.site_data.secondaryISP_ip_fieldLabel_Attribute);

        //validation with the External SECONDARY ISP UP Bandwidth "place holder, field label"
        expect(sitePage.sspUP_placeholderAttr()).toMatch(data.site_data.secondaryISP_UP_PlaceHolder_Attribute);
        console.log('SECONDARY ISP UP Bandwidth Placeholder verification done: ' + data.site_data.secondaryISP_UP_PlaceHolder_Attribute);

        //validation with the External SECONDARY ISP DOWN Bandwidth "place holder, field label"
        expect(sitePage.sspDN_placeholderAttr()).toMatch(data.site_data.secondaryISP_Down_PlaceHolder_Attribute);
        console.log('SECONDARY ISP UP Bandwidth Placeholder verification done: ' + data.site_data.secondaryISP_Down_PlaceHolder_Attribute);


        //validation with the External SECONDARY ISP GATEWAY "place holder, field label"
        expect(sitePage.sspGW_placeholderAttr()).toMatch(data.site_data.secondaryISP_Gateway_PlaceHolder_Attribute);
        console.log('SECONDARY ISP GATEWAY Placeholder verification done: ' + data.site_data.secondaryISP_Gateway_PlaceHolder_Attribute);
        expect(sitePage.sspGW_fieldLabelAttr()).toMatch(data.site_data.secondaryISP_Gateway_fieldLabel_Attribute);
        console.log('SECONDARY ISP GATEWAY Field label verification done: ' + data.site_data.secondaryISP_Gateway_fieldLabel_Attribute);

        //validation with the External SECONDARY ISP NETMASK "place holder, field label"
        expect(sitePage.sspNM_placeholderAttr()).toMatch(data.site_data.secondaryISP_Netmask_PlaceHolder_Attribute);
        console.log('SECONDARY ISP NETMASK Placeholder verification done: ' + data.site_data.secondaryISP_Netmask_PlaceHolder_Attribute);
        expect(sitePage.sspNM_fieldLabelAttr()).toMatch(data.site_data.secondaryISP_Netmask_fieldLabel_Attribute);
        console.log('SECONDARY ISP NETMASK Field label verification done: ' + data.site_data.secondaryISP_Netmask_fieldLabel_Attribute);

        expect(sitePage.submitAddSite_State()).toEqual('true');
        browser.sleep(1000);
    });

    it('Site Page RESERVED SUBNET Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);

        //validation with the RESERVED SUBNET "place holder, max length, min length, field label"
        expect(sitePage.resSub_placeholderAttr()).toMatch(data.site_data.reservedSubnet_PlaceHolder_Attribute);
        console.log('RESERVED SUBNET Placeholder verification done: ' + data.site_data.reservedSubnet_PlaceHolder_Attribute);
        expect(sitePage.resSub_fieldLabelAttr()).toMatch(data.site_data.reservedSubnet_fieldLabel_Attribute);
        console.log('RESERVED SUBNET Field label verification done: ' + data.site_data.reservedSubnet_fieldLabel_Attribute);

        sitePage.clickCancel();
        browser.sleep(2000);
        // sitePage.addSiteCancelMessageButton();
        common_Component.appLogout();

    });
});
