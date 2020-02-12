	describe('Acumen SECURITY CONTROLS URL Filtering Validation: ', function() {
	//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('    AC - 18323, URL Filtering - [FE] Functional Check: ', function() {
			var security_Controls_Page = new securityControls_Page();
            browser.sleep(1000);
			security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            //Validating URL FILTERING checkbox and the content
            security_Controls_Page.url_Filtering();
            console.log('Validating the URL FILTERING checkbox & see if the Customize button is disabled when its not checked: ');
            expect(security_Controls_Page.customizeButton_state()).toEqual('true');
            console.log('Customize button is disabled when URL Filtering is un-checked: ');

            security_Controls_Page.url_Filtering();
            expect(security_Controls_Page.customizeButton_state()).toEqual(null);
            console.log('Customize button is enabled when URL Filtering is checked: ');

            //Standard
            expect(security_Controls_Page.urlFiltering_Standard_state()).toEqual(null);
            security_Controls_Page.customizeButton_click();

            //validating the errors for both "ALWAYS ALLOWED URL"
            security_Controls_Page.always_Allowed_Click();
            //add button is disabled
            expect(security_Controls_Page.addAlwaysAllowed_GetState()).toEqual('true');
            security_Controls_Page.always_Allowed(data.urlFiltering_Page_Data.always_Allowed_Validation_1);
            browser.sleep(1000);
            //add button is enabled after entering the URL
            expect(security_Controls_Page.addAlwaysAllowed_GetState()).toEqual(null);
            security_Controls_Page.addAlwaysAllowed_click();
            security_Controls_Page.always_Allowed1(data.urlFiltering_Page_Data.always_Allowed_Validation_1);
            browser.sleep(1000);
            //delete button enabled
            expect(security_Controls_Page.DeleteAlwaysAllowed_GetState()).toEqual(null);
            security_Controls_Page.DeleteAlwaysAllowed1_click();
            console.log('Add & Delete buttons validated for Allowed URL: ');

            //validating the errors for both "ALWAYS BLOCKED URL"
            security_Controls_Page.addAlwayBlocked_click();
            //add button is disabled
            expect(security_Controls_Page.addAlwayBlocked_GetState()).toEqual('true');
            security_Controls_Page.always_Blocked(data.urlFiltering_Page_Data.always_Blocked_Validation_1);
            browser.sleep(1000);
            //add button is enabled after entering the URL
            expect(security_Controls_Page.addAlwayBlocked_GetState()).toEqual(null);
            security_Controls_Page.addAlwayBlocked_click();
            security_Controls_Page.always_Blocked1(data.urlFiltering_Page_Data.always_Blocked_Validation_1);
            browser.sleep(1000);
            //delete button enabled
            expect(security_Controls_Page.DeleteAlwaysBlocked_GetState()).toEqual(null);
            security_Controls_Page.DeleteAlwaysBlocked1_click();
            console.log('Add & Delete buttons validated for Blocked URL: ');

            //adding few allowed to Blocked and save the custom URL filter to validate.
            security_Controls_Page.allowed_List_click();
            security_Controls_Page.move_Right_Allowed();
            browser.sleep(1000);
            security_Controls_Page.move_Left_Allowed();
            security_Controls_Page.blocked_List_click();
            browser.sleep(1000);
            security_Controls_Page.always_Allowed_Clear();
            security_Controls_Page.alwaysBlocked_Clear();
            // security_Controls_Page.urlFiltering_saveButton();
            // security_Controls_Page.submitSecurity_Controls();
            // security_Controls_Page.security_Controls_Link();
            //
            // security_Controls_Page.urlFiltering_Standard_click();
            // browser.sleep(1000);
            // security_Controls_Page.standardMessage_click();
            // security_Controls_Page.submitSecurity_Controls();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton();
            browser.sleep(1000);
            security_Controls_Page.cancelbutton_Message();
            browser.sleep(1000);

            common_Component.appLogout();
		});
	});
