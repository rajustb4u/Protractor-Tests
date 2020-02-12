describe('Acumen DirectoryServices Add Page Validation Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-628  Add Directory Service - UI check: Validate Errors for each field', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickAddDirectoryServices();
        browser.sleep(1000);

        //NAME Field
        browser.sleep(1000);
        directoryService_Page.clickNameField();
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName_Validation);
        browser.sleep(1000);

        expect(common_Component.getElementErrorByName('name')).toEqual(data.directoryServicesPage_data.directoryServicesName_errorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesName_errorMsg);

        //Error capture telling that the NAME filed is required
        directoryService_Page.clearNameField();
        expect(common_Component.getElementErrorByName('name')).toEqual(data.directoryServicesPage_data.directoryServicesName_RequirederrorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesName_RequirederrorMsg);

        //BASE DN Field
        directoryService_Page.clickBaseDN();
        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesBaseDN_Validation);
        browser.sleep(1000);

        expect(common_Component.getElementErrorByName('connection_obj_base_dn')).toEqual(data.directoryServicesPage_data.directoryServicesBaseDN_errorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesBaseDN_errorMsg);

        //Error capture telling that the BASE DN filed is required
        directoryService_Page.clearBaseDN();
        expect(common_Component.getElementErrorByName('connection_obj_base_dn')).toEqual(data.directoryServicesPage_data.directoryServicesBaseDN_RequirederrorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesBaseDN_RequirederrorMsg);

        //BIND DN Field
        directoryService_Page.clickBindDN();
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesBindDN_Validation);
        browser.sleep(1000);

        expect(common_Component.getElementErrorByName('connection_obj_bind_dn')).toEqual(data.directoryServicesPage_data.directoryServicesBindDN_errorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesBindDN_errorMsg);

        //Error capture telling that the BIND DN filed is required
        directoryService_Page.clearBindDN();
        expect(common_Component.getElementErrorByName('connection_obj_base_dn')).toEqual(data.directoryServicesPage_data.directoryServicesBindDN_RequirederrorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesBindDN_RequirederrorMsg);

        //USER NAME Field
        directoryService_Page.clickUserName();
        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesUN_Valid);
        //Error capture telling that the USER NAME filed is required
        directoryService_Page.clearUserName();
        expect(common_Component.getElementErrorByName('connection_obj_username')).toEqual(data.directoryServicesPage_data.directoryServicesUserName_RequirederrorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesUserName_RequirederrorMsg);

        //Password Field
        directoryService_Page.clickPassword();
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesPWD_Valid);
        browser.sleep(1000);

        expect(common_Component.getElementErrorByName('connection_obj_password')).toEqual(data.directoryServicesPage_data.directoryServicesPWD_errorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesPWD_errorMsg);

        //Error capture telling that the BIND DN filed is required
        directoryService_Page.clearPassword();
        expect(common_Component.getElementErrorByName('connection_obj_base_dn')).toEqual(data.directoryServicesPage_data.directoryServicesPWD_RequirederrorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesPWD_RequirederrorMsg);

        //Server Field
        directoryService_Page.click_ServerName();
        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer_Validation);
        browser.sleep(1000);

        expect(common_Component.getElementErrorByName('connection_obj_servers_0_server')).toEqual(data.directoryServicesPage_data.directoryServicesServer_errorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesServer_errorMsg);

        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);
        directoryService_Page.clear_ServerName();

        //Validating the dependable error message when we enter the server and it tells port is required:
        expect(common_Component.getElementErrorByName('connection_obj_servers_0_server')).toEqual(data.directoryServicesPage_data.directoryServicesServer_RequirederrorMsg);
        console.log("Error Message for Directory Services server after Port is entered & Server name is cleared: " + data.directoryServicesPage_data.directoryServicesServer_RequirederrorMsg);
        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer);

        //Port Field
        directoryService_Page.clear_Port();
        // directoryService_Page.click_Port();
        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort_Validation);
        browser.sleep(1000);

        expect(common_Component.getElementErrorByName('connection_obj_servers_0_port')).toEqual(data.directoryServicesPage_data.directoryServicesPort_errorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesPort_errorMsg);

        directoryService_Page.clear_Port();
        // directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);
        // directoryService_Page.clear_ServerName();

        //Validating the dependable error message when we clear the port and it tells server is required:
        expect(common_Component.getElementErrorByName('connection_obj_servers_0_port')).toEqual(data.directoryServicesPage_data.directoryServicesPor_RequirederrorMsg);
        console.log("Error Message for Directory Services port after Server is cleared: " + data.directoryServicesPage_data.directoryServicesPor_RequirederrorMsg);

        browser.sleep(1000);
        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        //Click cancel on message box
        directoryService_Page.addDirecotoryServices_CancelMessageButton();
        browser.sleep(1000);

        common_Component.appLogout();
    });
});