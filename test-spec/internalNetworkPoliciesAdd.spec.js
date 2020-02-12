describe('INTERNAL NETWORK POLICIES Add Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1984 Add/Edit Inter-Zone Policy validation form validating the Submit policy button state with respect to entry of the required fields: ', function () {

        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);

        //submit Inter-Zone Policy_State 'Add Inter-Zone Policy' *button* is *disabled*.
        expect(policiesPage.submitInterZonePolicy_State()).toEqual('true');
        console.log('An Inter-Zone Policy Submit button is disabled: ');

        //Source Host
        common_Component.selectItemDropDown('multiselect_host_group', 3);
        browser.sleep(1000);

        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        browser.sleep(1000);
        policiesPage.userGroups_ZonePolicy_Click();
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        browser.sleep(1000);

        //Destination Host
        element.all(by.css('label[for="multiselect_host_group_destination"]')).click();
        browser.sleep(1000);
        element.all(by.css('.dropdown-menu li')).then(function(items) {
            console.log("printing Items from the drop down list....");
            browser.sleep(1000);
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
            browser.sleep(1000);
            items[6].click();
        });
        // common_Component.selectItemDropDown_Zones('.multiselect-parent.btn-group.dropdown-multiselect', 5);
        browser.sleep(1000);

        //submit Inter-Zone Policy_State 'Add Inbound Policy' *button* is *disabled*.
        if (expect(policiesPage.submitInterZonePolicy_State()).toEqual('true')) {
            console.log('An Inter-Zone Policy Submit button is disabled after selecting the Destination Zone: ');
        }

        //submit Inter-Zone Policy_State 'Add Inbound Policy' *button* is *disabled*.
        if (expect(policiesPage.submitInterZonePolicy_State()).toEqual(null)) {
            console.log('An Inter-Zone Policy Submit button is enabled after selecting the Accessible From Zone: ');
        }

        policiesPage.cancelPolicy_Click();
        browser.sleep(1000);
        policiesPage.cancelPolicy_Message_Yes_Click();
        browser.sleep(1000);
    });

    it('AC - 1984 Add/Edit Inter-Zone Policy validation form: ', function() {

        var policiesPage = new policies_Page();
        policiesPage.policiesLink();
        browser.sleep(1000);

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
        common_Component.selectItemDropDown('btn-append-to-body',1);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitInterZonePolicy_Click();
        browser.sleep(1000);
        policiesPage.policyDetailView_click();
        browser.sleep(1000);
        policiesPage.edit_Policy_click();
        browser.sleep(1000);
        common_Component.selectItemDropDown('multiselect_host_group_destination', 5);
        browser.sleep(1000);
        policiesPage.cancelEdit_Policy();
        browser.sleep(1000);
        policiesPage.cancelEditPolicyMsg_Click();
        browser.sleep(1000);
        policiesPage.policyDetailView_click();
        browser.sleep(1000);
        policiesPage.deleteInBound_Click();
        browser.sleep(1000);
        policiesPage.deleteMsgInBound_Click();
        browser.sleep(1000);


        common_Component.appLogout();
    });
});