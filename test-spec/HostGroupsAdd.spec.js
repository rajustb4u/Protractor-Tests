describe('Acumen HostGroup Add Functionality', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1950, Add Zones Functionality, validating the Add Zone state, enter into the Zone and validate the Cancel button: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        // browser.sleep(1000);
        // common_Component.siteAllFields();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        expect(HostGroupsPage.add_NewZone_State()).toEqual(null);
        console.log('The Add New Zone button is enabled state: ');
        HostGroupsPage.addNew_Zone();
        browser.sleep(1000);

        HostGroupsPage.cancelZone();
        browser.sleep(1000);
        HostGroupsPage.cancel_Zone_Yes();
        browser.sleep(1000);
        console.log('validated Zone cancel functionality for Zone Add page: ');
    });

    it('AC - 1950, Add Zones Functionality, check Add button state and validate the help: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        HostGroupsPage.addNew_Zone();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name_1);
        browser.sleep(1000);
        expect(HostGroupsPage.getHelpForZN()).toEqual(data.zones_Page_Data.zone_Help_Text);
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom_1);
        browser.sleep(1000);
        expect(HostGroupsPage.getHelpForZN()).toEqual(data.zones_Page_Data.zone_Help_Text);
        console.log('Created New Zone: ');
        browser.sleep(1000);
        HostGroupsPage.submitZone();
    });
});
