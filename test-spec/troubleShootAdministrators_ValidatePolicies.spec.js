describe('Acumen TroubleShootAdmin Tests', function() {
    var site_Page = require('../page-factory/sitePage.js');
    var administrators_Page = require('../page-factory/adminPage.js');
    var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
    var Hosts_Page = require('../page-factory/hostsPage.js');
    var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
    var policies_Page = require('../page-factory/policiesPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Policies page button functionality : ', function() {
        //Validating Inbound Policies page
        common_Component.appLogin();
        browser.sleep(1000);
        var policiesPage = new policies_Page();
        policiesPage.policiesLink();
        browser.sleep(1000);
        if(expect(policiesPage.inBoundPolicy_Text()).toEqual(data.policies_Page_Data.inBoundPoliciesText)) {
            console.log('Policies page text is validated logged in Trouble shoot admin: '+data.policies_Page_Data.inBoundPoliciesText);
            browser.sleep(1000);
        }
        if(expect(policiesPage.add_Policy_State()).toEqual(null)) {
            console.log('Add Policy button in InBound Policies page is in Disabled state logged in Trouble shoot admin:');
        }
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
        // common_Component.internalNetworkPolicies_Create();
        // browser.sleep(1000);
        // common_Component.appLogout();
        // browser.sleep(1000);
        // common_Component.appLogin_TSAdmin();
        // browser.sleep(1000);
        // policiesPage.policiesLink();
        // policiesPage.interZonePolicies_Link_Click();
        // browser.sleep(1000);
        // if(expect(policiesPage.edit_Policy_State()).toEqual(null)) {
        //     console.log('Edit button in InternalNetworkPolicy page is in Disabled state logged in Trouble shoot admin:');
        // }
        // if(expect(policiesPage.deleteInBound_State()).toEqual('true')) {
        //     console.log('Delete button in InternalNetworkPolicy page is in Disabled state logged in Trouble shoot admin:');
        // }
        // if(expect(policiesPage.internalNetworkPoliciesNextButton_State()).toEqual(null)) {
        //     console.log('Next-InternalNetworkPolicies button in InternalNetwork Policies page is in Enabled state logged in Trouble shoot admin:');
        //     policiesPage.internalNetwork_PoliciesNextButton();
        //     browser.sleep(1000);
        // }
        //
        // //Validating OutBound Policies page
        // if(expect(policiesPage.add_Policy_State()).toEqual(null)) {
        //     console.log('Add Policy button in OutBound Policies page is in Disabled state logged in Trouble shoot admin:');
        // }
        // browser.sleep(1000);
        // common_Component.appLogout();
        // browser.sleep(1000);
        // common_Component.appLogin();
        // browser.sleep(1000);
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

        common_Component.appLogout();
        browser.sleep(1000);
    });

    it('Delete all the created spec data:', function() {
        //Global Admin login to delete all the data created on all pages.
        common_Component.appLogin();
        browser.sleep(1000);
        common_Component.siteDelete();
        browser.sleep(1000);

        var HostsPage = new Hosts_Page();
        common_Component.appLogin();
        HostsPage.hostsLink();
        browser.sleep(1000);
        element.all(by.binding(' host.name ')).then(function(items) {
            for (i = 0; i < items.length; i++) {
                browser.sleep(1000);
                if (expect(HostsPage.detailed_Hosts_State()).toEqual(null)) {
                    console.log('Hosts exist so we can Edit/Delete: ');
                    HostsPage.detailedHosts();
                    browser.sleep(1000);
                    HostsPage.delete_Hosts();
                    browser.sleep(1000);
                    HostsPage.delete_Yes_Message();
                    browser.sleep(1000);
                }
            }
        });

        //remove the Zones
        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        //remove the Zones
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
        policiesPage.policyDetailView_click();
        browser.sleep(1000);
        policiesPage.deleteInBound_Click();
        browser.sleep(1000);
        policiesPage.deleteMsgInBound_Click();
        browser.sleep(1000);

        // //Delete InterZone Policies
        // policiesPage.interZonePolicies_Link_Click();
        // browser.sleep(1000);
        // policiesPage.deleteInBound_Click();
        // browser.sleep(1000);
        // policiesPage.deleteMsgInBound_Click();
        // browser.sleep(1000);

        //Delete OutBound Policies
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);
        policiesPage.policyDetailView_click();
        browser.sleep(1000);
        policiesPage.deleteInBound_Click();
        browser.sleep(1000);
        policiesPage.deleteMsgInBound_Click();
        browser.sleep(1000);
        common_Component.appLogout();

    });
});
