	describe('SECURITY CONTROLS PAGE External IP Block', function() {
	//var logger = require('../scripts/log.js');
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');

		it('    AC - xxxx, Security Controls External IP Block functionality validating cancel button after entering the data into fields: ', function() {
            var security_Controls_Page = new securityControls_Page();
            common_Component.appLogin();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            if(expect(security_Controls_Page.customizeIPBlock_getState()).toEqual(null)) {
                security_Controls_Page.customizeIPBlock_Click();
                security_Controls_Page.externalIPBlockList_text(data.externalIPBlock.externalIPBlockList);
                security_Controls_Page.blockedIP_text(data.externalIPBlock.blockedIP);
            }
            if(expect(security_Controls_Page.addBlockedIP_getState()).toEqual(null)) {
                security_Controls_Page.addBlockedIP_Click();
                security_Controls_Page.delete_BlockedIP1_Click();
            }

            security_Controls_Page.cancelIPBlock_Click();
            security_Controls_Page.cancelIPBlockOK_Click();
            // common_Component.appLogout();
		});

        it('    AC - xxxx, Security Controls External IP Block functionality validating cancel button after entering the data into fields: ', function() {
            var security_Controls_Page = new securityControls_Page();
            // common_Component.appLogin();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            if(expect(security_Controls_Page.customizeIPBlock_getState()).toEqual(null)) {
                security_Controls_Page.customizeIPBlock_Click();
                security_Controls_Page.externalIPBlockList_text(data.externalIPBlock.externalIPBlockList);
                if(expect(security_Controls_Page.addBlockedIP_getState()).toEqual('true')) {
                    console.log('The Add button for Blocked list URL is in disabled state: ');
                    security_Controls_Page.blockedIP_text(data.externalIPBlock.blockedIP);
                }
                if(expect(security_Controls_Page.addBlockedIP_getState()).toEqual(null)) {
                    security_Controls_Page.addBlockedIP_Click();

                    //1'st IP Address
                    security_Controls_Page.blockedIP1_text(data.externalIPBlock.blockedIP1);
                    security_Controls_Page.addBlockedIP_Click();

                    //2'nd IP Address
                    security_Controls_Page.blockedIP2_text(data.externalIPBlock.blockedIP2);
                    security_Controls_Page.addBlockedIP_Click();

                    //3'rd IP Address
                    security_Controls_Page.blockedIP3_text(data.externalIPBlock.blockedIP3);
                    security_Controls_Page.addBlockedIP_Click();

                    //4'th IP Address
                    security_Controls_Page.blockedIP4_text(data.externalIPBlock.blockedIP4);
                    security_Controls_Page.addBlockedIP_Click();

                    //5'th IP Address
                    security_Controls_Page.blockedIP5_text(data.externalIPBlock.blockedIP5);
                    security_Controls_Page.addBlockedIP_Click();

                    //6'th IP Address
                    security_Controls_Page.blockedIP6_text(data.externalIPBlock.blockedIP6);
                    security_Controls_Page.addBlockedIP_Click();

                    security_Controls_Page.delete_BlockedIP6_Click();
                    security_Controls_Page.delete_BlockedIP4_Click();
                    security_Controls_Page.delete_BlockedIP3_Click();
                }
            }
            security_Controls_Page.cancelIPBlock_Click();
            security_Controls_Page.cancelIPBlockOK_Click();

            common_Component.appLogout();
        });
	});
