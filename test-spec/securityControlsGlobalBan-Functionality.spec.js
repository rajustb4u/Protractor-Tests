	describe('SECURITY CONTROLS PAGE Global Ban', function() {
	//var logger = require('../scripts/log.js');
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');

		it('    AC - xxxx, Security Controls Global Ban Functionality with Error Messages: ', function() {
            var security_Controls_Page = new securityControls_Page();
            // common_Component.appLogin();
            // browser.sleep(1000);
            // security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            //Check Enable File Auditing and validate
            security_Controls_Page.customizeGlobalBan_Click();
            browser.sleep(1000);
            if(expect(security_Controls_Page.saveGlobalBan_getState()).toEqual(null)) {
                console.log('Global Ban Save button is in Enabled State: ');
                browser.sleep(1000);

                security_Controls_Page.deleteGlobalBanApplication3_Click();
                security_Controls_Page.deleteGlobalBanApplication2_Click();
                security_Controls_Page.deleteGlobalBanApplication1_Click();
            }

            if(expect(security_Controls_Page.addGlobalBanApplication_getState()).toEqual(null)) {
                security_Controls_Page.addGlobalBanApplication_Click();
                security_Controls_Page.globalBanApp4_text(data.globalBan_Data.globalBan_App_Validation);
                security_Controls_Page.portGlobalBan_Click();
                browser.sleep(1000);
                if(expect(common_Component.getElementErrorByInputName('applications_4503599627370495_name')).toEqual(data.globalBan_Data.globalBan_App_ErrorMessage)) {
                    console.log('The Error message captured for Application Name: ' + data.globalBan_Data.globalBan_App_ErrorMessage);
                    if(expect(security_Controls_Page.saveGlobalBan_getState()).toEqual('true')) {
                        console.log('Save Global Ban Button is disabled when we have the validation error message: ');
                        security_Controls_Page.globalBanApp4_Clear();
                        browser.sleep(1000);
                        security_Controls_Page.globalBanApp4_text(data.globalBan_Data.globalBan_App);
                        security_Controls_Page.portGlobalBan_Click();
                        browser.sleep(1000);
                    }
                }
            }

            if(expect(security_Controls_Page.addGlobalBanPort_getState()).toEqual('true')) {
                security_Controls_Page.portGlobalBan_text(data.globalBan_Data.globalBan_Port_Validation);
                browser.sleep(1000);
                if(expect(common_Component.getElementErrorByInputName('ports_0_port')).toEqual(data.globalBan_Data.globalBan_Port_ErrorMessage)) {
                    console.log('The Error message captured for Port: ' + data.globalBan_Data.globalBan_Port_ErrorMessage);
                    if(expect(security_Controls_Page.saveGlobalBan_getState()).toEqual('true')) {
                        console.log('Save Global Ban Button is disabled when we have the validation error message: ');
                        security_Controls_Page.portGlobalBan_Clear();
                        browser.sleep(1000);
                        security_Controls_Page.portGlobalBan_text(data.globalBan_Data.globalBan_Port);
                    }
                }
            }

            if(expect(security_Controls_Page.cancelGlobalBan_getState()).toEqual(null)) {
                security_Controls_Page.cancelGlobalBan_Click();
                browser.sleep(1000);
                security_Controls_Page.cancelGlobalBan_Ok_Click();
            }
            common_Component.appLogout();
		});
	});
