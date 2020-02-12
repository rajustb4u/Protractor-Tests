describe('Acumen HostGroup UI Validation', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-1955  Add Zone Name - UI check: Validate Placeholders, labels, errors, Max, Min Length.', function() {
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        // common_Component.siteAllFields();
        // browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        HostGroupsPage.add_Zone();
        browser.sleep(1000);

        //validation with the Zone NAME attributes "place holder, name, min length, max length"
        HostGroupsPage.zoneName_Click();

        if(expect(HostGroupsPage.znN_placeholderAttr()).toMatch(data.zones_Page_Data.zone_Name_PlaceHolder_Attribute)) {
            console.log('Zone NAME Placeholder verification done: ' + data.zones_Page_Data.zone_Name_PlaceHolder_Attribute);
        }

        if(expect(HostGroupsPage.znN_nameAttr()).toMatch(data.zones_Page_Data.zone_Name_Name_Attribute)) {
            console.log('Zone NAME Attribute verification done: ' + data.zones_Page_Data.zone_Name_Name_Attribute);
        }

        if(expect(HostGroupsPage.znN_minlengthAttr()).toMatch(data.zones_Page_Data.zone_Name_minLength_Attribute)) {
            console.log('Zone NAME Min Length verification done: ' + data.zones_Page_Data.zone_Name_minLength_Attribute);
        }

        if (expect(HostGroupsPage.znN_maxlengthAttr()).toMatch(data.zones_Page_Data.zone_Name_maxLength_Attribute)) {
            console.log('Zone NAME Max Length verification done: ' + data.zones_Page_Data.zone_Name_maxLength_Attribute);
        }


        //validation with the Zone ACCESSIBLE FROM attributes "place holder, name, min length, max length"
        HostGroupsPage.zoneAccessibleFrom_Click();

        if(expect(HostGroupsPage.zAcF_placeholderAttr()).toMatch(data.zones_Page_Data.zoneAccessibleFrom_PlaceHolder_Attribute)) {
            console.log('Zone ACCESSIBLE FROM Placeholder verification done: ' + data.zones_Page_Data.zoneAccessibleFrom_PlaceHolder_Attribute);
        }

        if (expect(HostGroupsPage.zAcF_nameAttr()).toMatch(data.zones_Page_Data.zoneAccessibleFrom_Name_Attribute)) {
            console.log('Zone ACCESSIBLE FROM Name Attribute verification done: ' + data.zones_Page_Data.zoneAccessibleFrom_Name_Attribute);
        }

        // if (expect(HostGroupsPage.zAcF_minlengthAttr()).toMatch(data.zones_Page_Data.zoneAccessibleFrom_minLength_Attribute)) {
        //     console.log('Zone ACCESSIBLE FROM Min Length verification done: ' + data.zones_Page_Data.zoneAccessibleFrom_minLength_Attribute);
        // }
        //
        // if (expect(HostGroupsPage.zAcF_maxlengthAttr()).toMatch(data.zones_Page_Data.zoneAccessibleFrom_maxLength_Attribute)) {
        //     console.log('Zone ACCESSIBLE FROM Max Length verification done: ' + data.zones_Page_Data.zoneAccessibleFrom_maxLength_Attribute);
        // }

        HostGroupsPage.cancelZone();
        browser.sleep(1000);
        HostGroupsPage.cancel_Zone_Yes();
        browser.sleep(1000);
    });
});
