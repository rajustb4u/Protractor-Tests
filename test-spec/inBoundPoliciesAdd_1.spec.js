    describe('INBOUND POLICIES Add Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('AC - 1054 Add Inbound Policy - Server drop-down : ', function() {

            var policiesPage = new policies_Page();
            browser.sleep(1000);
            // common_Component.appLogin();
            // browser.sleep(1000);
            policiesPage.policiesLink();
            browser.sleep(1000);
            policiesPage.policyDetailView_click();
            browser.sleep(1000);
            policiesPage.edit_Policy_click();
            browser.sleep(1000);
            //*Choose one Server* from the dropdown. - Server is *selected*
           // - Correct *Internal IP address* is *appeared* near 'Server' dropdown.- 'Add Inbound policy' *button* still *disabled*.
            if(expect(policiesPage.deviceID_GetText()).toEqual(data.hostsPage_data.hosts_ip)) {
                console.log('The Server IP is compared with the selected Server IP in InBound Policies'+data.site_data.device_ip10);
            }
            common_Component.selectItemDropDown('device_id', 5);
            browser.sleep(1000);
            if(expect(policiesPage.deviceID_GetText()).toEqual(data.hostsPage_data.hosts_ip_Verify)) {
                console.log('The Server IP is compared with the selected Server IP in InBound Policies after editing the Server in policy'+data.site_data.device_ip7);
            }
            browser.sleep(1000);
            common_Component.selectItemDropDown_2('.dropdown.form-group',2);
            browser.sleep(1000);
            policiesPage.submitEditInBound_Click();
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
