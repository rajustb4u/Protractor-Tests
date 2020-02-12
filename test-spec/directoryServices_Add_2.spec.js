describe('Acumen Add_DirectoryServices Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-671  Add Directory Service - Text fields, drop-downs and checkbox.', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
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

        //Etner Name and click on Directory Services Submit button to validate the button
        directoryService_Page.clickNameField();
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName);
        browser.sleep(1000);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');

        //Enter Base DN and click on Directory Services Submit button to validate the button
        directoryService_Page.clickBaseDN();
        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesBaseDN);
        browser.sleep(1000);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');

        //Enter Bind DN and click on Directory Services Submit button to validate the button
        directoryService_Page.clickBindDN();
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesBindDN);
        browser.sleep(1000);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');

        //Enter USER NAME and click on Directory Services Submit button to validate the button
        directoryService_Page.clickUserName();
        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesUserName);
        browser.sleep(1000);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');

        //Enter PASSWORD and click on Directory Services Submit button to validate the button
        directoryService_Page.clickPassword();
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesPWD);
        browser.sleep(1000);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');

        //Enter Server and click on Directory Services Submit button to validate the button
        directoryService_Page.click_ServerName();
        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');
        browser.sleep(1000);

        //Enter Port and click on Directory Services Submit button to validate the button
        directoryService_Page.click_Port();
        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);

        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual(null);
        browser.sleep(1000);

        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        //Click cancel on message box
        directoryService_Page.addDirecotoryServices_CancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});