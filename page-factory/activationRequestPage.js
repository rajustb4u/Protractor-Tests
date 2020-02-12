var activation_Request_Page = function() {
	
	//click on Site Add button
	activationRequestLink = element.all(by.linkText('ACTIVATION REQUEST'));
	activationRequestLink_Text = element(by.css('div.header'));

	// activationRequest_SitesLink = element(by.css('a[href="#/configuration/sites'));
	activationRequest_SitesLink = element(by.css('a[href="#/configuration/sites"]'));
	// site_Text = element(by.css('div[ui-view="configuration"] h1'));
	activationRequest_DevicesLink = element(by.css('.zmdi.zmdi-devices'));

	activationRequest_UserRolesLink = element(by.css('a[href="#/configuration/administrators"]'));
	//  userRolesText = element(by.css('div[ui-view="configuration"] h1'));

	activationRequest_SecurityServicesLink = element(by.css('a[href="#/configuration/security"]'));
	//  securityServices = element(by.css('div[ui-view="configuration"] h1'));

	activationRequest_DirectoryServicesLink = element(by.css('a[href="#/configuration/dirservices"]'));
	//  directory_Services = element(by.css('div[ui-view="configuration"] h1'));

	activationRequest_PoliciesLink = element(by.css('a[href="#/configuration/policies"]'));
	//  policies = element(by.css('div[ui-view="configuration"] h1'));

	activationConfirm = element(by.buttonText('Confirm Activation'));
	// confirmActication_Dialog = element(by.css('div[ui-view="configuration"] h1'));
	
	activationReviewed = element(by.buttonText('Reviewed'));
	
	activationActivate = element(by.buttonText('Activate'));
	
	confirmation_email = element(by.linkText('automation@automation.com'));
	devTeam_email = element(by.linkText('devteam@opaqnetworks.com'));
	cancel_Activation = element.all(by.css('button[ng-click="$dismiss()"]'));

        
	//Directory Services link
	this.activation_RequestLink = function () {
		activationRequestLink.click();
	};
	
	//Activation Request page header
	this.activation_RequestLink_Text = function() {
		return activationRequestLink_Text.getText();
	};
	
	// Click Sites button to validate the functionality of the link
	this.activation_Request_SitesLink = function() {
		activationRequest_SitesLink.click();
	};
	
	//Sites page header
	this.SiteText = function() {
		return site_Text.getText();
	};
   
	// Click Devices button to validate the functionality of the link
	this.activation_Request_DevicesLink = function() {
		activationRequest_DevicesLink.click();
	};
	
	//UserRoles link
	this.activation_Request_UserRolesLink = function () {
		activationRequest_UserRolesLink.click();
	};
	
	// User Roles page header
	this.userRoles_Text = function() {
		return userRolesText.getText();
	};
   
	//Security Services link
	this.activation_Request_SecurityServicesLink = function () {
		activationRequest_SecurityServicesLink.click();
	};
	
	// Security Services page header
	this.security_Services = function() {
		return securityServices.getText();
	};
	
	//Directory Services link
	this.activation_Request_DirectoryServicesLink = function () {
		activationRequest_DirectoryServicesLink.click();
	};
	
	// Directory Services page header
	this.directoryServices_Header = function() {
		return directory_Services.getText();
	};
	
	//Policies link
	this.activation_Request_PoliciesLink = function () {
		activationRequest_PoliciesLink.click();
	};
	
	// Policies page header
	this.policies_Header = function() {
		return policies.getText();
	};
	
	//Confirm ACtivation Button & dialog validation
	this.confirm_activation_button = function () {
		activationConfirm.click();
	};
	
    this.confirm_activation_button_state = function() {
        return activationConfirm.getAttribute('disabled');
    };	
	
	
	this.confirm_activation_dialog_Header = function() {
		return confirmActication_Dialog.getText();
	};
	
	this.activation_reviewed_button = function () {
		activationReviewed.click();
	};	
	
    this.activation_reviewed_button_state = function() {
        return activationReviewed.getAttribute('disabled');
    };		

	this.activation_activate_button = function () {
		activationActivate.click();
	};	
	
    this.activation_activate_button_state = function() {
        return activationActivate.getAttribute('disabled');
    };
	
	this.email_Confirmation = function() {
		return confirmation_email.getText();
	};
	
	this.email_to_DevTeam = function() {
		return devTeam_email.getText();
	};
	
	this.confirm_activation_cancel = function () {
		cancel_Activation.click();
	};
		
	//***********************
	//Sites Icon
	activationRequest_Sites_IconLink = element.all(by.css('.zmdi.zmdi-storage'));
	
	//Devices Icon
	activationRequest_Devices_IconLink = element.all(by.css('.zmdi.zmdi-devices'));
	
	//Administrators Icon
	activationRequest_UserRoles_IconLink = element.all(by.css('.zmdi.zmdi-account'));
	
	//Directory Services Icon
	activationRequest_DirectoryServices_IconLink = element.all(by.css('.zmdi.zmdi-folder'));
	
	//Policies Icon
	activationRequest_Policies_IconLink = element.all(by.css('.zmdi.zmdi-globe-alt'));
	
	//Security Controls Icon
	activationRequest_SecurityControls_IconLink = element.all(by.css('.zmdi.zmdi-lock')).last();

	//This depends on the account creating the site
	//confirmation_email = element(by.linkText('dcox@opaqnetworks.com'));
	support_email = element(by.linkText('support@opaqnetworks.com'));
	
	this.email_to_Support = function() {
		return support_email.getText();
	};	

	//Activation request site regions
	var activationRequest_Config_Regions = element.all(by.css('.center-block.numberSummary'));
	
	//Sites elements
	var activationRequest_Sites_Region = activationRequest_Config_Regions.get(0);
	var activationRequest_Sites_Number = activationRequest_Sites_Region.element(by.css('.number,ng-binding'));
	var activationRequest_Sites_Label = activationRequest_Sites_Region.element(by.css('div.sub-label'));
	var activationRequest_Sites_Error = activationRequest_Sites_Region.all(by.css('.help-block.error.ng-scope'));
	//var activationRequest_Sites_Error = activationRequest_Sites_Region.all(by.css('.help-block.error.ng-scope'));
	
	this.activation_Request_Sites_Number = function() {
		return activationRequest_Sites_Number.getText();
	};

	this.activationRequest_Sites_Error_Message = function() {
		return activationRequest_Sites_Error.getText();
	};	
/*
	this.activation_Request_Sites_Error_Message = function(thing) {
		activationRequest_Sites_Region.element(by.css('.help-block.error.ng-scope')).isPresent().then(function(isThere){
		if(isThere){
				console.log('Found it');
				return activationRequest_Sites_Error_Message.getText();
			} else {
				console.log('Found nothing');
				return false;
			}
		});	
	};
*/
	
	this.activation_Request_Sites_Error_Message = function() {
		return activationRequest_Sites_Error_Message.getText();
	};	

	//Internet Facing Servers elements
	var activationRequest_InternetFacingServers_Region = activationRequest_Config_Regions.get(1);
	var activationRequest_InternetFacingServers_Number = activationRequest_InternetFacingServers_Region.element(by.css('.number,ng-binding'));
	var activationRequest_InternetFacingServers_Label = activationRequest_InternetFacingServers_Region.element(by.css('div.sub-label'));
	var activationRequest_InternetFacingServers_Error = activationRequest_InternetFacingServers_Region.all(by.css('.help-block.error.ng-scope'));

	this.activation_Request_Internet_Facing_Servers_Number = function() {
		return activationRequest_InternetFacingServers_Number.getText();
	};
	this.activation_Request_Internet_Facing_Servers_Error_Message = function() {
		return activationRequest_InternetFacingServers_Error.getText();
	};	
	
	//Administrators elements
	var activationRequest_Administrators_Region = activationRequest_Config_Regions.get(2);
	var activationRequest_Administrators_Number = activationRequest_Administrators_Region.element(by.css('.number,ng-binding'));
	var activationRequest_Administrators_Label = activationRequest_Administrators_Region.element(by.css('div.sub-label'));
	var activationRequest_Administrators_Error = activationRequest_Administrators_Region.all(by.css('.help-block.error.ng-scope'));	
	
	this.activation_Request_Administrators_Number = function() {
		return activationRequest_Administrators_Number.getText();
	};
	this.activation_Request_Administrators_Error_Message = function() {
		return activationRequest_Administrators_Error.getText();
	};		

	//Directory Services elements
	var activationRequest_DirectoryServices_Region = activationRequest_Config_Regions.get(3);
	var activationRequest_DirectoryServices_Number = activationRequest_DirectoryServices_Region.element(by.css('.number,ng-binding'));
	var activationRequest_DirectoryServices_Label = activationRequest_DirectoryServices_Region.element(by.css('div.sub-label'));
	var activationRequest_DirectoryServices_Error = activationRequest_DirectoryServices_Region.all(by.css('.help-block.error.ng-scope'));	
	
	this.activation_Request_Directory_Services_Number = function() {
		return activationRequest_DirectoryServices_Number.getText();
	};
	this.activation_Request_Directory_Services_Error_Message = function() {
		return activationRequest_DirectoryServices_Error.getText();
	};		

	//Policies elements
	var activationRequest_Policies_Region = activationRequest_Config_Regions.get(4);
	var activationRequest_Policies_Number = activationRequest_Policies_Region.element(by.css('.number,ng-binding'));
	var activationRequest_Policies_Label = activationRequest_Policies_Region.element(by.css('div.sub-label'));
	var activationRequest_Policies_Error = activationRequest_Policies_Region.all(by.css('.help-block.error.ng-scope'));	
	
	this.activation_Request_Policies_Number = function() {
		return activationRequest_Policies_Number.getText();
	};
	
	this.activation_Request_Policies_Error_Message = function() {
			return activationRequest_Policies_Error.getText();
	};	
	
	//Security Controls elements
	var activationRequest_SecurityControls_Region = activationRequest_Config_Regions.get(5);
	var activationRequest_SecurityControls_Number = activationRequest_SecurityControls_Region.element(by.css('.number,ng-binding'));
	var activationRequest_SecurityControls_Label = activationRequest_SecurityControls_Region.element(by.css('div.sub-label'));
	var activationRequest_SecurityControls_Error = activationRequest_SecurityControls_Region.all(by.css('.help-block.error.ng-scope'));	
	
	this.activation_Request_Security_Controls_Number = function() {
		return activationRequest_SecurityControls_Number.getText();
	};
	this.activation_Request_Security_Controls_Error_Message = function() {
		return activationRequest_SecurityControls_Error.getText();
	};
	
	//Visits the site, validates page by next button, returns back to the activation request page.
	this.activation_Request_Icon_Validation = function(iconType){
		
		switch(iconType){
			case 'Sites':
				var iconName = 'Sites';
				var validation_Button_Text = 'Next - Administrators';
				var clickIcon = function icon_Click(){
					activationRequest_Sites_IconLink.click();
				};
				break;
			
			case 'Internet Facing Servers':
				var iconName = 'Internet Facing Servers';
				var validation_Button_Text = 'Next - Host Groups';
			    var clickIcon = function icon_Click(){
					activationRequest_Devices_IconLink.click();
				};
				break;			

			case 'Administrators':
				var iconName = 'Administrators';
				var validation_Button_Text = 'Next - Directory Services';
				var clickIcon = function icon_Click(){
					activationRequest_UserRoles_IconLink.click();
				};
				break;

			case 'Directory Services':
				var iconName = 'Directory Services';
				var validation_Button_Text = 'Add Directory Service';
				var clickIcon = function icon_Click(){
					activationRequest_DirectoryServices_IconLink.click();
				};
				break;

			case 'Policies':
				var iconName = 'Policies';
				var validation_Button_Text = 'Add Policy';
				var clickIcon = function icon_Click(){
					activationRequest_Policies_IconLink.click();
				};				
				break;		

			case 'Security Controls':
				var iconName = 'Security Controls';
				var validation_Button_Text = 'Next - Activation Request';
				var clickIcon = function icon_Click(){
					activationRequest_SecurityControls_IconLink.click();
				};
				break;
			default:
			console.log('Expect a failure, case not found.');
		}	
		
		clickIcon();
		browser.sleep(1000);
		console.log('Validating the '+iconName+' Icon Link');
		expect(element.all(by.cssContainingText('.btn',validation_Button_Text)).isPresent()).toBeTruthy();	
		browser.sleep(1000);		
		browser.navigate().back();
		browser.sleep(1000);
	}	
      
};

    module.exports = activation_Request_Page;
