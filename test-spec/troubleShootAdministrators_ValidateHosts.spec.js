describe('Acumen TroubleShootAdmin Tests', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var Hosts_Page = require('../page-factory/HostsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Directory Services page button functionality : ', function() {
        //Validating Hosts page
        var HostsPage = new Hosts_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        HostsPage.hostsLink();
        browser.sleep(1000);
        if(expect(HostsPage.hosts_Text()).toEqual(data.hostsPage_data.hosts_Text)) {
            console.log('Hosts button text is validated logged: '+data.hostsPage_data.hosts_Text);
            browser.sleep(1000);
        }
        browser.sleep(1000);
        common_Component.hosts_Create('test','1.1.1.1');
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        HostsPage.hostsLink();
        browser.sleep(1000);
        if(expect(HostsPage.detailed_Hosts_State()).toEqual(null)) {
            console.log('Detail View button in hosts page is in Enabled state logged in Trouble shoot admin:');
            HostsPage.detailedHosts();
        }
        if(expect(HostsPage.editHosts_State()).toEqual(null)) {
            console.log('Edit button in hosts page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(HostsPage.deleteHosts_State()).toEqual('true')) {
            console.log('Delete button in hosts page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(HostsPage.nextZones_Button_State()).toEqual(null)) {
            console.log('Next Policies button in Hosts page is in Enabled state logged in Trouble shoot admin:');
            HostsPage.next_Zones_Button();
            browser.sleep(1000);
        }
        var HostGroupsPage = new HostGroups_Page();
        if(expect(HostGroupsPage.hostsGroup_Page_Text()).toEqual(data.zones_Page_Data.Zone_Page_Text)) {
            console.log('HostGroups page text is validated logged in Trouble shoot admin: '+data.zones_Page_Data.Zone_Page_Text);
            browser.sleep(1000);
        }

        common_Component.appLogout();
        browser.sleep(1000);
    });
});
