describe('SECURITY CONTROLS PAGE Global Ban Exceptions - Functionality 1', function() {
	//var logger = require('../scripts/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');
	var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	

	var security_Controls_Page = new securityControls_Page();
	var HostGroupsPage = new HostGroups_Page();
	
	var exception_total_count = 4;
	var hostgroups_total_count = 12;
		
	it('Log into the portal', function(){	
        common_Component.appLogin();
        browser.sleep(1000);
	});
	
	it('Creating Host groups', function () {

		console.log('Creating host groups');
		browser.sleep(1000);
		
		common_Component.addFirstHostGroup(data.host_groups.group_0_name,data.host_groups.group_0_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_1_name,data.host_groups.group_1_range);	
		common_Component.addAnotherHostGroup(data.host_groups.group_2_name,data.host_groups.group_2_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_3_name,data.host_groups.group_3_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_4_name,data.host_groups.group_4_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_5_name,data.host_groups.group_5_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_6_name,data.host_groups.group_6_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_7_name,data.host_groups.group_7_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_8_name,data.host_groups.group_8_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_9_name,data.host_groups.group_9_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_10_name,data.host_groups.group_10_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_11_name,data.host_groups.group_11_range);		
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

	it('Checking state of apply button - blank fields',function(){
		console.log('Checking state of apply button - blank fields.');
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
	});
	
	it('Checking state of apply button - only applications field populated',function(){
		console.log('Checking state of apply button - only applications field populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[0]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[0])).click();
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_Clear();
		browser.sleep(1000);				
	});

	it('Checking state of apply button - only ports fields populated',function(){
		console.log('Checking state of apply button - only ports fields populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[0]);
		browser.sleep(1000);	
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanExceptionsPortv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_Clear();
		browser.sleep(1000);		
	});	

	it('Checking state of apply button - only host groups field populated',function(){
		console.log('Checking state of apply button - only host groups populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);			
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);		
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);		
	});

	it('Checking state of apply button - only users field populated',function(){
		console.log('Checking state of apply button - only users field populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[0]);
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Usersv2_Clear();
		browser.sleep(1000);	
	});	
	
	it('Checking state of apply button - only user groups field populated',function(){
		console.log('Checking state of apply button - only host groups field populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.user_names[0]);
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Clear();
		browser.sleep(1000);	
	});	

	it('Checking state of apply button - applications and ports fields populated',function(){
		console.log('Checking state of apply button - applications and ports fields populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[0]);
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[0]);
		browser.sleep(1000);	
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_Clear();
		browser.sleep(1000);		
	});
	
	it('Checking state of apply button - host groups, users, and user group fields populated',function(){
		console.log('Checking state of apply button - host groups, users, and user group fields populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[0]);
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.user_names[0]);
		browser.sleep(1000);
		
		console.log('The button should be in a disabled state.');
		browser.sleep(1000);
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);		
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Clear();
		browser.sleep(1000);			
	});	


	it('Checking state of apply button - applications, ports, host groups fields populated with error message',function(){
		console.log('Checking state of apply button - applications, ports, host groups fields populated with error message.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[0]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[0])).click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[0]);
		browser.sleep(1000);	
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);

		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.users_Validation);
		browser.sleep(1000);		
		
		console.log('The button should be in a disabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe('true');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);		
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Clear();
		browser.sleep(1000);		
		
	});
	
	it('Checking state of apply button - applications and host groups fields populated',function(){
		console.log('Checking state of apply button - applications and host groups fields populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[0]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[0])).click();
		browser.sleep(1000);	
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		
		console.log('The button should be in an enabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe(null);
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);		
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
	});	
	
	it('Checking state of apply button - ports and host groups fields populated',function(){
		console.log('Checking state of apply button - ports and host groups fields populated.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[0]);
		browser.sleep(1000);	
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);				
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		
		console.log('The button should be in an enabled state.');
		expect(security_Controls_Page.globalBan_Exceptions_Apply_Button_GetState()).toBe(null);
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);		
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_Clear();
		browser.sleep(1000);		
	});		
	
	it('Cancel out of global ban exceptions',function(){
		console.log('Cancel out of global ban exceptions.');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Cancel_Button_Click();
		browser.sleep(1000);
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
	});	
	
	it('Delete Host Groups', function () {	
	
		for (i = 0; i < hostgroups_total_count; i++){
			common_Component.removeHostGroup();
			browser.sleep(2000);
		}
			
	});	
	
	it('logout', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});
	
});