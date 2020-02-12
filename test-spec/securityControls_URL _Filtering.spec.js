	describe('Acumen SECURITY CONTROLS URL Filtering Validation: ', function() {
	//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

		it('    AC - 1782, URL Filtering - UI check: ', function() {
            var security_Controls_Page = new securityControls_Page();
            browser.sleep(1000);
            common_Component.appLogin();
            browser.sleep(1000);
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            //Standard
            security_Controls_Page.urlFiltering_Standard_click();
            browser.sleep(1000);
            security_Controls_Page.customizeButton_click();
            browser.sleep(1000);
            expect(security_Controls_Page.allowed_List_get()).toEqual(data.urlFiltering_Page_Data.standard_Allowed_List);
            expect(security_Controls_Page.blocked_List_get()).toEqual(data.urlFiltering_Page_Data.standard_Blocked_List);

            browser.sleep(1000);
            security_Controls_Page.cancelbutton();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton_Message();
            browser.sleep(1000);

            //Strict
            security_Controls_Page.urlFiltering_Strict_click();
            browser.sleep(1000);
            security_Controls_Page.customizeButton_click();
            browser.sleep(1000);
            expect(security_Controls_Page.allowed_List_get()).toEqual(data.urlFiltering_Page_Data.strict_Allowed_List);
            expect(security_Controls_Page.blocked_List_get()).toEqual(data.urlFiltering_Page_Data.strict_Blocked_List);
            browser.sleep(1000);
            security_Controls_Page.cancelbutton();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton_Message();
            browser.sleep(1000);

            //Relaxed
            security_Controls_Page.urlFiltering_Relaxed_click();
            browser.sleep(1000);
            security_Controls_Page.customizeButton_click();

            expect(security_Controls_Page.allowed_List_get()).toEqual(data.urlFiltering_Page_Data.relaxed_Allowed_List);
            expect(security_Controls_Page.blocked_List_get()).toEqual(data.urlFiltering_Page_Data.relaxed_Blocked_List);

            browser.sleep(1000);
            security_Controls_Page.cancelbutton();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton_Message();
            browser.sleep(1000);
            security_Controls_Page.urlFiltering_Standard_click();
            browser.sleep(1000);
        });
	});
