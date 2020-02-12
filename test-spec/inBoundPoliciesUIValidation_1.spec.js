    describe('INBOUND POLICIES UI Validation', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('AC - 1052 Validate INBOUND Policies filed errors and cancel button: ', function() {

            var policiesPage = new policies_Page();
            browser.sleep(1000);
            // common_Component.appLogin();
            browser.sleep(1000);

            policiesPage.policiesLink();
            browser.sleep(1000);
            policiesPage.add_Policy();
            browser.sleep(1000);

            common_Component.selectItemDropDown('device_id',5);
            //Validating the Errors for all the fields.
            // policiesPage.inbound_AccessibleForm_Click();
            // browser.sleep(1000);
            // policiesPage.inbound_AccessibleForm(data.policies_Page_Data.policy_AccessibleFrom_Validataion);
            browser.sleep(1000);
            // expect(common_Component.getElementErrorByName('ips_0_ip')).toEqual(data.policies_Page_Data.policy_AccessibleFrom_Error);
            // console.log('The Error message captured for Accessible From IP: '+data.policies_Page_Data.policy_AccessibleFrom_Error);
            policiesPage.application_Enter(data.policies_Page_Data.policy_Application_Validataion);
            browser.sleep(1000);
            expect(common_Component.getElementErrorByName('applications_0_name')).toEqual(data.policies_Page_Data.policy_Application_Error);
            console.log('The Error message captured for Application: '+data.policies_Page_Data.policy_Application_Error);

            //Selecting the Protocol, and validating the required field error for Port
            common_Component.selectItemDropDown_2('.dropdown.form-group',1);
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

            expect(policiesPage.submitInboundPolicy_State()).toEqual('true');
            console.log('Add Inbound Policy button is disabled: ');
            policiesPage.cancelPolicy_Click();
            browser.sleep(1000);
            policiesPage.cancelPolicy_Message_Yes_Click();
            browser.sleep(1000);

            common_Component.appLogout();
        });
    });
