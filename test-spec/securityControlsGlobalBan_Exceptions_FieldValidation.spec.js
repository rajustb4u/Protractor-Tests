describe('SECURITY CONTROLS PAGE Global Ban Exceptions - Field Validation', function() {
	//var logger = require('../scripts/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	
	it('Log into the portal', function(){	
        common_Component.appLogin();
        browser.sleep(1000);				
	});
	
	it('Navigate to security controls Global Ban exceptions',function(){
		console.log('Navigate to security controls Global Ban exceptions.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);

		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Add_Exception();
		browser.sleep(1000);				
	});

	it('Validating applications input text field ', function () {
		
		console.log("\nValidating applications input text field");
		//validation of application field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.globalBanApplications_placeholderAttr()).toEqual(data.globalBan_Exceptions.applications_PlaceHolder_Attribute);
		console.log('Applications Placeholder verification done: ' + data.globalBan_Exceptions.users_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.globalBanApplications_fieldLabelAttr()).toEqual(data.globalBan_Exceptions.applications_fieldLabel_Attribute);
		console.log('Applications Field label verification done: ' + data.globalBan_Exceptions.users_fieldLabel_Attribute);
		
		expect(security_Controls_Page.globalBanApplications_minlengthAttr()).toEqual(data.globalBan_Exceptions.applications_minLength_Attribute);
		console.log('Applications Min Length verification done: ' + data.globalBan_Exceptions.users_minLength_Attribute);
		
		expect(security_Controls_Page.globalBanApplications_maxlengthAttr()).toEqual(data.globalBan_Exceptions.applications_maxLength_Attribute);
		console.log('Applications Max Length verification done: ' + data.globalBan_Exceptions.users_maxLength_Attribute);

	});

	it('Validating ports input text field ', function () {
		
		console.log("\nValidating ports input text field");
		//validation of ports field attributes "placeholder, and field label"
		expect(security_Controls_Page.globalBanExceptionsPort_placeholderAttr()).toEqual(data.globalBan_Exceptions.port_PlaceHolder_Attribute);
		console.log('Port Placeholder verification done: ' + data.globalBan_Exceptions.port_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.globalBanExceptionsPort_fieldLabelAttr()).toEqual(data.globalBan_Exceptions.port_fieldLabel_Attribute);
		console.log('Ports Field label verification done: ' + data.globalBan_Exceptions.port_fieldLabel_Attribute);		
	});

	it('Validating users input text field ', function () {
		
		console.log("\nValidating users text field");
		//validation of users field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.globalBan_Exceptions_Users_placeholderAttr()).toEqual(data.globalBan_Exceptions.users_PlaceHolder_Attribute);
		console.log('Users Placeholder verification done: ' + data.globalBan_Exceptions.users_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.globalBan_Exceptions_Users_fieldLabelAttr()).toEqual(data.globalBan_Exceptions.users_fieldLabel_Attribute);
		console.log('Users Field label verification done: ' + data.globalBan_Exceptions.users_fieldLabel_Attribute);
		
		expect(security_Controls_Page.globalBan_Exceptions_Users_minlengthAttr()).toEqual(data.globalBan_Exceptions.users_minLength_Attribute);
		console.log('Users Min Length verification done: ' + data.globalBan_Exceptions.users_minLength_Attribute);
		
		expect(security_Controls_Page.globalBan_Exceptions_Users_maxlengthAttr()).toEqual(data.globalBan_Exceptions.users_maxLength_Attribute);
		console.log('Users Max Length verification done: ' + data.globalBan_Exceptions.users_maxLength_Attribute);
	});	
	
	it('Validating user groups input text field ', function () {
		
		console.log("\nValidating user groups text field");
		//validation of user groups field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.globalBan_Exceptions_User_Groups_placeholderAttr()).toEqual(data.globalBan_Exceptions.usergroups_PlaceHolder_Attribute);
		console.log('User Groups Placeholder verification done: ' + data.globalBan_Exceptions.usergroups_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.globalBan_Exceptions_User_Groups_fieldLabelAttr()).toEqual(data.globalBan_Exceptions.usergroups_fieldLabel_Attribute);
		console.log('User Groups Field label verification done: ' + data.globalBan_Exceptions.usergroups_fieldLabel_Attribute);
		
		expect(security_Controls_Page.globalBan_Exceptions_User_Groups_minlengthAttr()).toEqual(data.globalBan_Exceptions.usergroups_minLength_Attribute);
		console.log('User Groups Min Length verification done: ' + data.globalBan_Exceptions.usergroups_minLength_Attribute);
		
		expect(security_Controls_Page.globalBan_Exceptions_User_Groups_maxlengthAttr()).toEqual(data.globalBan_Exceptions.usergroups_maxLength_Attribute);
		console.log('User Groups Max Length verification done: ' + data.globalBan_Exceptions.usergroups_maxLength_Attribute);
	});		
	
	it('Cancelling out of global ban window',function(){
		console.log('Cancelling out of global ban window');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Cancel_Button_Click();
		browser.sleep(1000);
	});	

	it('logout', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});	
});