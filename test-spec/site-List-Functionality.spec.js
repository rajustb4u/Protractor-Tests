describe('Acumen Site_List Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-85 [Site List View] UI check' , function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);

        // ADD SITE button is present near the "Start by telling us what sites (physical locations) that OPĀQ will protect." text
        if(expect(sitePage.configureSites_Text()).toMatch(data.site_data.configure_Sites_Data)) {
            console.log("The Default text when we click Site links: "+data.site_data.configure_Sites_Data);
        }

        //Add Site button is available in enabled state.
        if(expect(sitePage.AddNewSite_State()).toEqual(null)) {
            console.log('The AddNewSite button is enabled: ');
        }

        //Next Administrators button is available in enabled state.
        if(expect(sitePage.Next_Administrators_Button_State()).toEqual(null)) {
            console.log('Next Administrators button is available: ');
        }
    });

    it('Test Case AC-240 [Site Details View] UI test', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);

        // sitePage.site_Link();
        console.log('add site: ');
        sitePage.addSite_Button();
        browser.sleep(1000);
        sitePage.siteName(data.site_data.siteName);

        //Adding Site Tag
        sitePage.siteTag(data.site_data.siteTag);
        sitePage.siteTag(',');
        sitePage.siteTag(data.site_data.siteTag1);
        sitePage.siteTag(',');
        sitePage.siteTag(data.site_data.siteTag2);
        sitePage.siteTag(',');

        //Adding Location Type
        sitePage.locationType(data.site_data.locationType);
        sitePage.user_Count(data.site_data.userCount);
        browser.sleep(1000);

        sitePage.physicalAddress(data.site_data.address);
        sitePage.suiteUnit(data.site_data.suite_unit);
        sitePage.city(data.site_data.city);
        sitePage.state(data.site_data.state);
        sitePage.zipcode(data.site_data.zipcode);

        sitePage.contactName(data.site_data.contact_name);
        sitePage.contactEmail(data.site_data.contact_email);
        sitePage.contactPhone(data.site_data.contact_phone1);
        sitePage.contactCellPhone(data.site_data.contact_phone2);

        sitePage.primary_ISP(data.site_data.primary_ISP);
        sitePage.primary_ISP_IPAddress(data.site_data.primaryISP_ip);
        sitePage.PISP_Bandwidth_UP(data.site_data.primaryISP_UP);
        sitePage.PISP_Bandwidth_Down(data.site_data.primaryISP_Down);
        sitePage.PISP_Bandwidth_Gateway(data.site_data.primaryISP_Gateway);
        sitePage.PISP_Bandwidth_Netmask(data.site_data.primaryISP_Netmask);
        sitePage.reservedSubnet_text(data.site_data.reservedSubnet);
        sitePage.internalIP_Address_Opaq(data.site_data.opaqVPN_InternalIP);
        sitePage.netmask_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Netmask);
        sitePage.gateway_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Gateway);

        sitePage.network_IPAddress_Range(data.site_data.network_ip);

        sitePage.submitAddSite();
        browser.sleep(1000);
    });

    it('Test Case AC-239 [Site Details View] Functional test', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);

        //Validating buttons state in detailed view
        if(expect(sitePage.detail_View_State()).toEqual(null)) {
            console.log('Detail View button is in enabled state: ');
            sitePage.clickDetailViewButton();
            console.log('click on Detail view button: ');
            browser.sleep(1000);
            if(expect(sitePage.edit_Button_State()).toEqual(null)) {
                console.log('Edit Button is in enabled state: ');
            }
        }

        if(expect(sitePage.siteRemoveButton_State()).toEqual(null)) {
            console.log('Delete button is in enabled state: ');
            if(expect(sitePage.closeDetailView_State()).toEqual(null)) {
                console.log('close Detail View button is in enabled state: ');
            }
        }

        //Validating the detail view data comparing against the data entered which creating the site
        sitePage.detail_View_SiteTag().getText().then(function(text) {
           console.log('The tags in detailed view are validated against the tags entered which creating the site: '+text);
        });

        sitePage.detail_View_Address().getText().then(function(text) {
            console.log('The Physical Address in detailed view are validated against the address entered which creating the site: '+text);
        });

        sitePage.detail_View_LocationType().getText().then(function(text) {
            console.log('The Location type in detailed view are validated against the location type entered which creating the site: '+text);
        });

        sitePage.detail_View_ContactName().getText().then(function(text) {
            console.log('The Contact Name in detailed view are validated against the contact name entered which creating the site: '+text);
        });

        sitePage.detail_View_ContactEmail().getText().then(function(text) {
            console.log('The Contact Email in detailed view are validated against the contact email entered which creating the site: '+text);
        });

       sitePage.detail_View_contactPhone().getText().then(function(text) {
            console.log('The Contact Phone in detailed view are validated against the contact phone entered which creating the site: '+text);
        });

        sitePage.detail_View_NetworkIP().getText().then(function(text) {
            console.log('The Network ip_range in detailed view are validated against the Network ip_range entered which creating the site: '+text);
        });

        sitePage.detail_View_PrimaryISP_IP().getText().then(function(text) {
            console.log('The Primary ISP ip_address in detailed view are validated against the Primary ISP ip_address entered which creating the site: '+text);
        });

        sitePage.detail_View_PrimaryISP_Gateway().getText().then(function(text) {
            console.log('The Primary ISP gateway_ip_address in detailed view are validated against the Primary ISP gateway_ip_address entered which creating the site: '+text);
        });
        sitePage.close_Detail_View();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});




