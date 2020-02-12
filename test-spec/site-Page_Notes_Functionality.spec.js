describe('Acumen Site Page Note Functionality Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
	
	var activation_RequestPage = new activation_Request_Page();
	var sitePage = new site_Page();
	var site_Total = '1';

	var siteName_note = 'This name is not proper.';
	var city_note = 'City not found in state.';
	var state_note = 'State not found in zipcode.';
	var zipcode_note = 'Zipcode not found in state.';
	var SecondaryISP_note = 'This name is the same as primary.';
	var InternalIpAddress_note = 'IP address does not fit.';
	var FirstIpRange_note = 'IP Range is incorrect.';
	var FirstDomainName_note = 'Domain Name is not correct.';
	
	var site_alert_number = '7';
	var post_Notes_Site_Message = '7 Errors';
	//var post_Notes_Internet_Facing_Servers_Message = '1 Error';
	

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
	
    it('Editing created site, changing 3 fields', function () {
		console.log('Editing created site fields.');
		browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);		
		sitePage.clickEditButton();
        browser.sleep(4000);	
		
        sitePage.city_Clear();
        browser.sleep(1000);
        sitePage.state_Clear();
        browser.sleep(1000);
        sitePage.zipcode_Clear();
        browser.sleep(1000);
		
        sitePage.city('Ronkonkoma');
        browser.sleep(1000);
        sitePage.state('TX');
        browser.sleep(1000);	
        sitePage.zipcode('54321');
        browser.sleep(1000);			
				
        sitePage.updateSiteButton();
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

	it('Check for activation request message as support before editing site notes', function(){
		console.log('Check for activation request message as support before editing site notes.');
		browser.sleep(1000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating active activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});				
	});	
	
	it('Navigate to site page to edit site notes ', function () {
		console.log('Preparing to edit site notes .');
		browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);		
		sitePage.clickEditButton();
        browser.sleep(4000);
	});

	it('Creating notes for the site', function () {
		console.log('Creating site field notes.');
			
		common_Component.input_field_note('SITE NAME', siteName_note);	
		common_Component.input_field_note('CITY', city_note);
		common_Component.input_field_note('STATE', state_note);
		common_Component.input_field_note('ZIPCODE', zipcode_note);
		
		var SecondaryISP = element(by.css('input-field-component[fieldlabel="SECONDARY ISP"]'));
		var InternalIpAddress = element(by.css('input-field-component[fieldlabel="INTERNAL IP ADDRESS"]'));
		var FirstIpRange = element.all(by.css('input-field-component[fieldlabel="IP RANGE"]')).first();
		//var FirstDomainName = element.all(by.css('input-field-component[fieldlabel="Domain Name"]')).first();
		
		common_Component.input_field_note_by_InputFieldComponent(SecondaryISP, SecondaryISP_note);
		common_Component.input_field_note_by_InputFieldComponent(InternalIpAddress, siteName_note);	
		common_Component.input_field_note_by_InputFieldComponent(FirstIpRange, InternalIpAddress_note);
		//common_Component.input_field_note_by_InputFieldComponent(FirstDomainName, FirstDomainName_note);	
		
		browser.sleep(1000);
		
		sitePage.updateSiteButton();
        browser.sleep(1000);	
	});		

	it('Checking for sites notification number', function () {
		console.log('Checking for site alert number.');
		browser.sleep(1000);
		var sites_alert_number = element.all(by.css('a[href="#/configuration/sites"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		sites_alert_number.getText().then(function(alertNumber){
			console.log('Site alert number is - '+alertNumber);
			expect(alertNumber).toEqual(site_alert_number);
		});
	});		
		
	it('Navigate to Activation Request page as support, ', function () {
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);		
	});	

	it('Check for Sites error message after creating notes', function () {		
 		activation_RequestPage.activationRequest_Sites_Error_Message().then(function(message){			
			console.log('Sites message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Site_Message);
			if (message.toString() == post_Notes_Site_Message){
				console.log('Expected error message exists.');
				browser.sleep(1000);
			};	
			browser.sleep(1000);
		});		
    });
	
	//it('Check for Internet Facing Servers error message after creating notes', function () {		
 	//	activation_RequestPage.activation_Request_Internet_Facing_Servers_Error_Message().then(function(message){			
	//		console.log('Internet Facing Servers message is - '+message);
	//		browser.sleep(1000);
	//		expect(message.toString()).toEqual(post_Notes_Internet_Facing_Servers_Message);
	//		if (message.toString() == post_Notes_Internet_Facing_Servers_Message){
	//			console.log('Expected error message exists.');
	//			browser.sleep(1000);
	//		};	
	//		browser.sleep(1000);
	//	});		
    //});	
	
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

	it('Log into the portal as user to edit site', function(){
		console.log('Logging in as user to edit site.');
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

	it('Checking for sites notification number as user', function () {
		console.log('Checking for site alert number as user.');
		browser.sleep(1000);
		var sites_alert_number = element.all(by.css('a[href="#/configuration/sites"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		sites_alert_number.getText().then(function(alertNumber){
			console.log('Site alert number is - '+alertNumber);
			expect(alertNumber).toEqual(site_alert_number);
		});
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
	
	it('Check for Sites error message as user after creating notes', function () {		
 		activation_RequestPage.activationRequest_Sites_Error_Message().then(function(message){			
			console.log('Sites message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Site_Message);
			if (message.toString() == post_Notes_Site_Message){
				console.log('Expected error message exists.');
				browser.sleep(1000);
			};			
			browser.sleep(1000);
		});		
    });	

	//it('Check for Internet Facing Servers error message as user after creating notes', function () {		
 	//	activation_RequestPage.activation_Request_Internet_Facing_Servers_Error_Message().then(function(message){			
	//		console.log('Internet Facing Servers message is - '+message);
	//		browser.sleep(1000);
	//		expect(message.toString()).toEqual(post_Notes_Internet_Facing_Servers_Message);
	//		if (message.toString() == post_Notes_Internet_Facing_Servers_Message){
	//			console.log('Expected error message exists.');
	//			browser.sleep(1000);
	//		};
	//		browser.sleep(1000);
	//	});		
    //});	

    it('Preparing to edit site as user for site notes', function () {
		console.log('Preparing to edit site as user for site notes.');
		browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);		
		sitePage.clickEditButton();
        browser.sleep(4000);
	});

	it('Validating site note error messages ', function () {
		console.log('Validating site note error messages.');
		browser.sleep(1000);		
		
		common_Component.validateFieldComponentNoteByName('name', siteName_note);
		common_Component.validateFieldComponentNoteByName('city', city_note);
		common_Component.validateFieldComponentNoteByName('state', state_note);
		common_Component.validateFieldComponentNoteByName('zipcode', zipcode_note);	
		
		var SecondaryISP = element(by.css('input-field-component[fieldlabel="SECONDARY ISP"]'));
		var InternalIpAddress = element(by.css('input-field-component[fieldlabel="INTERNAL IP ADDRESS"]'));
		var FirstIpRange = element.all(by.css('input-field-component[fieldlabel="IP RANGE"]')).first();
		//var FirstDomainName = element.all(by.css('input-field-component[fieldlabel="Domain Name"]')).first();

		common_Component.validateFieldComponentNoteByFieldComponent(SecondaryISP, SecondaryISP_note);
		common_Component.validateFieldComponentNoteByFieldComponent(InternalIpAddress, siteName_note);	
		common_Component.validateFieldComponentNoteByFieldComponent(FirstIpRange, InternalIpAddress_note);
		//common_Component.validateFieldComponentNoteByFieldComponent(FirstDomainName, FirstDomainName_note);			
	});		
	
    it('Editing created site, changing fields for notes', function () {
		console.log('Editing created site, changing fields with notes.');		
        sitePage.siteName_Clear();
        browser.sleep(1000);		
        sitePage.city_Clear();
        browser.sleep(1000);
        sitePage.state_Clear();
        browser.sleep(1000);
        sitePage.zipcode_Clear();
        browser.sleep(1000);

		var SecondaryISP = element(by.css('input-field-component[fieldlabel="SECONDARY ISP"]')).element(by.css('input[type="text"]'));
		var InternalIpAddress = element(by.css('input-field-component[fieldlabel="INTERNAL IP ADDRESS"]')).element(by.css('input[type="text"]'));
		var FirstIpRange = element.all(by.css('input-field-component[fieldlabel="IP RANGE"]')).first().element(by.css('input[type="text"]'));
		//var FirstDomainName = element.all(by.css('input-field-component[fieldlabel="Domain Name"]')).first().element(by.css('input[type="text"]'));
				
		SecondaryISP.clear();
		browser.sleep(1000);	
		InternalIpAddress.clear();
		browser.sleep(1000);	
		FirstIpRange.clear();
		browser.sleep(1000);	
		//FirstDomainName.clear();
		browser.sleep(1000);	

        sitePage.siteName('VA Datacenter');
        browser.sleep(1000);		
        sitePage.city('Reston');
        browser.sleep(1000);
        sitePage.state('VA');
        browser.sleep(1000);	
        sitePage.zipcode('20190');
        browser.sleep(1000);

		SecondaryISP.sendKeys('Not so picky ISP');
		browser.sleep(1000);	
		InternalIpAddress.sendKeys('10.10.10.11');
		browser.sleep(1000);	
		FirstIpRange.sendKeys('10.10.10.11/19');
		browser.sleep(1000);	
		//FirstDomainName.sendKeys('www.someplace.com');
		browser.sleep(1000);	
		
        sitePage.updateSiteButton();
        browser.sleep(1000);		
    });
	
	it('Checking for sites notification number as user - should not exist', function () {
		console.log('Checking for site alert number as user - should not exist.');
		browser.sleep(1000);
		var sites_alert_number = element.all(by.css('a[href="#/configuration/sites"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(sites_alert_number.isPresent()).toBe(false);
		browser.sleep(1000);
	});	

	it('Navigate to Activation Request page and confirm activation for edited site as user', function () {
		console.log('Navigate to Activation Request page');
		browser.sleep(1000);
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
		browser.sleep(2000);
		
		console.log('Confirm Activation for edited site as user');
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


	it('logout after edited site activation', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});	

//*********
	
	it('Log into the portal as support, to activate edited site', function(){
		console.log("Log into the portal as support, to activate edited site.");
		browser.sleep(1000);		
        common_Component.support_admin_login();
        browser.sleep(1000);				
	});	


	it('Check for activation request message as support before activating site', function(){	
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

	it('Checking for sites notification number as user - should not exist post approval', function () {
		console.log('Checking for site alert number as user - should not exist post approval.');
		browser.sleep(1000);
		var sites_alert_number = element.all(by.css('a[href="#/configuration/sites"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(sites_alert_number.isPresent()).toBe(false);
		browser.sleep(1000);
	});	

	it('Delete all sites created:', function () {

		sitePage.site_Link();
		browser.sleep(1000);

		for (i=0; i<site_Total; i++) {
			sitePage.clickDetailViewButton();
			browser.sleep(2000);
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