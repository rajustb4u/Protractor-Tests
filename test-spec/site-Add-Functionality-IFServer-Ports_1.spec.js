describe('Acumen Add_Site Functionality Tests for Port Translations', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-415 - IFS & Port translation Functionality 1)Add Server & PortTranslations button 2)Add Port Translation Button, 3)Delete Port :', function () {
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
            if(expect(sitePage.addPortTranslation_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                browser.sleep(1000);
                sitePage.addPortTranslation_click();
                sitePage.addDevice_Button();
            }
        }
        //Entering External & Internal port details for the first server & validating the Delete port translation and add port Translation buttons
        //1'st port translation for 1'st Server
        browser.sleep(1000);
        if(expect(sitePage.deletePortTranslation_1_state()).toEqual(null)) {
            sitePage.externalPort_0_1_text(data.site_data.iFS_ExternalPort1);
            sitePage.internalPort_0_1_text(data.site_data.iFS_InternalPort1);
            if(expect(sitePage.addPortTranslation_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                sitePage.addPortTranslation_click();
            }
        }
        //2'nd port translation for 1'st Server
        if(expect(sitePage.deletePortTranslation_1_state()).toEqual(null)){
            sitePage.externalPort_0_2_text(data.site_data.iFS_ExternalPort2);
            sitePage.internalPort_0_2_text(data.site_data.iFS_InternalPort2);
            if(expect(sitePage.addPortTranslation_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                sitePage.addPortTranslation_click();
            }
        }

        //3'rd port translation for 1'st Server
        if(expect(sitePage.deletePortTranslation_3_state()).toEqual(null)){
            sitePage.externalPort_0_3_text(data.site_data.iFS_ExternalPort3);
            sitePage.internalPort_0_3_text(data.site_data.iFS_InternalPort3);
            if(expect(sitePage.addPortTranslation_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                sitePage.addPortTranslation_click();
            }
        }

        //4'th port translation for 1'st Server
        if(expect(sitePage.deletePortTranslation_4_state()).toEqual(null)){
            sitePage.externalPort_0_4_text(data.site_data.iFS_ExternalPort4);
            sitePage.internalPort_0_4_text(data.site_data.iFS_InternalPort4);
            if(expect(sitePage.addPortTranslation_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                sitePage.addPortTranslation_click();
            }
        }

        //5'th port translation for 1'st Server
        if(expect(sitePage.deletePortTranslation_5_state()).toEqual(null)){
            sitePage.externalPort_0_5_text(data.site_data.iFS_ExternalPort5);
            sitePage.internalPort_0_5_text(data.site_data.iFS_InternalPort5);
            if(expect(sitePage.addPortTranslation_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
            }
        }
        //Deleting all 5 entered port translations for Server1
        sitePage.deletePortTranslation_5_click();
        sitePage.deletePortTranslation_4_click();
        sitePage.deletePortTranslation_3_click();
        sitePage.deletePortTranslation_2_click();
        sitePage.deletePortTranslation_1_click();
        sitePage.externalPort_clear();
        sitePage.internalPort_clear();
        sitePage.portTranslation_click();
        browser.sleep(1000);

        //Entering External & Internal port details for the first server & validating the Delete port translation and add port Translation buttons
        sitePage.deviceName1(data.site_data.device_name1);
        sitePage.smartDeviceIP1(data.site_data.device_ip1);
        sitePage.domainName1_text(data.site_data.domain_Name1);
        sitePage.portTranslation1_click();
        sitePage.externalPort_1_text(data.site_data.iFS_ExternalPort);
        sitePage.internalPort_1_text(data.site_data.iFS_InternalPort);
        browser.sleep(1000);
        sitePage.addPortTranslation1_click();
        browser.sleep(1000);

        //1'st port translation for 2'nd Server
        if(expect(sitePage.deletePortTranslation_0_state()).toEqual(null)){
            sitePage.externalPort_1_1_text(data.site_data.iFS_ExternalPort1);
            sitePage.internalPort_1_1_text(data.site_data.iFS_InternalPort1);
            if(expect(sitePage.addPortTranslation1_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                browser.sleep(1000);
                sitePage.addPortTranslation1_click();
            }
        }

        //2'nd port translation for 2'nd Server
        if(expect(sitePage.deletePortTranslation_1_state()).toEqual(null)){
            sitePage.externalPort_1_2_text(data.site_data.iFS_ExternalPort2);
            sitePage.internalPort_1_2_text(data.site_data.iFS_InternalPort2);
            if(expect(sitePage.addPortTranslation1_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                browser.sleep(1000);
                sitePage.addPortTranslation1_click();
            }
        }

        //3'rd port translation for 1'st Server
        if(expect(sitePage.deletePortTranslation_3_state()).toEqual(null)){
            sitePage.externalPort_1_3_text(data.site_data.iFS_ExternalPort3);
            sitePage.internalPort_1_3_text(data.site_data.iFS_InternalPort3);
            if(expect(sitePage.addPortTranslation1_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                browser.sleep(1000);
                sitePage.addPortTranslation1_click();
            }
        }

        //4'th port translation for 1'st Server
        if(expect(sitePage.deletePortTranslation_4_state()).toEqual(null)){
            sitePage.externalPort_1_4_text(data.site_data.iFS_ExternalPort4);
            sitePage.internalPort_1_4_text(data.site_data.iFS_InternalPort4);
            if(expect(sitePage.addPortTranslation1_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                browser.sleep(1000);
                sitePage.addPortTranslation1_click();
            }
        }

        //5'th port translation for 1'st Server
        if(expect(sitePage.deletePortTranslation_5_state()).toEqual(null)){
            sitePage.externalPort_1_5_text(data.site_data.iFS_ExternalPort5);
            sitePage.internalPort_1_5_text(data.site_data.iFS_InternalPort5);
            if(expect(sitePage.addPortTranslation1_State()).toEqual(null)) {
                console.log('Add Port Translation button is in Enabled state: ');
                browser.sleep(1000);
            }
        }

        //Deleting all 5 entered port translations for Server2
        sitePage.deletePortTranslation_5_click();
        sitePage.deletePortTranslation_4_click();
        sitePage.deletePortTranslation_3_click();
        sitePage.deletePortTranslation_2_click();
        sitePage.deletePortTranslation_1_click();

        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
