describe('Acumen HostGroup Edit Functionality', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
    it('AC - 1957: Edit Zones Test UI Check: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);

        //The *'Edit Zone' form* is displayed in *Modal Window* (it *should block navigation panel*)
        expect(HostGroupsPage.edit_Zone_State()).toEqual(null);
        console.log('The Edit button is in enabled state');

        expect(HostGroupsPage.delete_Zone_State()).toEqual(null);
        console.log('The Delete button is in enabled state');

        //Validate the zone cancel button.
        HostGroupsPage.edit_Zone();
        browser.sleep(1000);

        HostGroupsPage.zoneName_Clear();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name);
        browser.sleep(1000);

        HostGroupsPage.cancelZone();
        browser.sleep(1000);
        HostGroupsPage.cancel_Zone_Yes();
        console.log('Validating the cancel after editing the Zone name: ');
        browser.sleep(1000);

        //Editing the Zone Name and submitting the edit.
        HostGroupsPage.edit_Zone();
        browser.sleep(1000);

        HostGroupsPage.zoneName_Clear();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name3);

        browser.sleep(1000);
        console.log('Edited & Created New InternalNetworkZone Zone: ');
        HostGroupsPage.submitZone();
        browser.sleep(1000);
      });
});