describe('Acumen Add_DirectoryServices Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-675  Add Directory Service - Server & Port, Validate the Server & Port fields: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        expect(directoryService_Page.nextHostsButton_State()).toEqual(null);
        //validating Next-Policies button
        directoryService_Page.nextHosts_Button();
        expect(directoryService_Page.hostPage_Text()).toEqual(data.directoryServicesPage_data.directoryServices_nextButtonText)
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickAddDirectoryServices();
        browser.sleep(1000);

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

        //Navigate to Server & Port fields 1) Both fields are empty "+ ADD SERVER" button *should* be grayed out, "DELETE" button *shouldn't* be displayed near "Port" field
       //Validating Add Server button, its disabled.
        expect(directoryService_Page.getAddServerButtonState()).toEqual('true');

        //Add first Server & Ports
        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer);
        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);
        directoryService_Page.clickAddServerButton();
        browser.sleep(1000);
        //Validating the Delete button, its in disabled state:
        console.log('Delete button is enabled after Add Server: ');
        expect(directoryService_Page.getdeleteServerButtonState()).toEqual(null);

        //Add second server & port
        directoryService_Page.enter_ServerName_1(data.directoryServicesPage_data.directoryServicesServer_1);
        directoryService_Page.enter_Port_1(data.directoryServicesPage_data.directoryServicesPort_1);
        expect(directoryService_Page.getAddServerButtonState()).toEqual(null);
        directoryService_Page.clickAddServerButton();
        browser.sleep(1000);
        //Add Third server & port
        browser.sleep(1000);
        directoryService_Page.enter_ServerName_2(data.directoryServicesPage_data.directoryServicesServer_2);
        directoryService_Page.enter_Port_2(data.directoryServicesPage_data.directoryServicesPort_2);
        expect(directoryService_Page.getAddServerButtonState()).toEqual(null);
        directoryService_Page.clickAddServerButton();
        browser.sleep(1000);

        //Add Fourth server & port
        browser.sleep(1000);
        directoryService_Page.enter_ServerName_3(data.directoryServicesPage_data.directoryServicesServer_3);
        directoryService_Page.enter_Port_3(data.directoryServicesPage_data.directoryServicesPort_3);
        expect(directoryService_Page.getAddServerButtonState()).toEqual(null);
        directoryService_Page.clickAddServerButton();
        browser.sleep(1000);

        //Add Fifth server & port
        browser.sleep(1000);
        directoryService_Page.enter_ServerName_4(data.directoryServicesPage_data.directoryServicesServer_4);
        directoryService_Page.enter_Port_4(data.directoryServicesPage_data.directoryServicesPort_4);
        expect(directoryService_Page.getAddServerButtonState()).toEqual(null);
        directoryService_Page.clickAddServerButton();
        browser.sleep(1000);

        //Add Sixth server & port
        browser.sleep(1000);
        directoryService_Page.enter_ServerName_5(data.directoryServicesPage_data.directoryServicesServer_5);
        directoryService_Page.enter_Port_5(data.directoryServicesPage_data.directoryServicesPort_5);
        expect(directoryService_Page.getAddServerButtonState()).toEqual(null);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual(null);
        browser.sleep(1000);

        //Create 5 and then delete 4. Create 2 and than delete 1. *DELETE* button  *should disappear* when only one Server left in the list
        directoryService_Page.ClickDeleteServer_5();
        directoryService_Page.ClickDeleteServer_4();
        directoryService_Page.ClickDeleteServer_3();
        directoryService_Page.ClickDeleteServer_2();
        directoryService_Page.ClickDeleteServer_1();

        // expect(directoryService_Page.getdeleteServerButtonState()).toEqual('true');

        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        //Click cancel on message box
        directoryService_Page.addDirecotoryServices_CancelMessageButton();
        browser.sleep(1000);

        // directoryService_Page.submitAddDirectoryServices();
        // browser.sleep(1000);

        common_Component.appLogout();
    });
});