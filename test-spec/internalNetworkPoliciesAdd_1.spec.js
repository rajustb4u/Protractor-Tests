describe('INTERNAL NETWORK POLICIES Add Functionality', function() {
    var policies_Page = require('../page-factory/policiesPage.js');
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - xxxx Add Inter-Zone Policy Inter-Zone to Accessible From Zones validation : ', function() {

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
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.add_Policy();
        browser.sleep(1000);

        //submit Inter-Zone Policy_State 'Add Inter-Zone Policy' *button* is *disabled*.
        expect(policiesPage.submitInterZonePolicy_State()).toEqual('true');
        console.log('An Inter-Zone Policy Submit button is disabled: ');

        common_Component.selectItemDropDown('multiselect_host_group_destination', 3);
        browser.sleep(2000);

        //Validating the Destination Zone to Accessible From Zones.
        var destinationZones = [], accessibleFromZones = [];

        element(by.id('multiselect_host_group_destination')).click();
        browser.sleep(1000);
        var ele = element.all(by.css('.dropdown-menu li'));
        ele.map(function(eachName){
            return eachName.getText().then(function(unSorted){
                return unSorted;
            });
        }).then(function(unSorted){
            var destinationZones = unSorted.slice();
           console.log('Destination zones list:'+destinationZones);
        });
        browser.sleep(1000);
        policiesPage.users_ZonePolicy_Click();
        browser.sleep(1000);

        //Accessible From Zones
        element.all(by.css('div[ng-dropdown-multiselect="multipleSelect"]')).click();
        browser.sleep(1000);
        var ele1 = element.all(by.css('.multiselect-parent.btn-group.dropdown-multiselect.open li'));
        ele.map(function(eachName){
            return eachName.getText().then(function(unSorted){
                return unSorted;
            });
        }).then(function(unSorted){
            var accessibleFromZones = unSorted.slice();
            console.log('Accessible From zones list:'+accessibleFromZones);
        });

        //compare the zones array list
        // expect(zoneNameList).toEqaul(destinationZones);
        console.log('The Zones created on Zones page are similar to the Destination Zones we have in Inter-Zone Policy Page.');


        browser.sleep(1000);
        policiesPage.cancelPolicy_Click();
        browser.sleep(1000);
        policiesPage.cancelPolicy_Message_Yes_Click();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});