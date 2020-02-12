describe('Acumen Activation Request Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
	
	it('Log into the portal', function(){
		
        common_Component.appLogin();
        browser.sleep(1000);				
	});
	
	var site_Total = '1';
	var activation_RequestPage = new activation_Request_Page();
	
	beforeEach(function(){
		var activation_RequestPage = new activation_Request_Page();
		browser.sleep(2000);
	});
	
    it('Create new Site with all data', function () {
 		common_Component.siteAllFields();
        browser.sleep(1000);
	
    });		

	it('Navigate to Activation Request page', function () {

		console.log('Validating Activation Request Link');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual('Your Configuration\nThe final step: Send your configuration to OPĀQ for activation.');// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
		browser.sleep(2000);
	});	
	
	it('Activation Request Page Sites Icon Validation', function () {
		//Click on Internet Facing servers icon to validate the link and its going to the desired page.
		activation_RequestPage.activation_Request_Icon_Validation('Sites');
		browser.sleep(1000);
	});
	
	it('Activation Request Page Internet Facing Servers Icon Validation', function () {
		//Click on Internet Facing servers icon to validate the link and its going to the desired page.
		activation_RequestPage.activation_Request_Icon_Validation('Internet Facing Servers');
		browser.sleep(1000);
	});
	
	it('Activation Request Page Administrators Icon Validation', function () {
		//Click on Internet Facing servers icon to validate the link and its going to the desired page.
		activation_RequestPage.activation_Request_Icon_Validation('Administrators');
		browser.sleep(1000);
	});

	it('Activation Request Page Directory Services Icon Validation', function () {
		//Click on Internet Facing servers icon to validate the link and its going to the desired page.
		activation_RequestPage.activation_Request_Icon_Validation('Directory Services');
		browser.sleep(1000);
	});

	it('Activation Request Page Policies Icon Validation', function () {
		//Click on Internet Facing servers icon to validate the link and its going to the desired page.
		activation_RequestPage.activation_Request_Icon_Validation('Policies');
		browser.sleep(1000);
	});

	it('Activation Request Page Security Controls Icon Validation', function () {
		//Click on Internet Facing servers icon to validate the link and its going to the desired page.
		activation_RequestPage.activation_Request_Icon_Validation('Security Controls');
		browser.sleep(1000);
	});	
	
	it('Activation Request Page Confirm Button Validation', function () {
		//Click on Confirm activation button and validate the header in the dialog
		activation_RequestPage.confirm_activation_button();
		browser.sleep(1000);
		console.log('Validating the Confirm Activation Link');
		browser.sleep(1000);
		
		//This depends on the values in activationRequestPage.js
		//expect(activation_RequestPage.email_Confirmation()).toEqual('dcox@opaqnetworks.com');
		//browser.sleep(1000);
		expect(activation_RequestPage.email_to_Support()).toEqual('support@opaqnetworks.com');
		browser.sleep(1000);
		
        activation_RequestPage.confirm_activation_cancel();		
	});	
	
	it('Delete all sites created:', function () {
	var sitePage = new site_Page();
	browser.sleep(1000);

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
	common_Component.appLogout
    });

});