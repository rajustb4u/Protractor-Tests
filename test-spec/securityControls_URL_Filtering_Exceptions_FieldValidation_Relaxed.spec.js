describe('Acumen SECURITY CONTROLS URL Filtering Validation - Relaxed: ', function() {
//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	browser.sleep(1000);
			
	it('Navigate to Relaxed url filters', function () {

		common_Component.appLogin();
		browser.sleep(1000);			
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);		
		security_Controls_Page.urlFiltering_Relaxed_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
	});	
				
	it('Navigate to url filter exceptions', function () {
		console.log("\nNavigating to url filter exceptions");	
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);

	});

	it('Validating Relaxed url filter exceptions category field', function () {
		
		security_Controls_Page.add_Exception_Button_Click();			
		browser.sleep(1000);
		security_Controls_Page.exceptions_Category_Click();
		browser.sleep(1000);
		
		console.log("\nValidating exception category items");	
		
		var element_Items = element.all(by.css('div[id="categories-multiselect"]')).getText();			
		browser.sleep(1000);
		
		element_Items.then(function(textArr){
			var list_items = textArr.toString().split("\n");
			
			for (i = 0; i < list_items.length; i++){
				console.log('item '+(i+1)+' in drop down list is '+list_items[i]);
			};
			
			var start_offset = 3;
			var end_offset = 0;
			var selected_elements = [];
			
			for (i = start_offset; i < list_items.length - end_offset; i++){
				selected_elements.push(list_items[i]);
			};	

			console.log("\nValidating category list");
							
			var b_stuff = data.exceptions['categories'].split("\n");
			expect(selected_elements).toEqual(b_stuff);	
			});			

			element.all(by.css('div[id="categories-multiselect"]')).click();
	});
		
	it('\nValidating default Relaxed exceptions urls text field ', function () {
		
		console.log("Validating default Relaxed exceptions urls text field");
		//validation of URLs field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.exceptionsUrl_placeholderAttr()).toEqual(data.exceptions.urls_PlaceHolder_Attribute);
		console.log('URLs Placeholder verification done: ' + data.exceptions.urls_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.exceptionsUrl_fieldLabelAttr()).toEqual(data.exceptions.urls_fieldLabel_Attribute);
		console.log('URLs Field label verification done: ' + data.exceptions.urls_fieldLabel_Attribute);
		
		expect(security_Controls_Page.exceptionsUrl_minlengthAttr()).toEqual(data.exceptions.urls_minLength_Attribute);
		console.log('URLs Min Length verification done: ' + data.exceptions.urls_minLength_Attribute);
		
		expect(security_Controls_Page.exceptionsUrl_maxlengthAttr()).toEqual(data.exceptions.urls_maxLength_Attribute);
		console.log('URLs Max Length verification done: ' + data.exceptions.urls_maxLength_Attribute);

	});	
		
	it('Validating default Relaxed exceptions users text field ', function () {
		
		console.log("\nValidating default Relaxed exceptions users text field");
		//validation of users field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.exceptionsUsers_placeholderAttr()).toEqual(data.exceptions.users_PlaceHolder_Attribute);
		console.log('USERS Placeholder verification done: ' + data.exceptions.users_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.exceptionsUsers_fieldLabelAttr()).toEqual(data.exceptions.users_fieldLabel_Attribute);
		console.log('USERS Field label verification done: ' + data.exceptions.users_fieldLabel_Attribute);
		
		expect(security_Controls_Page.exceptionsUsers_minlengthAttr()).toEqual(data.exceptions.users_minLength_Attribute);
		console.log('USERS Min Length verification done: ' + data.exceptions.users_minLength_Attribute);
		
		expect(security_Controls_Page.exceptionsUsers_maxlengthAttr()).toEqual(data.exceptions.users_maxLength_Attribute);
		console.log('USERS Max Length verification done: ' + data.exceptions.users_maxLength_Attribute);

	});			

		it('Validating default Relaxed exceptions user groups text field ', function () {
		
		console.log("\nValidating default Relaxed exceptions user groups text field");
		//validation of user groups field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.exceptionsGroups_placeholderAttr()).toEqual(data.exceptions.user_groups_PlaceHolder_Attribute);
		console.log('USER GROUPS Placeholder verification done: ' + data.exceptions.user_groups_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.exceptionsGroups_fieldLabelAttr()).toEqual(data.exceptions.user_groups_fieldLabel_Attribute);
		console.log('USER GROUPS Field label verification done: ' + data.exceptions.user_groups_fieldLabel_Attribute);
		
		expect(security_Controls_Page.exceptionsGroups_minlengthAttr()).toEqual(data.exceptions.user_groups_minLength_Attribute);
		console.log('USER GROUPS Min Length verification done: ' + data.exceptions.user_groups_minLength_Attribute);
		
		expect(security_Controls_Page.exceptionsGroups_maxlengthAttr()).toEqual(data.exceptions.user_groups_maxLength_Attribute);
		console.log('USER GROUPS Max Length verification done: ' + data.exceptions.user_groups_maxLength_Attribute);

	});		
			
	
	it('Validating default url filter exceptions urls error message', function () {
		
		//Validating default url filter exceptions urls error message
		console.log("\nValidating default url filter exceptions urls error message");

		security_Controls_Page.exceptions_Url(data.exceptions.urls_Validation);
		browser.sleep(1000);		
		
		common_Component.getElementErrorByName("url0").then(function(message){
			console.log('URLs error message: ' + message);
		});
		
		//validation of URLs input error message"
		expect(common_Component.getElementErrorByName("url0")).toEqual(data.exceptions.urls_errorMsg);
		security_Controls_Page.exceptions_Url_Clear();

	});
	
	it('Validating default url filter exceptions users error message', function () {
		
		//Validating default url filter exceptions users error message
		console.log("\nValidating default url filter exceptions users error message");

		security_Controls_Page.exceptions_Users(data.exceptions.users_Validation);
		browser.sleep(1000);		
		
		common_Component.getElementErrorByName("exception_users0").then(function(message){
			console.log('USERS error message: ' + message);
		});
		
		//validation of USERS input error message"
		expect(common_Component.getElementErrorByName("exception_users0")).toEqual(data.exceptions.users_errorMsg);
		security_Controls_Page.exceptions_Users_Clear();
	});	
	
	
	it('Validating default url filter exceptions user groups error message, then logout', function () {
		
		//Validating default url filter exceptions user groups error message
		console.log("\nValidating default url filter exceptions user groups error message");

		security_Controls_Page.exceptions_Groups(data.exceptions.user_groups_Validation);
		browser.sleep(1000);		
		
		common_Component.getElementErrorByName("exception_groups0").then(function(message){
			console.log('USER GROUPS error message: ' + message);
		});
		
		//validation of USER GROUPS input error message"
		expect(common_Component.getElementErrorByName("exception_groups0")).toEqual(data.exceptions.user_groups_errorMsg);
		security_Controls_Page.exceptions_Groups_Clear();
		browser.sleep(1000);
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)				
	});

	it('logout', function () {	
		
		common_Component.appLogout();
	});			

});