describe('Acumen Administrator related to Sites Tests', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-616 Administrators relations with sites (Select Site drop down, & scroll bar)', function() {

        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.siteCreate('TestSite');
        browser.sleep(2000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        admin_Page.adminAddAnother();
        browser.sleep(1000);
        common_Component.selectItemDropDown('btn-append-to-body', 1);
        browser.sleep(1000);
        admin_Page.adminPage_CancelButton();
        admin_Page.adminPageCancel_Yes_Button();
        browser.sleep(1000);
        //Creating 20 sites for administrators page
        for (i=1;i<=5;i++) {
            common_Component.siteCreate_More_WithSiteName(data.site_data.siteName+i);
            browser.sleep(2000);
        };
        admin_Page.Administrators_Link();
        admin_Page.adminAddAnother();
        browser.sleep(1000);
        common_Component.selectItemDropDown('btn-append-to-body', 1);
        // common_Component.selectItemDropDown_1('button.dropdown-toggle', 6);
        common_Component.selectItemDropDown_1('div[ng-if="sites"]', 6);
        browser.sleep(2000);
        admin_Page.adminPage_CancelButton();
        admin_Page.adminPageCancel_Yes_Button();

        //Add more than 10 Sites, Expand "Select Sites" drop-down and verify the sites section.
        for (i=1;i<=6;i++) {
            common_Component.siteDelete();
            browser.sleep(2000);
        };
        browser.sleep(2000);
        common_Component.appLogout();
    });
});
