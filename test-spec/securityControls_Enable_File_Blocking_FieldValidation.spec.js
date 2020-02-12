describe('Acumen SECURITY CONTROLS PAGE Enable File Blocking Validation: ', function() {
	//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	browser.sleep(1000);
	
	it('Navigate to file blocking window', function () {

		common_Component.appLogin();
		browser.sleep(1000);			
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);
		security_Controls_Page.fileBlocking();
        browser.sleep(1000);		

	});	

	it('\nValidating blocked file type text field ', function () {
		
		console.log("Validating blocked file type text field");
		
		//validation of blocked file type field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.blockedFileType_placeholderAttr()).toEqual(data.fileBlock_Page_Data.blockedFileType_PlaceHolder_Attribute);
		console.log('Blocked File Type Placeholder verification done: ' + data.fileBlock_Page_Data.blockedFileType_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.blockedFileType_fieldLabelAttr()).toEqual(data.fileBlock_Page_Data.blockedFileType_fieldLabel_Attribute);
		console.log('Blocked File Type Field label verification done: ' + data.fileBlock_Page_Data.blockedFileType_fieldLabel_Attribute);
		
		expect(security_Controls_Page.blockedFileType_minlengthAttr()).toEqual(data.fileBlock_Page_Data.blockedFileType_minLength_Attribute);
		console.log('Blocked File Type Min Length verification done: ' + data.fileBlock_Page_Data.blockedFileType_minLength_Attribute);
		
		expect(security_Controls_Page.blockedFileType_maxlengthAttr()).toEqual(data.fileBlock_Page_Data.blockedFileType_maxLength_Attribute);
		console.log('Blocked File Type Max Length verification done: ' + data.fileBlock_Page_Data.blockedFileType_maxLength_Attribute);

	});	
	
	it('\nValidating allowed application text field ', function () {
		
		console.log("Validating Allowed Application text field");
		
		//validation of Allowed Application field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.allowedApplications_placeholderAttr()).toEqual(data.fileBlock_Page_Data.allowedApplications_PlaceHolder_Attribute);
		console.log('Allowed Application Placeholder verification done: ' + data.fileBlock_Page_Data.allowedApplications_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.allowedApplications_fieldLabelAttr()).toEqual(data.fileBlock_Page_Data.allowedApplications_fieldLabel_Attribute);
		console.log('Allowed Application Field label verification done: ' + data.fileBlock_Page_Data.allowedApplications_fieldLabel_Attribute);
		
		expect(security_Controls_Page.allowedApplications_minlengthAttr()).toEqual(data.fileBlock_Page_Data.allowedApplications_minLength_Attribute);
		console.log('Allowed Application Min Length verification done: ' + data.fileBlock_Page_Data.allowedApplications_minLength_Attribute);
		
		expect(security_Controls_Page.allowedApplications_maxlengthAttr()).toEqual(data.fileBlock_Page_Data.allowedApplications_maxLength_Attribute);
		console.log('Allowed Application Max Length verification done: ' + data.fileBlock_Page_Data.allowedApplications_maxLength_Attribute);
	
	});
	
	it('\nValidating Domain Exception text field ', function () {
		
		console.log("Validating Domain Exception text field");
		
		//validation of Domain Exception field attributes "placeholder, min length, max length, field label"
		expect(security_Controls_Page.domainException_placeholderAttr()).toEqual(data.fileBlock_Page_Data.domainException_PlaceHolder_Attribute);
		console.log('Domain Exception Placeholder verification done: ' + data.fileBlock_Page_Data.domainException_PlaceHolder_Attribute);
		
		expect(security_Controls_Page.domainException_fieldLabelAttr()).toEqual(data.fileBlock_Page_Data.domainException_fieldLabel_Attribute);
		console.log('Domain Exception Field label verification done: ' + data.fileBlock_Page_Data.domainException_fieldLabel_Attribute);
		
		expect(security_Controls_Page.domainException_minlengthAttr()).toEqual(data.fileBlock_Page_Data.domainException_minLength_Attribute);
		console.log('Domain Exception Min Length verification done: ' + data.fileBlock_Page_Data.domainException_minLength_Attribute);
		
		expect(security_Controls_Page.domainException_maxlengthAttr()).toEqual(data.fileBlock_Page_Data.domainException_maxLength_Attribute);
		console.log('Domain Exception Max Length verification done: ' + data.fileBlock_Page_Data.domainException_maxLength_Attribute);
	
	});	
	
	it('Validating blocked file type error message', function () {
		
		//Validating blocked file type error message
		console.log("\nValidating blocked file type error message");

		security_Controls_Page.blockedFileType_text(data.fileBlock_Page_Data.blockedFileType_Validation);
		browser.sleep(1000);		
		
		common_Component.getElementErrorByName("blocked_files_0_file").then(function(message){
			console.log('Blocked File Type error message: ' + message);
		});
		
		//validation of blocked file type input error message"
		expect(common_Component.getElementErrorByName("blocked_files_0_file")).toEqual(data.fileBlock_Page_Data.blockedFileType_errorMsg);
		security_Controls_Page.blockedFile_Clear();
		browser.sleep(1000);
	});	

	it('Validating allowed applications error message', function () {
		
		//Validating allowed applications error message
		console.log("\nValidating allowed applications error message");

		security_Controls_Page.allowedApplications_text(data.fileBlock_Page_Data.allowedApplications_Validation);
		browser.sleep(1000);
		//workaround
		//security_Controls_Page.blockedFileType_InputField_Click();
		//browser.sleep(1000);		
		
		common_Component.getElementErrorByName("allowed_files_0_file").then(function(message){
			console.log('Allowed Applications error message: ' + message);
		});
		
		//validation of allowed applications input error message"
		expect(common_Component.getElementErrorByName("allowed_files_0_file")).toEqual(data.fileBlock_Page_Data.allowedApplications_errorMsg);
		security_Controls_Page.allowedApplications_Clear();
		browser.sleep(1000);
		
	});	
	
	it('Validating Domain Exception error message', function () {
		
		//Validating Domain Exception error message
		console.log("\nValidating Domain Exception error message");

		security_Controls_Page.domainExceptionv2_text(data.fileBlock_Page_Data.domainException_Validation);
		browser.sleep(1000);		
		
		common_Component.getElementErrorByName("allowed_domains_0_domain").then(function(message){
			console.log('Domain Exception error message: ' + message);
		});
		
		//validation of Domain Exception input error message"
		expect(common_Component.getElementErrorByName("allowed_domains_0_domain")).toEqual(data.fileBlock_Page_Data.domainException_errorMsg);
		security_Controls_Page.domainExceptionv2_Clear();
		browser.sleep(1000);
		
	});		

	it('Checking help text message', function () {
		console.log('Checking help text message');
		
		console.log(security_Controls_Page.help_GetText());
	
        if(expect(security_Controls_Page.help_GetText()).toEqual(data.fileBlock_Page_Data.help_text)) {
            console.log('Help text for Site Name verified: '+data.fileBlock_Page_Data.help_text);
        }
		
	});	

	
	it('Check for popup window after hitting cancel when text has been entered on page', function () {
		console.log('Checking for dialogue box when hitting cancel after window interaction.');
		security_Controls_Page.cancelFileBlock_Click();
		browser.sleep(1000)	
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);

		element(by.css('div[class="modal-body ng-scope"] p')).getText().then(function(text){
			console.log('Window message is - '+text);
			expect(text).toEqual(data.fileBlock_Page_Data.cancel_message);
			
		});
		
		element.all(by.buttonText('Yes')).click();
	});		

	it('Uncheck enable file blocking box', function () {
		console.log('\nUncheck enable file blocking box.');
		security_Controls_Page.fileBlocking();
        browser.sleep(1000);
	});	
	
	it('logout', function () {
				
		common_Component.appLogout();
	});			
	
});