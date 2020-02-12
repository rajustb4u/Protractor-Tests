describe('INTERNAL NETWORK POLICIES Add Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add multiple Inter-Zone Policies:', function () {
        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);
        //Add one policy
        common_Component.selectItemDropDown('multiselect_host_group_destination',3);
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 5);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        common_Component.selectItemDropDown('btn-append-to-body',12);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitInterZonePolicy_Click();
        browser.sleep(1000);

        for(i=0; i<=9; i++) {
            browser.sleep(1000);
            policiesPage.addNewPolicy_Click();
            browser.sleep(1000);
            common_Component.selectItemDropDown('multiselect_host_group_destination', i+3);
            browser.sleep(1000);
            common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', i+4);
            browser.sleep(1000);
            policiesPage.submitInterZonePolicy_Click();
            browser.sleep(1000);
        };
        common_Component.appLogout();
    });
});