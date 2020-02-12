describe('Acumen HostGroup Delete Functionality', function() {
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
    var site_Page = require('../page-factory/sitePage.js');

    it('Remove Zones Test: ', function() {
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        //remove the Zones
        for(i=0; i<=12; i++) {
            // HostGroupsPage.edit_Zone();
            browser.sleep(1000);
            HostGroupsPage.delete_Zone();
            browser.sleep(1000);
            HostGroupsPage.delete_Yes_Message();
            browser.sleep(1000);
        };

       // //Remove site created for Zones
       //  var sitePage = new site_Page();
       //  browser.sleep(1000);
       //  sitePage.site_Link();
       //
       //  browser.sleep(1000);
       //  sitePage.clickDetailViewButton();
       //  browser.sleep(1000);
       //  sitePage.removeSiteButton();
       //  browser.sleep(1000);
       //  sitePage.Final_Delete();
       //  browser.sleep(1000);

        common_Component.appLogout();
    });
});