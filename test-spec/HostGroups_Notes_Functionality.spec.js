describe('Acumen Host Groups Note Functionality Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
	var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
	
	var activation_RequestPage = new activation_Request_Page();
	var sitePage = new site_Page();
	var HostGroupsPage = new HostGroups_Page();

	var hostgroups_total_count = 12;
	var site_Total = '1';
	
	var hostgroup_name_note = 'Bad hostgroup name.';
	var host_ip_note = 'Choose a different ip range.';

	var hostgroups_alert_number = '2';
	
	var hostgroups_new_name = 'NewGroupName'
	var hostgroups_ip_range = '10.12.35.99/17'

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
	
	it('Check for activation request message as support before editing host group notes', function(){
		console.log('Check for activation request message as support before editing host group notes.');
		browser.sleep(1000);
		
		element(by.css('span[class="message ng-binding"]')).getText().then(function(message_text){
			console.log('Validating active activation message text.\nExpected message is - '+message_text);
			expect(message_text).toEqual(data.activation_request.activationRequest_Message_Text);
			browser.sleep(1000);
		});				
	});	

	
	it('Navigate to host groups page to edit inbound notes ', function () {
		console.log('Navigate to host groups page to edit inbound notes.');
		browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);

	});


	it('Creating notes for host groups', function () {
		console.log('Creating notes for host groups.');
		
		element(by.id('zone_edit_0')).click();
		browser.sleep(1000);
		
		var hostgroup_name = element(by.css('input-field-component[fieldlabel="Host Group Name"]'));
		var host_ip = element(by.css('input-field-component[fieldlabel="Host IP Address/ Range/ Netmask"]'));

		common_Component.input_field_note_by_InputFieldComponent(hostgroup_name, hostgroup_name_note);
		common_Component.input_field_note_by_InputFieldComponent(host_ip, host_ip_note);	
	
		browser.sleep(1000);
		
		HostGroupsPage.submitZone();
		browser.sleep(1000);	
	});	


	
	it('Checking for host groups section notification number', function () {
		console.log('Checking for host groups section alert number.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/hostgroups"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		hostgroupsNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(hostgroups_alert_number);
		});
	});		

	
	it('Navigate to Activation Request page as support, ', function () {
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);		
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

	it('Log into the portal as user to edit host groups', function(){
		console.log('Logging in as user to edit host groups.');
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
		browser.sleep(1000);
		//
		expect(activation_RequestPage.confirm_activation_button_state()).toEqual('true');
		if (activation_RequestPage.confirm_activation_button_state() == 'true'){
			console.log('Confirm Activation button is in a disabled state');			
		};
		browser.sleep(2000);
	});		
	
	it('Navigate to host groups page', function () {
		console.log('Navigate to host groups page.');
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
	});	

	it('Checking for host groups section notification number as user', function () {
		console.log('Checking for host groups section alert number as user.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/hostgroups"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		hostgroupsNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(hostgroups_alert_number);
		});
	});
	

	it('Validating host groups note error messages ', function () {
		console.log('Validating host groups note error messages.');
		browser.sleep(1000);		
		
		element(by.id('zone_edit_0')).click();
		browser.sleep(1000);
		
		var hostgroup_name = element(by.css('input-field-component[fieldlabel="Host Group Name"]'));
		var host_ip = element(by.css('input-field-component[fieldlabel="Host IP Address/ Range/ Netmask"]'));
	
		common_Component.validateFieldComponentNoteByFieldComponent(hostgroup_name, hostgroup_name_note);
		common_Component.validateFieldComponentNoteByFieldComponent(host_ip, host_ip_note);		
	});		
	
	
    it('Editing inbound host groups, changing fields for notes', function () {
		console.log('Editing host groups, changing fields for notes.');		

		var hostgroup_name = element(by.css('input-field-component[fieldlabel="Host Group Name"]')).element(by.css('input[type="text"]'));	
		var host_ip = element(by.css('input-field-component[fieldlabel="Host IP Address/ Range/ Netmask"]')).element(by.css('input[type="text"]'));	
				
		hostgroup_name.clear();
		browser.sleep(1000);	
		host_ip.clear();
		browser.sleep(1000);	


		hostgroup_name.sendKeys(hostgroups_new_name);
		browser.sleep(1000);	
		host_ip.sendKeys(hostgroups_ip_range);
		browser.sleep(1000);	
			
		HostGroupsPage.submitZone();
        browser.sleep(1000);	
    });


	it('Checking for host groups section notification number as user - should not exist', function () {
		console.log('Checking for host groups section notification number as user - should not exist.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/hostgroups"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(hostgroupsNumber.isPresent()).toBe(false);
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


	it('logout after edited host groups activation', function () {
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
	
	it('Checking for host groups section notification number as user - should not exist post approval', function () {
		console.log('Checking for host groups section notification number as user - should not exist post approval.');
		browser.sleep(1000);
		var hostgroupsNumber = element.all(by.css('a[href="#/configuration/hostgroups"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(hostgroupsNumber.isPresent()).toBe(false);
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
		browser.sleep(2000);
    });
	
	it('logout for the last time', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});	

});