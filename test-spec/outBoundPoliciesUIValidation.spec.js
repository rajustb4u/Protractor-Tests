describe('Protractor OUTBOUND POLICIES Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add outBound Policy - UI check, place holder, Max & Min Length: ', function () {

        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.ZonesAdd();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);

        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 3);
        browser.sleep(1000);

        //validation with the outBound Policy Users "place holder, Name, max length"
        policiesPage.users_ZonePolicy_Click();
        expect(policiesPage.iZPUs_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Users_PlaceHolder_Attribute);
        console.log('outBound Policy Users Placeholder verification done: ' + data.policies_Page_Data.policy_Users_PlaceHolder_Attribute);
        expect(policiesPage.iZPUs_nameAttr()).toMatch(data.policies_Page_Data.policy_Users_Name_Attribute);
        expect(policiesPage.iZPUs_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Users_maxLength_Attribute);
        console.log('outBound Policy Users Max Length verification done: ' + data.policies_Page_Data.policy_Users_maxLength_Attribute);
        browser.sleep(1000);


        //validation with the outBound Policy User Groups "place holder, Name, max length"
        policiesPage.userGroups_ZonePolicy_Click();
        expect(policiesPage.iZPUsGps_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Group_PlaceHolder_Attribute);
        console.log('outBound Policy User Groups Placeholder verification done: ' + data.policies_Page_Data.policy_Group_PlaceHolder_Attribute);
        expect(policiesPage.iZPUsGps_nameAttr()).toMatch(data.policies_Page_Data.policy_Group_Name_Attribute);
        expect(policiesPage.iZPUsGps_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Group_maxLength_Attribute);
        console.log('outBound Policy User Groups Max Length verification done: ' + data.policies_Page_Data.policy_Group_maxLength_Attribute);
        browser.sleep(1000);

        //validation with the outBound Policy Application attributes "place holder, min length, max length"
        policiesPage.application_Click();
        expect(policiesPage.pApp_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Application_PlaceHolder_Attribute);
        console.log('outBound Policy Application Placeholder verification done: ' + data.policies_Page_Data.policy_Application_PlaceHolder_Attribute);
        expect(policiesPage.pApp_nameAttr()).toMatch(data.policies_Page_Data.policy_Application_Name_Attribute);
        expect(policiesPage.pApp_minlengthAttr()).toMatch(data.policies_Page_Data.policy_Application_minLength_Attribute);
        console.log('outBound Policy Application Min Length verification done: ' + data.policies_Page_Data.policy_Application_minLength_Attribute);
        expect(policiesPage.pApp_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Application_maxLength_Attribute);
        console.log('outBound Policy Application Max Length verification done: ' + data.policies_Page_Data.policy_Application_maxLength_Attribute);
        browser.sleep(1000);

        //Selecting the Protocol, and validating the required field error for Port
        common_Component.selectItemDropDown_2('.dropdown.form-group',1);
        browser.sleep(1000);

        //validation with the outBound Policy Port attributes "place holder, min length, max length"
        policiesPage.port_Click();
        expect(policiesPage.pPort_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Port_PlaceHolder_Attribute);
        console.log('outBound Policy Port Placeholder verification done: ' + data.policies_Page_Data.policy_Port_PlaceHolder_Attribute);
        expect(policiesPage.pPort_nameAttr()).toMatch(data.policies_Page_Data.policy_Port_Name_Attribute);
        expect(policiesPage.pPort_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Port_maxLength_Attribute);
        console.log('outBound Policy Port Max Length verification done: ' + data.policies_Page_Data.policy_Port_maxLength_Attribute);
        browser.sleep(1000);

        expect(policiesPage.submitOutboundPolicy_State()).toEqual('true');
        console.log('An outBound Policy Submit button is disabled: ');
        browser.sleep(1000);

        policiesPage.cancelPolicy_Click();
        browser.sleep(1000);
        policiesPage.cancelPolicy_Message_Yes_Click();
        browser.sleep(1000);
        // common_Component.appLogout();
    });
});