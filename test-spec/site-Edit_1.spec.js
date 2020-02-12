describe('Acumen Edit_Site Tests', function () {

    //var logger = require('../scripts/log.js');
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('TC - AC 253 Edit Site - Information section', function () {
        var sitePage = new site_Page();
        // common_Component.appLogin();
        // sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        sitePage.clickEditButton();
        browser.sleep(1000);

        //validating the update site button state, it should be disabled when there is no update or wrong entry to any fields.
        // expect(sitePage.update_SiteButton_State()).toEqual('true');

        //clear the site tag and enter
        sitePage.siteTag_Click();
        browser.sleep(1000);
        sitePage.siteTag(data.site_data.siteTag2);
        sitePage.siteTag(',');
        sitePage.updateSiteButton();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        // expect(sitePage.detail_View_SiteTag()).toEqual(data.site_data.siteTag);
        console.log('Site Tag Verification from detail view to the site data: '+data.site_data.siteTag_Verification);

        sitePage.close_Detail_View();
        browser.sleep(1000);
    });

    it('TC - AC 254 Edit Site - Physical Address section', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);
        sitePage.clickEditButton();
        browser.sleep(1000);

        //validating the update site button state, it should be disabled when there is no update or wrong entry to any fields.
        // expect(sitePage.update_SiteButton_State()).toEqual('true');

        sitePage.physicalAddress_Clear();
        sitePage.physicalAddress(data.site_data.address1);

        sitePage.updateSiteButton();
        browser.sleep(1000);

        sitePage.clickDetailViewButton();
        browser.sleep(1000);

        if(expect(sitePage.detail_View_Address()).toEqual(data.site_data.address1)) {
            console.log('Site Address Verification from detail view to the site data edited: '+data.site_data.address1);
            sitePage.close_Detail_View();
            browser.sleep(1000);
        }
        common_Component.appLogout();
    });
});
