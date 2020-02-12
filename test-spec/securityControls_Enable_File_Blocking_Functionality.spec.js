describe('Acumen SECURITY CONTROLS PAGE Enable File Blocking Functionality: ', function() {
	//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	browser.sleep(1000);
	var blocked_file_type_length = 6;
	var allowed_applications_length = 6;
	var domain_exception_length = 6;	
	var removal_count = 2;
	
	it('Navigate to file blocking window', function () {

		common_Component.appLogin();
		browser.sleep(1000);			
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);
		security_Controls_Page.fileBlocking();
        browser.sleep(4000);				
	});	

	it('\nAdding items to Blocked File Type list  ', function () {
		
		console.log("Adding items to Blocked File Type list");
		
		for(i=0; i<blocked_file_type_length;i++){
			if(i == (blocked_file_type_length - 1)){
				security_Controls_Page.blockedFileTypev2_text(data.fileBlock_Page_Data.blockedFileType_extensions[i]);
				browser.sleep(1000);

			} else {
				security_Controls_Page.blockedFileTypev2_text(data.fileBlock_Page_Data.blockedFileType_extensions[i]);
				browser.sleep(1000);
				security_Controls_Page.addBlockedFile_Click();
				browser.sleep(1000);
			}
		}
	
		security_Controls_Page.blockedFileType_List().then(function(items){
			
			console.log('Validating count of blocked file type items.');
			browser.sleep(1000);
			expect(items.length).toEqual(blocked_file_type_length);
		});
//		
	});	
	
	it('\nAdding items to Allowed Applications list  ', function () {
		
		console.log("Adding items to Allowed Applications list");
		
		for(i=0; i<allowed_applications_length;i++){
			if(i == (allowed_applications_length - 1)){
				security_Controls_Page.allowedApplicationsv2_text(data.fileBlock_Page_Data.allowedApplications_names[i]);
				browser.sleep(1000);

			} else {
				security_Controls_Page.allowedApplicationsv2_text(data.fileBlock_Page_Data.allowedApplications_names[i]);
				browser.sleep(1000);
				//workaround
				security_Controls_Page.blockedFileType_InputField_Click();
				browser.sleep(1000);
				security_Controls_Page.addAllowedApplications_Click();
				browser.sleep(1000);
			}
		}
	
		security_Controls_Page.allowedApplications_List().then(function(items){
			
			console.log('Validating count of Allowed Applications items.');
			browser.sleep(1000);
			expect(items.length).toEqual(allowed_applications_length);
		});
		
	});
	
	it('\nAdding items to Domain Exception list  ', function () {
		
		console.log("Adding items to Domain Exception list");
		
		for(i=0; i<domain_exception_length;i++){
			if(i == (domain_exception_length - 1)){
				security_Controls_Page.domainExceptionv2_text(data.fileBlock_Page_Data.domainException_names[i]);
				browser.sleep(1000);

			} else {
				security_Controls_Page.domainExceptionv2_text(data.fileBlock_Page_Data.domainException_names[i]);
				browser.sleep(1000);
				security_Controls_Page.addDomainException_Click();
				browser.sleep(1000);
			}
		}
	
		security_Controls_Page.domainException_List().then(function(items){
			
			console.log('Validating count of Allowed Applications items.');
			browser.sleep(1000);
			expect(items.length).toEqual(domain_exception_length);
		});
		
	});	
	
	it('Save file blocking settings', function () {
		
		console.log('\nSave file blocking settings.');
		security_Controls_Page.saveFileBlock_Click();
		browser.sleep(1000);
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
	});	
	
	it('Check if Enable File Blocking is checked', function () {
		
		console.log('\nCheck if Enable File Blocking is checked.');
		browser.sleep(1000);
		expect(security_Controls_Page.fileBlockingCheckbox_GetState()).toBe('true');
	});	
	
	it('Check for uncheck dialogue box when unchecking Enable File Blocking box', function () {
		
		console.log('\nCheck for uncheck dialogue box when unchecking Enable File Blocking box.');
		security_Controls_Page.fileBlocking();
		browser.sleep(4000);
		
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);

		element(by.css('span[ng-bind-html="title"]')).getText().then(function(text){
			console.log('\nValidating window text');		
			console.log('Window message is - '+text);
			browser.sleep(1000);
			expect(text).toEqual(data.fileBlock_Page_Data.uncheck_message);
			element.all(by.buttonText('No')).click();
			browser.sleep(1000);
		});
	});		

	it('Click Enable file Blocking customize button', function () {
		
		console.log('\nClick Enable file Blocking customize button.');
		security_Controls_Page.customizeButton_Click();
        browser.sleep(1000);
	});
	
	it('Removing items from Blocked File Type', function () {
		
		console.log('\nRemoving items from Blocked File Type.');
		for(i=0;i<removal_count;i++){
			security_Controls_Page.deleteBlockedFilev2_Click();
			browser.sleep(1000);
		};
		
		security_Controls_Page.blockedFileType_List().then(function(items){
			
			console.log('Validating count of blocked file type items.');
			browser.sleep(1000);
			expect(items.length).toEqual((blocked_file_type_length - removal_count));
		});
	});

	it('Removing items from Allowed Applications', function () {
		
		console.log('\nRemoving items from Allowed Applications.');
		for(i=0;i<removal_count;i++){
			security_Controls_Page.deleteAllowedApplicationsv2_Click();
			browser.sleep(1000);
		};
		
		security_Controls_Page.allowedApplications_List().then(function(items){
			
			console.log('Validating count of allowed applications.');
			browser.sleep(1000);
			expect(items.length).toEqual((allowed_applications_length - removal_count));
		});
	});		

	
	it('Removing items from Domiain Exceptions', function () {
		
		console.log('\nRemoving items from Domain Exceptions.');
		for(i=0;i<removal_count;i++){
			security_Controls_Page.deleteDomainExceptionv2_Click();
			browser.sleep(1000);
		};
		
		security_Controls_Page.domainException_List().then(function(items){
			
			console.log('Validating count of Domain Exceptions.');
			browser.sleep(1000);
			expect(items.length).toEqual((blocked_file_type_length - removal_count));
		});
	});	
	it('Save file blocking settings again', function () {
		
		console.log('\nSave file blocking settings again.');
		security_Controls_Page.saveFileBlock_Click();
		browser.sleep(1000);
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
	});		
	
	it('Click Enable File Blocking customize button again', function () {
		
		console.log('\nClick Enablefile Blocking customize button again.');
		security_Controls_Page.customizeButton_Click();
        browser.sleep(1000);
	});
	
	it('Validate blocked file type, allowed application, and domain exceptions length', function () {
		
		security_Controls_Page.blockedFileType_List().then(function(items){
			
			console.log('Validating count of blocked file type items.');
			browser.sleep(1000);
			expect(items.length).toEqual((blocked_file_type_length - removal_count));
		});

		security_Controls_Page.allowedApplications_List().then(function(items){
			
			console.log('Validating count of Allowed Applications items.');
			browser.sleep(1000);
			expect(items.length).toEqual(allowed_applications_length - removal_count);
		});	
		
		security_Controls_Page.domainException_List().then(function(items){
			
			console.log('Validating count of Domain Exceptions items.');
			browser.sleep(1000);
			expect(items.length).toEqual(domain_exception_length - removal_count);
		});		

	});	
	
	it('Clear out blocked file type, allowed applications, and domain exception items', function () {
		console.log('\nClear out blocked file type, allowed applications, and domain exception items.');
		
		console.log('\nRemoving items from Blocked File Type.');
		for(i=0;i<(blocked_file_type_length - removal_count);i++){
			if (i == (blocked_file_type_length - removal_count) - 1) {
				security_Controls_Page.blockedFileTypev2_Clear();
				browser.sleep(1000);
			} else{
				security_Controls_Page.deleteBlockedFilev2_Click();
				browser.sleep(1000);
			}
		};	

		console.log('\nRemoving items from Allowed Applications.');
		for(i=0;i<(allowed_applications_length - removal_count);i++){
			if (i == (allowed_applications_length - removal_count) - 1) {
				security_Controls_Page.allowedApplicationsv2_Clear();
				browser.sleep(1000);
			} else{
				security_Controls_Page.deleteAllowedApplicationsv2_Click();
				browser.sleep(1000);
			}
		};

		console.log('\nRemoving items from Domain Exception.');
		for(i=0;i<(domain_exception_length - removal_count);i++){
			if (i == (domain_exception_length - removal_count) - 1) {
				security_Controls_Page.domainExceptionv2_Clear();
				browser.sleep(1000);
			} else{
				security_Controls_Page.deleteDomainExceptionv2_Click();
				browser.sleep(1000);
			}
		};			
	});
	
	it('Save empty file blocked file type and allowed application fields', function () {
		
		console.log('\nSave empty file blocked file type and allowed application fields.');
		security_Controls_Page.saveFileBlock_Click();
		browser.sleep(1000);
	
	});	

	it('Uncheck enable file blocking box', function () {
		console.log('\nUncheck enable file blocking box.');
		security_Controls_Page.fileBlocking();
        // browser.sleep(4000);
        // security_Controls_Page.fileAuditing();
        browser.sleep(1000);
	});			
			
	it('logout', function () {
        browser.sleep(1000);
		common_Component.appLogout();
	});			
	
});