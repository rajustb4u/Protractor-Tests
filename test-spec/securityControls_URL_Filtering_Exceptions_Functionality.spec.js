describe('Acumen SECURITY CONTROLS URL Filtering Validation: ', function() {
//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	browser.sleep(1000);
			
	it('Navigate to standard url filters exceptions', function () {

		common_Component.appLogin();
		browser.sleep(1000);			
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);		
		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);		
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);
	});	


	it('Select an item from exceptions category list, check for disabled apply button, cancel within exceptions tab, check for dialogue box ', function () {
		
		console.log('\nSelect an item from exceptions category list, check for disabled apply button, cancel within exceptions tab, check for dialogue box ');

		common_Component.selectItemDropDown_2('div[id="categories-multiselect"]',5);
		
		security_Controls_Page.exceptions_Category_Click();
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Cancel_Button_Click();
		browser.sleep(1000);

		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(2000);
		
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);	
	});	
	

	it('Add something to the url filter exceptions url list, check for disabled apply button, cancel within exceptions tab, check for dialogue box', function () {
		
		console.log('\nAdd something to the url filter exceptions url list, check for disabled apply button, cancel within exceptions tab, check for dialogue box');
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		security_Controls_Page.exceptions_Url_Add_Button_Click();
		browser.sleep(1000);
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(1000);		
		

		security_Controls_Page.exceptions_Cancel_Button_Click();
		browser.sleep(1000);	
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)		
	});	
	

	it('Add an item to the user list,  check for disabled apply button, cancel within exceptions tab, check for dialogue box', function () {
		
		console.log('\nAdd an item to the user list,  check for disabled apply button, cancel within exceptions tab, check for dialogue box');
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Users('User');
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(2000);
		
		security_Controls_Page.exceptions_Cancel_Button_Click();
		browser.sleep(1000);	
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)			
	});	
	
	it('Add an item to the user groups list, check for disabled apply button, cancel within exceptions tab, check for dialogue box', function () {
		
		console.log('\nAdd an item to the user groups list, check for disabled apply button, cancel within exceptions tab, check for dialogue box')
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Groups('Group');
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Groups_Add_Button_Click();
		browser.sleep(1000);
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(2000);
		
		security_Controls_Page.exceptions_Cancel_Button_Click();
		browser.sleep(1000);	
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)			
	});
	

	it('Select an item from exceptions category list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box ', function () {
		
		console.log('\nSelect an item from exceptions category list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box ');
		
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);		
		common_Component.selectItemDropDown_2('div[id="categories-multiselect"]',5);
		
		security_Controls_Page.exceptions_Category_Click();
		browser.sleep(1000);
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);

		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(2000);
		
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);	
	});	
	

	it('Add something to the url filter exceptions url list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box', function () {
		
		console.log('\nAdd something to the url filter exceptions url list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box');

		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);	


		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		security_Controls_Page.exceptions_Url_Add_Button_Click();
		browser.sleep(1000);
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(1000);		
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);	
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)		
	});	
	

	it('Add an item to the user list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box', function () {
		
		console.log('\nAdd an item to the user list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box');

		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);	

		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Users('User');
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(2000);
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);	
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);

		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)			
	});	
	
	it('Add an item to the user groups list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box', function () {
		
		console.log('\nAdd an item to the user groups list, check for disabled apply button, cancel outside of the exceptions tab, check for dialogue box');

		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);	

		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Groups('Group');
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Groups_Add_Button_Click();
		browser.sleep(1000);
		
		console.log('Apply button should be disabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual('true');
		browser.sleep(2000);
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);	
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)			
	});		
	
	it('logout', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});			
       
});