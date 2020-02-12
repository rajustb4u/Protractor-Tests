describe('Acumen Hosts Delete Tests:', function () {
    var Hosts_Page = require('../page-factory/hostsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Hosts Deleting', function() {
        var HostsPage = new Hosts_Page();
        common_Component.appLogin();
        HostsPage.hostsLink();
        browser.sleep(1000);
        element.all(by.binding(' host.name ')).then(function(items) {
            for (i = 0; i < items.length; i++) {
                browser.sleep(1000);
                if (expect(HostsPage.detailed_Hosts_State()).toEqual(null)) {
                    console.log('Hosts exist so we can Edit/Delete: ');
                    HostsPage.detailedHosts();
                    browser.sleep(1000);
                    HostsPage.delete_Hosts();
                    browser.sleep(1000);
                    HostsPage.delete_Yes_Message();
                }
            }
        });

        common_Component.appLogout();
    });
});
