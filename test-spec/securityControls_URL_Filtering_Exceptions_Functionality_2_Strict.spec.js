describe('Acumen SECURITY CONTROLS URL Filtering Validation - Strict: ', function() {
//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	browser.sleep(1000);
		
	it('Navigate to Strict url filters exceptions', function () {

		common_Component.appLogin();
		browser.sleep(1000);			
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);		
		security_Controls_Page.urlFiltering_Strict_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);		
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);
	});	

	it('Check applied button state with url, user, user groups fields filled in.', function () {
		
		console.log('\nCheck applied button state with url, user, user groups fields filled in.');

		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users('User');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups('Group');
		browser.sleep(1000);	
		
		console.log('Apply button should be enabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual(null);
		browser.sleep(1000);		
		
	});	
	
	it('Check applied button state with url, user, user groups fields filled in with error message in user field', function () {
		
		console.log('\nCheck applied button state with url, user, user groups fields filled in with error message in user field.');		
		
		security_Controls_Page.exceptions_Url_Clear();
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users_Clear();
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Groups_Clear();
		browser.sleep(1000);			
		
		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users('Us');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups('Group');
		browser.sleep(1000);	
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(1000);		
	
	});	
	
	it('Check applied button state with url, user, user groups fields filled in with error message in user group field', function () {
		
		console.log('\nCheck applied button state with url, user, user groups fields filled in with error message in user group field.');

		security_Controls_Page.exceptions_Url_Clear();
		browser.sleep(1000);

		security_Controls_Page.exceptions_Users_Clear();
		browser.sleep(1000);	
		
		security_Controls_Page.exceptions_Groups_Clear();
		browser.sleep(1000);	
		
		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users('User');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups('Gr');
		browser.sleep(1000);	
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(1000);		
		
	});			
	
	it('logout', function () {
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
		
		common_Component.appLogout();
		browser.sleep(1000);
	});			
      
});