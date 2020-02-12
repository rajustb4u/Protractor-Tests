describe('Acumen TroubleShootAdmin Tests', function() {
    var Hosts_Page = require('../page-factory/HostsPage.js');
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Directory Services page button functionality : ', function() {
        //Validating Directory Services page
        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        if(expect(directoryService_Page.addANewDirectoryService_Button_State()).toEqual(null)) {
            console.log('Add Directory Services button in Directory Services page is in Disabled state logged in Trouble shoot admin:');
        }
        browser.sleep(1000);
        common_Component.directoryServices_Create();
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        if(expect(directoryService_Page.detailView_State()).toEqual(null)) {
            console.log('Detail View button in Directory Services page is in Enabled state logged in Trouble shoot admin:');
            directoryService_Page.clickDetailViewButton();
        }
        if(expect(directoryService_Page.editButton_State()).toEqual(null)) {
            console.log('Edit button in Directory Services page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(directoryService_Page.removeDirectoryServicesButton_State()).toEqual('true')) {
            console.log('Delete button in Directory Services page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(directoryService_Page.nextHostsButton_State()).toEqual(null)) {
            console.log('Next Hosts button in Directory Services page is in Enabled state logged in Trouble shoot admin:');
            directoryService_Page.nextHosts_Button();
            browser.sleep(1000);
        }
        var HostsPage = new Hosts_Page();
        if(expect(HostsPage.hosts_Text()).toEqual(data.hostsPage_data.hosts_Text)) {
            console.log('Hosts button text is validated logged in Trouble shoot admin: '+data.hostsPage_data.hosts_Text);
            browser.sleep(1000);
        }

        common_Component.appLogout();
        browser.sleep(1000);
    });
});
