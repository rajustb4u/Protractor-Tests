describe('Acumen Site_DetailedView Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-336 [Site Details View] Connection types - OPAQ VPN DEVICE edit data and validate in detail view: ', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);

        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        sitePage.clickEditButton();
        browser.sleep(1000);
        //OPĀQ VPN DEVICE'* connection type
        //clearing the OPAQ device internal & external IP addresses.
        sitePage.internalIP_Address_Opaq_clear();
        sitePage.internalIP_Address_Opaq(data.site_data.opaqVPN_InternalIPEdit);

        sitePage.updateSiteButton();
        browser.sleep(1000);

        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        if(expect(sitePage.detail_View_Opaq_Internal_IP()).toEqual(data.site_data.opaqVPN_InternalIPDetailed)) {
            console.log('The OPAQ Internal IP in detailed view are validated against the OPAQ Internal IP after updating the site: ' + data.site_data.opaqVPN_InternalIPDetailed);
            browser.sleep(1000);
            sitePage.close_Detail_View();
        }
    });

    it('Test Case AC-336 [Site Details View] Connection types Other VPN DEVICE edit data and validate in detail view: ', function () {
        var sitePage = new site_Page();

        browser.sleep(1000);
        //OTHER VPN DEVICE'* connection type:
        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        sitePage.clickEditButton();
        browser.sleep(1000);

        sitePage.otherVPNDevice_Radio();
        sitePage.IP_Address_OtherVPNDevice_enter(data.site_data.otherVPN_IP);
        // sitePage.externalIP_Address_Other(data.site_data.opaqVPN_ExternalIP);
        sitePage.deviceDetails_Other(data.site_data.other_vpn_device_Value);
        browser.sleep(1000);

        sitePage.updateSiteButton();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);

        if(expect(sitePage.detail_View_OtherVPN_Inernal_IP()).toEqual(data.site_data.otherVPN_IPDetailed)) {
            console.log('The Other VPN Device Internal ip_address in detailed view is validated to the edited Other VPN Device Internal ip_address: ' + data.site_data.otherVPN_IPDetailed);
        }

        if(expect(sitePage.detail_View_OtherVPN_Device()).toEqual(data.site_data.other_vpn_device_NameDetailed)) {
            console.log('The Other VPN Device name in detailed view is validated against to the edited Other VPN Device name: ' + data.site_data.other_vpn_device_NameDetailed);
            sitePage.close_Detail_View();
            browser.sleep(1000);
        }
    });

    it('Test Case AC-336 [Site Details View] Connection types DIRECT CONNECT edit data and validate in detail view: ', function () {
        var sitePage = new site_Page();

        //DIRECT CONNECTION'* connection type:
        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        sitePage.clickEditButton();
        browser.sleep(1000);

        sitePage.dataCenter_Cross_Connect_Radio();

        //Select the HAND OFF TYPE
        element(by.id('btn-append-to-body')).click();
        element.all(by.css('.dropdown-menu li')).then(function(items) {

            console.log("printing Items from the drop down list....")

            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
            items[1].click();

        });
        browser.sleep(1000);
        sitePage.dcRequested_Bandwidth(data.site_data.requested_Bandwidth);
        sitePage.dcpeerIPAddress_enter(data.site_data.peer_IPAddress);
        sitePage.updateSiteButton();
        browser.sleep(1000);

        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        if(expect(sitePage.detail_View_DirectConnect_Handoff()).toEqual(data.site_data.handoff_TypeDetailed)) {
            console.log('The DirectConnection HandOff Type in detailed view are validated against the DirectConnection HandOff Type updating the site: '+data.site_data.handoff_TypeDetailed);
        }

        if(expect(sitePage.detail_View_DirectConnect_RequestedBandwidth()).toEqual(data.site_data.requested_BandwidthDetailed)) {
            console.log('The DirectConnection Requested Bandwidth in detailed view are validated against the DirectConnection Requested Bandwidth updating the site: '+data.site_data.requested_BandwidthDetailed);
        }

        if(expect(sitePage.detail_View_DirectConnect_PeerIP()).toEqual(data.site_data.peer_IPAddressDetailed)) {
            console.log('The DirectConnection peer_ip_address in detailed view are validated against the DirectConnection peer_ip_address updating the site: '+data.site_data.peer_IPAddressDetailed);
        }
        sitePage.close_Detail_View();
        browser.sleep(1000);
    });
});




