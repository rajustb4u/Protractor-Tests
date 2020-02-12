describe('Acumen Activation Request Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');	
	
	var activation_RequestPage = new activation_Request_Page();
	var sitePage = new site_Page();
	var site_Total = '1';

	it('Log into the portal', function(){
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);				
	});
	
	it('Navigate to Activation Request page', function () {

		console.log('Validating Activation Request Link');
		browser.sleep(1000);
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
	
    it('Check for no existing Sites error message', function () {		
 		activation_RequestPage.activationRequest_Sites_Error_Message().then(function(message){			
			console.log('Sites message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(data.activation_request.no_Site_Message);
			if (message.toString() == data.activation_request.no_Site_Message){
				console.log('Creating a Site');
				browser.sleep(1000);
				common_Component.siteAllFields();
				browser.sleep(1000);
			}			
			browser.sleep(1000);
		});		
    });	
	

    it('Editing created site, create 3 blank fields', function () {
		console.log('Editing created site, create 3 blank fields.');
		browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);		
		sitePage.clickEditButton();
        browser.sleep(5000);	
		
        sitePage.city_Clear();
        browser.sleep(1000);
        sitePage.state_Clear();
        browser.sleep(1000);
        sitePage.zipcode_Clear();
        browser.sleep(1000);	

        sitePage.updateSiteButton();
        browser.sleep(1000);		
    });
	
	it('Navigate to Activation Request page', function () {
		console.log('Navigate to Activation Request page');
		browser.sleep(1000);
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
		browser.sleep(2000);
	});

    it('Checking for error message for sites', function () {

		console.log('Checking for error message for sites');
 		activation_RequestPage.activationRequest_Sites_Error_Message().then(function(message){			
			console.log('Sites message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual('3 Errors');
			if (message.toString() == '3 Errors'){
				console.log('Expected error message exists');
				browser.sleep(1000);
			}			
			browser.sleep(1000);
		});	

		expect(activation_RequestPage.confirm_activation_button_state()).toEqual('true');
		browser.sleep(1000);
		
		if (activation_RequestPage.confirm_activation_button_state() == 'true'){
			console.log('Confirm Activation button is in a disabled state');
			browser.sleep(1000);
		};
		browser.sleep(1000);
    });

    it('Editing created site, filling in two blank fields', function () {
		console.log('Editing created site, filling in two blank fields, leaving one still blank');
		browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);		
		sitePage.clickEditButton();
        browser.sleep(2000);	
		
        sitePage.city('Ronkonkoma');
        browser.sleep(1000);
        sitePage.state('TX');
        browser.sleep(1000);
	
        sitePage.updateSiteButton();
        browser.sleep(1000);		
    });	
	
	it('Navigate to Activation Request page again, ', function () {
		console.log('Navigate to Activation Request page again');
		browser.sleep(1000);
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
		browser.sleep(2000);
	});

    it('Check for updated error message for sites', function () {

		console.log('Checking for error message for sites');
		browser.sleep(1000);
 		activation_RequestPage.activationRequest_Sites_Error_Message().then(function(message){			
			console.log('Sites message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual('1 Error');
			if (message.toString() == '1 Error'){
				console.log('Expected error message exists');

				browser.sleep(1000);
			}			
			browser.sleep(1000);
		});	
		
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual('true');
		if (activation_RequestPage.confirm_activation_button_state() == 'true'){
			console.log('Confirm Activation button is in a disabled state');			
		};		
		browser.sleep(1000);
    });	
	
    it('Editing created site, filling in the remaining blank field', function () {
		
		console.log('Editing created site, filling in two blank fields, leaving one still blank');
		browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.clickDetailViewButton();
        browser.sleep(1000);		
		sitePage.clickEditButton();
        browser.sleep(2000);	
		
        sitePage.zipcode('54321');
        browser.sleep(1000);
	
        sitePage.updateSiteButton();
        browser.sleep(1000);		
    });		
	
	it('Navigate to Activation Request page for the third time ', function () {
		console.log('Navigate to Activation Request page for the third time');
		browser.sleep(1000);
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
		browser.sleep(2000);
	});	

	it('Confirm Activation', function () {
		console.log('Confirm Activation');
		browser.sleep(1000);
		
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual(null);
		if (activation_RequestPage.confirm_activation_button_state() == null){
			console.log('Confirm Activation button is in an enabled state');
			browser.sleep(1000);
		};	
		
		activation_RequestPage.confirm_activation_button();
		browser.sleep(2000);	
		element.all(by.buttonText('Send Activation')).click();
		browser.sleep(1000);
		element.all(by.buttonText('OK')).click();
		browser.sleep(1000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating successful activation message text.\nExpected message is - '+message_text);
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
	
	it('Check for activation request message as support before activation.', function(){
		console.log('Check for activation request message as support before activation.');
		browser.sleep(1000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating active activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});				
	});	
	
	it('Navigate to Activation Request page as support', function () {
		console.log('Navigate to Activation Request page again');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual(data.activation_request.activationRequest_Link_Text);
		browser.sleep(2000);
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
		browser.sleep(1000);
	});	

	//**************	
	it('Log into the portal as a user to check for activation message', function(){
		console.log("Log into the portal as a user to check for activation message.");
		browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);				
	});	

	it('Check to see if activation request message is no longer present', function(){
		console.log("Checking to see if the activation request message is no longer present.");
		browser.sleep(1000);
		expect(element(by.css('span[class="message ng-binding"]')).isPresent()).toBe(false);
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
		browser.sleep(2000);
    });

	it('logout for the last time', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});	
	
});