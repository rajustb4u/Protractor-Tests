describe('Acumen TroubleShootAdmin Tests', function() {
    var site_Page = require('../page-factory/sitePage.js');
    var administrators_Page = require('../page-factory/adminPage.js');
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Site page button functionality : ', function() {
        //Validating Security Controls page
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var security_Controls_Page = new securityControls_Page();
        browser.sleep(2000);
        common_Component.appLogin();
        browser.sleep(1000);

        if(expect(security_Controls_Page.customizeGlobalBan_State()).toEqual('true')) {
            console.log('Global Ban Customize button is in disabled state when we login as Trouble Shooting Admin:');
        }
        browser.sleep(1000);
        if(expect(security_Controls_Page.customizeButton_state()).toEqual('true')) {
            console.log('URL Filter Customize button is in disabled state when we login as Trouble Shooting Admin:');
        }
        browser.sleep(1000);
        if(expect(security_Controls_Page.customizeIPBlock_getState()).toEqual('true')) {
            console.log('IP Block Customize button is in disabled state when we login as Trouble Shooting Admin:');
        }
        browser.sleep(1000);
        if(expect(security_Controls_Page.customizeIPBlock_getState()).toEqual('true')) {
            console.log('IP Block Customize button is in disabled state when we login as Trouble Shooting Admin:');
        }
        browser.sleep(1000);
        if(expect(security_Controls_Page.nextActivationRequest_GetState()).toEqual(null)) {
            console.log('Next Activation Request button is in Enabled state when we login as Trouble Shooting Admin:');
            security_Controls_Page.nextActivationRequest_Click();
        }
        browser.sleep(1000);
        if(expect(security_Controls_Page.confirmActivationRequest_GetState()).toEqual('true')) {
            console.log('Activation Request button is in Disabled state when we login as Trouble Shooting Admin:');
        }

        browser.sleep(1000);
        common_Component.appLogout();

        //Global Admin login to delete all the data created on all pages.
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.siteDelete();
        browser.sleep(1000);

        //remove the Zones
        var HostGroupsPage = new HostGroups_Page();
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        HostGroupsPage.delete_Zone();
        browser.sleep(1000);
        HostGroupsPage.delete_Yes_Message();
        browser.sleep(1000);

        //remove the Directory Services
        var directoryService_Page = new directory_ServicePage();
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickDetailViewButton();
        browser.sleep(1000);
        directoryService_Page.removeDirectoryServicesButton();
        browser.sleep(1000);
        directoryService_Page.Final_Delete();
        browser.sleep(1000);

        //Remove InBound Policies
        var policiesPage = new policies_Page();
        browser.sleep(1000);
        policiesPage.policiesLink();
        policiesPage.deleteInBound_Click();
        browser.sleep(1000);
        policiesPage.deleteMsgInBound_Click();
        browser.sleep(1000);

        //Delete InterZone Policies
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.deleteInBound_Click();
        browser.sleep(1000);
        policiesPage.deleteMsgInBound_Click();
        browser.sleep(1000);

        //Delete OutBound Policies
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.deleteInBound_Click();
        browser.sleep(1000);
        policiesPage.deleteMsgInBound_Click();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
