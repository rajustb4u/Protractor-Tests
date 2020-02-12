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
        common_Component.siteCreate('test');
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
    });

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Global Admin in Admin page functionality : ', function() {

        var admin_Page = new administrators_Page();

        //Validating the Administrator page:
        if(expect(admin_Page.adminAddAnother_State()).toEqual(null)) {
            console.log('Add Global Administrator button in Admin page is in Disabled state for Trouble shoot admin and cannot add any new admins:');
        }
        if(expect(admin_Page.global_Admin_detailView1_State()).toEqual(null)) {
            console.log('Detail View Administrator button in Global Admin page for global admin is in Enabled state logged in Trouble shoot admin:');
            admin_Page.globalAdmin_detailView1();
            if(expect(admin_Page.global_Admin1_Edit_State()).toEqual(null)) {
                console.log('Edit button in Global Admin page for global admin is in Disabled state logged in Trouble shoot admin:');
            }
            if(expect(admin_Page.global_Admin1_Delete_State()).toEqual(null)) {
                console.log('Delete button in Global Admin page for global admin is in Disabled state logged in Trouble shoot admin:');
            }
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);

        //Open *Add/Edit Administrator* form and click on Cancel button *without any changes*.
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        console.log('Deleting the created Global administrator : ');
        admin_Page.globalAdmin_detailView1();
        browser.sleep(1000);
        admin_Page.globalAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);
        common_Component.appLogout();
    });

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Change Admin in Admin page functionality : ', function() {
        var admin_Page = new administrators_Page();

        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);

        //Validating the Administrator page:
        if(expect(admin_Page.adminAddAnother_State()).toEqual(null)) {
            console.log('Add Administrator button in Admin page is in Disabled state for Trouble shoot admin and cannot add any new admins:');
        }
        if(expect(admin_Page.changeAdmin_detailView1_State()).toEqual(null)) {
            console.log('Detail View Administrator button in Change Admin page for global admin is in Enabled state logged in Trouble shoot admin:');
            admin_Page.change_Admin_detailView1();
            if(expect(admin_Page.change_Admin_Edit1_State()).toEqual(null)) {
                console.log('Edit button in Change Admin page for global admin is in Disabled state logged in Trouble shoot admin:');
            }
            if(expect(admin_Page.change_Admin1_Delete_State()).toEqual(null)) {
                console.log('Delete button in Change Admin page for global admin is in Disabled state logged in Trouble shoot admin:');
            }
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        browser.sleep(1000);
        //Open *Add/Edit Administrator* form and click on 'Cancel' button *without any changes*.
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        console.log('Deleting the created Change administrator : ');
        admin_Page.change_Admin_detailView1();
        browser.sleep(1000);
        admin_Page.changeAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);
        common_Component.appLogout();
    });

    it('AC-2530 Trouble Shooting Admin Functionality Validating the Trouble Shooting Admin in Admin page functionality : ', function() {
        var admin_Page = new administrators_Page();

        browser.sleep(1000);
        common_Component.appLogin_TSAdmin();
        browser.sleep(1000);
        admin_Page.Administrators_Link();
        browser.sleep(1000);

        //Validating the Administrator page:
        if(expect(admin_Page.adminAddAnother_State()).toEqual(null)) {
            console.log('Add Administrator button in Admin page is in Disabled state for Trouble shoot admin and cannot add any new admins:');
        }
        if(expect(admin_Page.troubleShoot_Admin_detailView1_State()).toEqual(null)) {
            console.log('Detail View Administrator button in Admin page for Trouble Shooting admin is in Enabled state logged in Trouble shoot admin:');
            admin_Page.troubleShoo_Admin_detailView1();
            if(expect(admin_Page.troubleShoot_Admin1_State()).toEqual(null)) {
                console.log('Edit button in Trouble Shooting Admin page for global admin is in Disabled state logged in Trouble shoot admin:');
            }
            if(expect(admin_Page.troubleShoot_Admin1_Delete_State()).toEqual(null)) {
                console.log('Delete button in Trouble Shooting Admin page for global admin is in Disabled state logged in Trouble shoot admin:');
            }
        }
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        browser.sleep(1000);
        //Open *Add/Edit Administrator* form and click on 'Cancel' button *without any changes*.
        admin_Page.Administrators_Link();
        browser.sleep(1000);
        console.log('Deleting the created Trouble Shooting administrator : ');
        admin_Page.troubleShoo_Admin_detailView1();
        browser.sleep(1000);
        admin_Page.troubleShoot_Admin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);
        console.log('Deleting the created Dashboard User : ');
        admin_Page.dashboard_Admin1_detailView();
        browser.sleep(1000);
        admin_Page.dashboardAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();
        browser.sleep(1000);

        //Validating Host Group page
        if(expect(admin_Page.directoryServicesButton_State()).toEqual(null)) {
            console.log('Next-Directory Services button in Admin page is in Enabled state logged in Trouble shoot admin:');
        }
        admin_Page.directoryServicesButton_click();
        browser.sleep(1000);
        common_Component.appLogout();
        browser.sleep(1000);
    });
});
