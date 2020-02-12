describe('Acumen Site Page Notes Tests', function () {
    var AcumenLoginPage = require('../page-factory/login_DetailedPage.js');
    var site_Page = require('../page-factory/sitePage.js');
	var activation_Request_Page = require('../page-factory/activationRequestPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');
	

	
	var activation_RequestPage = new activation_Request_Page();
	var sitePage = new site_Page();
	var site_Total = '1';
	var no_Site_Message = 'At least one Site is required';

	var support_admin_login = function(supportAdminUser){
		
		var siteAddress = 'https://qa.opaqnetworks.net/#/login'
		//var supportAdminUser = 'Derrick Cox'
		
		browser.get(siteAddress + '#/login');
        browser.sleep(1000);
		element.all(by.id('username')).sendKeys('testing_support@opaqnetworks.com');
        browser.sleep(1000);
        element.all(by.id('password')).sendKeys('test1234');
        browser.sleep(1000);
        element.all(by.buttonText('Login')).click();
        browser.sleep(2000);
		
		browser.driver.switchTo().frame("duo_iframe");
		browser.sleep(1000);
	
		//browser.driver.findElement(by.css('div[class="passcode-label row-label"]')).findElement(by.css('button[class="positive auth-button"]')).click();
        browser.driver.findElement(by.css('div[class="passcode-label row-label"]')).findElement(by.css('button[class="auth-button positive"]')).click();
        browser.sleep(1000);
        browser.driver.findElement(by.css('input[class="passcode-input"]')).sendKeys('123456789');
        browser.sleep(1000);	
		//browser.driver.findElement(by.css('div[class="passcode-label row-label"]')).findElement(by.css('button[class="positive auth-button"]')).click();
        browser.driver.findElement(by.css('div[class="passcode-label row-label"]')).findElement(by.css('button[class="auth-button positive"]')).click();
        browser.sleep(1000);
		
		element.all(by.id('btn-append-to-body')).click();
		browser.sleep(1000);
		element.all(by.linkText(supportAdminUser)).click();
		browser.sleep(1000);
        element.all(by.buttonText('Select')).click();
        browser.sleep(1000);
	};
	
	it('Log into the portal', function(){
		
        support_admin_login('Derrick Cox');
        browser.sleep(1000);				
	});

	it('Activate the activation request ', function () {
		console.log('Navigate to Activation Request page again');
		activation_RequestPage.activation_RequestLink();
		expect(activation_RequestPage.activation_RequestLink_Text()).toEqual('Your Configuration\nThe final step: Send your configuration to OPĀQ for activation.');// so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
		browser.sleep(2000);
	});	
	
	it('Navigate to Activation Request page again, ', function () {
		element.all(by.buttonText('Activate')).click();
		browser.sleep(1000);
		element.all(by.buttonText('Ok')).click();
		browser.sleep(1000);			
	});	
	
	it('logout', function () {
		common_Component.appLogout();
	});

});