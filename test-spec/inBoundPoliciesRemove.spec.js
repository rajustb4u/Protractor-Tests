describe('INBOUND POLICIES Delete Functionality', function() {
    var Hosts_Page = require('../page-factory/HostsPage.js');
    var policies_Page = require('../page-factory/PoliciesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Remove INBOUND Policies Test: ', function() {
        var policiesPage = new policies_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);

        policiesPage.policiesLink();
        browser.sleep(1000);
        element.all(by.binding(' getServersList(policy.servers) ')).then(function(items) {
            console.log("Item Length:"+items.length);
            for(i=0; i<items.length; i++) {
                policiesPage.policyDetailView_click();
                browser.sleep(1000);
                policiesPage.deleteInBound_Click();
                browser.sleep(1000);
                policiesPage.deleteMsgInBound_Click();
                browser.sleep(1000);
            }
        });

        var HostsPage = new Hosts_Page();
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
    });
});