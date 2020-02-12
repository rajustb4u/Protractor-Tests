	describe('SECURITY CONTROLS PAGE External IP Block', function() {
	//var logger = require('../scripts/log.js');
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');

		it('    AC - xxxx, Security Controls External IP Block Validating the Fields Name, Place Holder, MAx, Min Lengths: ', function() {
            var security_Controls_Page = new securityControls_Page();
            common_Component.appLogin();
            browser.sleep(1000);
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            if(expect(security_Controls_Page.customizeIPBlock_getState()).toEqual(null)) {
                security_Controls_Page.customizeIPBlock_Click();
            }

            if(expect(security_Controls_Page.saveIPBlock_getState()).toEqual(null)) {
                //validation with the External IP BlockList attributes "place holder, name, min length, max length, field label, required"
                if(expect(security_Controls_Page.eIPBL_placeholderAttr()).toMatch(data.externalIPBlock.externalIPBlockList_PlaceHolder_Attribute)) {
                    console.log('External IP BlockList Placeholder verification done: ' + data.externalIPBlock.externalIPBlockList_PlaceHolder_Attribute);
                }
                if(expect(security_Controls_Page.eIPBL_nameAttr()).toMatch(data.externalIPBlock.externalIPBlockList_name_Attribute)) {
                    console.log('External IP BlockList Name verification done: ' + data.externalIPBlock.externalIPBlockList_name_Attribute);
                }
                if(expect(security_Controls_Page.eIPBL_minlengthAttr()).toMatch(data.externalIPBlock.externalIPBlockList_minLength_Attribute)) {
                    console.log('External IP BlockList Min Length verification done: ' + data.externalIPBlock.externalIPBlockList_minLength_Attribute);
                }
                if(expect(security_Controls_Page.eIPBL_maxlengthAttr()).toMatch(data.externalIPBlock.externalIPBlockList_maxLength_Attribute)) {
                    console.log('External IP BlockList Max Length verification done: ' + data.externalIPBlock.externalIPBlockList_maxLength_Attribute);
                }
                if(expect(security_Controls_Page.eIPBL_fieldLabelAttr()).toMatch(data.externalIPBlock.externalIPBlockList_FieldLabel_Attribute)) {
                    console.log('External IP BlockList Field Label Attribute verification done: ' + data.externalIPBlock.externalIPBlockList_FieldLabel_Attribute);
                }
            }

            if(expect(security_Controls_Page.saveIPBlock_getState()).toEqual(null)) {
                //validation with the Block External IP attributes "place holder, name, min length, max length, field label, required"
                if(expect(security_Controls_Page.bEIP_placeholderAttr()).toMatch(data.externalIPBlock.blockedIP_PlaceHolder_Attribute)) {
                    console.log('Block External IP Placeholder verification done: ' + data.externalIPBlock.blockedIP_PlaceHolder_Attribute);
                }
                if(expect(security_Controls_Page.bEIP_nameAttr()).toMatch(data.externalIPBlock.blockedIP_Name_Attribute)) {
                    console.log('Block External IP Name verification done: ' + data.externalIPBlock.blockedIP_Name_Attribute);
                }
                // if(expect(security_Controls_Page.bEIP_minlengthAttr()).toMatch(data.externalIPBlock.blockedIP_minLength_Attribute)) {
                //     console.log('Block External IP Min Length verification done: ' + data.externalIPBlock.blockedIP_minLength_Attribute);
                // }
                // if(expect(security_Controls_Page.bEIP_maxlengthAttr()).toMatch(data.externalIPBlock.blockedIP_maxLength_Attribute)) {
                //     console.log('Block External IP Max Length verification done: ' + data.externalIPBlock.blockedIP_maxLength_Attribute);
                // }
                if(expect(security_Controls_Page.bEIP_fieldLabelAttr()).toMatch(data.externalIPBlock.blockedIP_FieldLabel_Attribute)) {
                    console.log('Block External IP Field Label Attribute verification done: ' + data.externalIPBlock.blockedIP_FieldLabel_Attribute);
                }
            }
            
            security_Controls_Page.cancelIPBlock_Click();
            common_Component.appLogout();
		});
	});
