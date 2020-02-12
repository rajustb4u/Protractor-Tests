    describe('INBOUND POLICIES Add Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('AC - 1094 Add Inbound Policy - IP Address/Range/Netmask:', function() {

            var policiesPage = new policies_Page();
            browser.sleep(1000);
            common_Component.appLogin();
            browser.sleep(1000);
            policiesPage.policiesLink();
            browser.sleep(1000);
            policiesPage.add_Policy();
            browser.sleep(1000);
            common_Component.selectItemDropDown('device_id',5);
            browser.sleep(1000);
            if(expect(policiesPage.policyIP_Add_State()).toEqual('true')) {
                console.log('the Add button for Policy IP is in disabled state:');
            }

            //validate Add & Delete buttons.
            policiesPage.inbound_AccessibleForm(data.policies_Page_Data.policy_AccessibleFrom);
            if(expect(policiesPage.policyIP_Add_State()).toEqual(null)) {
                console.log('the Add button for Policy IP is in enabled state:');
            }

            policiesPage.policyIP_Add_Button();
            if(expect(policiesPage.policyIP_DeleteButton_State()).toEqual(null)) {
                console.log('the Delete button for Policy IP is in enabled state:');
            }
            if(expect(policiesPage.policyIP_DeleteButton1_State()).toEqual(null)) {
                console.log('the Second Delete button for Policy IP_1 is in enabled state:');
            }

            //entering second policy IP
            policiesPage.inbound_AccessibleForm1(data.policies_Page_Data.policy_AccessibleFrom1);
            policiesPage.policyIP_Add_Button();

            policiesPage.inbound_AccessibleForm2(data.policies_Page_Data.policy_AccessibleFrom2);
            policiesPage.policyIP_Add_Button();

            policiesPage.inbound_AccessibleForm3(data.policies_Page_Data.policy_AccessibleFrom3);
            policiesPage.policyIP_Add_Button();

            policiesPage.inbound_AccessibleForm4(data.policies_Page_Data.policy_AccessibleFrom4);
            policiesPage.policyIP_Add_Button();

            policiesPage.inbound_AccessibleForm5(data.policies_Page_Data.policy_AccessibleFrom5);
            policiesPage.policyIP_Add_Button();

            policiesPage.inbound_AccessibleForm6(data.policies_Page_Data.policy_AccessibleFrom6);

            console.log('6 Policy IPs are created');

            policiesPage.policyIP_Delete_Button6();
            console.log('Deleting 6th IP');

            policiesPage.policyIP_Delete_Button4();
            console.log('Deleting 4th IP');

            policiesPage.policyIP_Delete_Button2();
            console.log('Deleting 2nd IP');

            policiesPage.policyIP_Delete_Button1();
            console.log('Deleting 1st IP');

            console.log('The Leftover IPs are: 0, 3, 5 ');

        });

        it('AC - 1057 Add Inbound Policy - Applications Allowed:', function() {
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
            policiesPage.port_Click();
            policiesPage.policyApp_Add_Button();
            if(expect(policiesPage.policyApp_DeleteButton_State()).toEqual(null)) {
                console.log('the Delete button for Policy Application is in enabled state:');
            }
            if(expect(policiesPage.policyApp_DeleteButton1_State()).toEqual(null)) {
                console.log('the Second Delete button for Policy Application is in enabled state:');
            }

            //entering second policy IP
            policiesPage.application_Enter1(data.policies_Page_Data.policy_Application1);
            policiesPage.port_Click();
            policiesPage.policyApp_Add_Button();

            policiesPage.application_Enter2(data.policies_Page_Data.policy_Application2);
            policiesPage.port_Click();
            policiesPage.policyApp_Add_Button();

            policiesPage.application_Enter3(data.policies_Page_Data.policy_Application3);
            policiesPage.port_Click();
            policiesPage.policyApp_Add_Button();

            policiesPage.application_Enter4(data.policies_Page_Data.policy_Application4);
            policiesPage.port_Click();
            policiesPage.policyApp_Add_Button();

            policiesPage.application_Enter5(data.policies_Page_Data.policy_Application5);
            policiesPage.port_Click();
            policiesPage.policyApp_Add_Button();

            policiesPage.application_Enter6(data.policies_Page_Data.policy_Application6);
            policiesPage.port_Click();

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

        it('AC - 1059 Add Inbound Policy - Port Protocol:', function() {
            var policiesPage = new policies_Page();
            browser.sleep(1000);
            if(expect(policiesPage.policyPort_AddButton_State()).toEqual('true')) {
                console.log('the Add button for Policy Port is in disabled state:');
            }

            //validate Add & Delete buttons.
            browser.sleep(1000);
            common_Component.selectItemDropDown_2('dropdown-component[name="ports_0_protocol"]',1);
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
            common_Component.selectItemDropDown_2('dropdown-component[name="ports_4503599627370495_protocol"]',5);
            browser.sleep(1000);
            policiesPage.port1_Enter(data.policies_Page_Data.policy_Port1);
            policiesPage.policyPort_Add_Button();

            browser.sleep(1000);
            common_Component.selectItemDropDown_2('dropdown-component[name="ports_4503599627370496_protocol"]',8);
            browser.sleep(1000);
            policiesPage.port2_Enter(data.policies_Page_Data.policy_Port2);
            policiesPage.policyPort_Add_Button();

            browser.sleep(1000);
            common_Component.selectItemDropDown_2('dropdown-component[name="ports_4503599627370497_protocol"]',11);
            browser.sleep(1000);
            policiesPage.port3_Enter(data.policies_Page_Data.policy_Port3);
            policiesPage.policyPort_Add_Button();

            browser.sleep(1000);
            common_Component.selectItemDropDown_2('dropdown-component[name="ports_4503599627370498_protocol"]',14);
            browser.sleep(1000);
            policiesPage.port4_Enter(data.policies_Page_Data.policy_Port4);
            policiesPage.policyPort_Add_Button();

            browser.sleep(1000);
            common_Component.selectItemDropDown_2('dropdown-component[name="ports_4503599627370499_protocol"]',17);
            browser.sleep(1000);
            policiesPage.port5_Enter(data.policies_Page_Data.policy_Port5);
            policiesPage.policyPort_Add_Button();

            browser.sleep(1000);
            common_Component.selectItemDropDown_2('dropdown-component[name="ports_4503599627370500_protocol"]',20);
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
