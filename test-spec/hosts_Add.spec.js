describe('Acumen Hosts Add Tests:', function () {
    var Hosts_Page = require('../page-factory/hostsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Hosts adding', function() {
        var HostsPage = new Hosts_Page();
        common_Component.appLogin();
        HostsPage.hostsLink();
        browser.sleep(1000);

        if(expect(HostsPage.hosts_Text()).toMatch(data.hostsPage_data.hosts_Text)) {
            console.log('Hosts text verification done: ' + data.hostsPage_data.hosts_Text);
            HostsPage.add_Hosts();
        }
        browser.sleep(1000);
        HostsPage.hostsName(data.hostsPage_data.hosts_name);
        HostsPage.hostsInternal_ip(data.hostsPage_data.hosts_ip);
        HostsPage.domainName_text(data.hostsPage_data.domain_Name);
        HostsPage.externalPort_text(data.hostsPage_data.iFS_ExternalPort);
        HostsPage.internalPort_text(data.hostsPage_data.iFS_InternalPort);
        browser.sleep(1000);

        if(expect(HostsPage.submitHosts_State()).toEqual(null)) {
            console.log('Submit Hosts button is in Enabled state: ');
            HostsPage.submitHosts();
        }

        common_Component.appLogout();
    });
});
