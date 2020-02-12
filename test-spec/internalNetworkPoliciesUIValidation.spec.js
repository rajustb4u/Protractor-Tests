describe('Protractor Inter-Zone POLICIES Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add Inter-Zone Policy - UI check, place holder, Max & Min Length: ', function () {

        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        // common_Component.ZonesAdd();
        // browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);
        common_Component.selectItemDropDown('multiselect_host_group',3);
        browser.sleep(1000);

        //validation with the Inter-Zone Policy Users "place holder, Name, max length"
        policiesPage.users_ZonePolicy_Click();
        expect(policiesPage.iZPUs_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Users_PlaceHolder_Attribute);
        console.log('Inter-Zone Policy Users Placeholder verification done: ' + data.policies_Page_Data.policy_Users_PlaceHolder_Attribute);
        expect(policiesPage.iZPUs_nameAttr()).toMatch(data.policies_Page_Data.policy_Users_Name_Attribute);
        expect(policiesPage.iZPUs_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Users_maxLength_Attribute);
        console.log('Inter-Zone Policy Users Max Length verification done: ' + data.policies_Page_Data.policy_Users_maxLength_Attribute);
        browser.sleep(1000);


        //validation with the Inter-Zone Policy User Groups "place holder, Name, max length"
        policiesPage.userGroups_ZonePolicy_Click();
        expect(policiesPage.iZPUsGps_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Group_PlaceHolder_Attribute);
        console.log('Inter-Zone Policy User Groups Placeholder verification done: ' + data.policies_Page_Data.policy_Group_PlaceHolder_Attribute);
        expect(policiesPage.iZPUsGps_nameAttr()).toMatch(data.policies_Page_Data.policy_Group_Name_Attribute);
        expect(policiesPage.iZPUsGps_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Group_maxLength_Attribute);
        console.log('Inter-Zone Policy User Groups Max Length verification done: ' + data.policies_Page_Data.policy_Group_maxLength_Attribute);
        browser.sleep(1000);
//************************************************
//         common_Component.selectItemDropDown_2('div[id="multiselect_host_group_destination"]',7);
//         browser.sleep(1000);

        element.all(by.css('div[id="multiselect_host_group_destination"]')).click();
        browser.sleep(1000);
        element.all(by.css('.dropdown-menu li')).then(function(items) {

            console.log("printing Items from the drop down list....");
            browser.sleep(1000);
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
            browser.sleep(2000);
            items[4].click();
        });


 //******************************************************
        //validation with the Inter-Zone Policy Application attributes "place holder, min length, max length"
        policiesPage.application_Click();
        expect(policiesPage.pApp_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Application_PlaceHolder_Attribute);
        console.log('Inter-Zone Policy Application Placeholder verification done: ' + data.policies_Page_Data.policy_Application_PlaceHolder_Attribute);
        expect(policiesPage.pApp_nameAttr()).toMatch(data.policies_Page_Data.policy_Application_Name_Attribute);
        expect(policiesPage.pApp_minlengthAttr()).toMatch(data.policies_Page_Data.policy_Application_minLength_Attribute);
        console.log('Inter-Zone Policy Application Min Length verification done: ' + data.policies_Page_Data.policy_Application_minLength_Attribute);
        expect(policiesPage.pApp_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Application_maxLength_Attribute);
        console.log('Inter-Zone Policy Application Max Length verification done: ' + data.policies_Page_Data.policy_Application_maxLength_Attribute);
        browser.sleep(1000);

        //Selecting the Protocol, and validating the required field error for Port
        // common_Component.selectItemDropDown_2('.dropdown.form-group',12);
        common_Component.selectItemDropDown('btn-append-to-body',1);
        browser.sleep(1000);

        //validation with the InBound Policy Port attributes "place holder, min length, max length"
        policiesPage.port_Click();
        expect(policiesPage.pPort_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Port_PlaceHolder_Attribute);
        console.log('Inter-Zone Policy Port Placeholder verification done: ' + data.policies_Page_Data.policy_Port_PlaceHolder_Attribute);
        expect(policiesPage.pPort_nameAttr()).toMatch(data.policies_Page_Data.policy_Port_Name_Attribute);
        expect(policiesPage.pPort_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Port_maxLength_Attribute);
        console.log('Inter-Zone Policy Port Max Length verification done: ' + data.policies_Page_Data.policy_Port_maxLength_Attribute);
        browser.sleep(1000);

        expect(policiesPage.submitInterZonePolicy_State()).toEqual('true');
        console.log('Add Inbound Policy button is disabled: ');
        browser.sleep(1000);

        policiesPage.cancelPolicy_Click();
        browser.sleep(1000);
        policiesPage.cancelPolicy_Message_Yes_Click();
        browser.sleep(1000);
        // common_Component.appLogout();
    });
});