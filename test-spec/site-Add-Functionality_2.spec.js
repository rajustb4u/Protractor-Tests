describe('Acumen Add_Site Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-415 - Devices field validation errors, and checking the Add Site State when those errors exist:', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //validating the Device name and IP Address are empty
        console.log('validating the Device name and IP Address are empty');
        expect(sitePage.deviceName_value()).toEqual('');
        console.log('   Device name is empty :');
        expect(sitePage.device_ipAddress_value()).toEqual('');
        console.log('   Device IP Address is empty :');

        sitePage.deviceName(data.site_data.device_name_validation);
        //capturing the error message and validating when we enter the Device Name with 2 characters.
        expect(common_Component.getElementErrorByInputName('device_set_0_name')).toEqual(data.site_data.device_name_errorMsg);
        console.log('The Error message captured for device_set_0_name: ' + data.site_data.device_name_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.deviceName_clear();
        sitePage.deviceName(data.site_data.device_name);
        browser.sleep(1000);

        //capturing the error message and validating when we enter the Device IP Address with 2 characters.
        expect(common_Component.getElementErrorByInputName('device_set_0_ip_address')).toEqual(data.site_data.device_ip_errorMsg);
        console.log('The Error message captured for device_set_0_ip_address after entering the Device Name the IP Address is mandatory to enter: ' + data.site_data.device_ip_errorMsg);

        sitePage.smartDeviceIP(data.site_data.device_ip_validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the Device IP Address with 2 characters.
        expect(common_Component.getElementErrorByInputName('device_set_0_ip_address')).toEqual(data.site_data.device_ip_errorMsg1);
        console.log('The Error message captured for device_set_0_ip_address: ' + data.site_data.device_ip_errorMsg1);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.smartDeviceIP_clear();
        sitePage.smartDeviceIP(data.site_data.device_ip);
        browser.sleep(1000);

        sitePage.deviceName_clear();
        expect(common_Component.getElementErrorByInputName('device_set_0_name')).toEqual(data.site_data.device_name_errorMsg_1);
        console.log('The Error message captured for device_set_0_name when we have the Device IP and the Device Name is cleared: ' + data.site_data.device_name_errorMsg_1);
        sitePage.deviceName(data.site_data.device_name);
        // sitePage.device_External_Available();
        browser.sleep(1000);
    });

    it('Test Case AC-415 - Devices validation 1)Add Device Button, 2)Delete Button 3)Validating the empty rows with Devices', function () {
        var sitePage = new site_Page();

        //1) Validating the Add Device button
        expect(sitePage.add_Device_Button_State()).toEqual(null);
        console.log('   ADD DEVICE" button becomes active (available) if at least one field contains data: ');

        //2) Validating the Delete Device button
        console.log('2) Validating the Delete Device button');
        sitePage.addDevice_Button();
        expect(sitePage.device_Delete_Button_State()).toEqual(null);
        console.log('   Delete Device Button is enabled after Adding a device & IP this delete button is for first Device: ');
        expect(sitePage.device_Delete_Button_State1()).toEqual(null);
        console.log('   Delete Device Button_1 is enabled after Adding a device & IP this delete button is for second Device: ');

        //3)Validating the empty rows with Devices
        console.log('3)Validating the empty rows with Devices');
        sitePage.deviceName1(data.site_data.device_name1);
        sitePage.smartDeviceIP1(data.site_data.device_ip1);
        // sitePage.device_External_Available_1();
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Second Device:');

        sitePage.deviceName2(data.site_data.device_name2);
        sitePage.smartDeviceIP2(data.site_data.device_ip2);
        // sitePage.device_External_Available_2();
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Third Device:');

        sitePage.deviceName3(data.site_data.device_name3);
        sitePage.smartDeviceIP3(data.site_data.device_ip3);
        // sitePage.device_External_Available_3();
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Fourth Device:');

        sitePage.deviceName4(data.site_data.device_name4);
        sitePage.smartDeviceIP4(data.site_data.device_ip4);
        // sitePage.device_External_Available_4();
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Fifth Device:');

        sitePage.deviceName5(data.site_data.device_name5);
        sitePage.smartDeviceIP5(data.site_data.device_ip5);
        // sitePage.device_External_Available_5();
        console.log('   Entered Sixth Device:');

        //Deleting Device 1,3,4
        sitePage.device_Delete_Button();
        sitePage.device_Delete_Button2();
        sitePage.device_Delete_Button3();
        console.log('   Deleted 1, 3, 4 Devices');
        console.log('   Remaining devices are 2, 5, 6');
        browser.sleep(1000);

        //Validating the Add Site button is enabled
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is enabled after all the fields from Devices section are correctly entered: ');
    });
});
