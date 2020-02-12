    describe('INBOUND POLICIES UI Validation', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('AC - 1052 Add Inbound Policy - UI check, place holder, Max & Min Length: ', function() {

            var policiesPage = new policies_Page();
            browser.sleep(1000);
            common_Component.appLogin();
            browser.sleep(1000);
            common_Component.hosts_Create(data.hostsPage_data.hosts_name,data.hostsPage_data.hosts_ip);
            browser.sleep(1000);
            for(i=0;i<10;i++) {
                common_Component.hosts_Create_More(data.hostsPage_data.hosts_name+i,data.hostsPage_data.hosts_ip+i);
            }

            browser.sleep(1000);
            policiesPage.policiesLink();
            browser.sleep(1000);
            policiesPage.add_Policy();
            browser.sleep(1000);
            common_Component.selectItemDropDown('device_id', 5);
            browser.sleep(1000);

            //validation with the InBound Policy Accessible IP attributes "place holder, min length, max length"
            policiesPage.inbound_AccessibleForm_Click();
            expect(policiesPage.inAcIP_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Accessible_PlaceHolder_Attribute);
            console.log('Policy Accessible IP Placeholder verification done: ' + data.policies_Page_Data.policy_Accessible_PlaceHolder_Attribute);
            expect(policiesPage.inAcIP_nameAttr()).toMatch(data.policies_Page_Data.policy_Accessible_Name_Attribute);
            // expect(policiesPage.inAcIP_minlengthAttr()).toMatch(data.policies_Page_Data.policy_Accessible_minLength_Attribute);
            // console.log('Policy Accessible IP Min Length verification done: ' + data.policies_Page_Data.policy_Accessible_minLength_Attribute);
            // expect(policiesPage.inAcIP_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Accessible_maxLength_Attribute);
            // console.log('Policy Accessible IP Max Length verification done: ' + data.policies_Page_Data.policy_Accessible_maxLength_Attribute);
            browser.sleep(1000);

            //validation with the InBound Policy Application attributes "place holder, min length, max length"
            policiesPage.application_Click();
            expect(policiesPage.pApp_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Application_PlaceHolder_Attribute);
            console.log('Policy Application Placeholder verification done: ' + data.policies_Page_Data.policy_Application_PlaceHolder_Attribute);
            expect(policiesPage.pApp_nameAttr()).toMatch(data.policies_Page_Data.policy_Application_Name_Attribute);
            expect(policiesPage.pApp_minlengthAttr()).toMatch(data.policies_Page_Data.policy_Application_minLength_Attribute);
            console.log('Policy Application Min Length verification done: ' + data.policies_Page_Data.policy_Application_minLength_Attribute);
            expect(policiesPage.pApp_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Application_maxLength_Attribute);
            console.log('Policy Application Max Length verification done: ' + data.policies_Page_Data.policy_Application_maxLength_Attribute);
            browser.sleep(1000);

            //validation with the InBound Policy Port attributes "place holder, min length, max length"
            policiesPage.port_Click();
            expect(policiesPage.pPort_placeholderAttr()).toMatch(data.policies_Page_Data.policy_Port_PlaceHolder_Attribute);
            console.log('Policy Port Placeholder verification done: ' + data.policies_Page_Data.policy_Port_PlaceHolder_Attribute);
            expect(policiesPage.pPort_nameAttr()).toMatch(data.policies_Page_Data.policy_Port_Name_Attribute);
            expect(policiesPage.pPort_maxlengthAttr()).toMatch(data.policies_Page_Data.policy_Port_maxLength_Attribute);
            console.log('Policy Port Max Length verification done: ' + data.policies_Page_Data.policy_Port_maxLength_Attribute);
            browser.sleep(1000);

            policiesPage.cancelPolicy_Click();
            browser.sleep(1000);
            policiesPage.cancelPolicy_Message_Yes_Click();
            browser.sleep(1000);

            // common_Component.appLogout();
        });
    });
