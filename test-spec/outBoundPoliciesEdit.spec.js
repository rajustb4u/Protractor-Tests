describe('Protractor Edit Policies Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Edit OUTBOUND Policies Test: ', function() {
        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);

        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.policyDetailView_click();
        browser.sleep(1000);
        //Validating the cancel button after editing.
        policiesPage.edit_Policy_click();
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 4);
        browser.sleep(1000);
        policiesPage.cancelEdit_Policy();
        browser.sleep(1000);
        policiesPage.cancelEditPolicyMsg_Click();
        browser.sleep(1000);

        //Editing and submit the Edit.
        policiesPage.policyDetailView_click();
        browser.sleep(1000);
        policiesPage.edit_Policy_click();
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 3);
        browser.sleep(1000);
        common_Component.selectItemDropDown_2('.dropdown.form-group',1);
        browser.sleep(1000);
        policiesPage.submitEditOutBound_Click();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});