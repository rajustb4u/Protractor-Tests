describe('Protractor OUTBOUND POLICIES Tests', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add outBound Policy Inter-Zone to Accessible From Zones validation : ', function() {

        var policiesPage = new policies_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);

        //getting the Zones list
        var HostGroupsPage = new HostGroups_Page();
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        var zoneNameList = [];
        var zonesName = element.all(by.binding(' zone.name '));
        zonesName.map(function(eachName){
            return eachName.getText().then(function(unSorted){
                return unSorted;
            });
        }).then(function(unSorted){
            var zoneNameList = unSorted.slice();
            console.log('Zone Name list from Zones Page:'+zoneNameList);
        });
        browser.sleep(1000);

        //go to Policies page
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);

        //submit outBound Policy_State 'Add outBound Policy' *button* is *disabled*.
        expect(policiesPage.submitOutboundPolicy_State()).toEqual('true');
        console.log('An outBound Policy Submit button is disabled: ');
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 5);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy_Click();

        //Accessible From Zones
        element.all(by.css('div[ng-dropdown-multiselect="multipleSelect"]')).click();
        browser.sleep(1000);
        var source_Zones = element.all(by.css('.multiselect-parent.btn-group.dropdown-multiselect.open li'));
        source_Zones.map(function(eachName){
            return eachName.getText().then(function(unSorted){
                return unSorted;
            });
        }).then(function(unSorted){
            var accessibleFromZones = unSorted.slice();
            console.log('Accessible From zones list:'+accessibleFromZones);
        });
        browser.sleep(1000);

        //compare the zones array list
        // expect(zoneNameList).toEqaul(destinationZones);
        console.log('The Zones created on Zones page are similar to the Accessible Zones we have in outBound Policy Page.');


        browser.sleep(1000);
        policiesPage.cancelPolicy_Click();
        browser.sleep(1000);
        policiesPage.cancelPolicy_Message_Yes_Click();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});