describe('Acumen DirectoryServices_ListView Functionality', function() {
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-680 [Directory Services Details View] UI check : ', function() {

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);

        //Verify that:- *Details View expanded, Buttons 'Delete' and 'Edit' appeared*- *'Details' button replaced by 'X'* button
        //validating that the detail view button is enabled
        expect(directoryService_Page.detailView_State()).toEqual(null);
        console.log('Details View button is enabled: ');

        directoryService_Page.clickDetailViewButton();
        browser.sleep(1000);
        //validating that the Edit button is enabled
        expect(directoryService_Page.editButton_State()).toEqual(null);
        console.log('Edit button is enabled: ');

        //validating that the Delete button is enabled
        expect(directoryService_Page.removeDirectoryServicesButton_State()).toEqual(null);
        console.log('Delete button is enabled: ');

        directoryService_Page.clickEditButton();
        browser.sleep(1000);

        //validating that the Update Directory Services button is enabled
        expect(directoryService_Page.update_directoryServices_Buttonn_State()).toEqual(null);
        console.log(' Update Directory Services button is enabled: ');

        directoryService_Page.direcotoryServicesEditCancelButton();

        directoryService_Page.clickDetailViewButton();
        browser.sleep(1000);
        expect(directoryService_Page.detailView_DataName()).toEqual(data.directoryServicesPage_data.directoryService_DetialView);
        console.log('Name, Connection Details, UserName & Password: '+data.directoryServicesPage_data.directoryService_DetialView);

        browser.sleep(1000);
        expect(directoryService_Page.detailView_Data_SubType()).toEqual(data.directoryServicesPage_data.directoryService_DetialView1);
        console.log('SubType, BASE DN, BIND DN: '+data.directoryServicesPage_data.directoryService_DetialView1);

        browser.sleep(1000);
        expect(directoryService_Page.detailView_Data_Server()).toEqual(data.directoryServicesPage_data.directoryService_DetialView_Server);
        console.log('Server: '+data.directoryServicesPage_data.directoryService_DetialView_Server);

        browser.sleep(1000);
        expect(directoryService_Page.detailView_Data_Port()).toEqual(data.directoryServicesPage_data.directoryService_DetialView_Port);
        console.log('Port: '+data.directoryServicesPage_data.directoryService_DetialView_Port);
        browser.sleep(1000);
        common_Component.appLogout();
    });
});