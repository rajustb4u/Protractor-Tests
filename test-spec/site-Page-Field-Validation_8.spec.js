describe('Acumen Site Page List Of Subnets', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page List Of Subnets Validation "place holder, name, min length, max length, field label, required', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validation with the Network Internal List of Subnets NETWORK IP RANGE attributes "place holder, max length, min length, field label"
        expect(sitePage.nnIP_placeholderAttr()).toMatch(data.site_data.network_ip_PlaceHolder_Attribute);
        console.log('NETWORK IP RANGE Placeholder verification done: ' + data.site_data.network_ip_PlaceHolder_Attribute);
        expect(sitePage.nnIP_fieldLabelAttr()).toMatch(data.site_data.network_ip_fieldLabel_Attribute);
        console.log('NETWORK IP RANGE Field label verification done: ' + data.site_data.network_ip_fieldLabel_Attribute);
        // expect(sitePage.nnIP_maxlengthAttr()).toMatch(data.site_data.network_ip_maxLength_Attribute);
        // console.log('NETWORK IP RANGE Max Length verification done: ' + data.site_data.network_ip_maxLength_Attribute);
        // expect(sitePage.nnIP_minlengthAttr()).toMatch(data.site_data.network_ip_minLength_Attribute);
        // console.log('NETWORK IP RANGE Min Length verification done: ' + data.site_data.network_ip_minLength_Attribute);
    });

    // it('Site Page Internet Facing Servers Section Validation "place holder, name, min length, max length, field label, required', function() {
    //     var sitePage = new site_Page();
    //
    //     //validation with the Devices NAME "place holder, max length, min length, field label"
    //     expect(sitePage.dvn_placeholderAttr()).toMatch(data.site_data.device_name_PlaceHolder_Attribute);
    //     console.log('Server NAME Placeholder verification done: ' + data.site_data.device_name_PlaceHolder_Attribute);
    //     expect(sitePage.dvn_fieldLabelAttr()).toMatch(data.site_data.device_name_fieldLabel_Attribute);
    //     console.log('Server NAME Field label verification done: ' + data.site_data.device_name_fieldLabel_Attribute);
    //     expect(sitePage.dvn_maxlengthAttr()).toMatch(data.site_data.device_name_maxLength_Attribute);
    //     console.log('Server NAME Max Length verification done: ' + data.site_data.device_name_maxLength_Attribute);
    //     expect(sitePage.dvn_minlengthAttr()).toMatch(data.site_data.device_name_minLength_Attribute);
    //     console.log('Server NAME Min Length verification done: ' + data.site_data.device_name_minLength_Attribute);
    //
    //     //validation with the Devices IP ADDRESS "place holder, field label"
    //     expect(sitePage.dvip_placeholderAttr()).toMatch(data.site_data.device_ip_PlaceHolder_Attribute);
    //     console.log('Server IP Placeholder verification done: ' + data.site_data.device_ip_PlaceHolder_Attribute);
    //     expect(sitePage.dvip_fieldLabelAttr()).toMatch(data.site_data.device_ip_fieldLabel_Attribute);
    //     console.log('Server IP Field label verification done: ' + data.site_data.device_ip_fieldLabel_Attribute);
    // });

    // it('Site Page Internet Facing Servers Domain Name Validation "place holder, name, min length, max length, field label, required', function () {
    //     var sitePage = new site_Page();
    //     sitePage.deviceName(data.site_data.device_name);
    //     sitePage.smartDeviceIP(data.site_data.device_ip);
    //     //validation with the Domain NAME "place holder, max length, min length, field label"
    //     expect(sitePage.dnm_placeholderAttr()).toMatch(data.site_data.domain_Name_PlaceHolder_Attribute);
    //     console.log('Domain NAME Placeholder verification done: ' + data.site_data.domain_Name_PlaceHolder_Attribute);
    //     expect(sitePage.dnm_fieldLabelAttr()).toMatch(data.site_data.domain_Name_fieldLabel_Attribute);
    //     console.log('Domain NAME Field label verification done: ' + data.site_data.domain_Name_fieldLabel_Attribute);
    //     expect(sitePage.dnm_maxlengthAttr()).toMatch(data.site_data.domain_Name_maxLength_Attribute);
    //     console.log('Domain NAME Max Length verification done: ' + data.site_data.domain_Name_maxLength_Attribute);
    //     expect(sitePage.dnm_minlengthAttr()).toMatch(data.site_data.domain_Name_minLength_Attribute);
    //     console.log('Domain NAME Min Length verification done: ' + data.site_data.domain_Name_minLength_Attribute);
    //     sitePage.domainName_text(data.site_data.domain_Name);
    // });
    //
    // it('Site Page Internet Facing Servers External Port Validation "place holder, name, min length, max length, field label, required', function () {
    //     var sitePage = new site_Page();
    //     if(expect(sitePage.portTranslation_state()).toEqual(null)) {
    //         sitePage.portTranslation_click();
    //         browser.sleep(1000);
    //         //validation with the Domain NAME "place holder, max length, min length, field label"
    //         expect(sitePage.iFSEP_placeholderAttr()).toMatch(data.site_data.iFS_ExternalPort_PlaceHolder_Attribute);
    //         console.log('Internet Facing Servers External Port Placeholder verification done: ' + data.site_data.iFS_ExternalPort_PlaceHolder_Attribute);
    //         expect(sitePage.iFSEP_fieldLabelAttr()).toMatch(data.site_data.iFS_ExternalPort_fieldLabel_Attribute);
    //         console.log('Internet Facing Servers External Port Field label verification done: ' + data.site_data.iFS_ExternalPort_fieldLabel_Attribute);
    //         expect(sitePage.iFSEP_maxlengthAttr()).toMatch(data.site_data.iFS_ExternalPort_maxLength_Attribute);
    //         console.log('Internet Facing Servers External Port Max Length verification done: ' + data.site_data.iFS_ExternalPort_maxLength_Attribute);
    //     }
    // });
    //
    // it('Site Page Internet Facing Servers Internal Port Validation "place holder, name, min length, max length, field label, required', function () {
    //     var sitePage = new site_Page();
    //
    //     //validation with the Domain NAME "place holder, max length, min length, field label"
    //     expect(sitePage.iFSIP_placeholderAttr()).toMatch(data.site_data.iFS_InternalPort_PlaceHolder_Attribute);
    //     console.log('Internet Facing Servers Internal Port Placeholder verification done: ' + data.site_data.iFS_InternalPort_PlaceHolder_Attribute);
    //     expect(sitePage.iFSIP_fieldLabelAttr()).toMatch(data.site_data.iFS_InternalPort_fieldLabel_Attribute);
    //     console.log('Internet Facing Servers Internal Port Field label verification done: ' + data.site_data.iFS_InternalPort_fieldLabel_Attribute);
    //     expect(sitePage.iFSIP_maxlengthAttr()).toMatch(data.site_data.iFS_InternalPort_maxLength_Attribute);
    //     console.log('Internet Facing Servers Internal Port Max Length verification done: ' + data.site_data.iFS_InternalPort_maxLength_Attribute);
    //
    //     sitePage.clickCancel();
    //     browser.sleep(1000);
    //     sitePage.addSiteCancelMessageButton();
    //     browser.sleep(1000);
    //     common_Component.appLogout();
    // });

});
