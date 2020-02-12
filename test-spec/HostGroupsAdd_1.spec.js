describe('Acumen HostGroup Add Functionality', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1953 Add Zones Functionality: ', function() {

        var HostGroupsPage = new HostGroups_Page();
        // browser.sleep(1000);
        // common_Component.appLogin();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        HostGroupsPage.addNew_Zone();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name_2);

        //Add 6 Subnets and validate the Add & Delete buttons.
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom_1);
        browser.sleep(1000);

        //1'st subnet
        if(expect(HostGroupsPage.addSubnets_State()).toEqual(null)) {
            console.log('Add Subnet button is in enabled state');
            HostGroupsPage.addSubnets_Click();
        }

        //2'nd subnet
        if(expect(HostGroupsPage.DeleteSubnets_State()).toEqual(null)) {
            console.log('The Delete button for Subnet is in enabled state');
            HostGroupsPage.zoneAccessible_From1(data.zones_Page_Data.zoneAccessibleFrom_2);
            HostGroupsPage.addSubnets_Click();
        }

        //3'rd subnet
        if(expect(HostGroupsPage.DeleteSubnets1_State()).toEqual(null)) {
            console.log('The Delete button for Subnet is in enabled state');
            HostGroupsPage.zoneAccessible_From2(data.zones_Page_Data.zoneAccessibleFrom_3);
            HostGroupsPage.addSubnets_Click();
        }

        //4'th subnet
        if(expect(HostGroupsPage.DeleteSubnets2_State()).toEqual(null)) {
            console.log('The Delete button for Subnet is in enabled state');
            HostGroupsPage.zoneAccessible_From3(data.zones_Page_Data.zoneAccessibleFrom_4);
            HostGroupsPage.addSubnets_Click();
        }

        // 5'th subnet
        if(expect(HostGroupsPage.DeleteSubnets3_State()).toEqual(null)) {
            console.log('The Delete button for Subnet is in enabled state');
            HostGroupsPage.zoneAccessible_From4(data.zones_Page_Data.zoneAccessibleFrom_5);
            HostGroupsPage.addSubnets_Click();
        }

        //6'th subnet
        if(expect(HostGroupsPage.DeleteSubnets4_State()).toEqual(null)) {
            console.log('The Delete button for Subnet is in enabled state');
            HostGroupsPage.zoneAccessible_From5(data.zones_Page_Data.zoneAccessibleFrom_6);
        }
        browser.sleep(1000);
        HostGroupsPage.submitZone();
        common_Component.appLogout();
        });
});
