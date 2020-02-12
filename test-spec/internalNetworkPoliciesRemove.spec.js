describe('Protractor Remove Policies Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Remove Inter-Zone Policies Test: ', function() {
        var policiesPage = new policies_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        for(i=0; i<=10; i++) {
            policiesPage.policyDetailView_click();
            browser.sleep(1000);
            policiesPage.deleteInBound_Click();
            browser.sleep(1000);
            policiesPage.deleteMsgInBound_Click();
            browser.sleep(1000);
        };

        common_Component.appLogout();
    });
});