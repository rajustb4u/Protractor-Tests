describe('Acumen Policy Page Note Functionality Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
	var policies_Page = require('../page-factory/policiesPage.js');
	var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	
	var Hosts_Page = require('../page-factory/hostsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
        	
	var activation_RequestPage = new activation_Request_Page();
	var sitePage = new site_Page();
	var HostGroupsPage = new HostGroups_Page();
	var policiesPage = new policies_Page();
	var HostsPage = new Hosts_Page();
	
	var hostgroups_total_count = 12;
	var site_Total = '1';

	var inbound_accessible_note = 'Bad inbound range.';
	var inbound_application_note = 'Bad inbound application.';
	var inbound_port_note = 'Bad inbound port.';
	
	var internal_users_note = 'Choose a different user for internal.';
	var internal_user_groups_note = 'Choose a different internal user group.';
	var internal_application_note = 'Choose a different internal application.';
	var internal_port_note = 'Port not allowed for internal network.';
	
	var outbound_users_note = 'Choose a different user for internal.';
	var outbound_user_groups_note = 'Choose a different outbound user group.';
	var outbound_destination_ip_note = 'Choose a different outbound ip.';
	var outbound_application_note = 'Choose a different outbound application.';
	var outbound_port_note = 'Select a different outbound port.';
	
	var policy_notes_note = 'Enter note text';
	
	var policies_alert_number = '9';
	var inbound_alert_number = '4';
	var internal_alert_number = '4';
	var outbound_alert_number = '5';
	
	var post_Notes_Policies_Message = '9 Errors';
	
	var inbound_accessible_ip = '12.13.14.12/23'	
	

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

    it('Creating host', function () {
		console.log('Creating host.');
		common_Component.hosts_Create('randomHost','10.23.42.50')
    });
	
    it('Creating inbound policies', function () {
		console.log('Creating inbound policies.');
		
		common_Component.inBoundPolicies_Create();
		browser.sleep(1000);

    });
/*	
    it('Creating internal policies', function () {
		console.log('Creating internal policies.');
		
		//common_Component.internalNetworkPolicies_Create();
		//browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);

        //Adding Policy
        policiesPage.add_Policy();
        browser.sleep(1000);
	
		//policiesPage.interZoneSourceDestGroups_Click();
		//browser.sleep(1000);
		//policiesPage.interZoneSourceDestGroups_Category_Search(data.host_groups.group_1_name);
		//browser.sleep(1000);
		//element(by.linkText(data.host_groups.group_1_name)).click();
		//browser.sleep(1000);
		//policiesPage.interZoneSourceDestGroups_Click();
        //browser.sleep(1000);		

		policiesPage.interZoneSourceHostGroups_Click();
        browser.sleep(1000);
		policiesPage.interZoneSourceHostGroups_Category_Search(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		policiesPage.interZoneSourceHostGroups_Click();
        browser.sleep(1000);
				
        common_Component.selectItemDropDown('btn-append-to-body',1);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitInterZonePolicy_Click();
        browser.sleep(1000);		
		
    });
*/	

    it('Creating outbound policies', function () {
		console.log('Creating outbound policies.');
		
		//common_Component.outBoundPolicies_Create();
		//browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);

        //Adding Policy
        policiesPage.add_Policy();
        browser.sleep(1000);
        
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        //policiesPage.application_Enter(data.policies_Page_Data.policy_Application);       
        browser.sleep(1000);		
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);		
		common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 3);
		browser.sleep(1000);	
		policiesPage.outboundDestinationIPv2_text(data.host_groups.group_0_range);
		browser.sleep(1000);
		common_Component.selectItemDropDown_2('.dropdown.form-group',1);
		browser.sleep(1000);
        policiesPage.submitOutboundPolicy_Click();
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
		browser.sleep(3000);
		
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

	
	it('Navigate to policies page to edit inbound notes ', function () {
		console.log('Navigate to policies page to edit inbound notes.');
        policiesPage.policiesLink();
        browser.sleep(1000);
        //policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);		
	});


	it('Creating notes for inbound policies', function () {
		console.log('Creating notes for inbound policies.');
		
		element(by.id('detailOpen_0')).click();
		browser.sleep(1000);
		element(by.id('policy_edit_0')).click();
		browser.sleep(1000);
		
		var inbound_accessible = element(by.css('input-field-component[fieldlabel="IP Address / Range / Netmask"]'));
		var inbound_application = element(by.css('input-field-component[fieldlabel="Application"]'));
		var inbound_port = element(by.css('input-field-component[fieldlabel="Port"]'));
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]'));

		
		common_Component.input_field_note_by_InputFieldComponent(inbound_accessible, inbound_accessible_note);
		common_Component.input_field_note_by_InputFieldComponent(inbound_application, inbound_application_note);	
		common_Component.input_field_note_by_InputFieldComponent(inbound_port, inbound_port_note);
		common_Component.input_field_note_by_TextFieldComponent(policy_notes, policy_notes_note);
		
		browser.sleep(1000);
		
		policiesPage.submitEditInBound_Click();
        browser.sleep(1000);	
	});	
	
/*	
	it('Navigate to policies page to edit internal network policy notes ', function () {
		console.log('Navigate to policies page to edit internal network policy notes.');
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);		
	});	

	
	it('Creating notes for internal network policies', function () {
		console.log('Creating notes for internal network policies.');
		browser.sleep(1000);
		
		element(by.id('detailOpen_0')).click();
		browser.sleep(1000);
		
		var internal_users = element(by.css('input-field-component[fieldlabel="User"]'));
		var internal_user_groups = element(by.css('input-field-component[fieldlabel="User Group"]'));
		var internal_application = element(by.css('input-field-component[fieldlabel="Application"]'));
		var internal_port = element(by.css('input-field-component[fieldlabel="Port"]'));
		var policy_notes = element(by.css('input-field-component[fieldlabel="Policy Notes"]'));
	
		common_Component.input_field_note_by_InputFieldComponent(internal_users, internal_users_note);
		common_Component.input_field_note_by_InputFieldComponent(internal_user_groups, internal_user_groups_note);
		common_Component.input_field_note_by_InputFieldComponent(internal_application, internal_application_note);	
		common_Component.input_field_note_by_InputFieldComponent(internal_port, internal_port_note);
		common_Component.input_field_note_by_TextFieldComponent(policy_notes, policy_notes_note);
		
		browser.sleep(1000);
		
		policiesPage.updateInterZonePolicy_Click();
        browser.sleep(1000);	
	});	
*/

	it('Navigate to policies page to edit outbound policy notes ', function () {
		console.log('Navigate to policies page to edit outbound policy notes.');
		browser.sleep(1000);
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);		
	});	

	
	it('Creating notes for outbound policies', function () {
		console.log('Creating notes for outbound policies.');
		browser.sleep(1000);
		
		element(by.id('detailOpen_0')).click();
		browser.sleep(1000);
		element(by.id('policy_edit_0')).click();
		browser.sleep(1000);
		
		var outbound_users = element(by.css('input-field-component[fieldlabel="User"]'));
		var outbound_user_groups = element(by.css('input-field-component[fieldlabel="User group"]'));
		var outbound_destination_ip = element(by.css('input-field-component[fieldlabel="IP Address / Range / Netmask / FQDN"]'));
		var outbound_application = element(by.css('input-field-component[fieldlabel="Application"]'));
		var outbound_port = element(by.css('input-field-component[fieldlabel="Port"]'));
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]'));

		common_Component.input_field_note_by_InputFieldComponent(outbound_users, outbound_users_note);
		common_Component.input_field_note_by_InputFieldComponent(outbound_user_groups, outbound_user_groups_note);
		common_Component.input_field_note_by_InputFieldComponent(outbound_destination_ip, outbound_destination_ip_note);
		//common_Component.input_field_note_by_InputFieldComponent(outbound_application, outbound_application_note);	
		common_Component.input_field_note_by_InputFieldComponent(outbound_port, outbound_port_note);
		common_Component.input_field_note_by_TextFieldComponent(policy_notes, policy_notes_note);
		
		browser.sleep(1000);
		
		policiesPage.submitEditOutBound_Click();
        browser.sleep(1000);	
	});	

	
	it('Checking for policies section notification number', function () {
		console.log('Checking for policies section alert number.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(policies_alert_number);
		});
	});		

	
	it('Checking for inbound policies section notification number', function () {
		console.log('Checking for inbound policies section alert number.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).last().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(inbound_alert_number);
		});
	});	

/*	
	it('Checking for internal network policies section notification number', function () {
		console.log('Checking for internal network policies section alert number.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/internal"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(internal_alert_number);
		});
	});		
*/

	it('Checking for outbound policies section notification number', function () {
		console.log('Checking for outbound policies section alert number.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/outbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(outbound_alert_number);
		});
	});	

	
	it('Navigate to Activation Request page as support, ', function () {
		activation_RequestPage.activation_RequestLink();
		browser.sleep(1000);		
	});	

	
	it('Check for Policies error message after creating notes', function () {	
		console.log('Check for Policies error message after creating notes.');
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Policies_Error_Message().then(function(message){			
			console.log('Policies message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Policies_Message);
			if (message.toString() == post_Notes_Policies_Message){
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

	it('Log into the portal as user to edit policies', function(){
		console.log('Logging in as user to edit policies.');
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
	
	
	it('Check for Policies error message as user after creating notes', function () {	
		console.log('Check for Policies error message as user after creating notes.')
		browser.sleep(1000);
 		activation_RequestPage.activation_Request_Policies_Error_Message().then(function(message){			
			console.log('Policies message is - '+message);
			browser.sleep(1000);
			expect(message.toString()).toEqual(post_Notes_Policies_Message);
			if (message.toString() == post_Notes_Policies_Message){
				console.log('Expected error message exists.');
				browser.sleep(1000);
			};	
			browser.sleep(1000);
		});			
    });	
	
	it('Navigate to policies page to validate policy notification numbers as user', function () {
		console.log('Navigate to policies page to validate policy notification numbers as user.');
        policiesPage.policiesLink();
        browser.sleep(1000);
        //policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);		
	});	

	it('Checking for policies section notification number as user', function () {
		console.log('Checking for policies section alert number as user.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(policies_alert_number);
		});
	});
	
	
	it('Checking for inbound policies notification number as user', function () {
		console.log('Checking for inbound policies section alert number as user.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).last().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(inbound_alert_number);
		});
	});	
	/*
	it('Checking for internal network policies notification number as user', function () {
		console.log('Checking for internal network policies section alert number as user.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/internal"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(internal_alert_number);
		});
	});		
	*/
	
	it('Checking for outbound policies notification number as user', function () {
		console.log('Checking for outbound policies section alert number as user.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/outbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		policiesNumber.getText().then(function(alertNumber){
			console.log('Alert number is - '+alertNumber);
			expect(alertNumber).toEqual(outbound_alert_number);
		});
	});	
	

	it('Validating inbound policy note error messages ', function () {
		console.log('Validating inbound policy note error messages.');
		browser.sleep(1000);		
		element(by.id('detailOpen_0')).click();
		browser.sleep(1000);		
		element(by.id('policy_edit_0')).click();
		
		var inbound_accessible = element(by.css('input-field-component[fieldlabel="IP Address / Range / Netmask"]'));
		var inbound_application = element(by.css('input-field-component[fieldlabel="Application"]'));
		var inbound_port = element(by.css('input-field-component[fieldlabel="Port"]'));
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]'));
		
		common_Component.validateFieldComponentNoteByFieldComponent(inbound_accessible, inbound_accessible_note);
		common_Component.validateFieldComponentNoteByFieldComponent(inbound_application, inbound_application_note);	
		common_Component.validateFieldComponentNoteByFieldComponent(inbound_port, inbound_port_note);
		common_Component.validateFieldComponentNoteByFieldComponent(policy_notes, policy_notes_note);
	});		
	
	
    it('Editing inbound policies, changing fields for notes', function () {
		console.log('Editing inbound policies, changing fields for notes.');		

		var inbound_accessible = element(by.css('input-field-component[fieldlabel="IP Address / Range / Netmask"]')).element(by.css('input[type="text"]'));
		var inbound_application = element(by.css('input-field-component[fieldlabel="Application"]')).element(by.css('input[type="text"]'));
		var inbound_port = element(by.css('input-field-component[fieldlabel="Port"]')).element(by.css('input[type="text"]'));		
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]')).element(by.css('textarea[name="note"]'));
				
		inbound_accessible.clear();
		browser.sleep(1000);	
		inbound_application.clear();
		browser.sleep(1000);	
		inbound_port.clear();
		browser.sleep(1000);	
		policy_notes.clear();
		browser.sleep(1000);	

		inbound_accessible.sendKeys(inbound_accessible_ip);
		browser.sleep(1000);	
		inbound_application.sendKeys('twitch');
		browser.sleep(1000);	
		inbound_port.sendKeys('137');
		browser.sleep(1000);	
		policy_notes.sendKeys('random note');
		browser.sleep(1000);		
		
		policiesPage.submitEditInBound_Click();
        browser.sleep(1000);	
    });

/*
	it('Navigate to policies page to edit internal network policy as user', function () {
		console.log('Navigate to policies page to edit internal network policy as user.');
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);		
	});	

	it('Validating internal network policy note error messages ', function () {
		console.log('Validating internal network policy note error messages.');
		browser.sleep(1000);		
		
		element(by.id('policy_edit_0')).click();
		
		var internal_users = element(by.css('input-field-component[fieldlabel="User"]'));
		var internal_user_groups = element(by.css('input-field-component[fieldlabel="User Group"]'));
		var internal_application = element(by.css('input-field-component[fieldlabel="Application"]'));
		var internal_port = element(by.css('input-field-component[fieldlabel="Port"]'));	
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]'));
			
		common_Component.validateFieldComponentNoteByFieldComponent(internal_users, internal_users_note);
		common_Component.validateFieldComponentNoteByFieldComponent(internal_user_groups, internal_user_groups_note);	
		common_Component.validateFieldComponentNoteByFieldComponent(internal_application, internal_application_note);
		common_Component.validateFieldComponentNoteByFieldComponent(internal_port, internal_port_note);
		common_Component.validateFieldComponentNoteByFieldComponent(policy_notes, policy_notes_note);

	});		
	
    it('Editing internal network policies, changing fields for notes', function () {
		console.log('Editing internal network policies, changing fields for notes.');		

		var internal_users = element(by.css('input-field-component[fieldlabel="Users"]')).element(by.css('input[type="text"]'));
		var internal_user_groups = element(by.css('input-field-component[fieldlabel="User Groups"]')).element(by.css('input[type="text"]'));
		var internal_application = element(by.css('input-field-component[fieldlabel="Application"]')).element(by.css('input[type="text"]'));
		var internal_port = element(by.css('input-field-component[fieldlabel="Port"]')).element(by.css('input[type="text"]'));		
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]')).element(by.css('textarea[name="note"]'));
	
				
		internal_users.clear();
		browser.sleep(1000);	
		internal_user_groups.clear();
		browser.sleep(1000);	
		internal_application.clear();
		browser.sleep(1000);	
		internal_port.clear();
		browser.sleep(1000);
		policy_notes.clear();
		browser.sleep(1000);
		
		internal_users.sendKeys('steve');
		browser.sleep(1000);	
		internal_user_groups.sendKeys('friends');
		browser.sleep(1000);	
		internal_application.sendKeys('twitch');
		browser.sleep(1000);	
		internal_port.sendKeys('137');
		browser.sleep(1000);	
		policy_notes.sendKeys('random note');
		browser.sleep(1000);	
		
		policiesPage.updateInterZonePolicy_Click();
        browser.sleep(1000);	
    });
*/
	it('Navigate to policies page to edit outbound policy as user', function () {
		console.log('Navigate to policies page to edit outbound policy as user.');
        policiesPage.policiesLink();
        browser.sleep(1000);
		policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);		
	});	
	
	it('Validating outbound policy note error messages ', function () {
		console.log('Validating outbound policy note error messages.');
		browser.sleep(1000);		
		element(by.id('detailOpen_0')).click();
		browser.sleep(1000);		
		element(by.id('policy_edit_0')).click();
		browser.sleep(1000);
		
		var outbound_users = element(by.css('input-field-component[fieldlabel="User"]'));
		var outbound_user_groups = element(by.css('input-field-component[fieldlabel="User group"]'));
		var outbound_destination_ip = element(by.css('input-field-component[fieldlabel="IP Address / Range / Netmask / FQDN"]'));
		var outbound_application = element(by.css('input-field-component[fieldlabel="Application"]'));
		var outbound_port = element(by.css('input-field-component[fieldlabel="Port"]'));	
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]'));
			
		common_Component.validateFieldComponentNoteByFieldComponent(outbound_users, outbound_users_note);
		common_Component.validateFieldComponentNoteByFieldComponent(outbound_user_groups, outbound_user_groups_note);	
		//common_Component.validateFieldComponentNoteByFieldComponent(outbound_application, outbound_application_note);
		common_Component.validateFieldComponentNoteByFieldComponent(outbound_destination_ip, outbound_destination_ip_note);
		common_Component.validateFieldComponentNoteByFieldComponent(outbound_port, outbound_port_note);
		common_Component.validateFieldComponentNoteByFieldComponent(policy_notes, policy_notes_note);
		
	});		
	

    it('Editing outbound network policies, changing fields for notes', function () {
		console.log('Editing outbound network policies, changing fields for notes.');		

		var outbound_users = element(by.css('input-field-component[fieldlabel="User"]')).element(by.css('input[type="text"]'));
		var outbound_user_groups = element(by.css('input-field-component[fieldlabel="User group"]')).element(by.css('input[type="text"]'));
		var outbound_destination_ip = element(by.css('input-field-component[fieldlabel="IP Address / Range / Netmask / FQDN"]')).element(by.css('input[type="text"]'));
		var outbound_application = element(by.css('input-field-component[fieldlabel="Application"]')).element(by.css('input[type="text"]'));
		var outbound_port = element(by.css('input-field-component[fieldlabel="Port"]')).element(by.css('input[type="text"]'));		
		var policy_notes = element(by.css('text-field-component[fieldlabel="Policy Notes"]')).element(by.css('textarea[name="note"]'));

				
		outbound_users.clear();
		browser.sleep(1000);	
		outbound_user_groups.clear();
		browser.sleep(1000);
		outbound_destination_ip.clear();
		browser.sleep(1000);
		//outbound_application.clear();
		//browser.sleep(1000);	
		outbound_port.clear();
		browser.sleep(1000);	
		policy_notes.clear();
		browser.sleep(1000);			

		outbound_users.sendKeys('steve');
		browser.sleep(1000);	
		outbound_user_groups.sendKeys('friends');
		browser.sleep(1000);
		outbound_destination_ip.sendKeys('80.65.211.32/32');
		browser.sleep(1000);			
		//outbound_application.sendKeys('twitch');
		//browser.sleep(1000);	
		outbound_port.sendKeys('137');
		browser.sleep(1000);	
		policy_notes.sendKeys('random note');
		browser.sleep(1000);	
		
		policiesPage.submitEditOutBound_Click();
        browser.sleep(1000);	
    });	
	
	
	it('Checking for policies section notification number as user - should not exist', function () {
		console.log('Checking for policies section notification number as user - should not exist.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(policiesNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	
	
	it('Checking for inbound policy notification number as user - should not exist', function () {
		console.log('Checking for inbound policy notification number as user - should not exist.');
		browser.sleep(1000);
		var inboundNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).last().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(inboundNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});		
/*	
	it('Checking for internal network policy notification number as user - should not exist', function () {
		console.log('Checking for internal network policy notification number as user - should not exist.');
		browser.sleep(1000);
		var internalNumber = element.all(by.css('a[href="#/configuration/policies/internal"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(internalNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	
*/
	it('Checking for outbound policy notification number as user - should not exist', function () {
		console.log('Checking for outbound policy notification number as user - should not exist.');
		browser.sleep(1000);
		var outboundNumber = element.all(by.css('a[href="#/configuration/policies/outbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(outboundNumber.isPresent()).toBe(false);
		browser.sleep(2000);
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


	it('logout after edited policies activation', function () {
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

	it('Navigate to policies page to validate policy notification numbers do not exist as user', function () {
		console.log('Navigate to policies page to validate policy notification numbers do not exist as user.');
        policiesPage.policiesLink();
        browser.sleep(1000);		
	});	

	
	it('Checking for policies section notification number as user - should not exist post approval', function () {
		console.log('Checking for policies section notification number as user - should not exist post approval.');
		browser.sleep(1000);
		var policiesNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(policiesNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	

	
	it('Checking for inbound policies section notification number as user - should not exist post approval', function () {
		console.log('Checking for inbound policies section notification number as user - should not exist post approval.');
		browser.sleep(1000);
		var inboundNumber = element.all(by.css('a[href="#/configuration/policies/inbound"]')).last().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(inboundNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});		

/*	
	it('Checking for internal network policies section notification number as user - should not exist post approval', function () {
		console.log('Checking for internal network policies section notification number as user - should not exist post approval.');
		browser.sleep(1000);
		var internalNumber = element.all(by.css('a[href="#/configuration/policies/internal"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(internalNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});			
*/
	
	it('Checking for outbound network section notification number as user - should not exist post approval', function () {
		console.log('Checking for outbound policies section notification number as user - should not exist post approval.');
		browser.sleep(1000);
		var outboundNumber = element.all(by.css('a[href="#/configuration/policies/outbound"]')).first().element(by.css('span[class="nav-badge ng-binding ng-scope"]'));
		expect(outboundNumber.isPresent()).toBe(false);
		browser.sleep(1000);
	});	


	it('Delete Policies', function () {	
	
        policiesPage.policiesLink();
        browser.sleep(1000);
		
		element(by.id('detailOpen_0')).click();
		browser.sleep(1000);		
		element(by.id('policy_delete_0')).click();
		browser.sleep(1000);	
		element(by.buttonText('Yes')).click();	
		browser.sleep(1000);
/*		
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);	
		element(by.id('policy_delete_0')).click();
		browser.sleep(1000);	
		element(by.buttonText('Yes')).click();	
		browser.sleep(1000);
*/		
		policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
		element(by.id('detailOpen_0')).click();
		browser.sleep(1000);		
		element(by.id('policy_delete_0')).click();
		browser.sleep(1000);	
		element(by.buttonText('Yes')).click();	
		browser.sleep(1000);		
	    HostGroupsPage.zonesLink();
        browser.sleep(1000); 		
	});	
	
	it('Delete Host Groups', function () {	
	
		for (i = 0; i < hostgroups_total_count; i++){
			common_Component.removeHostGroup();
		}
		
	});	
	
	it('Delete host', function () {
        HostsPage.hostsLink();
        browser.sleep(2000);
		
		element(by.id('btnHostDetailOpen0')).click();
		browser.sleep(1000);		
		element(by.id('btnDeleteHost0')).click();
		browser.sleep(1000);
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)	;		
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