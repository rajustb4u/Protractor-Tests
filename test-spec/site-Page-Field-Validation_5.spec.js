describe('Acumen Site Page Connection Section OPAQ VPN DEVICE Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Connection Section OPAQ VPN DEVICE Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validation with the Connection OPAQ VPN DEVICE "place holder, max length, min length, field label"
        expect(sitePage.opaq_VPN_Device_Text()).toEqual(data.site_data.opaq_vpn_device_Text);
        console.log('The Displayed text for OPAQ VPN Device: '+data.site_data.opaq_vpn_device_Text);
        browser.sleep(1000);

        expect(sitePage.opVPN_Checked()).toMatch(data.site_data.opaq_vpn_device_Checked);
        console.log('OAQ VPN DEVICE in Connection method is checked default: '+data.site_data.opaq_vpn_device_Checked);
        expect(sitePage.opVPN_Name()).toMatch(data.site_data.opaq_vpn_device_Name);
        console.log('OAQ VPN DEVICE name in Connection method verification done: '+data.site_data.opaq_vpn_device_Name);
        expect(sitePage.opVPN_Value()).toMatch(data.site_data.opaq_vpn_device_Value);
        console.log('OAQ VPN DEVICE value in Connection method verification done: '+data.site_data.opaq_vpn_device_Value);

        //validation with the Connection OPAQ VPN DEVICE INTERNAL IP ADDRESS "place holder, field label"
        expect(sitePage.cinIP_placeholderAttr()).toMatch(data.site_data.opaqVPN_InternalIP_PlaceHolder_Attribute);
        console.log('Connection OPAQ Device Internal IP Placeholder verification done: '+data.site_data.opaqVPN_InternalIP_PlaceHolder_Attribute);
        if(expect(sitePage.cinIP_fieldLabelAttr()).toMatch(data.site_data.opaqVPN_InternalIP_fieldLabel_Attribute)) {
            console.log('Connection OPAQ Device Internal IP Field label verification done: '+data.site_data.opaqVPN_InternalIP_fieldLabel_Attribute);
        }

        //validation with the Connection OPAQ VPN DEVICE NETMASK "place holder, field label"
        expect(sitePage.nmOPVPNDev_placeholderAttr()).toMatch(data.site_data.opaqVPN_Netmask_PlaceHolder_Attribute);
        console.log('Connection OPAQ Device NETMASK palace holder verification done: '+data.site_data.opaqVPN_Netmask_PlaceHolder_Attribute);
        expect(sitePage.nmOPVPNDev_fieldLabelAttr()).toMatch(data.site_data.opaqVPN_Netmask_fieldLabel_Attribute);
        console.log('Connection OPAQ Device NETMASK Field label verification done: '+data.site_data.opaqVPN_Netmask_fieldLabel_Attribute);

        //validation with the Connection OPAQ VPN DEVICE GATEWAY "place holder, field label"
        expect(sitePage.gwOPVPNDev_placeholderAttr()).toMatch(data.site_data.opaqVPN_Gateway_PlaceHolder_Attribute);
        console.log('Connection OPAQ Device GATEWAY palace holder verification done: '+data.site_data.opaqVPN_Gateway_PlaceHolder_Attribute);
        expect(sitePage.gwOPVPNDev_fieldLabelAttr()).toMatch(data.site_data.opaqVPN_Gateway_fieldLabel_Attribute);
        console.log('Connection OPAQ Device GATEWAY Field label verification done: '+data.site_data.opaqVPN_Gateway_fieldLabel_Attribute);


        sitePage.clickCancel();
        browser.sleep(2000);
        // sitePage.addSiteCancelMessageButton();
        common_Component.appLogout();
    });

});
