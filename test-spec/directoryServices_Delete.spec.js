describe('Acumen Delete Directory Services Tests', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC - 684 - Delete Directory Services functionality Check: ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickDetailViewButton();
        browser.sleep(1000);

       // Button *'Delete' appeared near 'Edit'* button on Directory Service Details view.
        expect(directoryService_Page.removeDirectoryServicesButton_State()).toEqual(null);
        directoryService_Page.removeDirectoryServicesButton();
        browser.sleep(1000);

        //*Confirmation dialog* "Are you sure you want to delete _Directory Service name in Upper-case_?" is *appeared* like *modal window*.
        expect(directoryService_Page.deleteMsgBox_Text()).toEqual('Delete Active Directory "HEADQUARTERSLDAPISTHEONEWHOCANACCESSTOTHECOMPANIES"?');
        directoryService_Page.deleteFinalNo();
        browser.sleep(1000);
        browser.sleep(1000);
        directoryService_Page.close_DetailView();

        for(i=0; i<=9; i++) {
            directoryService_Page.clickDetailViewButton();
            directoryService_Page.removeDirectoryServicesButton();
            browser.sleep(1000);
            directoryService_Page.Final_Delete();
            browser.sleep(1000);
        };
        browser.sleep(1000);
        common_Component.appLogout();
    });
});