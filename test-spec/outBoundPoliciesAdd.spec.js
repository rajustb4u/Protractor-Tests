describe('Protractor OUTBOUND POLICIES Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add/Edit outBound Policy validation form validating the Submit policy button state with respect to entry of the required fields: ', function () {

        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);

        //submit outBound Policy_State 'Add outBound Policy' *button* is *disabled*.
        expect(policiesPage.submitOutboundPolicy_State()).toEqual('true');
        console.log('An outBound Policy Submit button is disabled: ');
        browser.sleep(1000);

        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 5);
        browser.sleep(1000);
        //submit outBound Policy_State 'Add Inbound Policy' *button* is *disabled*.
        if (expect(policiesPage.submitOutboundPolicy_State()).toEqual(null)) {
            console.log('An outBound Policy Submit button is enabled after selecting the Accessible From Zone: ');
        }

        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        browser.sleep(1000);
        policiesPage.userGroups_ZonePolicy_Click();
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        browser.sleep(1000);

        policiesPage.cancelPolicy_Click();
        browser.sleep(1000);
        policiesPage.cancelPolicy_Message_Yes_Click();
        browser.sleep(1000);
    });

    it('AC - xxxx Add/Edit outBound Policy validation form: ', function() {

        var policiesPage = new policies_Page();
        policiesPage.policiesLink();
        browser.sleep(1000);

        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);

        //Add one policy
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 5);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        common_Component.selectItemDropDown_2('.dropdown.form-group',1);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitOutboundPolicy_Click();
        browser.sleep(1000);

        policiesPage.policyDetailView_click();
        browser.sleep(1000);
        policiesPage.edit_Policy_click();
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 6);
        browser.sleep(1000);
        policiesPage.cancelEdit_Policy();
        browser.sleep(1000);
        policiesPage.cancelEditPolicyMsg_Click();
        browser.sleep(1000);

        policiesPage.policyDetailView_click();
        // browser.sleep(1000);
        policiesPage.deleteInBound_Click();
        browser.sleep(1000);
        policiesPage.deleteMsgInBound_Click();
        browser.sleep(1000);


        common_Component.appLogout();
    });
});