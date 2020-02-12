describe('Acumen DirectoryServices Add Page Validation Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-628  Add Directory Service - UI check 1. *"Cancel"* button *closes the form* *Directory Service* was *not created*.', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);

        directoryService_Page.clickAddDirectoryServices();
        browser.sleep(1000);
        directoryService_Page.clickNameField();
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName_Validation);
        browser.sleep(1000);

        expect(common_Component.getElementErrorByName('name')).toEqual(data.directoryServicesPage_data.directoryServicesName_errorMsg);
        console.log("Error Message for Directory Services Name: " + data.directoryServicesPage_data.directoryServicesName_errorMsg);

        //validating the Submit Directory Services button state.
        expect(directoryService_Page.submitAddDirectoryServices_State()).toEqual('true');
        browser.sleep(1000);
        directoryService_Page.directoryServices_ClickCancel();
        browser.sleep(1000);
        //Click cancel on message box
        directoryService_Page.addDirecotoryServices_CancelMessageButton();
    });
});