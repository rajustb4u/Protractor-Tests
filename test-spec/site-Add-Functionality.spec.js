describe('Acumen Add_Site Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-72: Enter SiteName and click Cancel button to validate Cancel button: ', function () {
        var sitePage = new site_Page();

        //click on Configuration button
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.start_Configuration();
        browser.sleep(2000);
        console.log('Start Configuration button is clicked.');

        //click on Site Add button
        sitePage.addSite_Button();
        browser.sleep(1000);
        //Form can be closed via "Cancel" button
        sitePage.clickNameField();
        sitePage.siteName('Lets Test');
        expect(sitePage.submitAddSite_State()).toEqual(null);

        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
    });

    it('Test Case AC-69 Validating the Information Section, field validation errors, and checking the Add Site State when those errors exist: ' , function () {
        var sitePage = new site_Page();
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //Form can be closed via "Cancel" button
        sitePage.clickNameField();
        sitePage.siteName(data.site_data.siteName_Validation);
        browser.sleep(1000);
        //capturing the error message and validating when we enter the sitename with 2 characters.
        expect(common_Component.getElementErrorByInputName('name')).toEqual(data.site_data.siteName_errorMsg);
        console.log('The Error message captured for site name: '+data.site_data.siteName_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');

        //capturing the error message and validating when we enter the User Count with 2 characters.
        sitePage.click_userCountField();
        sitePage.user_Count(data.site_data.userCount_Validation);
        expect(common_Component.getElementErrorByInputName('user_count')).toEqual(data.site_data.userCount_errorMsg);
        console.log('The Error message captured for User Count: '+data.site_data.userCount_errorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.userCount_Clear();

        //Capturing the error message when the site name is cleared telling its required field,
        sitePage.siteName_Clear();
        expect(common_Component.getElementErrorByInputName('name')).toEqual(data.site_data.siteName_RequirederrorMsg);
        console.log('The Error message captured for site name: '+data.site_data.siteName_RequirederrorMsg);
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is disabled when we have the validation error message: ');

        sitePage.siteName(data.site_data.siteName);

        //Adding Site Tag
        sitePage.siteTag(data.site_data.siteTag);
        sitePage.siteTag(',');
        sitePage.siteTag(data.site_data.siteTag1);
        sitePage.siteTag(',');
        sitePage.siteTag(data.site_data.siteTag2);
        sitePage.siteTag(',');

        //Adding Location Type
        sitePage.locationType(data.site_data.locationType);
        sitePage.user_Count(data.site_data.userCount);
        browser.sleep(1000);
        //Validating the Add Site button is enabled
        expect(sitePage.submitAddSite_State()).toEqual(null);
        console.log('Add Site Button is enabled after all the Site Name field from Alias section is correctly entered: ');
        //
        // sitePage.clickCancel();
        // browser.sleep(1000);
        // sitePage.addSiteCancelMessageButton();
        // browser.sleep(1000);
        // common_Component.appLogout();
    });
});
