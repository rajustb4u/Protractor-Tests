describe('INBOUND POLICIES List View Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1110, Inbound Policies List View] UI check creating more policies, validate the scrollbar and columns: ', function() {
        var policiesPage = new policies_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        //Validating the cancel button after editing.
        browser.sleep(1000);
        if(expect(policiesPage.inBoundPolicies_Text()).toEqual(data.policies_Page_Data.inBoundPoliciesText)) {
            console.log('The text displayed on InBound Policies page:'+data.policies_Page_Data.inBoundPoliciesText);
        }

        for(i=0; i<=9; i++) {
            browser.sleep(1000);
            policiesPage.addNewPolicy_Click();
            browser.sleep(1000);
            common_Component.selectItemDropDown('device_id', i+5);
            browser.sleep(1000);
            policiesPage.inbound_AccessibleForm(data.policies_Page_Data.policy_AccessibleFrom3+i);
            browser.sleep(1000);
            policiesPage.submitInboundPolicy_Click();
            browser.sleep(1000);
        };

        for(i=0; i<=5; i++) {
            browser.sleep(1000);
            policiesPage.addNewPolicy_Click();
            browser.sleep(1000);
            common_Component.selectItemDropDown('device_id', i+6);
            browser.sleep(1000);
            policiesPage.inbound_AccessibleForm(data.policies_Page_Data.policy_AccessibleFrom2+i);
            browser.sleep(1000);
            policiesPage.submitInboundPolicy_Click();
            browser.sleep(1000);
        };

        //Validate the columns exist:
        if(expect(policiesPage.inBound_Columns()).toEqual(data.policies_Page_Data.inBoundColumns)){
            console.log('The Column List:'+data.policies_Page_Data.inBoundColumns);
        }

        //Check whether there is Scrollbar or not:
        if(expect(policiesPage.scrollbar_Exist()).toEqual(null)){
            console.log('The scroll bar exist:');
        }
    });

    it('AC - 1974, Inbound Policies List View UI check & Functional Check, validate the front, back buttons and sorting order, list of policies: ', function() {
        var policiesPage = new policies_Page();
        browser.sleep(1000);

        // Get the number of Policies in the List with the names:
        element.all(by.binding(' policy.device.name ')).then(function(items) {
            console.log("Total InBound Policies in the list: " +items.length);
            console.log("InBound Policy Names from the list....");
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
        });

        //Checking the sorting order.
        var sorted = [] , unSorted = [];
        var ele = element.all(by.binding(' policy.device.name '));
        ele.map(function(eachName){
            return eachName.getText().then(function(unSorted){
                return unSorted;
            });
        }).then(function(unSorted){
            var sorted = unSorted.slice();
            sorted = sorted.sort(); //sort the array
            console.log('sorted list of Sites: '+sorted);
            expect(sorted).toEqual(unSorted); //check if both sorted and unsorted arrays are same
        });

        //Testing Next-InterZonePolicies button
        policiesPage.inBoundPolicies_NextButton();
        browser.sleep(1000);
        if(expect(policiesPage.interZonePolicies_Text()).toEqual(data.policies_Page_Data.interZonePolicies_Text)) {
            console.log(' Next-InterZonePolicies button is working fine:');
        }
        browser.sleep(1000);
        policiesPage.back_Button();
        if(expect(policiesPage.inBoundPolicies_Text()).toEqual(data.policies_Page_Data.inBoundPoliciesText)) {
            console.log('Back button from InterZonePolicies is working fine:');
        }

        browser.sleep(1000);
        policiesPage.back_Button();
        browser.sleep(1000);
        policiesPage.nextPolicies_Button();
        if(expect(policiesPage.inBoundPolicies_Text()).toEqual(data.policies_Page_Data.inBoundPoliciesText)) {
            console.log('Back button from InterZonePolicies is working fine:');
        }

        common_Component.appLogout();
    });

});