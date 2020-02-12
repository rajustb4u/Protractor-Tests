describe('Acumen Administrator Delete functionality', function() {
    var administrators_Page = require('../page-factory/adminPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

	it('Edit & remove Administrators Page', function() {

        var admin_Page = new administrators_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        console.log("Edit & Remove the Administrators: ");
        //Clicking on Administrators link
        admin_Page.Administrators_Link();
        browser.sleep(2000);
        
        //Delete the Admin created
        admin_Page.change_Admin_detailView1();
        console.log("Administrators Detail view: ");
        browser.sleep(1000);
        console.log("Remove Administrator: ");
        admin_Page.changeAdmin1_Delete();
        browser.sleep(1000);
        admin_Page.delete_yes_Admin();

        //Delete the Sites.
        for (i=1;i<=2;i++) {
            common_Component.siteDelete();
            browser.sleep(2000);
        };
        common_Component.appLogout();
    });
});
