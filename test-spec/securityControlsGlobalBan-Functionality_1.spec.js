	describe('SECURITY CONTROLS PAGE Global Ban', function() {
	//var logger = require('../scripts/log.js');
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');

		it('    AC - xxxx, Security Controls Global Ban Functionality Adding Deleting the Application And Port Entries: ', function() {
            var security_Controls_Page = new securityControls_Page();
            common_Component.appLogin();
            browser.sleep(1000);
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            //Check Enable File Auditing and validate
            security_Controls_Page.customizeGlobalBan_Click();
            browser.sleep(1000);
            if(expect(security_Controls_Page.saveGlobalBan_getState()).toEqual(null)) {
                security_Controls_Page.portGlobalBan_Click();
                security_Controls_Page.addGlobalBanApplication_Click();
                console.log('Global Ban Save button is in Enabled State: ');
                browser.sleep(1000);
            }

            if(expect(security_Controls_Page.addGlobalBanApplication_getState()).toEqual('true')) {
                security_Controls_Page.globalBanApp4_text(data.globalBan_Data.globalBan_App);
                browser.sleep(1000);
                security_Controls_Page.portGlobalBan_Click();
            }

            if(expect(security_Controls_Page.addGlobalBanPort_getState()).toEqual('true')) {
                common_Component.selectItemDropDown('btn-append-to-body', 1);
                browser.sleep(1000);
                security_Controls_Page.portGlobalBan_text(data.globalBan_Data.globalBan_Port);
                browser.sleep(1000);
                security_Controls_Page.addGlobalBanPort_Click();
            }

            if(expect(security_Controls_Page.deleteGlobalBanPort1_getState()).toEqual(null)) {
                security_Controls_Page.deleteGlobalBanPort1_Click();
                browser.sleep(1000);
            }
            if(expect(security_Controls_Page.deleteGlobalBanApplication4_getState()).toEqual(null)) {
                security_Controls_Page.deleteGlobalBanApplication4_Click();
                security_Controls_Page.portGlobalBan_Clear();
                common_Component.selectItemDropDown('btn-append-to-body', 0);
                browser.sleep(1000);
                security_Controls_Page.saveGlobalBan_Click();
                browser.sleep(1000);
            }
            common_Component.appLogout();
		});
	});
