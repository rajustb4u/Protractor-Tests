describe('Acumen DirectoryServices_Edit Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-679  Edit Directory Service - Text fields, drop-downs and checkbox: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickAddDirectoryServices();

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

        //Validating the Directory Services Name field before editing it.
        // expect(directoryService_Page.getNameField()).toEqual(data.directoryServicesPage_data.directoryServicesName);
        directoryService_Page.clearNameField();
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName);

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

        // //Validating the SERVER NAME field before editing it.
        // expect(directoryService_Page.get_ServerName()).toEqual(data.directoryServicesPage_data.directoryServicesServer);
        // directoryService_Page.clear_ServerName();
        // directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer);
        //
        // //Validating the SERVER PORT field before editing it.
        // // expect(directoryService_Page.get_Port()).toEqual(data.directoryServicesPage_data.directoryServicesPort);
        // directoryService_Page.clear_Port();
        // directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);

        // //ADD SERVER button state
        // directoryService_Page.getAddServerButtonState(null);
        // directoryService_Page.clickAddServerButton();
        //
        // //DELTE SERVER button state
        // directoryService_Page.getdeleteServerButtonState(null);
        // directoryService_Page.ClickDeleteServer();

        browser.sleep(1000);
        directoryService_Page.updateDirecotryServicesButton();
        browser.sleep(1000);

        common_Component.appLogout();

    });


});