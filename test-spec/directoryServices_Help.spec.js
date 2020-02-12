describe('Acumen DirectoryServices_Help Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-1151 Add Directory Service - Help Section: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.addAnother_DirectoryServices();

        browser.sleep(1000);
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName);
        expect(directoryService_Page.getHelpForDS()).toEqual(data.directoryServicesPage_data.helpDS_Name);
        console.log('Help text for Directory Services Name & Address are verified: '+data.directoryServicesPage_data.helpDS_Name);

        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesBaseDN);
        expect(directoryService_Page.getHelpForDS()).toEqual(data.directoryServicesPage_data.helpDSBase_BindDN);
        console.log('Help text for Directory Services Base DN & Bind DN are verified: '+data.directoryServicesPage_data.helpDSBase_BindDN);
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesBindDN);

        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesUserName);
        // expect(directoryService_Page.getHelpForDS()).toEqual(data.directoryServicesPage_data.helpDSBase_BindDN);
        console.log('Help text for Directory Services UserName & Password are verified: '+data.directoryServicesPage_data.helpDSBase_BindDN);
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesPWD);

        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer);
        expect(directoryService_Page.getHelpForDS()).toEqual(data.directoryServicesPage_data.helpDSServer_Port);
        console.log('Help text for Directory Services Server & Port are verified: '+data.directoryServicesPage_data.helpDSServer_Port);
        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);

        directoryService_Page.submitAddDirectoryServices();
        browser.sleep(1000);
    });

    it('AC-1151 Edit Directory Service - Help Section: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickDetailViewButton();
        browser.sleep(1000);
        directoryService_Page.clickEditButton();
        browser.sleep(1000);

        directoryService_Page.clearNameField();
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName);
        expect(directoryService_Page.getHelpForDS()).toEqual(data.directoryServicesPage_data.helpDS_Name);
        console.log('Help text for Directory Services Name & Address are verified: '+data.directoryServicesPage_data.helpDS_Name);

        directoryService_Page.clearBaseDN();
        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesBaseDN);
        expect(directoryService_Page.getHelpForDS()).toEqual(data.directoryServicesPage_data.helpDSBase_BindDN);
        console.log('Help text for Directory Services Base DN & Bind DN are verified: '+data.directoryServicesPage_data.helpDSBase_BindDN);
        directoryService_Page.clearBindDN();
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesBindDN);

        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesUserName);
        directoryService_Page.clearUserName();
        // expect(directoryService_Page.getHelpForDS()).toEqual(data.directoryServicesPage_data.helpDSBase_BindDN);
        console.log('Help text for Directory Services UserName & Password are verified: '+data.directoryServicesPage_data.helpDSBase_BindDN);
        directoryService_Page.clearPassword();
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesPWD);

        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        //Click cancel on message box
        directoryService_Page.addDirecotoryServices_CancelMessageButton();
        browser.sleep(1000);

        common_Component.appLogout();
    });
});