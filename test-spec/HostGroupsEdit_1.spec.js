describe('Acumen HostGroup Edit Functionality', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
    it('AC - 1957: Edit Zones Test, validate the Subnets in trusted site with new created Zones: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        // common_Component.appLogin();

        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        //create a zone
        browser.sleep(1000);
        HostGroupsPage.addNew_Zone();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name2);
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom_3);
        browser.sleep(1000);
        HostGroupsPage.submitZone();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});