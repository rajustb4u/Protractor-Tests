describe('Acumen TroubleShootAdmin Tests', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-2530 Trouble Shooting Admin Functionality Validating the HostGroups page button functionality : ', function() {
        //Validating Host Group page
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        if(expect(HostGroupsPage.hostsGroup_Page_Text()).toEqual(data.zones_Page_Data.Zone_Page_Text)) {
            console.log('HostGroups page text is validated logged in Trouble shoot admin: '+data.zones_Page_Data.Zone_Page_Text);
            browser.sleep(1000);
        }
        if(expect(HostGroupsPage.add_Zone_State()).toEqual(null)) {
            console.log('Add Host Group button in Host Groups page is in Enabled state when logged in as Trouble shoot admin:');
        }
        browser.sleep(1000);
        common_Component.hostGroup_Create();
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        if(expect(HostGroupsPage.edit_Zone_State()).toEqual(null)) {
            console.log('Edit Host Group button in Host Groups page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(HostGroupsPage.delete_Zone_State()).toEqual('true')) {
            console.log('Delete Host Group button in Host Groups page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(HostGroupsPage.nextPoliciesButton_State()).toEqual(null)) {
            console.log('Next - Policies button in Host Groups page is in Enabled state logged in Trouble shoot admin:');
            HostGroupsPage.nextPolicies_Button();
        }

        //Validating Directory Services page
        var policiesPage = new policies_Page();
        if(expect(policiesPage.inBoundPolicy_Text()).toEqual(data.policies_Page_Data.inBoundPoliciesText)) {
            console.log('Policies page text is validated logged in Trouble shoot admin: '+data.policies_Page_Data.inBoundPoliciesText);
            browser.sleep(1000);
        }
        common_Component.appLogout();
        browser.sleep(1000);
    });
});
