describe('Protractor Remove Policies Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Remove outBound Policies Test: ', function() {
        var policiesPage = new policies_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);

        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        for(i=0; i<=10; i++) {
            policiesPage.policyDetailView_click();
            browser.sleep(1000);
            policiesPage.deleteInBound_Click();
            browser.sleep(1000);
            policiesPage.deleteMsgInBound_Click();
            browser.sleep(1000);
        };
        browser.sleep(1000);
    });

    it('Remove Zones Test: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        //remove the Zones
        for(i=0; i<=10; i++) {
            // HostGroupsPage.edit_Zone();
            browser.sleep(1000);
            HostGroupsPage.delete_Zone();
            browser.sleep(1000);
            HostGroupsPage.delete_Yes_Message();
            browser.sleep(1000);
        };
        common_Component.appLogout();
    });

});