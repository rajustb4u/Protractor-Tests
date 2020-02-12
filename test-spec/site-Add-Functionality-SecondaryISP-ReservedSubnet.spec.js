describe('Acumen Add_Site Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Network - External Secondary Internet Service Provider & ISP Bandwidth', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        sitePage.secondary_ISP(data.site_data.secondary_ISP_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Secondary ISP with 1 character1.
        if(expect(common_Component.getElementErrorByInputName('siteprovider_set_1_name')).toEqual(data.site_data.secondary_ISP_errorMsg)) {
            console.log('The Error message captured for siteprovider_set_1_name: ' + data.site_data.secondary_ISP_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.secondary_ISP_clear();
                sitePage.secondary_ISP(data.site_data.secondary_ISP);
                browser.sleep(1000);
            }
        }

        sitePage.sec_IP_Address(data.site_data.secondaryISP_ip_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Secondary ISP IP Address with 2 characters.
        if(expect(common_Component.getElementErrorByInputName('siteprovider_set_1_ip_address')).toEqual(data.site_data.secondaryISP_ip_errorMsg)) {
            console.log('The Error message captured for siteprovider_set_1_ip_address: ' + data.site_data.secondaryISP_ip_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.sec_IP_Address_clear();
                sitePage.sec_IP_Address(data.site_data.secondaryISP_ip);
                browser.sleep(1000);
            }
        }

        sitePage.sec_ISP_Bandwidth_UP(data.site_data.secondaryISP_UP_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Secondary ISP UP(MBPS.) with a character.
        if(expect(common_Component.getElementErrorByInputName('siteprovider_set_1_bandwidth_up')).toEqual(data.site_data.secondaryISP_UP_errorMsg)) {
            console.log('The Error message captured for siteprovider_set_1_bandwidth_up: ' + data.site_data.secondaryISP_UP_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.sec_ISP_Bandwidth_UP_clear();
                sitePage.sec_ISP_Bandwidth_UP(data.site_data.secondaryISP_UP);
                browser.sleep(1000);
            }
        }

        sitePage.sec_ISP_Bandwidth_Down(data.site_data.secondaryISP_Down_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Secondary ISP DOWN(MBPS.) with a character.
        if(expect(common_Component.getElementErrorByInputName('siteprovider_set_1_bandwidth_down')).toEqual(data.site_data.secondaryISP_Down_errorMsg)) {
            browser.sleep(1000);
            console.log('The Error message captured for siteprovider_set_1_bandwidth_down: ' + data.site_data.secondaryISP_Down_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.sec_ISP_Bandwidth_Down_clear();
                sitePage.sec_ISP_Bandwidth_Down(data.site_data.secondaryISP_Down);
                browser.sleep(1000);
            }
        }


        sitePage.sec_ISP_Bandwidth_Gateway(data.site_data.secondaryISP_Gateway_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Secondary ISP Gateway with 2 characters.
        if(expect(common_Component.getElementErrorByInputName('siteprovider_set_1_gateway_ip_address')).toEqual(data.site_data.secondaryISP_Gateway_errorMsg)) {
            console.log('The Error message captured for siteprovider_set_1_gateway_ip_address: ' + data.site_data.secondaryISP_Gateway_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.sec_ISP_Bandwidth_Gateway_clear();
                sitePage.sec_ISP_Bandwidth_Gateway(data.site_data.secondaryISP_Gateway);
                browser.sleep(1000);
            }
        }

        sitePage.sec_ISP_Bandwidth_Netmask(data.site_data.secondaryISP_Netmask_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Secondary ISP Gateway with 2 characters.
        if(expect(common_Component.getElementErrorByInputName('siteprovider_set_1_net_mask')).toEqual(data.site_data.secondaryISP_Netmask_errorMsg)) {
            console.log('The Error message captured for siteprovider_set_1_net_mask: ' + data.site_data.secondaryISP_Netmask_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.sec_ISP_Bandwidth_Netmask_clear();
                sitePage.sec_ISP_Bandwidth_Netmask(data.site_data.secondaryISP_Netmask);
                browser.sleep(1000);
            }
        }

        sitePage.reservedSubnet_text(data.site_data.reservedSubnet_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the ReservedSubnet withInvalid IP.
        if(expect(common_Component.getElementErrorByInputName('reserved_subnet')).toEqual(data.site_data.reservedSubnet_errorMsg)) {
            console.log('The Error message captured for reserved_subnet: ' + data.site_data.reservedSubnet_errorMsg);
            if(expect(sitePage.submitAddSite_State()).toEqual('true')) {
                console.log('Add Site Button is disabled when we have the validation error message: ');
                sitePage.reservedSubnet_clear();
                sitePage.reservedSubnet_text(data.site_data.reservedSubnet);
                browser.sleep(1000);
            }
        }

        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
