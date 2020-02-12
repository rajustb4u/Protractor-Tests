describe('Acumen HostGroup ListView Functionality', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 1939: Zones list view Next & Back buttons validation: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        common_Component.appLogin();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);

        //Validating the Next-Driectory Services button
        if(expect(HostGroupsPage.nextPoliciesButton_State()).toEqual(null)) {
            console.log('Next-DerctoryServices button is in enabled state');
            HostGroupsPage.nextPolicies_Button();
        }

        //Validating the Back to Zones button
        if(expect(HostGroupsPage.backtoZonesButton_State()).toEqual(null)) {
            console.log('Back button to get into Zones page is in enabled state');
            HostGroupsPage.back_toZones_Button();
        }

        //Validating the Back button in Zones
        if(expect(HostGroupsPage.backInZonesButton_State()).toEqual(null)) {
            console.log('Back button in Zones Page is in enabled state');
            HostGroupsPage.backIn_Zones_Button();
        }

        //Validating Next-Zones button
        if(expect(HostGroupsPage.nextZones_Button_State()).toEqual(null)) {
            console.log('Next-Zones button to get into Zones page is in enabled state');
            HostGroupsPage.next_Zones_Button();
        }
    });

    it('AC - 1939: Zones list Creating multiple Zones: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        HostGroupsPage.zonesLink();

        for (i=1; i<=9; i++) {
            browser.sleep(1000);
            HostGroupsPage.addNew_Zone();
            browser.sleep(1000);
            HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name_List+i);
            browser.sleep(1000);
            HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom_list+i);
            browser.sleep(1000);
            HostGroupsPage.submitZone();
            browser.sleep(1000);
        };
    });

    it('AC - 1945: Zones list view Functional Check: ' , function () {
        var HostGroupsPage = new HostGroups_Page();
        HostGroupsPage.zonesLink();
        browser.sleep(1000);

        // Get the number of Zones in the Site List with the names:
        element.all(by.css('div[zone="zone"]')).then(function(items) {
            console.log("Total Zones in the list: " +items.length);
            console.log("Zone Names from the site list....");
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
        });

        //validate to see if the Scrollbar exists
        if(expect(HostGroupsPage.scrollbar_State()).toEqual(null)) {
            console.log('The Scrollbar is there:');
        }

        browser.sleep(1000);
        common_Component.appLogout();
    });
});