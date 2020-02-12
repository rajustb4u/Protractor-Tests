describe('Acumen Add_Site Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Network - External Primary Internet Service Provider & ISP Bandwidth', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        sitePage.primary_ISP(data.site_data.primary_ISP_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the PRIMARY ISP with 1 character1.
        expect(common_Component.getElementErrorByName('siteprovider_set_0_name')).toEqual(data.site_data.primary_ISP_errorMsg);
        console.log('The Error message captured for siteprovider_set_0_name: ' + data.site_data.primary_ISP_errorMsg);
        browser.sleep(1000);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.primary_ISP_clear();
        sitePage.primary_ISP(data.site_data.primary_ISP);
        browser.sleep(1000);

        sitePage.primary_ISP_IPAddress(data.site_data.primaryISP_ip_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Primary ISP IP Address with 2 characters.
        expect(common_Component.getElementErrorByInputName('siteprovider_set_0_ip_address')).toEqual(data.site_data.primaryISP_ip_errorMsg);
        console.log('The Error message captured for siteprovider_set_0_ip_address: ' + data.site_data.primaryISP_ip_errorMsg);
        browser.sleep(1000);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.primary_ISP_IPAddress_clear();
        sitePage.primary_ISP_IPAddress(data.site_data.primaryISP_ip);
        browser.sleep(1000);

        sitePage.PISP_Bandwidth_UP(data.site_data.primaryISP_UP_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Primary ISP UP(MBPS.) with a character.
        expect(common_Component.getElementErrorByName('siteprovider_set_0_bandwidth_up')).toEqual(data.site_data.primaryISP_UP_errorMsg);
        console.log('The Error message captured for siteprovider_set_0_bandwidth_up: ' + data.site_data.primaryISP_UP_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.PISP_Bandwidth_UP_clear();
        sitePage.PISP_Bandwidth_UP(data.site_data.primaryISP_UP);
        browser.sleep(1000);

        sitePage.PISP_Bandwidth_Down(data.site_data.primaryISP_Down_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Primary ISP DOWN(MBPS.) with a character.
        expect(common_Component.getElementErrorByInputName('siteprovider_set_0_bandwidth_down')).toEqual(data.site_data.primaryISP_Down_errorMsg);
        console.log('The Error message captured for siteprovider_set_0_bandwidth_down: ' + data.site_data.primaryISP_Down_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.PISP_Bandwidth_Down_clear();
        sitePage.PISP_Bandwidth_Down(data.site_data.primaryISP_Down);
        browser.sleep(1000);

        sitePage.PISP_Bandwidth_Gateway(data.site_data.primaryISP_Gateway_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Primary ISP Gateway with 2 characters.
        expect(common_Component.getElementErrorByInputName('siteprovider_set_0_gateway_ip_address')).toEqual(data.site_data.primaryISP_Gateway_errorMsg);
        console.log('The Error message captured for siteprovider_set_0_gateway_ip_address: ' + data.site_data.primaryISP_Gateway_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.PISP_Bandwidth_Gateway_clear();
        sitePage.PISP_Bandwidth_Gateway(data.site_data.primaryISP_Gateway);
        browser.sleep(1000);

        sitePage.PISP_Bandwidth_Netmask(data.site_data.primaryISP_Netmask_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Primary ISP Gateway with 2 characters.
        expect(common_Component.getElementErrorByInputName('siteprovider_set_0_net_mask')).toEqual(data.site_data.primaryISP_Netmask_errorMsg);
        console.log('The Error message captured for siteprovider_set_0_net_mask: ' + data.site_data.primaryISP_Netmask_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.PISP_Bandwidth_Netmask_clear();
        sitePage.PISP_Bandwidth_Netmask(data.site_data.primaryISP_Netmask);
        browser.sleep(2000);

        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
