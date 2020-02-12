describe('Acumen Add_Site Functionality Tests for Internet Facing Servers', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case XXX - Entering complete set of data into Site page with 15 subnets and 15 server with Port Translations :', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.siteAllFields();
        browser.sleep(1000);

        //Delete the site and validate the message box.
        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        sitePage.removeSiteButton();
        browser.sleep(1000);
        sitePage.Final_Delete();
        browser.sleep(1000);

        common_Component.appLogout();
    });
});
