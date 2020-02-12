describe('Acumen TroubleShootAdmin Tests', function() {
    var site_Page = require('../page-factory/sitePage.js');
    var administrators_Page = require('../page-factory/adminPage.js');
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Site page button functionality : ', function() {

        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        //Validating the Configuration page state.
        var sitePage = new site_Page();
        if(expect(sitePage.startConfiguration_Button_State()).toEqual(null)) {
            console.log('Start Configuration button is in Enabled state for Trouble shoot admin: ');
            sitePage.start_Configuration();
        }
        if(expect(sitePage.AddNewSite_State()).toEqual(null)) {
            console.log('Add Site button is in Disabled state for Trouble shoot admin: ');
        }
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.siteCreate('test','testDevice','1.1.1.1');
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        sitePage.site_Link();
        if(expect(sitePage.detail_View_State()).toEqual(null)) {
            console.log('Detail View Site button is in Enabled state for Trouble shoot admin:');
            sitePage.detailView_State_Click();
            if(expect(sitePage.editButton_State()).toEqual(null)) {
                console.log('Edit Site button is in Disabled state for Trouble shoot admin:');
            }
            if(expect(sitePage.site_RemoveButton_State()).toEqual('true')){
                console.log('Delete Site button is in Disabled state for Trouble shoot admin:');
            }
            if(expect(sitePage.Next_Administrators_Button_State()).toEqual(null)) {
                console.log('Next Administrators button in Site page is in Enabled state for Trouble shoot admin:');
                sitePage.NextAdministrators_Button_Click();
            }
        }

        //Validating the Administrator page:
        if(expect(admin_Page.adminAddAnother_State()).toEqual('true')) {
            console.log('Add Administrator button in Admin page is in Disabled state for Trouble shoot admin:');
        }
        if(expect(admin_Page.globalAdmin_detailView_State()).toEqual(null)) {
            console.log('Detail View Administrator button in Admin page for global admin is in Enabled state logged in Trouble shoot admin:');
            admin_Page.global_Admin_detailView();
        }
        if(expect(admin_Page.troubleShoot_Admin_detailView_State()).toEqual(null)) {
            console.log('Detail View Administrator button in Admin page for Troubleshoot admin is in Enabled state logged in Trouble shoot admin:');
            admin_Page.troubleShoot_Admin_detailView();
            if(expect(admin_Page.troubleShootAdmin_Edit_State()).toEqual(null)) {
                console.log('Edit Administrator button in Admin page for Troubleshoot admin is in Enabled state logged in Trouble shoot admin:');
            }
            if(expect(admin_Page.troubleshootAdmin_Delete_State1()).toEqual(null)) {
                console.log('Delete Administrator button in Admin page for Troubleshoot admin is in Enabled state logged in Trouble shoot admin:');
            }
            if(expect(admin_Page.nextHostGroupsButton_State()).toEqual(null)) {
                console.log('Next-HostGroups button in Admin page is in Enabled state logged in Trouble shoot admin:');
                admin_Page.nextHostGroupsButton_click();
            }
        }

        //Validating Host Group page
        var HostGroupsPage = new HostGroups_Page();
        if(expect(HostGroupsPage.add_Zone_State()).toEqual(null)) {
            console.log('Add Host Group button in Host Groups page is in Enabled state logged in Trouble shoot admin:');
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.hostGroup_Create();
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        if(expect(HostGroupsPage.edit_Zone_State()).toEqual(null)) {
            console.log('Edit Host Group button in Host Groups page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(HostGroupsPage.delete_Zone_State()).toEqual('true')) {
            console.log('Delete Host Group button in Host Groups page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(HostGroupsPage.nextDirectoryServices_State()).toEqual(null)) {
            console.log('Next-DirectoryServices button in Host Groups page is in Enabled state logged in Trouble shoot admin:');
            HostGroupsPage.nextDirectoryServices_Button();
        }

        //Validating Directory Services page
        var directoryService_Page = new directory_ServicePage();
        if(expect(directoryService_Page.addANewDirectoryService_Button_State()).toEqual(null)) {
            console.log('Add Directory Services button in Directory Services page is in Disabled state logged in Trouble shoot admin:');
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
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
        if(expect(directoryService_Page.nextPolicies_Button_State()).toEqual(null)) {
            console.log('Next Policies button in Directory Services page is in Enabled state logged in Trouble shoot admin:');
            directoryService_Page.nextPolicies_Button();
            browser.sleep(1000);
        }

        //Validating Inbound Policies page
        var policiesPage = new policies_Page();
        if(expect(policiesPage.add_Policy_State()).toEqual(null)) {
            console.log('Add Policy button in InBound Policies page is in Disabled state logged in Trouble shoot admin:');
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.inBoundPolicies_Create();
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        if(expect(policiesPage.edit_Policy_State()).toEqual(null)) {
            console.log('Edit button in InBoundPolicy page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(policiesPage.deleteInBound_State()).toEqual('true')) {
            console.log('Delete button in InBoundPolicy page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(policiesPage.inBoundPoliciesNextButton_State()).toEqual(null)) {
            console.log('Next-InternalNetworkPolicies button in InBound Policies page is in Enabled state logged in Trouble shoot admin:');
            policiesPage.inBoundPolicies_NextButton();
            browser.sleep(1000);
        }

        //Validating InternalNetwork Policies page
        if(expect(policiesPage.add_Policy_State()).toEqual(null)) {
            console.log('Add Policy button in Internal Network Policies page is in Disabled state logged in Trouble shoot admin:');
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.internalNetworkPolicies_Create();
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);
        if(expect(policiesPage.edit_Policy_State()).toEqual(null)) {
            console.log('Edit button in InternalNetworkPolicy page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(policiesPage.deleteInBound_State()).toEqual('true')) {
            console.log('Delete button in InternalNetworkPolicy page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(policiesPage.internalNetworkPoliciesNextButton_State()).toEqual(null)) {
            console.log('Next-InternalNetworkPolicies button in InternalNetwork Policies page is in Enabled state logged in Trouble shoot admin:');
            policiesPage.internalNetwork_PoliciesNextButton();
            browser.sleep(1000);
        }

        //Validating OutBound Policies page
        if(expect(policiesPage.add_Policy_State()).toEqual(null)) {
            console.log('Add Policy button in OutBound Policies page is in Disabled state logged in Trouble shoot admin:');
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.outBoundPolicies_Create();
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        policiesPage.policiesLink();
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        if(expect(policiesPage.edit_Policy_State()).toEqual(null)) {
            console.log('Edit button in OutBoundPolicy page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(policiesPage.deleteInBound_State()).toEqual('true')) {
            console.log('Delete button in OutBoundPolicy page is in Disabled state logged in Trouble shoot admin:');
        }
        if(expect(policiesPage.outBoundPoliciesNextButton_State()).toEqual(null)) {
            console.log('Next-SecurityControls button in OutBound Policies page is in Enabled state logged in Trouble shoot admin:');
            policiesPage.outBoundPolicies_NextButton();
            browser.sleep(1000);
        }

        //Validating Security Controls page
        var securityControls_Page = require('../page-factory/securityControlsPage.js');
        var security_Controls_Page = new securityControls_Page();



        browser.sleep(1000);
        common_Component.appLogout();
    });
});
