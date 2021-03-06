describe('INBOUND POLICIES Edit Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1096, AC - 1098 Edit InBound Policies UI Check & Edit Inbound Policy - Server dropdown: ', function() {
        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        //Validating the cancel button after editing.
        browser.sleep(1000);
        if(expect(policiesPage.policyDetailView_State()).toEqual(null)) {
            console.log('the Detail View Inbound Policy buttons is in enabled state:');
            policiesPage.policyDetailView_click();
            browser.sleep(1000);
        }

        policiesPage.edit_Policy_click();
        browser.sleep(1000);
        if(expect(policiesPage.edit_Policy_State()).toEqual(null)) {
            console.log('the Edit Inbound Policy buttons is in enabled state:')
        }
        browser.sleep(1000);
        common_Component.selectItemDropDown('device_id', 6);

        policiesPage.cancelEdit_Policy();
        browser.sleep(1000);
        policiesPage.cancelEditPolicyMsg_Click();
        browser.sleep(1000);

        if(expect(policiesPage.policyDetailView_State()).toEqual(null)) {
            console.log('the Detail View Inbound Policy buttons is in enabled state:');
            policiesPage.policyDetailView_click();
            browser.sleep(1000);
        }
        //Editing and submit the Edit.
        policiesPage.edit_Policy_click();
        browser.sleep(1000);
        common_Component.selectItemDropDown('device_id', 7);
        browser.sleep(1000);
        policiesPage.submitEditInBound_Click();
        browser.sleep(1000);

        // common_Component.appLogout();
      });
    });