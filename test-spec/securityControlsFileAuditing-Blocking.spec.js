	describe('SECURITY CONTROLS PAGE FileAuditing & FileBlocking', function() {
	//var logger = require('../scripts/log.js');
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');

		it('    AC - xxxx, Security Controls FileAuditing & FileBlocking: ', function() {
            var security_Controls_Page = new securityControls_Page();
            common_Component.appLogin();
            browser.sleep(1000);
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            //Check Enable File Auditing and validate
            security_Controls_Page.fileAuditing();
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);
            expect(security_Controls_Page.fileAuditingCheckbox_GetState()).toEqual('true');
            console.log('FILE AUDITING checkbox is in checked:');
            browser.sleep(1000);

            //Check Enable File Blocking and cancel file block page
            security_Controls_Page.fileBlocking();
            browser.sleep(1000);

            if(expect(security_Controls_Page.addBlockedFile_getState()).toEqual('true')) {
                console.log('Add button for Blocked File Type is in Disabled State:');
                security_Controls_Page.blockedFileType_text(data.fileBlock_Page_Data.blockedFileType);
            }
            if(expect(security_Controls_Page.addAllowedApplications_getState()).toEqual('true')) {
                console.log('Add button for Allowed Applications is in Disabled State:');
                security_Controls_Page.addAllowedApplications_Click(data.fileBlock_Page_Data.allowedApplication);
            }

            security_Controls_Page.cancelFileBlock_Click();
            browser.sleep(1000);
            security_Controls_Page.cancelFileBlock_OK_Click();

            //Check Enable File Blocking, enter few data validate the File Block page and save.
            security_Controls_Page.customizeButton_Click();
            browser.sleep(1000);
            if(expect(security_Controls_Page.addBlockedFile_getState()).toEqual('true')) {
                security_Controls_Page.blockedFileType_text(data.fileBlock_Page_Data.blockedFileType);
                browser.sleep(1000);
                console.log('Add button for Blocked File Type is in Enabled State:');
                security_Controls_Page.addBlockedFile_Click();
            }

            if(expect(security_Controls_Page.addAllowedApplications_getState()).toEqual('true')) {
                security_Controls_Page.allowedApplications_text(data.fileBlock_Page_Data.allowedApplication);
                browser.sleep(1000);
                console.log('Add button for Allowed Applications is in Enabled State:');
                security_Controls_Page.addAllowedApplications_Click();
            }

            if(expect(security_Controls_Page.deleteBlockedFile_getState()).toEqual(null)) {
                console.log('Delete button for Blocked File Type is in Enabled State:');
                security_Controls_Page.deleteBlockedFile1_Click();
            }
            // if(expect(security_Controls_Page.deleteAllowedApplications_getState()).toEqual(null)) {
            //     console.log('Delete button for allowed Applications is in Enabled State:');
            //     security_Controls_Page.deleteAllowedApplications1_Click();
            // }
            security_Controls_Page.blockedFile_Clear();
            security_Controls_Page.allowedApplications_Clear();
            browser.sleep(1000);
            security_Controls_Page.saveFileBlock_Click();
            browser.sleep(1000);

            security_Controls_Page.fileBlocking();
            // security_Controls_Page.fileBockUnCheckConform_Click();
            browser.sleep(1000);
            security_Controls_Page.fileAuditing();
            security_Controls_Page.submitSecurity_Controls();
            browser.sleep(1000);
            common_Component.appLogout();
		});
	});
