describe('Acumen Site Help Text Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Help Text Check for add site' , function () {
        var sitePage = new site_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        console.log('add site: ');
        sitePage.AddSite_ForMore();
        browser.sleep(1000);
        sitePage.siteName(data.site_data.siteName);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_Information_HelpText)) {
            console.log('Help text for Site Name verified: '+data.site_data.site_Information_HelpText);
        }

        //Adding Site Tag
        sitePage.siteTag(data.site_data.siteTag);
        sitePage.siteTag(',');
        sitePage.siteTag(data.site_data.siteTag1);
        sitePage.siteTag(',');
        sitePage.siteTag(data.site_data.siteTag2);
        sitePage.siteTag(',');
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_Information_HelpText)) {
            console.log('Help text for Site TAG verified: '+data.site_data.site_Information_HelpText);
        }

        //Adding Location Type
        sitePage.locationType(data.site_data.locationType);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_Information_HelpText)) {
            console.log('Help text for Location Type verified: '+data.site_data.site_Information_HelpText);
        }

        sitePage.user_Count(data.site_data.userCount);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_Information_HelpText)) {
            console.log('Help text for User Count verified: '+data.site_data.site_Information_HelpText);
            browser.sleep(1000);
        }

        sitePage.physicalAddress(data.site_data.address);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for Address verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.suiteUnit(data.site_data.suite_unit);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for SUITE/UNIT verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.city(data.site_data.city);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for CITY verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.state(data.site_data.state);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for STATE verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.zipcode(data.site_data.zipcode);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for ZIPCODE verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.contactName(data.site_data.contact_name);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for CONTACT NAME verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.contactEmail(data.site_data.contact_email);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for CONTACT EMAIL verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.contactPhone(data.site_data.contact_phone1);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for CONTACT PHONE verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.contactCellPhone(data.site_data.contact_phone2);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_PhysicalLocation_HelpText)) {
            console.log('Help text for CONTACT CELL PHONE verified: '+data.site_data.site_PhysicalLocation_HelpText);
        }

        sitePage.primary_ISP(data.site_data.primary_ISP);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_NetworkSettings_HelpText)) {
            console.log('Help text for primary_ISP verified: '+data.site_data.site_NetworkSettings_HelpText);
        }

        sitePage.primary_ISP_IPAddress(data.site_data.primaryISP_ip);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_NetworkSettings_HelpText)) {
            console.log('Help text for primary_ISP_IPAddress verified: '+data.site_data.site_NetworkSettings_HelpText);
        }

        sitePage.PISP_Bandwidth_UP(data.site_data.primaryISP_UP);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_NetworkSettings_HelpText)) {
            console.log('Help text for PISP_Bandwidth_UP verified: '+data.site_data.site_NetworkSettings_HelpText);
        }

        sitePage.PISP_Bandwidth_Down(data.site_data.primaryISP_Down);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_NetworkSettings_HelpText)) {
            console.log('Help text for PISP_Bandwidth_Down verified: '+data.site_data.site_NetworkSettings_HelpText);
        }

        sitePage.PISP_Bandwidth_Gateway(data.site_data.primaryISP_Gateway);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_NetworkSettings_HelpText)) {
            console.log('Help text for PISP_Bandwidth_Gateway verified: '+data.site_data.site_NetworkSettings_HelpText);
        }

        sitePage.PISP_Bandwidth_Netmask(data.site_data.primaryISP_Netmask);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_NetworkSettings_HelpText)) {
            console.log('Help text for PISP_Bandwidth_Netmask verified: '+data.site_data.site_NetworkSettings_HelpText);
        }

        sitePage.internalIP_Address_Opaq(data.site_data.opaqVPN_InternalIP);
       if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_OPAQVPNDevice_HelpText)) {
           console.log('Help text for internalIP_Address_Opaq verified: '+data.site_data.site_OPAQVPNDevice_HelpText);
       }

        sitePage.otherVPNDevice_Radio();
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_OtherVPNDevice_HelpText)) {
            console.log('Help text for otherVPNDevice verified: '+data.site_data.site_OtherVPNDevice_HelpText);
        }

        sitePage.dataCenter_Cross_Connect_Radio();
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_DataCenterCrossConnection_HelpText)) {
            console.log('Help text for dataCenter_Cross_Connect verified: '+data.site_data.site_DataCenterCrossConnection_HelpText);
        }

        sitePage.network_IPAddress_Range(data.site_data.network_ip);
        if(expect(sitePage.help_GetText()).toEqual(data.site_data.site_InternalSubnets_HelpText)) {
            console.log('Help text for dataCenter_Cross_Connect verified: '+data.site_data.site_InternalSubnets_HelpText);
        }

        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        //
        // sitePage.removeSiteButton();
        // browser.sleep(1000);
        // sitePage.Final_Delete();
        // browser.sleep(1000);
        common_Component.appLogout();
    });
});




