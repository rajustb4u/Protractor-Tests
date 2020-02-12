describe('Acumen DirectoryServices_ListView Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-659 [Directory Services List View] UI check: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.addAnother_DirectoryServices();
        browser.sleep(1000);

        //create Directory Services with *long strings* in 'Name', 'Connection Details' and 'Username' fields.
        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');
        browser.sleep(1000);

        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesLongName);
        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesLongBaseDN);
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesLongBindDN);
        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesLongUserName);
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesLongPassword);
        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesLongServerName);
        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesLongPortName);
        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual(null);
        browser.sleep(1000);

        directoryService_Page.submitAddDirectoryServices();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});