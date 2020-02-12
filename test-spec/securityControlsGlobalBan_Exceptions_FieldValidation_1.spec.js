describe('SECURITY CONTROLS PAGE Global Ban Exceptions - Field Validation 1', function() {
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
	
	it('Validating application error message',function(){
		console.log('Validating application error message');
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.applications_Validation);
		browser.sleep(1000);
		common_Component.getElementErrorByName('gb_applications_0_name').then(function(theError){
			console.log('The error is \n'+theError);
			browser.sleep(1000);
			expect(theError).toEqual(data.globalBan_Exceptions.applications_errorMsg);
			browser.sleep(1000);
		});		
	});

	it('Validating ports error message',function(){
		console.log('Validating ports error message');
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_Validation);
		browser.sleep(1000);
		common_Component.getElementErrorByName('gb_ports_0_port').then(function(theError){
			console.log('The error is \n'+theError);
			browser.sleep(1000);
			expect(theError).toEqual(data.globalBan_Exceptions.port_errorMsg);
			browser.sleep(1000);
		});		
	});

	it('Validating users error message',function(){
		console.log('Validating users error message');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.users_Validation);
		browser.sleep(1000);
		common_Component.getElementErrorByName('global_ban_exception_user0').then(function(theError){
			console.log('The error is \n'+theError);
			browser.sleep(1000);
			expect(theError).toEqual(data.globalBan_Exceptions.users_errorMsg);
			browser.sleep(1000);
		});		
	});	
	
	it('Validating user groups error message',function(){
		console.log('Validating user groups error message');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroups_Validation);
		browser.sleep(1000);
		common_Component.getElementErrorByName('global_ban_exception_group0').then(function(theError){
			console.log('The error is \n'+theError);
			browser.sleep(1000);
			expect(theError).toEqual(data.globalBan_Exceptions.usergroups_errorMsg);
			browser.sleep(1000);
		});		
	});
	
	it('Cancelling out of global ban window',function(){
		console.log('Cancelling out of global ban window');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Cancel_Button_Click();
		browser.sleep(1000);
		element.all(by.buttonText('Yes')).click();
		browser.sleep(2000);			
	});	
	
	it('logout', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});	
});