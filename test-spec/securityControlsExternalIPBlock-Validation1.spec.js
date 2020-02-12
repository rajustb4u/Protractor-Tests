	describe('SECURITY CONTROLS PAGE External IP Block', function() {
	//var logger = require('../scripts/log.js');
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');

		it('    AC - xxxx, Security Controls External IP Block validating the error message for all the fields: ', function() {
            var security_Controls_Page = new securityControls_Page();
            common_Component.appLogin();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            if(expect(security_Controls_Page.customizeIPBlock_getState()).toEqual(null)) {
                security_Controls_Page.customizeIPBlock_Click();
            }

            if(expect(security_Controls_Page.saveIPBlock_getState()).toEqual(null)) {
                security_Controls_Page.externalIPBlockList_text(data.externalIPBlock.externalIPBlockList_Validation);
                browser.sleep(1000);
                //capturing the error message for External IP Blocked URL and validating it.
                if(expect(common_Component.getElementErrorByInputName('url')).toEqual(data.externalIPBlock.externalIPBlockList_ErrorMessage)) {
                    console.log('The Error message captured for External IP BLockList URL: '+data.externalIPBlock.externalIPBlockList_ErrorMessage);
                   if(expect(security_Controls_Page.saveIPBlock_getState()).toEqual('true')) {
                       console.log('Save Button is disabled when we have the validation error message: ');
                   }
                }
            }

            // if(expect(security_Controls_Page.saveIPBlock_getState()).toEqual('true')) {
            //     security_Controls_Page.blockedIP_text(data.externalIPBlock.blockedIP_Validation);
            //     browser.sleep(1000);
            //     //capturing the error message for Blocked External IP list and validating it.
            //     if(expect(common_Component.getElementErrorByInputName('blocked_ips_0_ip')).toEqual(data.externalIPBlock.blockedIP_ErrorMessage)) {
            //         console.log('The Error message captured for Blocked External IP: '+data.externalIPBlock.blockedIP_ErrorMessage);
            //         if(expect(security_Controls_Page.saveIPBlock_getState()).toEqual('true')) {
            //             console.log('Save Button is disabled when we have the validation error message: ');
            //         }
            //     security_Controls_Page.blockedIP_clear();
            //     }
            //     security_Controls_Page.blockedIP_text(data.externalIPBlock.blockedIP_Validation1);
            //     browser.sleep(1000);
            //     //capturing the error message for Blocked External IP list and validating it.
            //     if(expect(common_Component.getElementErrorByInputName('blocked_ips_0_ip')).toEqual(data.externalIPBlock.blockedIP_ErrorMessage1)) {
            //         console.log('The Error message captured for Blocked External IP: ' + data.externalIPBlock.blockedIP_ErrorMessage1);
            //         if (expect(security_Controls_Page.saveIPBlock_getState()).toEqual('true')) {
            //             console.log('Save Button is disabled when we have the validation error message: ');
            //         }
            //     }
            // }

            security_Controls_Page.cancelIPBlock_Click();
            security_Controls_Page.cancelIPBlockOK_Click();
            common_Component.appLogout();
		});
	});
