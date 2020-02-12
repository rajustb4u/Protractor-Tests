    describe('INBOUND POLICIES Add Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('AC - 1984 Add/Edit Inbound Policy validation form validating the Submit policy button state with respect to entry of the required fields: ', function() {

            var policiesPage = new policies_Page();
            browser.sleep(1000);
            common_Component.appLogin();
            browser.sleep(1000);
            policiesPage.policiesLink();
            browser.sleep(1000);
            policiesPage.add_Policy();
            browser.sleep(1000);

            //submit Inbound Policy_State 'Add Inbound Policy' *button* is *disabled*.
            if(expect(policiesPage.submitInboundPolicy_State()).toEqual('true')) {
                console.log('An InBound Policy Submit button is in disabled state:');
            }

            //Select *server* from 'Server' dropdown. 'Add Inbound Policy' *button* is *disabled*.
            browser.sleep(1000);
            common_Component.selectItemDropDown('device_id', 5);
            browser.sleep(1000);
            if(expect(policiesPage.submitInboundPolicy_State()).toEqual('true')) {
                console.log('An InBound Policy Submit button is in disabled state after selecting the Server:');
            }

            //1. *Enter* 'IP Address/Range/Netmask' *value*.2. *Remove value* from field.
            // 1.'Add Inbound Policy' *button* become *enable*.2. 'Add Inbound Policy' *button* become *disabled* again.
            browser.sleep(1000);
            policiesPage.inbound_AccessibleForm(data.policies_Page_Data.policy_AccessibleFrom);

            if(expect(policiesPage.submitInboundPolicy_State()).toEqual(null)) {
                console.log('Add InBound Policy button is in Enabled state, the Server is selected and Accessible IP are enetered:');
            }

            policiesPage.inbound_AccessibleForm_Clear();
            browser.sleep(1000);
            if(expect(policiesPage.submitInboundPolicy_State()).toEqual('true')) {
                console.log('Add InBound Policy button is in disabled state after clearing the entered Accessible IP:');
            }

            policiesPage.cancelPolicy_Click();
            browser.sleep(1000);
            policiesPage.cancelPolicy_Message_Yes_Click();
            browser.sleep(1000);
        });

        it('AC - 1984 Add/Edit Inbound Policy validation form: ', function() {

            var policiesPage = new policies_Page();
            policiesPage.policiesLink();
            browser.sleep(1000);

            //Adding Policy
            policiesPage.add_Policy();
            browser.sleep(1000);
            common_Component.selectItemDropDown('device_id', 5);
            browser.sleep(1000);
            policiesPage.inbound_AccessibleForm(data.policies_Page_Data.policy_AccessibleFrom);
            policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
            browser.sleep(1000);
            common_Component.selectItemDropDown_2('.dropdown.form-group',1);
            browser.sleep(1000);
            policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
            policiesPage.submitInboundPolicy_Click();
            browser.sleep(1000);
            policiesPage.policyDetailView_click();
            browser.sleep(1000);
            policiesPage.edit_Policy_click();
            browser.sleep(1000);

            common_Component.selectItemDropDown('device_id', 6);
            browser.sleep(1000);
            if(expect(policiesPage.submitInboundPolicy_State()).toEqual(null)) {
                console.log('Add InBound Policy button is in disabled state after clearing the entered Accessible IP:');
            }
            policiesPage.submitEditInBound_Click();
            browser.sleep(1000);
            // policiesPage.deleteInBound_Click();
            // browser.sleep(1000);
            // policiesPage.deleteMsgInBound_Click();
            // browser.sleep(1000);
            //
            // common_Component.appLogout();
        });
    });
