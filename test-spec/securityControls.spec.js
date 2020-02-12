	describe('Acumen SECURITY CONTROLS PAGE Validation: ', function() {
	//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

        it('    AC - 1294:Security Controls - UI check, AC - 1659:Security Controls - Functional check ', function() {
            var security_Controls_Page = new securityControls_Page();
            common_Component.appLogin();
            browser.sleep(1000);
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            //Click on *'Back' button* on the footer. *'Policies'* page appears.
            security_Controls_Page.securityControls_Back();
            browser.sleep(1000);

            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);
            //Click on Next - Activation Request button* on the footer. *'Activation Request'* page appears.
            security_Controls_Page.submitSecurity_Controls();

            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);

            // Open *Security Controls* page and un-check any check box. Click on 'Next - Activation Request'* button.
            // Open Security Controls page again. All *changes* were *saved* after clicking on 'Next' button.
            security_Controls_Page.globalBan();
            security_Controls_Page.securityControls_Back();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);
            expect(security_Controls_Page.globalBanCheckbox_GetState()).toEqual(null);
            console.log('GLOBAL BAN checkbox is in un-checked state we un-check and go to next page and come back:');

            //1. Open *Security Controls* page and un-check any check box. Click on another tab. Open Security Controls page again. All check-boxes are still checked and changes not saved.
            //Validating Anti Virus checkbox and the content
            security_Controls_Page.threat_Management();
            browser.sleep(1000);
            security_Controls_Page.securityControls_Back();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);
            expect(security_Controls_Page.threatManagementCheckbox_GetState()).toEqual(null);
            console.log('Threat Management checkbox is in checked state though we un-check and go to other page and come back:');

            security_Controls_Page.anti_Virus();
            security_Controls_Page.securityControls_Back();
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.threatManagementCheckbox_GetState()).toEqual(null);
            console.log('Anti Virus checkbox is in checked state though we un-check and go to other page and come back:');
            browser.sleep(1000);

            security_Controls_Page.anti_Spyware();
            security_Controls_Page.securityControls_Back();
            browser.sleep(1000);
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.threatManagementCheckbox_GetState()).toEqual(null);
            console.log('Anti Spyware checkbox is in checked state though we un-check and go to other page and come back:');
            browser.sleep(1000);

            security_Controls_Page.url_Filtering();
            security_Controls_Page.securityControls_Back();
            browser.sleep(1000);
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.threatManagementCheckbox_GetState()).toEqual(null);
            console.log('URL Filtering checkbox is in un-checked state we un-check and go to next page and come back:');

            security_Controls_Page.dnsSinkHole();
            security_Controls_Page.securityControls_Back();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);
            expect(security_Controls_Page.dnsSinkHoleCheckbox_GetState()).toEqual(null);
            console.log('DNS SINKHOLE checkbox is in un-checked state we un-check and go to next page and come back:');
            browser.sleep(1000);

            security_Controls_Page.externalIPBlock();
            browser.sleep(1000);
            // security_Controls_Page.securityControls_Back();
            // security_Controls_Page.security_Controls_Link();
            // expect(security_Controls_Page.externalIPBlockCheckBox_GetState()).toEqual(null);
            // console.log('External IP Block checkbox is in un-checked state we un-check and go to next page and come back:');
            // browser.sleep(1000);

            //*Un-check all* Security Controls check-boxes The *"Next"* button became *disabled* if no Security controls are selected.
            expect(security_Controls_Page.submitSecurity_Controls_GetState()).toEqual(null);
            console.log('When all the checkboxes are un-checked the Next button is disabled:');
            browser.sleep(1000);

            // Open *Security Controls* page and un-check any check box. Click on 'Next - Activation Request'* button.
            // Open Security Controls page again. All *changes* were *saved* after clicking on 'Next' button.
            security_Controls_Page.globalBan();
            browser.sleep(1000);
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.globalBanCheckbox_GetState()).toEqual('true');
            console.log('GLOBAL BAN checkbox is in checked state after check and go to next page and come back:');

            security_Controls_Page.threat_Management();
            browser.sleep(1000);
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.threatManagementCheckbox_GetState()).toEqual('true');
            console.log('THREAT MANAGEMENT checkbox is in checked state we un-check and go to next page and come back:');

            security_Controls_Page.anti_Virus();
            browser.sleep(1000);
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.antiVirusCheckbox_GetState()).toEqual('true');
            console.log('ANTI_VIRUS checkbox is in checked state we un-check and go to next page and come back:');

            security_Controls_Page.anti_Spyware();
            browser.sleep(1000);
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.antiSpywareCheckbox_GetState()).toEqual('true');
            console.log('ANTI-SPYWARE checkbox is in checked state we un-check and go to next page and come back:');

            security_Controls_Page.url_Filtering();
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.urlFilteringCheckbox_GetState()).toEqual('true');
            console.log('URL FILTERING checkbox is in checked state we un-check and go to next page and come back:');

            //by default File Auditing & File Blocking is un-checked.
            expect(security_Controls_Page.fileAuditingCheckbox_GetState()).toEqual(null);
            console.log('FILE AUDITING checkbox is in un-checked state we un-check and go to next page and come back:');

            expect(security_Controls_Page.fileBlockingCheckbox_GetState()).toEqual(null);
            console.log('FILE BLOCKING checkbox is in un-checked state we un-check and go to next page and come back:');

            security_Controls_Page.dnsSinkHole();
            browser.sleep(1000);
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            expect(security_Controls_Page.dnsSinkHoleCheckbox_GetState()).toEqual('true');
            console.log('DNS SINKHOLE checkbox is in un-checked state we checked and go to next page and come back:');
            browser.sleep(1000);

            security_Controls_Page.externalIPBlock();
            browser.sleep(1000);
            security_Controls_Page.submitSecurity_Controls();
            security_Controls_Page.security_Controls_Link();
            browser.sleep(1000);
            expect(security_Controls_Page.externalIPBlockCheckBox_GetState()).toEqual('true');
            console.log('External IP Block checkbox is in un-checked state we checked and go to next page and come back:');
            browser.sleep(1000);
            common_Component.appLogout();
        });
    });