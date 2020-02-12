describe('Acumen Add_Site Functionality Tests for Internet Facing Servers', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-415 - Port translation Functionality 1)Add Server Button, 2)Delete Server Button 3)Validating the rows with IFServers & Port Translations:', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //1) Validating the Add Device & PortTranslations button
        if(expect(sitePage.add_Device_Button_State()).toEqual('true')) {
            console.log('   ADD Server" button become Disabled if at least one field doesnt contain data: ');
            sitePage.deviceName(data.site_data.device_name);
            sitePage.smartDeviceIP(data.site_data.device_ip);
            sitePage.domainName_text(data.site_data.domain_Name);
            browser.sleep(1000);
            if(expect(sitePage.add_Device_Button_State()).toEqual(null)) {
                console.log('   ADD Server" buttons become active (available) if at least one field contains data: ');
                expect(sitePage.portTranslation_state()).toEqual(null);
                console.log('   Port Translation button is in Enabled state :');
            }
            sitePage.portTranslation_click();
            if(expect(sitePage.addPortTranslation_State()).toEqual('true')) {
                console.log('Add Port Translation button is in Disabled state when the port data is not entered: ');
                browser.sleep(1000);
                sitePage.externalPort_text(data.site_data.iFS_ExternalPort);
                sitePage.internalPort_text(data.site_data.iFS_InternalPort);
                browser.sleep(1000);
            }
        }

        //2) Validating the Delete Device button
        console.log('2) Validating the Delete Server button');
        sitePage.addDevice_Button();
        if(expect(sitePage.device_Delete_Button_State()).toEqual(null)) {
            console.log('   Delete Server Button is enabled after Adding a device & IP this delete button is for first Server: ');
            if(expect(sitePage.device_Delete_Button_State1()).toEqual(null)) {
                console.log('   Delete Server Button_1 is enabled after Adding a device & IP this delete button is for second Server: ');
            }
        }

        //3)Validating the empty rows with Devices
        console.log('3)Validating the empty rows with Servers');
        sitePage.deviceName1(data.site_data.device_name1);
        sitePage.smartDeviceIP1(data.site_data.device_ip1);
        sitePage.domainName1_text(data.site_data.domain_Name1);
        sitePage.portTranslation1_click();
        sitePage.externalPort_1_text(data.site_data.iFS_ExternalPort1);
        sitePage.internalPort_1_text(data.site_data.iFS_InternalPort1);
        browser.sleep(1000);
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Second Server:');

        sitePage.deviceName2(data.site_data.device_name2);
        sitePage.smartDeviceIP2(data.site_data.device_ip2);
        sitePage.domainName2_text(data.site_data.domain_Name2);
        sitePage.portTranslation2_click();
        sitePage.externalPort_2_text(data.site_data.iFS_ExternalPort2);
        sitePage.internalPort_2_text(data.site_data.iFS_InternalPort2);
        browser.sleep(1000);
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Third Server:');

        sitePage.deviceName3(data.site_data.device_name3);
        sitePage.smartDeviceIP3(data.site_data.device_ip3);
        sitePage.domainName3_text(data.site_data.domain_Name3);
        sitePage.portTranslation3_click();
        sitePage.externalPort_3_text(data.site_data.iFS_ExternalPort3);
        sitePage.internalPort_3_text(data.site_data.iFS_InternalPort3);
        browser.sleep(1000);
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Fourth Server:');

        sitePage.deviceName4(data.site_data.device_name4);
        sitePage.smartDeviceIP4(data.site_data.device_ip4);
        sitePage.portTranslation4_click();
        sitePage.externalPort_4_text(data.site_data.iFS_ExternalPort4);
        sitePage.internalPort_4_text(data.site_data.iFS_InternalPort4);
        sitePage.domainName4_text(data.site_data.domain_Name4);
        browser.sleep(1000);
        sitePage.addDevice_Button();
        browser.sleep(1000);
        console.log('   Entered Fifth Server:');

        sitePage.deviceName5(data.site_data.device_name5);
        sitePage.smartDeviceIP5(data.site_data.device_ip5);
        sitePage.domainName5_text(data.site_data.domain_Name5);
        sitePage.portTranslation5_click();
        sitePage.externalPort_5_text(data.site_data.iFS_ExternalPort5);
        sitePage.internalPort_5_text(data.site_data.iFS_InternalPort5);
        browser.sleep(1000);
        console.log('   Entered Sixth Server:');

        //Deleting Device 1,3,4
        sitePage.device_Delete_Button();
        sitePage.device_Delete_Button2();
        sitePage.device_Delete_Button3();
        console.log('   Deleted 1, 3, 4 Server');
        console.log('   Remaining Server are 2, 5, 6');
        browser.sleep(1000);

        //Validating the Add Site button is enabled
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is enabled after all the fields from Server section are correctly entered: ');

        browser.sleep(1000);
        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
