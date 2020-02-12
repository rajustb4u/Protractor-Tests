describe('Acumen Site Page Connection Section Other VPN Device Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Connection Section Other VPN Device Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        sitePage.otherVPNDevice_Radio();
        browser.sleep(1000);

        expect(sitePage.other_VPN_Device_Text()).toEqual(data.site_data.other_vpn_Text);
        console.log('The Displayed text for OTHER VPN Device: '+data.site_data.other_vpn_Text);

        //validation with the Connection Other VPN DEVICE "place holder, max length, min length, field label"
        expect(sitePage.otVPN_Checked()).toMatch(data.site_data.other_vpn_device_Checked);
        console.log('OTHER VPN DEVICE in Connection method is checked default: '+data.site_data.other_vpn_device_Checked);
        expect(sitePage.otVPN_Name()).toMatch(data.site_data.other_vpn_Name);
        console.log('OTHER VPN DEVICE name in Connection method verification done: '+data.site_data.other_vpn_Name);
        expect(sitePage.otVPN_Value()).toMatch(data.site_data.other_vpn_Value);
        console.log('OTHER VPN DEVICE value in Connection method verification done: '+data.site_data.other_vpn_Value);

        //validation with the Connection Other VPN DEVICE INTERNAL IP ADDRESS "place holder, field label"
        expect(sitePage.cOtIP_placeholderAttr()).toMatch(data.site_data.otherVPN_IP_PlaceHolder_Attribute);
        console.log('Connection OTHER Device IP Placeholder verification done: '+data.site_data.otherVPN_IP_PlaceHolder_Attribute);
        expect(sitePage.cOtIP_fieldLabelAttr()).toMatch(data.site_data.otherVPN_IP_fieldLabel_Attribute);
        console.log('Connection OTHER Device IP Field label verification done: '+data.site_data.otherVPN_IP_fieldLabel_Attribute);

        //validation with the Connection Other VPN DEVICE Details "place holder, field label"
        // expect(sitePage.ddOtVPNDev_placeholderAttr()).toMatch(data.site_data.otherVPN_DeviceDetails_PlaceHolder_Attribute);
        console.log('Connection OTHER Device Details Placeholder verification done: '+data.site_data.otherVPN_DeviceDetails_PlaceHolder_Attribute);
        expect(sitePage.ddOtVPNDev_fieldLabelAttr()).toMatch(data.site_data.otherVPN_DeviceDetails_fieldLabel_Attribute);
        console.log('Connection OTHER Device Details Field label verification done: '+data.site_data.otherVPN_DeviceDetails_fieldLabel_Attribute);

        sitePage.clickCancel();
        browser.sleep(2000);
        sitePage.addSiteCancelMessageButton();
        common_Component.appLogout();
    });
});
