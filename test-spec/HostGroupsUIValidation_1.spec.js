describe('Acumen HostGroup UI Validation', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-1955 Zone Name Check: ', function() {

        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        //add zone name and cancel functionality:
        // HostGroupsPage.zonesLink();
        // browser.sleep(1000);
        HostGroupsPage.add_Zone();
        browser.sleep(1000);

       // validating the name field with the minimum chracters entered to check the error captured:
        HostGroupsPage.zoneName_Click();
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name_Validataion);
        browser.sleep(1000);
        expect(common_Component.getElementErrorByName('name')).toEqual(data.zones_Page_Data.zone_validation_Error);
        console.log('The Error message captured for Zone Name when the minimum characters are not entered: ' + data.zones_Page_Data.zone_validation_Error);
        browser.sleep(1000);

        expect(HostGroupsPage.submitZone_State()).toEqual('true');
        console.log('The Add Zone button is disabled when there are validation errors: ');

        // validating the name field error when the name field is cleared:
        HostGroupsPage.zoneName_Clear();
        browser.sleep(1000);
        expect(common_Component.getElementErrorByName('name')).toEqual(data.zones_Page_Data.zone_Name_Required_Error);
        console.log('The Error message captured when the mandatory field is cleared: ' + data.zones_Page_Data.zone_Name_Required_Error);
        browser.sleep(1000);

        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name);
        expect(HostGroupsPage.submitZone_State()).toEqual(null);
        console.log('The Add Zone button is disabled when the subnets are not selected which is mandatory: ');

        // validating the name field when in-valid characters are entered:
        HostGroupsPage.zoneName_Clear();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name_Validataion_1);
        expect(common_Component.getElementErrorByName('name')).toEqual(data.zones_Page_Data.zone_Name_Validation_Error_1);
        console.log('The Error message captured when invalid characters are entered in the field: ' + data.zones_Page_Data.zone_Name_Validation_Error_1);
        browser.sleep(1000);

        expect(HostGroupsPage.submitZone_State()).toEqual('true');
        console.log('The Add Zone button is disabled when the subnets are not selected which is mandatory: ');

        //*********
        // validating the name field with the minimum chracters entered to check the error captured:
        HostGroupsPage.zoneAccessibleFrom_Click();
        // HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom_Validataion);
        // browser.sleep(1000);
        // expect(common_Component.getElementErrorByName('host0_ip_range')).toEqual(data.zones_Page_Data.zoneAccessibleFrom_validation_Error);
        // console.log('The Error message captured for Zone AccessibleFrom when the minimum characters are not entered: ' + data.zones_Page_Data.zoneAccessibleFrom_validation_Error);
        // browser.sleep(1000);
        //
        // expect(HostGroupsPage.submitZone_State()).toEqual('true');
        // console.log('The Add Zone button is disabled when there are validation errors: ');

        // validating the name field error when the name field is cleared:
        // HostGroupsPage.zoneAccessibleFrom_Clear();
        // browser.sleep(1000);
        // HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom_Validataion_1);
        // browser.sleep(1000);
        // expect(common_Component.getElementErrorByName('host0_ip_range')).toEqual(data.zones_Page_Data.zoneAccessibleFrom_Validation_Error_1);
        // console.log('The Error message captured when the invalid IP Address is entered: ' + data.zones_Page_Data.zoneAccessibleFrom_Validation_Error_1);
        // browser.sleep(1000);
        //
        // HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom);
        //
        // expect(HostGroupsPage.submitZone_State()).toEqual('true');
        // console.log('The Add Zone button is disabled when the subnets are not selected which is mandatory: ');

        HostGroupsPage.cancelZone();
        browser.sleep(1000);
        HostGroupsPage.cancel_Zone_Yes();
        browser.sleep(1000);
        console.log('validated Zone cancel functionality for Zone Add page: ');
    });

    it('AC-1955, AC-1956 Zone Name Check, Add/Edit Zone - Cancel Button: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        HostGroupsPage.add_Zone();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_NameMaxout);
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom);
        console.log('Created New Zone with Maximum characters allowed: ');
        browser.sleep(1000);
        HostGroupsPage.submitZone();
    });

    it('AC-1955, AC-1956 Zone Name Check, Add/Edit Zone - Cancel Button: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        HostGroupsPage.addNew_Zone();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name);
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom);
        console.log('Created New Zone with Maximum characters allowed: ');
        browser.sleep(1000);
        HostGroupsPage.cancelZone();
        browser.sleep(1000);
        HostGroupsPage.cancel_Zone_No();

        browser.sleep(1000);
        HostGroupsPage.cancelZone();
        browser.sleep(1000);
        HostGroupsPage.cancel_Zone_Yes();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
