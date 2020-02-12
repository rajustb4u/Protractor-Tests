describe('Acumen Directory Services Note Functionality Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
	
	var activation_RequestPage = new activation_Request_Page();
	var sitePage = new site_Page();
	var directoryService_Page = new directory_ServicePage();

	var site_Total = '1';

	var directory_name_note = 'Choose a different directory.';
	var directory_base_dn_note = 'Use a different DN.';
	var directory_bind_dn_note = 'Bind somewhere else.';
	var directory_username_note = 'Choose a different user name.';
	var directory_password_note = 'Choose a longer password.';
	var directory_server_note = 'Choose a different server.';
	var directory_port_note = 'Choose a different port.';
	
	var directoryservices_alert_number = '6';
	
	var post_Notes_Directory_Services_Message = '6 Errors';

	it('Log into the portal', function(){
		
        common_Component.appLogin();
        browser.sleep(1000);				
	});

	it('Navigate to Activation Request page', function () {

		console.log('Validating Activation Request Link');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual('Your Configuration\nThe final step: Send your configuration to OPĀQ for activation.');// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
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


	it('Creating directory services', function () {

		console.log('Creating directory services');
		browser.sleep(1000);
		
		common_Component.directoryServices_Create();		
	});
	
	it('Navigate to Activation Request page and confirm activation ', function () {
		console.log('Navigate to Activation Request page for the third time');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual('Your Configuration\nThe final step: Send your configuration to OPĀQ for activation.');// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
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
	
	it('Check for activation request message as support before editing directory services notes', function(){
		console.log('Check for activation request message as support before editing directory services notes.');
		browser.sleep(1000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating active activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});				
	});	

	
	it('Navigate to directory services page to edit notes ', function () {
		console.log('Navigate to directory services page to edit notes.');
		browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);

	});


	it('Creating notes for directory services', function () {
		console.log('Creating notes for directory services.');
		
		element(by.id('service_detailOpen_0')).click();
		browser.sleep(1000);
		element(by.id('service_edit_0')).click();
		browser.sleep(1000);
		
		var directory_name = element(by.css('input-field-component[fieldlabel="NAME"]'));
		var directory_base_dn = element(by.css('input-field-component[fieldlabel="BASE DN"]'));
		var directory_bind_dn = element(by.css('input-field-component[fieldlabel="BIND DN"]'));
		var directory_username = element(by.css('input-field-component[fieldlabel="USERNAME"]'));
		var directory_password = element(by.css('input-field-component[fieldlabel="PASSWORD"]'));
		var directory_server = element(by.css('input-field-component[fieldlabel="SERVER"]'));
		var directory_port = element(by.css('input-field-component[fieldlabel="PORT"]'));		
		
		common_Component.input_field_note_by_InputFieldComponent(directory_name, directory_name_note);
		common_Component.input_field_note_by_InputFieldComponent(directory_base_dn, directory_base_dn_note);	
		common_Component.input_field_note_by_InputFieldComponent(directory_bind_dn, directory_bind_dn_note);
		common_Component.input_field_note_by_InputFieldComponent(directory_username, directory_username_note);	
		//common_Component.input_field_note_by_InputFieldComponent(directory_password, directory_password_note);	
		common_Component.input_field_note_by_InputFieldComponent(directory_server, directory_server_note);	
		common_Component.input_field_note_by_InputFieldComponent(directory_port, directory_port_note);	
		
		directoryService_Page.updateDirecotryServicesButton();
		browser.sleep(1000);	
	});	


	it('Checking for directory services section notification number', function () {
		console.log('Checking for directory services section alert number.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/dirservices"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		hostgroupsNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(directoryservices_alert_number);
		});
	});		

	
	it('Navigate to Activation Request page as support, ', function () {
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);		
	});	

	
	it('Check for directory services error message after creating notes', function () {	
		console.log('Check for directory services error message after creating notes.');
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Directory_Services_Error_Message().then(function(message){			
			console.log('Directory Services message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Directory_Services_Message);
			if (message.toString() == post_Notes_Directory_Services_Message){
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

	it('Log into the portal as user to edit directory services', function(){
		console.log('Logging in as user to edit directory services.');
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
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual('Your Configuration\nThe final step: Send your configuration to OPĀQ for activation.');// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
		browser.sleep(1000)
		//
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual('true');
		if (activation_RequestPage.confirm_activation_button_state() == 'true'){
			console.log('Confirm Activation button is in a disabled state');			
		};
		browser.sleep(2000);
	});		
	
	it('Check for directory services error message as user after creating notes', function () {	
		console.log('Check for directory services error message as user after creating notes.')
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Directory_Services_Error_Message().then(function(message){			
			console.log('Directory services message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Directory_Services_Message);
			if (message.toString() == post_Notes_Directory_Services_Message){
				console.log('Expected error message exists.');
				browser.sleep(1000);
			};	
			browser.sleep(1000);
		});			
    });	
	
	it('Navigate to directory services page', function () {
		console.log('Navigate to directory services page.');
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
	});	

	it('Checking for directory services section notification number as user', function () {
		console.log('Checking for directory services section alert number as user.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/dirservices"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		hostgroupsNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(directoryservices_alert_number);
		});
	});
	

	it('Validating directory services note error messages ', function () {
		console.log('Validating directory services note error messages.');
		browser.sleep(1000);		
		
		element(by.id('service_detailOpen_0')).click();
		browser.sleep(1000);
		element(by.id('service_edit_0')).click();
		browser.sleep(1000);
		
		var directory_name = element(by.css('input-field-component[fieldlabel="NAME"]'));
		var directory_base_dn = element(by.css('input-field-component[fieldlabel="BASE DN"]'));
		var directory_bind_dn = element(by.css('input-field-component[fieldlabel="BIND DN"]'));
		var directory_username = element(by.css('input-field-component[fieldlabel="USERNAME"]'));
		var directory_password = element(by.css('input-field-component[fieldlabel="PASSWORD"]'));
		var directory_server = element(by.css('input-field-component[fieldlabel="SERVER"]'));
		var directory_port = element(by.css('input-field-component[fieldlabel="PORT"]'));
	
		common_Component.validateFieldComponentNoteByFieldComponent(directory_name, directory_name_note);
		common_Component.validateFieldComponentNoteByFieldComponent(directory_base_dn, directory_base_dn_note);	
		common_Component.validateFieldComponentNoteByFieldComponent(directory_bind_dn, directory_bind_dn_note);
		common_Component.validateFieldComponentNoteByFieldComponent(directory_username, directory_username_note);	
		//common_Component.validateFieldComponentNoteByFieldComponent(directory_password, directory_password_note);
		common_Component.validateFieldComponentNoteByFieldComponent(directory_server, directory_server_note);	
		common_Component.validateFieldComponentNoteByFieldComponent(directory_port, directory_port_note);
	});		
	
	
    it('Editing idirectory services, changing fields for notes', function () {
		console.log('Editing directory services, changing fields for notes.');		
	
		var directory_name = element(by.css('input-field-component[fieldlabel="NAME"]')).element(by.css('input[type="text"]'));
		var directory_base_dn = element(by.css('input-field-component[fieldlabel="BASE DN"]')).element(by.css('input[type="text"]'));
		var directory_bind_dn = element(by.css('input-field-component[fieldlabel="BIND DN"]')).element(by.css('input[type="text"]'));
		var directory_username = element(by.css('input-field-component[fieldlabel="USERNAME"]')).element(by.css('input[type="text"]'));
		var directory_password = element(by.css('input-field-component[fieldlabel="PASSWORD"]')).element(by.css('input[type="password"]'));
		var directory_server = element(by.css('input-field-component[fieldlabel="SERVER"]')).element(by.css('input[type="text"]'));
		var directory_port = element(by.css('input-field-component[fieldlabel="PORT"]')).element(by.css('input[type="text"]'));
				
		directory_name.clear();
		browser.sleep(1000);	
		directory_base_dn.clear();
		browser.sleep(1000);	
		directory_bind_dn.clear();
		browser.sleep(1000);
		directory_username.clear();
		browser.sleep(1000);		
		//directory_password.clear();
		//browser.sleep(1000);		
		directory_server.clear();
		browser.sleep(1000);
		directory_port.clear();
		browser.sleep(1000);		

		directory_name.sendKeys('other LDAP');
		browser.sleep(1000);	
		directory_base_dn.sendKeys('DC = OPAQ2');
		browser.sleep(1000);	
		directory_bind_dn.sendKeys('CN=Users,DC=Opaq2');
		browser.sleep(1000);
		directory_username.sendKeys('RandomGuy');
		browser.sleep(1000);		
		//directory_password.sendKeys('junkletters');
		//browser.sleep(1000);		
		directory_server.sendKeys('11.12.13.14');
		browser.sleep(1000);
		directory_port.sendKeys('123');
		browser.sleep(1000);
		
		directoryService_Page.updateDirecotryServicesButton();
        browser.sleep(1000);	
    });


	it('Checking for directory services section notification number as user - should not exist', function () {
		console.log('Checking for directory services section notification number as user - should not exist.');
		browser.sleep(1000);
		var alertNumber = element.all(by.css('a[href="#/configuration/dirservices"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(alertNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	


	it('Navigate to Activation Request page and confirm activation for edited configuration as user', function () {
		console.log('Navigate to Activation Request page');
		browser.sleep(1000);
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual('Your Configuration\nThe final step: Send your configuration to OPĀQ for activation.');// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
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

	it('logout after edited directory services activation', function () {
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
	
	it('Checking for directory services section notification number as user - should not exist post approval', function () {
		console.log('Checking for directory services section notification number as user - should not exist post approval.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/dirservices"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(hostgroupsNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	
	
	it('Delete Directory Services', function () {	
	
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
		
		element(by.id('service_detailOpen_0')).click();
		browser.sleep(1000);
		element(by.id('service_delete_0')).click();
		browser.sleep(1000);
		element(by.buttonText('Yes')).click();
		browser.sleep(1000);			
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