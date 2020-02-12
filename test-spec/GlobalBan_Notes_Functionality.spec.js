describe('Acumen Global Ban Notes Functionality Tests', function () {
    //var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
	var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	
	var securityControls_Page = require('../page-factory/securityControlsPage.js');	
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
	
	var activation_RequestPage = new activation_Request_Page();
	var security_Controls_Page = new securityControls_Page();
	var HostGroupsPage = new HostGroups_Page();	
	var sitePage = new site_Page();

	var site_Total = '1';
	var hostgroups_total_count = 12;
	
	var globalBan_application_note = 'Choose a different application.';
	var globalBan_ports_note = 'Choose a different port.';
	var globalBan_users_note = 'Choose a differrent user.';
	var globalBan_user_groups_note = 'Choose a different user group.';
	
	var security_controls_alert_number = '4';	
	var post_Notes_Security_Controls_Message = '4 Errors';
	
	it('Log into the portal', function(){
		
        common_Component.appLogin();
        browser.sleep(1000);				
	});

	it('Navigate to Activation Request page', function () {

		console.log('Validating Activation Request Link');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
		browser.sleep(1000)

		expect(activation_RequestPage.confirm_activation_button_state()).toEqual('true');
		if (activation_RequestPage.confirm_activation_button_state() == 'true'){
			console.log('Confirm Activation button is in a disabled state');			
		};
		browser.sleep(2000);
	});	
	
    it('Check for no existing Sites error message, create a site', function () {		
 		activation_RequestPage.activationRequest_Sites_Error_Message().then(function(message){			
			console.log('Sites message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(data.activation_request.no_Site_Message);
			if (message.toString() == data.activation_request.no_Site_Message){
				console.log('Expected Sites message is present.');
				browser.sleep(1000);
			};
			common_Component.siteAllFields();
			browser.sleep(1000);
		});		
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
	});

	it('Creating global ban exception 1', function () {
		console.log('Creating global ban exception 1.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Add_Exception();
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[0]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[0])).click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[0]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[0]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[0]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_UDP();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);			
	});	
	
	it('Saving exceptions', function () {
		console.log('Saving exceptions.');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
	});			
	
	it('Navigate to Activation Request page and confirm activation ', function () {
		console.log('Navigate to Activation Request page for the third time');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
		browser.sleep(2000);
		
		console.log('Confirm Activation');
		
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual(null);
		if (activation_RequestPage.confirm_activation_button_state() == null){
			console.log('Confirm Activation button is in an enabled state');			
		};	
		
		activation_RequestPage.confirm_activation_button();
		browser.sleep(2000);	
		element.all(by.buttonText('Send Activation')).click();
		browser.sleep(1000);
		element.all(by.buttonText('OK')).click();
		browser.sleep(1000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating active activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});
					
	});	

	it('logout', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});

//****************

	it('Log into the portal as support', function(){
		
        common_Component.support_admin_login();
        browser.sleep(1000);				
	});
	
	it('Check for activation request message as support before editing administrators notes', function(){
		console.log('Check for activation request message as support before editing administrators notes.');
		browser.sleep(1000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating active activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});				
	});	
	
	it('Navigate to security controls Global Ban exceptions to edit notes',function(){
		console.log('Navigate to security controls Global Ban exceptions to edit notes.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);

		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);

	});

	it('Creating notes for Global Ban exception', function () {		
		console.log('Creating notes for GlobalBan exception.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_List_Edit_Buttonv2_Click();
		browser.sleep(1000);					
		
		common_Component.input_field_note_by_InputFieldComponent(security_Controls_Page.get_globalBanApplications_InputFieldv2(), globalBan_application_note);
		common_Component.input_field_note_by_InputFieldComponent(security_Controls_Page.get_globalBanExceptionsPort_InputFieldv2(), globalBan_ports_note);	
		common_Component.input_field_note_by_InputFieldComponent(security_Controls_Page.get_globalBan_Exceptions_Users_InputFieldv2(), globalBan_users_note);
		common_Component.input_field_note_by_InputFieldComponent(security_Controls_Page.get_globalBan_Exceptions_User_Groups_InputFieldv2(), globalBan_user_groups_note);	
	
		
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);	
	});	
	
	it('Saving global ban exceptions notes', function () {
		console.log('Saving global ban exceptions notes.');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
	});		


	it('Checking for security controls section notification number', function () {
		console.log('Checking for security controls section alert number.');
		browser.sleep(1000);
		var alert_Number = element.all(by.css('a[href="#/configuration/security"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		alert_Number.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(security_controls_alert_number);
		});
	});		

	it('Checking for global ban section notification number', function () {
		console.log('Checking for global ban section alert number.');
		browser.sleep(1000);
		var alert_Number = element.all(by.css('a[href="#/configuration/security"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		alert_Number.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(security_controls_alert_number);
		});
	});		

	
	it('Navigate to Activation Request page as support, ', function () {
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);		
	});	
	
	it('Check for security controls error message after creating notes', function () {	
		console.log('Check for security controls error message after creating notes.');
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Security_Controls_Error_Message().then(function(message){			
			console.log('security controls message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Security_Controls_Message);
			if (message.toString() == post_Notes_Security_Controls_Message){
				console.log('Expected error message exists.');
				browser.sleep(1000);
			};	
			browser.sleep(1000);
		});		
    });
	
	it('Submit activation review', function () {

		console.log('Submitting review.');
		browser.sleep(1000);
		
		expect(activation_RequestPage.activation_reviewed_button_state()).toEqual(null);
		if (activation_RequestPage.activation_reviewed_button_state() == null){
			console.log('Reviewed button is in an enabled state');
			browser.sleep(1000);			
		};	
		
		expect(activation_RequestPage.activation_activate_button_state()).toEqual('true');
		if (activation_RequestPage.activation_activate_button_state() == 'true'){
			console.log('Activate button is in a disabled state');
			browser.sleep(1000);
		};	
		
		activation_RequestPage.activation_reviewed_button();
		browser.sleep(2000);
		element.all(by.buttonText('OK')).click();
		browser.sleep(2000);		
	});

	it('Check to see if activation request message has changed to an altered message as support after review is submitted', function(){
		console.log("Checking to see if the activation request message has changed to an altered message as support after review is submitted.");
		browser.sleep(1000);
        expect(element(by.css('span[class="message ng-binding"]')).getText()).toEqual(data.activation_request.activationRequest_Altered_Message_Text);
        browser.sleep(1000);				
	});		
	
	it('logout as support', function () {
		common_Component.appLogout();
		browser.sleep(2000);	
	});	

//*******

	it('Log into the portal as user to edit global ban exceptions', function(){
		console.log('Logging in as user to edit global ban exceptions.');
		browser.sleep(1000);		
        common_Component.appLogin();
        browser.sleep(1000);				
	});	


	it('Check to see if the altered activation request message is displayed', function(){
		console.log("Checking to see if the altered activation request message is displayed.");
		browser.sleep(1000);
        expect(element(by.css('span[class="message ng-binding"]')).getText()).toEqual(data.activation_request.activationRequest_Altered_Message_Text);
        browser.sleep(1000);				
	});			

	it('Navigate to Activation Request page as user post review', function () {

		console.log('Validating Activation Request Link');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
		browser.sleep(1000)
		//
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual('true');
		if (activation_RequestPage.confirm_activation_button_state() == 'true'){
			console.log('Confirm Activation button is in a disabled state');			
		};
		browser.sleep(2000);
	});		
	
	it('Check for security controls error message as user after creating notes', function () {	
		console.log('Check for security controls error message as user after creating notes.')
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Security_Controls_Error_Message().then(function(message){			
			console.log('security controls message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Security_Controls_Message);
			if (message.toString() == post_Notes_Security_Controls_Message){
				console.log('Expected error message exists.');
				browser.sleep(1000);
			};	
			browser.sleep(1000);
		});			
    });	

	it('Navigate to security controls page to check for notification number as user', function () {
		console.log('Navigate to security controls page to check for notification number as user.');
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);
	});		
	
	it('Navigate to security controls Global Ban exceptions as user to edit note fields',function(){
		console.log('Navigate to security controls Global Ban exceptions to edit note fields.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);

		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);				
	});
	
	it('Checking for security controls section notification number as user', function () {
		console.log('Checking for security controls section alert number as user.');
		browser.sleep(1000);
		var alert_Number = element.all(by.css('a[href="#/configuration/security"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		alert_Number.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(security_controls_alert_number);
		});
	});	

	it('Validating security controls note error messages ', function () {
		console.log('Validating security controls note error messages.');
		browser.sleep(1000);		

		security_Controls_Page.globalBan_Exceptions_List_Edit_Buttonv2_Click();
		browser.sleep(1000);	
		
		common_Component.validateFieldComponentNoteByFieldComponent(security_Controls_Page.get_globalBanApplications_InputFieldv2(), globalBan_application_note);
		common_Component.validateFieldComponentNoteByFieldComponent(security_Controls_Page.get_globalBanExceptionsPort_InputFieldv2(), globalBan_ports_note);	
		common_Component.validateFieldComponentNoteByFieldComponent(security_Controls_Page.get_globalBan_Exceptions_Users_InputFieldv2(), globalBan_users_note);
		common_Component.validateFieldComponentNoteByFieldComponent(security_Controls_Page.get_globalBan_Exceptions_User_Groups_InputFieldv2(), globalBan_user_groups_note);			
	});		
		
    it('Editing global ban exception, changing fields for notes', function () {
		console.log('Editing global ban exception, changing fields for notes.');		

		security_Controls_Page.globalBanApplicationsv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Clear();
		
		console.log('Creating new global ban exception .');
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[2]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[2])).click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[2]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[2]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[2]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_2_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_2_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);			
    });
	
	it('Saving global ban exceptions edit', function () {
		console.log('Saving global ban exceptions edit.');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
	});

	it('Checking for security controls section notification number as user - should not exist', function () {
		console.log('Checking for security controls section notification number as user - should not exist.');
		browser.sleep(1000);
		var alertNumber = element.all(by.css('a[href="#/configuration/security"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(alertNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	

	it('Navigate to Activation Request page and confirm activation for edited configuration as user', function () {
		console.log('Navigate to Activation Request page');
		browser.sleep(1000);
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
		browser.sleep(2000);
		
		console.log('Confirm Activation for edited configuration as user');
		browser.sleep(1000);
		
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual(null);
		if (activation_RequestPage.confirm_activation_button_state() == null){
			console.log('Confirm Activation button is in an enabled state');
			browser.sleep(1000);			
		};	
		
		activation_RequestPage.confirm_activation_button();
		browser.sleep(2000);	
		element.all(by.buttonText('Send Activation')).click();
		browser.sleep(2000);
		element.all(by.buttonText('OK')).click();
		browser.sleep(2000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating successful activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});				
	});

	it('logout after edited administrators activation', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});	

//*********
	
	it('Log into the portal as support, to activate edited configuration', function(){
		console.log("Log into the portal as support, to activate edited configuration.");
		browser.sleep(1000);		
        common_Component.support_admin_login();
        browser.sleep(1000);				
	});	

	it('Check for activation request message as support before activating configuration', function(){	
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating active activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});				
	});	
	
	it('Navigate to Activation Request page as support to approve, ', function () {
		console.log('Navigate to Activation Request page as support to submit approval');
		browser.sleep(1000);	
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);	
	});	
	
	it('Activate Activation Request page as support.', function () {
		
		console.log('Submitting Activation.');
		browser.sleep(1000);	
		
		expect(activation_RequestPage.activation_reviewed_button_state()).toEqual('true');
		if (activation_RequestPage.activation_reviewed_button_state() == null){
			console.log('Reviewed button is in a disabled state');			
		};	
		
		expect(activation_RequestPage.activation_activate_button_state()).toEqual(null);
		if (activation_RequestPage.activation_activate_button_state() == 'true'){
			console.log('Activate button is in an enabled state');			
		};	
		
		activation_RequestPage.activation_activate_button();
		browser.sleep(2000);	
		element.all(by.buttonText('OK')).click();
		browser.sleep(2000);					
	});	
	
	it('logout as support', function () {
		common_Component.appLogout();
		browser.sleep(2000);
	});

//***********

	it('Log into the portal for cleanup', function(){
		
		console.log("Log into the portal for cleanup");
		browser.sleep(1000);	
        common_Component.appLogin();
        browser.sleep(1000);				
	});

	it('Check to see if activation request message is no longer present as user post approval', function(){
		console.log("Checking to see if the activation request message is no longer present as user post approval.");
		browser.sleep(1000);
        expect(element(by.css('span[class="message ng-binding"]')).isPresent()).toBe(false);
        browser.sleep(1000);				
	});		
	
	it('Checking for security controls section notification number as user - should not exist post approval', function () {
		console.log('Checking for security controls section notification number as user - should not exist post approval.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/security"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(hostgroupsNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	
	
	it('Deleting global ban exceptions', function () {
		console.log('Deleting global ban exceptions.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);
		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);	
		
		security_Controls_Page.globalBan_Exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);

		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);		
	});		
	
	it('Delete Host Groups', function () {	

		for (i = 0; i < hostgroups_total_count; i++){
			common_Component.removeHostGroup();
		}
			
	});	
	
	it('Delete all sites created:', function () {
		sitePage.site_Link();
		browser.sleep(1000);

		for (i=0; i<site_Total; i++) {
			
			sitePage.clickDetailViewButton();
			browser.sleep(1000);
			sitePage.removeSiteButton();
			browser.sleep(2000);
			sitePage.Final_Delete();
			browser.sleep(2000);
		};
    });
	
	it('logout for the last time', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});	

});