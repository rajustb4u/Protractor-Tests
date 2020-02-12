describe('Acumen DirectoryServices_Edit Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-1213  Add / Edit Directory Service - Cancel button validating the cancel button after Editing the fields: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.addAnother_DirectoryServices();

        //1) Both drop-downs are *greyed out* and *not possible to change* them. *TYPE* drop-down contains *LDAP* value and *SUBTYPE* drop-down contains *Active Directory* value
        expect(directoryService_Page.dirServices_Type()).toEqual(data.directoryServicesPage_data.directoryServices_Type);
        console.log("Type of Directory Services: " + data.directoryServicesPage_data.directoryServices_Type);

        //1. Button *'Add Directory Service'* is disabled * when there is no value in Name field. *Directory Service was created* with appropriate Name.
        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');
        browser.sleep(1000);

        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName);
        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesBaseDN);
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesBindDN);
        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesUserName);
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesPWD);
        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer);
        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);
        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual(null);
        browser.sleep(1000);

        directoryService_Page.submitAddDirectoryServices();
        browser.sleep(1000);
        directoryService_Page.clickDetailViewButton();
        directoryService_Page.clickEditButton();
        browser.sleep(1000);

        //Open *Add/Edit Direcory Service* form and click on 'Cancel' button *without any changes*.
        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        directoryService_Page.clickDetailViewButton();
        directoryService_Page.clickEditButton();
        browser.sleep(1000);

        directoryService_Page.clearNameField();
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName);

        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        //Click cancel on message box
        directoryService_Page.addDirecotoryServices_CancelMessageButton();

        directoryService_Page.clickDetailViewButton();
        directoryService_Page.clickEditButton();
        browser.sleep(1000);

        //Validating the BASE DN field before editing it.
        expect(directoryService_Page.getBaseDN()).toEqual(data.directoryServicesPage_data.directoryServicesBaseDN);
        directoryService_Page.clearBaseDN();
        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesBaseDN);

        //Validating the BIND DN field before editing it.
        expect(directoryService_Page.getBindDN()).toEqual(data.directoryServicesPage_data.directoryServicesBindDN);
        directoryService_Page.clearBindDN();
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesBindDN);

        //Check the Require SSL/TLS.
        directoryService_Page.checkboxSSLTLS();

        //Validating the USERNAME field before editing it.
        expect(directoryService_Page.getUserName()).toEqual(data.directoryServicesPage_data.directoryServicesUserName);
        directoryService_Page.clearUserName();
        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesUserName);

        //Validating the PASSWORD field before editing it.
        directoryService_Page.passwordshowbutton();
        browser.sleep(1000);
        directoryService_Page.clearPassword();
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesPWD);

        browser.sleep(1000);
        directoryService_Page.updateDirecotryServicesButton();
        browser.sleep(1000);

        common_Component.appLogout();
    });
});