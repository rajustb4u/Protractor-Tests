describe('Protractor OUTBOUND POLICIES Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add multiple outBound Policies:', function () {
        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);

        //Add one policy
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 3);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        policiesPage.port_Click();
        common_Component.selectItemDropDown_2('.dropdown.form-group',1);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitOutboundPolicy_Click();
        browser.sleep(1000);

        for(i=0; i<=9; i++) {
            browser.sleep(1000);
            policiesPage.addNewPolicy_Click();
            browser.sleep(1000);
            common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', i+3);
            browser.sleep(1000);
            policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users+i);
            policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group+i);
            // policiesPage.application_Enter(data.policies_Page_Data.policy_Application+i);
            // policiesPage.port_Click();
            common_Component.selectItemDropDown_2('.dropdown.form-group',1);
            browser.sleep(1000);
            policiesPage.port_Enter(data.policies_Page_Data.policy_Port+i);
            policiesPage.submitOutboundPolicy_Click();
            browser.sleep(1000);
        };
        common_Component.appLogout();
    });
});