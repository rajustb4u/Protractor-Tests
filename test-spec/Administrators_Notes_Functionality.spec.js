describe('Acumen Administrators Note Functionality Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
	
	var activation_RequestPage = new activation_Request_Page();
	var sitePage = new site_Page();
	var admin_Page = new administrators_Page();

	var site_Total = '1';
	var adminedit_number = '3';

	var administrator_full_name_note = 'Change the name.';
	var administrator_email_note = 'Use a different email.';
	var administrator_primary_phone_note = 'Choose a differrent number.';
	var administrators_cell_phone_note = 'Use a different number.';
	var administrators_passphrase_note = 'Use a longer password.';
	
	var administrators_alert_number = '4';
	var post_Notes_Administrators_Message = '4 Errors';


	it('Log into the portal', function(){
		
        common_Component.appLogin();
        browser.sleep(1000);				
	});

	it('Navigate to Activation Request page', function () {

		console.log('Validating Activation Request Link');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
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


	it('Creating administrator', function () {

		console.log('Creating administrator');
		browser.sleep(1000);
		
        admin_Page.Administrators_Link();
        browser.sleep(1000);		
		admin_Page.adminAddAnother();
		browser.sleep(1000);

		expect(admin_Page.adminPage_Title()).toEqual(data.adminPage_data.adminTitle);
		console.log('validating the Title of Admin Page: ' + data.adminPage_data.adminTitle);

		common_Component.selectItemDropDown('btn-append-to-body', 2);

		//Enter the data into the Administrators
		admin_Page.adminFirstNameEntry('Zebra Boy');
		console.log('added Admin Name: ' + 'Zebra Boy');
		admin_Page.adminEmailEntry(data.adminPage_data.adminEmail);
		console.log('added Admin Email: ' + data.adminPage_data.adminEmail);
		admin_Page.adminPrimaryPhoneEntry(data.adminPage_data.adminPhone);
		console.log('added Admin Phone Number: ' + data.adminPage_data.adminPhone);
		admin_Page.adminCellPhoneEntry(data.adminPage_data.adminCellPhone);
		console.log('added Admin Cell Phone: ' + data.adminPage_data.adminCellPhone);
		admin_Page.admin_PassPhraseEntry(data.adminPage_data.adminPassPhrase);
		console.log('added Admin PassPhrase: ' + data.adminPage_data.adminPassPhrase);
		browser.sleep(2000);
		// Add the admin
		admin_Page.adminAdd_Button();
		browser.sleep(1000);
		element(by.buttonText('Yes')).click();
		browser.sleep(1000);
		element(by.buttonText('OK')).click();
		browser.sleep(1000);		
	});
	
	it('Navigate to Activation Request page and confirm activation ', function () {
		console.log('Navigate to Activation Request page for the third time');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
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

	
	it('Navigate to administrators page to edit notes ', function () {
		console.log('Navigate to administrators page to edit notes.');
		browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);	
	});


	it('Creating notes for administrators', function () {
		console.log('Creating notes for administrators.');
		
		element(by.id('admin_detailOpen_'+adminedit_number)).click();
		browser.sleep(1000);
		element(by.id('admin_edit_'+adminedit_number)).click();
		browser.sleep(1000);
		
		var administrator_full_name = element(by.css('input-field-component[fieldlabel="Full Name"]'));
		var administrator_email = element(by.css('input-field-component[fieldlabel="Email Address"]'));
		var administrator_primary_phone = element(by.css('input-field-component[fieldlabel="Primary Phone"]'));
		var administrators_cell_phone = element(by.css('input-field-component[fieldlabel="Cell Phone"]'));
		var administrators_passphrase = element(by.css('input-field-component[fieldlabel="Passphrase"]'));		
		
		common_Component.input_field_note_by_InputFieldComponent(administrator_full_name, administrator_full_name_note);
		common_Component.input_field_note_by_InputFieldComponent(administrator_email, administrator_email_note);	
		common_Component.input_field_note_by_InputFieldComponent(administrator_primary_phone, administrator_primary_phone_note);
		common_Component.input_field_note_by_InputFieldComponent(administrators_cell_phone, administrators_cell_phone_note);	
		//common_Component.input_field_note_by_InputFieldComponent(administrators_passphrase, administrators_passphrase_note);		
		
		admin_Page.admin_UpdateButton();
		browser.sleep(1000);	
	});	


	it('Checking for administrators section notification number', function () {
		console.log('Checking for administrators section alert number.');
		browser.sleep(1000);
		var alert_Number = element.all(by.css('a[href="#/configuration/administrators"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		alert_Number.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(administrators_alert_number);
		});
	});		

	
	it('Navigate to Activation Request page as support, ', function () {
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);		
	});	

	
	it('Check for administrators error message after creating notes', function () {	
		console.log('Check for administrators error message after creating notes.');
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Administrators_Error_Message().then(function(message){			
			console.log('administrators message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Administrators_Message);
			if (message.toString() == post_Notes_Administrators_Message){
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

	it('Log into the portal as user to edit administrators', function(){
		console.log('Logging in as user to edit administrators.');
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
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
		browser.sleep(1000)
		//
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual('true');
		if (activation_RequestPage.confirm_activation_button_state() == 'true'){
			console.log('Confirm Activation button is in a disabled state');			
		};
		browser.sleep(2000);
	});		
	
	it('Check for administrators error message as user after creating notes', function () {	
		console.log('Check for administrators error message as user after creating notes.')
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Administrators_Error_Message().then(function(message){			
			console.log('administrators message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Administrators_Message);
			if (message.toString() == post_Notes_Administrators_Message){
				console.log('Expected error message exists.');
				browser.sleep(1000);
			};	
			browser.sleep(1000);
		});			
    });	
	
	it('Navigate to administrators page', function () {
		console.log('Navigate to administrators page.');
        admin_Page.Administrators_Link();
        browser.sleep(1000);
	});	

	it('Checking for administrators section notification number as user', function () {
		console.log('Checking for administrators section alert number as user.');
		browser.sleep(1000);
		var alert_Number = element.all(by.css('a[href="#/configuration/administrators"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		alert_Number.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(administrators_alert_number);
		});
	});
	

	it('Validating administrators note error messages ', function () {
		console.log('Validating administrators note error messages.');
		browser.sleep(1000);		
		
		element(by.id('admin_detailOpen_'+adminedit_number)).click();
		browser.sleep(1000);
		element(by.id('admin_edit_'+adminedit_number)).click();
		browser.sleep(1000);
		
		var administrator_full_name = element(by.css('input-field-component[fieldlabel="Full Name"]'));
		var administrator_email = element(by.css('input-field-component[fieldlabel="Email Address"]'));
		var administrator_primary_phone = element(by.css('input-field-component[fieldlabel="Primary Phone"]'));
		var administrators_cell_phone = element(by.css('input-field-component[fieldlabel="Cell Phone"]'));
		var administrators_passphrase = element(by.css('input-field-component[fieldlabel="Passphrase"]'));	
	
		common_Component.validateFieldComponentNoteByFieldComponent(administrator_full_name, administrator_full_name_note);
		common_Component.validateFieldComponentNoteByFieldComponent(administrator_email, administrator_email_note);	
		common_Component.validateFieldComponentNoteByFieldComponent(administrator_primary_phone, administrator_primary_phone_note);
		common_Component.validateFieldComponentNoteByFieldComponent(administrators_cell_phone, administrators_cell_phone_note);	
		//common_Component.validateFieldComponentNoteByFieldComponent(administrators_passphrase, administrators_passphrase_note);
		
	});		
	
	
    it('Editing administrators, changing fields for notes', function () {
		console.log('Editing administrators, changing fields for notes.');		
	
		var administrator_full_name = element(by.css('input-field-component[fieldlabel="Full Name"]')).element(by.css('input[type="text"]'));
		var administrator_email = element(by.css('input-field-component[fieldlabel="Email Address"]')).element(by.css('input[type="text"]'));
		var administrator_primary_phone = element(by.css('input-field-component[fieldlabel="Primary Phone"]')).element(by.css('input[type="tel"]'));
		var administrators_cell_phone = element(by.css('input-field-component[fieldlabel="Cell Phone"]')).element(by.css('input[type="tel"]'));
		var administrators_passphrase = element(by.css('input-field-component[fieldlabel="Passphrase"]')).element(by.css('input[type="password"]'));

		administrator_full_name.clear();
		browser.sleep(1000);	
		administrator_email.clear();
		browser.sleep(1000);	
		administrator_primary_phone.clear();
		browser.sleep(1000);
		administrators_cell_phone.clear();
		browser.sleep(1000);		
		//administrators_passphrase.clear();
		//browser.sleep(1000);		
		

		administrator_full_name.sendKeys('Zebra Guy');
		browser.sleep(1000);	
		administrator_email.sendKeys('thatguy@there.com');
		browser.sleep(1000);	
		administrator_primary_phone.sendKeys('555-867-5309');
		browser.sleep(1000);
		administrators_cell_phone.sendKeys('555-867-5309');
		browser.sleep(1000);		
		//administrators_passphrase.sendKeys('junkletters');
		//browser.sleep(1000);		
		
		admin_Page.admin_UpdateButton();
        browser.sleep(1000);	
    });


	it('Checking for administrators section notification number as user - should not exist', function () {
		console.log('Checking for administrators section notification number as user - should not exist.');
		browser.sleep(1000);
		var alertNumber = element.all(by.css('a[href="#/configuration/administrators"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(alertNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	


	it('Navigate to Activation Request page and confirm activation for edited configuration as user', function () {
		console.log('Navigate to Activation Request page');
		browser.sleep(1000);
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
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
	
	it('Checking for administrators section alert number as user - should not exist post approval', function () {
		console.log('Checking for administrators section alert number as user - should not exist post approval.');
		browser.sleep(1000);
		var alert_Number = element.all(by.css('a[href="#/configuration/administrators"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(alert_Number.isPresent()).toBe(false);
		browser.sleep(1000);
	});		
	
	it('Delete administrators', function () {	
	
        admin_Page.Administrators_Link();
        browser.sleep(1000);
		
		element(by.id('admin_detailOpen_'+adminedit_number)).click();
		browser.sleep(1000);
		element(by.id('admin_delete_'+adminedit_number)).click();
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