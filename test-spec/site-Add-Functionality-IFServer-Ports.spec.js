describe('Acumen Add_Site Functionality Tests for Servers and Port Translations', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-415 - Servers, Port Translation field validation errors, and checking the Add Site State when those errors exist:', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validating the Device name and IP Address and Domain Name are empty
        console.log('validating the Server name and IP Address are empty');
        expect(sitePage.deviceName_value()).toEqual('');
        console.log('   Server name is empty :');
        expect(sitePage.device_ipAddress_value()).toEqual('');
        console.log('   Server IP Address is empty :');
        expect(sitePage.domainName_value()).toEqual('');
        console.log('   Domain Name is empty :');

        //validating the Port Translation button & Add Server buttons are disabled
        console.log('validating the Port Translation & Add Server buttons are disabled:');
        expect(sitePage.portTranslation_state()).toEqual('true');
        console.log('   Port Translation button is in Disabled state :');
        expect(sitePage.add_Device_Button_State()).toEqual('true');
        console.log('   Add Server button is in Disabled state :');

        sitePage.deviceName(data.site_data.device_name_validation);
        //capturing the error message and validating when we enter the Device Name with 2 characters.
        expect(common_Component.getElementErrorByInputName('device_set_0_name')).toEqual(data.site_data.device_name_errorMsg);
        console.log('The Error message captured for Server Name: ' + data.site_data.device_name_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.deviceName_clear();
        sitePage.deviceName(data.site_data.device_name);
        browser.sleep(1000);

        // //capturing the error message and validating when we enter the Device IP Address with 2 characters.
        // expect(common_Component.getElementErrorByInputName('device_set_0_ip_address')).toEqual(data.site_data.device_ip_errorMsg);
        // console.log('The Error message captured for Server IP Address after entering the Server Name the IP Address is mandatory to enter: ' + data.site_data.device_ip_errorMsg);

        sitePage.smartDeviceIP(data.site_data.device_ip_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Device IP Address with 2 characters.
        expect(common_Component.getElementErrorByInputName('device_set_0_ip_address')).toEqual(data.site_data.device_ip_errorMsg1);
        console.log('The Error message captured for Server IP Address: ' + data.site_data.device_ip_errorMsg1);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.smartDeviceIP_clear();
        sitePage.smartDeviceIP(data.site_data.device_ip);
        browser.sleep(1000);

        sitePage.deviceName_clear();
        expect(common_Component.getElementErrorByInputName('device_set_0_name')).toEqual(data.site_data.device_name_errorMsg_1);
        console.log('The Error message captured for Server Name when we have the Server IP and the Server Name is cleared: ' + data.site_data.device_name_errorMsg_1);
        sitePage.deviceName(data.site_data.device_name);

        //capturing the error message and validating when we enter the Domain NAme with 2 characters and when the Device Name & IP are empty.
        sitePage.domainName_text(data.site_data.domain_Name_validation);
        expect(common_Component.getElementErrorByInputName('device_set_0_domain_name')).toEqual(data.site_data.domain_Name_errorMsg);
        console.log('The Error message captured for device_set_0_domain_name: ' + data.site_data.domain_Name_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.domainName_clear();
        sitePage.domainName_text(data.site_data.domain_Name);
        sitePage.deviceName_clear();
        browser.sleep(1000);
        expect(common_Component.getElementErrorByInputName('device_set_0_name')).toEqual(data.site_data.device_name_errorMsg_1);
        console.log('The Error message captured for Server Name when we have the Server IP and the Server Name is cleared: ' + data.site_data.device_name_errorMsg_1);
        sitePage.deviceName(data.site_data.device_name);
        sitePage.smartDeviceIP_clear();
        browser.sleep(1000);
        expect(common_Component.getElementErrorByInputName('device_set_0_ip_address')).toEqual(data.site_data.device_ip_errorMsg);
        console.log('The Error message captured for Server IP Address: ' + data.site_data.device_ip_errorMsg);
        browser.sleep(1000);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.smartDeviceIP(data.site_data.device_ip);

       // capturing the error message and validating when we enter the Internal & External ports with 2 characters and when one of the port are empty.
        if(expect(sitePage.portTranslation_state()).toEqual(null)) {
            console.log('   Port Translation button is in Enabled state :');
            sitePage.portTranslation_click();

            //validating the External port Error message.
            sitePage.externalPort_text(data.site_data.iFS_ExternalPort_validation);
            expect(common_Component.getElementErrorByInputName('device_0_ports_set_0_external_port')).toEqual(data.site_data.iFS_ExternalPort_validation_errorMsg);
            console.log('The Error message captured for device_0_ports_set_0_external_port: ' + data.site_data.iFS_ExternalPort_validation_errorMsg);
            sitePage.externalPort_clear();
            sitePage.externalPort_text(data.site_data.iFS_ExternalPort);

            //validating the Internal port Error message.
            sitePage.internalPort_text(data.site_data.iFS_InternalPort_validation);
            expect(common_Component.getElementErrorByInputName('device_0_ports_set_0_internal_port')).toEqual(data.site_data.iFS_InternalPort_validation_errorMsg);
            console.log('The Error message captured for device_0_ports_set_0_internal_port: ' + data.site_data.iFS_InternalPort_validation_errorMsg);
            sitePage.internalPort_clear();
            sitePage.internalPort_text(data.site_data.iFS_InternalPort);

            //validating the required error messages for both External & Internal ports when either one is empty:
            sitePage.externalPort_clear();
            expect(common_Component.getElementErrorByInputName('device_0_ports_set_0_external_port')).toEqual(data.site_data.iFS_ExternalPort_errorMsg1);
            console.log('The required Error message captured for device_0_ports_set_0_external_port: ' + data.site_data.iFS_ExternalPort_errorMsg1);
            sitePage.externalPort_text(data.site_data.iFS_ExternalPort);

            sitePage.internalPort_clear();
            expect(common_Component.getElementErrorByInputName('device_0_ports_set_0_internal_port')).toEqual(data.site_data.iFS_InternalPort_errorMsg1);
            console.log('The required Error message captured for device_0_ports_set_0_internal_port: ' + data.site_data.iFS_InternalPort_errorMsg1);
            sitePage.internalPort_text(data.site_data.iFS_InternalPort);

            expect(sitePage.addPortTranslation_State()).toEqual(null);
            console.log('Add Port Translation button is in Enabled state: ');
            browser.sleep(1000);

            sitePage.externalPort_clear();
            sitePage.internalPort_clear();
        }
        sitePage.deviceName_clear();
        sitePage.smartDeviceIP_clear();
        sitePage.domainName_clear();
        browser.sleep(1000);
        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
