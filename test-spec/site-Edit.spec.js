describe('Acumen Edit_Site Tests', function () {

    //var logger = require('../scripts/log.js');
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Create new Site with all data', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);
        sitePage.siteName(data.site_data.siteName);
        browser.sleep(1000);

        //Adding Site Tag & Location Type
        sitePage.siteTag(data.site_data.siteTag);
        sitePage.siteTag(',');
        sitePage.siteTag(data.site_data.siteTag1);
        sitePage.siteTag(',');
        sitePage.locationType(data.site_data.locationType);
        sitePage.user_Count(data.site_data.userCount);
        browser.sleep(1000);

        //Adding Physical Location, Physical Address details.
        sitePage.physicalAddress(data.site_data.address);
        sitePage.suiteUnit(data.site_data.suite_unit);
        sitePage.city(data.site_data.city);
        sitePage.state(data.site_data.state);
        sitePage.zipcode(data.site_data.zipcode);
        browser.sleep(1000);

        //Adding Physical Location, Point of contact details.
        sitePage.contactName(data.site_data.contact_name);
        sitePage.contactEmail(data.site_data.contact_email);
        sitePage.contactPhone(data.site_data.contact_phone1);
        sitePage.contactCellPhone(data.site_data.contact_phone2);
        browser.sleep(1000);

        //Network External Primary
        sitePage.primary_ISP(data.site_data.primary_ISP);
        sitePage.primary_ISP_IPAddress(data.site_data.primaryISP_ip);
        sitePage.PISP_Bandwidth_UP(data.site_data.primaryISP_UP);
        sitePage.PISP_Bandwidth_Down(data.site_data.primaryISP_Down);
        sitePage.PISP_Bandwidth_Gateway(data.site_data.primaryISP_Gateway);
        sitePage.PISP_Bandwidth_Netmask(data.site_data.primaryISP_Netmask);
        browser.sleep(1000);

        //Secondary
        sitePage.secondary_ISP(data.site_data.secondary_ISP);
        sitePage.sec_IP_Address(data.site_data.secondaryISP_ip);
        sitePage.sec_ISP_Bandwidth_UP(data.site_data.secondaryISP_UP);
        sitePage.sec_ISP_Bandwidth_Down(data.site_data.secondaryISP_Down);
        sitePage.sec_ISP_Bandwidth_Gateway(data.site_data.secondaryISP_Gateway);
        sitePage.sec_ISP_Bandwidth_Netmask(data.site_data.secondaryISP_Netmask);
        browser.sleep(1000);

        //Connection OPAQ VPN DEVICE
        sitePage.internalIP_Address_Opaq(data.site_data.opaqVPN_InternalIP);
        sitePage.netmask_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Netmask);
        browser.sleep(1000);

        //Network Add Subnets
        sitePage.network_IPAddress_Range(data.site_data.network_ip);
        browser.sleep(1000);

        sitePage.submitAddSite();
        browser.sleep(1000);
        console.log('New Site created with all field data: ');
    });

    it('validate the data in detail view comparing the data created in site', function () {
        var sitePage = new site_Page();
        // common_Component.appLogin();
        // sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();

        if(expect(sitePage.detail_View_Address()).toEqual(data.site_data.address)) {
            console.log('Site Address Verification from detail view to the site data: '+data.site_data.address);
        }

        if(expect(sitePage.detail_View_Suite()).toEqual(data.site_data.suite_unit)) {
            console.log('Site Suite/Unit Verification from detail view to the site data: '+data.site_data.suite_unit);
        }

        if(expect(sitePage.detail_View_ContactName()).toEqual(data.site_data.contact_DetailView)) {
            console.log('Site Contact Verification from detail view to the site data: '+data.site_data.contact_DetailView);
        }

        if(expect(sitePage.detail_View_NetworkIP()).toEqual(data.site_data.network_ip)) {
            console.log('Site Network IP Verification from detail view to the site data: '+data.site_data.network_ip);
        }

        if(expect(sitePage.detail_View_PrimaryISP_IP()).toEqual(data.site_data.primaryISP_IP_DetailedView)) {
            console.log('Site PrimaryISP_IP Verification from detail view to the site data: '+data.site_data.primaryISP_IP_DetailedView);
        }

        if(expect(sitePage.detail_View_PrimaryISP_Gateway()).toEqual(data.site_data.primaryISP_Gateway_DetailedView)) {
            console.log('Site PrimaryISP_Gateway Verification from detail view to the site data: '+data.site_data.primaryISP_Gateway_DetailedView);
        }

        if(expect(sitePage.detail_View_SecondaryISP_IP()).toEqual(data.site_data.secondaryISP_ip_DetailedView)) {
            console.log('Site SecondaryISP_IP Verification from detail view to the site data: '+data.site_data.secondaryISP_ip_DetailedView);
        }

        if(expect(sitePage.detail_View_SecondaryISP_Gateway()).toEqual(data.site_data.secondaryISP_Gateway_DetailedView)) {
            console.log('Site SecondaryISP_Gateway Verification from detail view to the site data: '+data.site_data.secondaryISP_Gateway_DetailedView);
        }
        sitePage.close_Detail_View();
        browser.sleep(1000);
    });
});
