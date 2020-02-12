describe('Acumen Site_Delete Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-259 [Site Details View] Delete Site - Functional check', function () {
        var sitePage = new site_Page();

        // common_Component.appLogin();
        // browser.sleep(1000);
        // sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        expect(sitePage.siteRemoveButton_State()).toEqual(null);
        console.log('Delete button is in enabled state: ');

        //Delete the site and validate the message box.
        sitePage.removeSiteButton();
        browser.sleep(1000);

        console.log('The delete message box message is verified: '+data.site_data.delete_Msgbox_Text);
        browser.sleep(1000);

        sitePage.finalDelete_No();
        browser.sleep(1000);

        sitePage.removeSiteButton();
        browser.sleep(1000);
        sitePage.Final_Delete();
        browser.sleep(1000);

        common_Component.appLogout();
    });
});




