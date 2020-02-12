	describe('SECURITY CONTROLS PAGE Global Ban', function() {
	//var logger = require('../scripts/log.js');
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');

		it('    AC - xxxx, Security Controls Global Ban: ', function() {
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

                //validation with the Global BAN Application attributes "place holder, name, min length, max length, field label"
                expect(security_Controls_Page.gBApp_placeholderAttr()).toMatch(data.globalBan_Data.globalBan_App_PlaceHolder_Attribute);
                console.log('Application Placeholder verification done: ' + data.globalBan_Data.globalBan_App_PlaceHolder_Attribute);
                expect(security_Controls_Page.gBApp_fieldLabelAttr()).toMatch(data.globalBan_Data.globalBan_Label_Attribute);
                console.log('Application Field label verification done: ' + data.globalBan_Data.globalBan_Label_Attribute);
                expect(security_Controls_Page.gBApp_minlengthAttr()).toMatch(data.globalBan_Data.globalBan_App_minLength_Attribute);
                console.log('Application Min Length verification done: ' + data.globalBan_Data.globalBan_App_minLength_Attribute);
                expect(security_Controls_Page.gBApp_maxlengthAttr()).toMatch(data.globalBan_Data.globalBan_App_maxLength_Attribute);
                console.log('Application Max Length verification done: ' + data.globalBan_Data.globalBan_App_maxLength_Attribute);
            }

            if(expect(security_Controls_Page.addGlobalBanPort_getState()).toEqual('true')) {
                console.log('Add Button for Port is Disabled: ');
                //validation with the Global BAN Port attributes "place holder, name, max length, field label"
                expect(security_Controls_Page.gBPrt_placeholderAttr()).toMatch(data.globalBan_Data.globalBan_Port_PlaceHolder_Attribute);
                console.log('Port Placeholder verification done: ' + data.globalBan_Data.globalBan_Port_PlaceHolder_Attribute);
                expect(security_Controls_Page.gBPrt_fieldLabelAttr()).toMatch(data.globalBan_Data.globalBan_Port_Label_Attribute);
                console.log('Port Field label verification done: ' + data.globalBan_Data.globalBan_Port_Label_Attribute);
                expect(security_Controls_Page.gBPrt_name()).toMatch(data.globalBan_Data.globalBan_Port_name_Attribute);
                console.log('Port Name verification done: ' + data.globalBan_Data.globalBan_Port_name_Attribute);
                expect(security_Controls_Page.gBPrt_maxlengthAttr()).toMatch(data.globalBan_Data.globalBan_Port_maxLength_Attribute);
                console.log('Port Max Length verification done: ' + data.globalBan_Data.globalBan_Port_maxLength_Attribute);
            }

            if(expect(security_Controls_Page.cancelGlobalBan_getState()).toEqual(null)) {
                security_Controls_Page.cancelGlobalBan_Click();
                browser.sleep(1000);
                security_Controls_Page.cancelGlobalBan_Ok_Click();
            }
            // common_Component.appLogout();
		});
	});
