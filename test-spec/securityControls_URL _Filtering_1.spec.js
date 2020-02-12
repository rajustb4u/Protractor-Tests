	describe('Acumen SECURITY CONTROLS URL Filtering Validation: ', function() {
	//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('    AC - 1783, URL Filtering - Functional Check: ', function() {
			var security_Controls_Page = new securityControls_Page();
            browser.sleep(1000);
			security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            //Validating URL FILTERING checkbox and the content
            security_Controls_Page.url_Filtering();
            console.log('Validating the URL FILTERING checkbox & see if the Customize button is disabled when its not checked: ');
            browser.sleep(1000);
            expect(security_Controls_Page.customizeButton_state()).toEqual('true');
            console.log('Customize button is disabled when URL Filtering is un-checked: ');

            security_Controls_Page.url_Filtering();
            browser.sleep(1000);
            expect(security_Controls_Page.customizeButton_state()).toEqual(null);
            console.log('Customize button is ensabled when URL Filtering is checked: ');

            //Standard
            browser.sleep(1000);
            expect(security_Controls_Page.urlFiltering_Standard_state()).toEqual('true');
            security_Controls_Page.customizeButton_click();
            browser.sleep(1000);

            //validating the errors for both "ALWAYS ALLOWED URL"
            security_Controls_Page.always_Allowed_Click();
            security_Controls_Page.always_Allowed(data.urlFiltering_Page_Data.always_Allowed_Validation);
            browser.sleep(1000);
            expect(common_Component.getElementErrorByName('allowed_urls_0_url')).toEqual(data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);
            console.log('The Error message captured for Standard Always Allowed URL: '+data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);

            //validating the errors for both "ALWAYS BLOCKED URL"
            security_Controls_Page.alwaysBlocked_Click();
            security_Controls_Page.always_Blocked(data.urlFiltering_Page_Data.always_Blocked_Validation);
            browser.sleep(1000);
            expect(common_Component.getElementErrorByName('blocked_urls_0_url')).toEqual(data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);
            console.log('The Error message captured for Standard Always Blocked URL: '+data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);

            security_Controls_Page.always_Allowed_Clear();
            browser.sleep(1000);
            security_Controls_Page.alwaysBlocked_Clear();
            browser.sleep(1000);

            //Selecting an item from Allowed list and moving to Blocked list.
            security_Controls_Page.allowed_List_click();
            security_Controls_Page.move_Right_Allowed();
            browser.sleep(1000);
            security_Controls_Page.move_Left_Allowed();
            // security_Controls_Page.blocked_List_click();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton_Message();
            browser.sleep(2000);

            //Strict
            security_Controls_Page.urlFiltering_Strict_click();
            browser.sleep(1000);
            security_Controls_Page.customizeButton_click();

            //validating the errors for both "ALWAYS ALLOWED URL"
            security_Controls_Page.always_Allowed_Click();
            security_Controls_Page.always_Allowed(data.urlFiltering_Page_Data.always_Allowed_Validation);
            browser.sleep(1000);
            expect(common_Component.getElementErrorByName('allowed_urls_0_url')).toEqual(data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);
            console.log('The Error message captured for Strict Always Allowed URL: '+data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);

            //validating the errors for both "ALWAYS BLOCKED URL"
            security_Controls_Page.alwaysBlocked_Click();
            security_Controls_Page.always_Blocked(data.urlFiltering_Page_Data.always_Blocked_Validation);
            browser.sleep(1000);
            expect(common_Component.getElementErrorByName('blocked_urls_0_url')).toEqual(data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);
            console.log('The Error message captured for Strict Always Blocked URL: '+data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);

            security_Controls_Page.always_Allowed_Clear();
            browser.sleep(1000);
            security_Controls_Page.alwaysBlocked_Clear();
            browser.sleep(1000);

            //Selecting an item from Allowed list and moving to Blocked list.
            security_Controls_Page.allowed_List_click();
            security_Controls_Page.move_Right_Allowed();
            browser.sleep(1000);
            security_Controls_Page.move_Left_Allowed();
            security_Controls_Page.blocked_List_click();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton_Message();
            browser.sleep(1000);

            //Relaxed
            security_Controls_Page.urlFiltering_Relaxed_click();
            browser.sleep(1000);
            expect(security_Controls_Page.urlFiltering_Relaxed_state()).toEqual('true');
            security_Controls_Page.customizeButton_click();
            browser.sleep(1000);
            //validating the errors for both "ALWAYS ALLOWED URL"
            security_Controls_Page.always_Allowed_Click();
            security_Controls_Page.always_Allowed(data.urlFiltering_Page_Data.always_Allowed_Validation);
            browser.sleep(1000);
            expect(common_Component.getElementErrorByName('allowed_urls_0_url')).toEqual(data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);
            console.log('The Error message captured for Relaxed Always Allowed URL: '+data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);

            //validating the errors for both "ALWAYS BLOCKED URL"
            security_Controls_Page.alwaysBlocked_Click();
            security_Controls_Page.always_Blocked(data.urlFiltering_Page_Data.always_Blocked_Validation);
            browser.sleep(1000);
            expect(common_Component.getElementErrorByName('blocked_urls_0_url')).toEqual(data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);
            console.log('The Error message captured for Relaxed Always Blocked URL: '+data.urlFiltering_Page_Data.always_Allowed_Blocked_Error);

            security_Controls_Page.always_Allowed_Clear();
            browser.sleep(1000);
            security_Controls_Page.alwaysBlocked_Clear();
            browser.sleep(1000);

            //Selecting an item from Allowed list and moving to Blocked list.
            security_Controls_Page.allowed_List_click();
            security_Controls_Page.move_Right_Allowed();
            browser.sleep(1000);
            security_Controls_Page.move_Left_Allowed();
            security_Controls_Page.blocked_List_click();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton_Message();
            browser.sleep(1000);
		});
	});
