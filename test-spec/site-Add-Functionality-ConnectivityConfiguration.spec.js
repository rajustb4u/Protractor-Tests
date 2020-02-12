describe('Acumen Add_Site Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC - 425 Connection - OPĀQ VPN DEVICE', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        // OPAQ VPN Device Internal IP Error validation
        sitePage.internalIP_Address_Opaq(data.site_data.opaqVPN_InternalIP_Validation);
        //capturing the error message and validating when we enter the Connection Internal IP Address with 1 character1.
        if(expect(common_Component.getElementErrorByInputName('connection_obj_internal_ip_address_opaq')).toEqual(data.site_data.opaqVPN_InternalIP_errorMsg)) {
            console.log('The Error message captured for connection_obj_internal_ip_address_opaq: ' + data.site_data.opaqVPN_InternalIP_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.internalIP_Address_Opaq_clear();
                sitePage.internalIP_Address_Opaq(data.site_data.opaqVPN_InternalIP);
                browser.sleep(1000);
            }
        }

        // OPAQ VPN Device NETMASK Error validation
        sitePage.netmask_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Netmask_Validation);
        //capturing the error message and validating when we enter the Connection NETMASK with invalid IP.
        if(expect(common_Component.getElementErrorByInputName('connection_obj_netmask_opaq')).toEqual(data.site_data.opaqVPN_Netmask_errorMsg)) {
            console.log('The Error message captured for connection_obj_netmask_opaq: ' + data.site_data.opaqVPN_Netmask_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.netmask_OpaqVPNDevice_clear();
                sitePage.netmask_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Netmask);
                browser.sleep(1000);
            }
        }

        // OPAQ VPN Device GATEWAY Error validation
        sitePage.gateway_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Gateway_Validation);
        //capturing the error message and validating when we enter the Connection GATEWAY with invalid IP.
        if(expect(common_Component.getElementErrorByInputName('connection_obj_gateway_opaq')).toEqual(data.site_data.opaqVPN_Gateway_errorMsg)) {
            console.log('The Error message captured for connection_obj_gateway_opaq: ' + data.site_data.opaqVPN_Gateway_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.gateway_OpaqVPNDevice_clear();
                sitePage.gateway_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Netmask);
                browser.sleep(1000);
            }
        }
    });

    it('Test Case AC - 445 Connection - OTHER VPN DEVICE', function () {
        var sitePage = new site_Page();
        sitePage.otherVPNDevice_Radio();
        browser.sleep(1000);

        sitePage.IP_Address_OtherVPNDevice_click();
        sitePage.IP_Address_OtherVPNDevice_enter(data.site_data.otherVPN_IP_Validation);
        //capturing the error message and validating when we enter the Connection Internal IP Address with 1 character1.
        if(expect(common_Component.getElementErrorByInputName('connection_obj_internal_ip_address_other')).toEqual(data.site_data.otherVPN_IP_errorMsg)) {
            console.log('The Error message captured for connection_obj_internal_ip_address_other: ' + data.site_data.otherVPN_IP_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.IP_Address_OtherVPNDevice_clear();
                sitePage.IP_Address_OtherVPNDevice_enter(data.site_data.otherVPN_IP);
                browser.sleep(1000);
            }
        }

        if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
            console.log('Add Site Button is disabled when we have the validation error message: ');
            browser.sleep(1000);
            sitePage.deviceDetails_Other(data.site_data.other_vpn_device_Value);
            browser.sleep(1000);
        }

    });

    it('Test Case AC - 440 Connection - DATA CENTER CROSS CONNECT', function () {
        var sitePage = new site_Page();
        sitePage.dataCenter_Cross_Connect_Radio();
        browser.sleep(1000);

        //Select the HAND OFF TYPE
        for (i = 1; i < 3; i++) {
            common_Component.selectItemDropDown('btn-append-to-body',i);

            sitePage.dcRequested_Bandwidth_clear();
            sitePage.dcRequested_Bandwidth(data.site_data.requested_Bandwidth_validation);
            browser.sleep(1000);
            //capturing the error message and validating when we enter the Connection Internal IP Address with 1 character1.
            if(expect(common_Component.getElementErrorByInputName('connection_obj_requested_bandwidth')).toEqual(data.site_data.requested_Bandwidth_errorMsg)) {
                console.log('The Error message captured for connection_obj_requested_bandwidth: ' + data.site_data.requested_Bandwidth_errorMsg);
                if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                    console.log('Add Site Button is disabled when we have the validation error message: ');
                    sitePage.dcRequested_Bandwidth_clear();
                    sitePage.dcRequested_Bandwidth(data.site_data.requested_Bandwidth);
                    browser.sleep(1000);
                }
            }

            sitePage.dcpeerIPAddress_clear();
            sitePage.dcpeerIPAddress_enter(data.site_data.peer_IPAddress_Validation);
            browser.sleep(1000);
            //capturing the error message and validating when we enter the Connection External IP Address with 2 characters.
            if(expect(common_Component.getElementErrorByInputName('connection_obj_peer_ip_address')).toEqual(data.site_data.peer_IPAddress_errorMsg)) {
                console.log('The Error message captured for connection_obj_peer_ip_address: ' + data.site_data.peer_IPAddress_errorMsg);
                if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                    console.log('Add Site Button is disabled when we have the validation error message: ');
                    sitePage.dcpeerIPAddress_clear();
                    sitePage.dcpeerIPAddress_enter(data.site_data.peer_IPAddress);
                    browser.sleep(1000);
                }
            }
        };
        if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
            sitePage.clickCancel();
            browser.sleep(1000);
            sitePage.addSiteCancelMessageButton();
            browser.sleep(1000);
        }
        common_Component.appLogout();
    });
});
