describe('INTERNAL NETWORK POLICIES Add Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add Internal Network Policy - Users:', function () {

        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);
        common_Component.selectItemDropDown('btn-append-to-body',0);
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 3);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        browser.sleep(1000);
    });

    it('AC - xxxx Add Internal Network Policy - Groups:', function () {

        var policiesPage = new policies_Page();
        browser.sleep(1000);
        policiesPage.userGroups_ZonePolicy_Click();
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        browser.sleep(1000);
    });

    it('AC - xxxx Add Internal Network Policy - Applications Allowed:', function() {
        var policiesPage = new policies_Page();
        browser.sleep(1000);
        if(expect(policiesPage.policyApp_AddButton_State()).toEqual('true')) {
            console.log('the Add button for Policy Application is in disabled state:');
        }

        //validate Add & Delete buttons.
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        if(expect(policiesPage.policyApp_AddButton_State()).toEqual(null)) {
            console.log('the Add button for Policy Application is in enabled state:');
        }

        policiesPage.policyApp_Add_Button();
        if(expect(policiesPage.policyApp_DeleteButton_State()).toEqual(null)) {
            console.log('the Delete button for Policy Application is in enabled state:');
        }
        if(expect(policiesPage.policyApp_DeleteButton1_State()).toEqual(null)) {
            console.log('the Second Delete button for Policy Application is in enabled state:');
        }

        //entering second policy IP
        policiesPage.application_Enter1(data.policies_Page_Data.policy_Application1);
        policiesPage.policyApp_Add_Button();

        policiesPage.application_Enter2(data.policies_Page_Data.policy_Application2);
        policiesPage.policyApp_Add_Button();

        policiesPage.application_Enter3(data.policies_Page_Data.policy_Application3);
        policiesPage.policyApp_Add_Button();

        policiesPage.application_Enter4(data.policies_Page_Data.policy_Application4);
        policiesPage.policyApp_Add_Button();

        policiesPage.application_Enter5(data.policies_Page_Data.policy_Application5);
        policiesPage.policyApp_Add_Button();

        policiesPage.application_Enter6(data.policies_Page_Data.policy_Application6);

        console.log('6 Policy Applications are created');

        policiesPage.policyApp_Delete_Button6();
        console.log('Deleting 6th Application');

        policiesPage.policyApp_Delete_Button4();
        console.log('Deleting 4th Application');

        policiesPage.policyApp_Delete_Button2();
        console.log('Deleting 2nd Application');

        policiesPage.policyApp_Delete_Button1();
        console.log('Deleting 1st Application');

        console.log('The Leftover Applications are: 0, 3, 5 ');
        browser.sleep(1000);
    });

    it('AC - xxxx Add Internal Network Policy - Port Protocol:', function() {
        var policiesPage = new policies_Page();
        browser.sleep(1000);
        if(expect(policiesPage.policyPort_AddButton_State()).toEqual('true')) {
            console.log('the Add button for Policy Port is in disabled state:');
        }

        //validate Add & Delete buttons.
        browser.sleep(1000);
        common_Component.selectItemDropDown_2('dropdown-component[name="ports_0_protocol"]',17);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        if(expect(policiesPage.policyPort_AddButton_State()).toEqual(null)) {
            console.log('the Add button for Policy Port is in enabled state:');
        }

        policiesPage.policyPort_Add_Button();
        if(expect(policiesPage.policyPort_DeleteButton_State()).toEqual(null)) {
            console.log('the Delete button for Policy Port is in enabled state:');
        }
        if(expect(policiesPage.policyPort_DeleteButton1_State()).toEqual(null)) {
            console.log('the Second Delete button for Policy Port is in enabled state:');
        }

        //entering second policy IP
        browser.sleep(1000);
        common_Component.selectItemDropDown_2('dropdown-component[name="ports_1_protocol"]',20);
        browser.sleep(1000);
        policiesPage.port1_Enter(data.policies_Page_Data.policy_Port1);
        policiesPage.policyPort_Add_Button();

        browser.sleep(1000);
        common_Component.selectItemDropDown_2('dropdown-component[name="ports_2_protocol"]',23);
        browser.sleep(1000);
        policiesPage.port2_Enter(data.policies_Page_Data.policy_Port2);
        policiesPage.policyPort_Add_Button();

        browser.sleep(1000);
        common_Component.selectItemDropDown_2('dropdown-component[name="ports_3_protocol"]',26);
        browser.sleep(1000);
        policiesPage.port3_Enter(data.policies_Page_Data.policy_Port3);
        policiesPage.policyPort_Add_Button();

        browser.sleep(1000);
        common_Component.selectItemDropDown_2('dropdown-component[name="ports_4_protocol"]',29);
        browser.sleep(1000);
        policiesPage.port4_Enter(data.policies_Page_Data.policy_Port4);
        policiesPage.policyPort_Add_Button();

        browser.sleep(1000);
        common_Component.selectItemDropDown_2('dropdown-component[name="ports_5_protocol"]',32);
        browser.sleep(1000);
        policiesPage.port5_Enter(data.policies_Page_Data.policy_Port5);
        policiesPage.policyPort_Add_Button();

        browser.sleep(1000);
        common_Component.selectItemDropDown_2('dropdown-component[name="ports_6_protocol"]',35);
        browser.sleep(1000);
        policiesPage.port6_Enter(data.policies_Page_Data.policy_Port6);

        console.log('6 Policy Ports are created');

        policiesPage.policyPort_Delete_Button6();
        console.log('Deleting 6th Ports');

        policiesPage.policyPort_Delete_Button4();
        console.log('Deleting 4th Ports');

        policiesPage.policyPort_Delete_Button2();
        console.log('Deleting 2nd Ports');

        policiesPage.policyPort_Delete_Button1();
        console.log('Deleting 1st Ports');

        console.log('The Leftover Ports are: 0, 3, 5 ');
        browser.sleep(1000);
        policiesPage.submitInboundPolicy_Click();

        browser.sleep(1000);
        common_Component.appLogout();
    });
});