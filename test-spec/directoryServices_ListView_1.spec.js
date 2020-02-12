describe('Acumen DirectoryServices_ListView Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-681 [Directory Services Details View] Functional test: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);

        for (i=0; i<5; i++) {
            directoryService_Page.addAnother_DirectoryServices();
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
        };
    });

    it('AC-681 [Directory Services Details View] Functional test: ', function() {

        var directoryService_Page = new directory_ServicePage();

        //Getting the List view items and the total number of directory services created.
        browser.sleep(1000);

        element.all(by.css('div[ng-controller="DirectoryServiceListViewController as $ctrl"]')).then(function(items) {
            console.log("Total Directory Services in the list: " +items.length);
            console.log("Directory Service Names from the list....");
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
        });
        common_Component.appLogout();
    });
});