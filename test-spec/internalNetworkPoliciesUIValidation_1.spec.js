describe('Protractor InternalNetwork-Zone POLICIES Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Validate InternalNetwork-Zone Policies filed errors and cancel button: ', function () {

        var policiesPage = new policies_Page();
        // common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);
        common_Component.selectItemDropDown('multiselect_host_group_destination',3);
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 5);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        // browser.sleep(1000);
        policiesPage.userGroups_ZonePolicy_Click();
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        browser.sleep(1000);

        policiesPage.application_Enter(data.policies_Page_Data.policy_Application_Validataion);
        // browser.sleep(1000);
        expect(common_Component.getElementErrorByName('applications_0_name')).toEqual(data.policies_Page_Data.policy_Application_Error);
        console.log('The Error message captured for Application: '+data.policies_Page_Data.policy_Application_Error);
        browser.sleep(1000);

        //Selecting the Protocol, and validating the required field error for Port
        common_Component.selectItemDropDown('btn-append-to-body',1);
        browser.sleep(1000);

        //validating the port error message
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port_Validataion);
        browser.sleep(1000);
        expect(common_Component.getElementErrorByName('ports_0_port')).toEqual(data.policies_Page_Data.policy_Port_Error);
        console.log('The Error message captured for PORT: '+data.policies_Page_Data.policy_Port_Error);

        policiesPage.port_Clear();
        expect(common_Component.getElementErrorByName('ports_0_port')).toEqual(data.policies_Page_Data.policy_Field_Required_Error);
        console.log('The Error message captured for PORT: '+data.policies_Page_Data.policy_Field_Required_Error);
        browser.sleep(1000);

        expect(policiesPage.submitInterZonePolicy_State()).toEqual('true');
        console.log('Add Inbound Policy button is disabled: ');

        policiesPage.cancelPolicy_Click();
        browser.sleep(1000);
        policiesPage.cancelPolicy_Message_Yes_Click();
        browser.sleep(1000);

        common_Component.appLogout();
    });
});