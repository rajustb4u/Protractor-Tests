describe('Acumen Site_List Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-85 [Site List View] UI check', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.AddSite_ForMore();
        browser.sleep(1000);

        sitePage.siteName('Test Captured with a mind of covering the testcases very well');
        sitePage.city('wonderfulappearancesocalledbeautifulcitywithlotofgoodpalcestosee');
        sitePage.state('washingtonDCVirginiaMarylandNewyorkNewJerseyPhiladelphia');
        sitePage.contactName('AnuragJainRajannaiduMendaDaveMehtaRandallThomasVinceArneja');
        sitePage.submitAddSite();

        browser.sleep(1000);
        if(expect(sitePage.Add_Site_ForMore_State()).toEqual(null)) {
            //Add More Sites:
            common_Component.AddSiteWithData(data.site_data.site_Name);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name1);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name2);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name3);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name4);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name5);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name6);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name7);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name8);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name9);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name10);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name11);
            browser.sleep(1000);
            common_Component.AddSiteWithData(data.site_data.site_Name12);
            browser.sleep(1000);
        }
    });

    it('Test Case AC-85 [Site List View] UI check, validating the list view & Sort the sites:' , function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        // Get the number of sites in the Site List with the names:
        element.all(by.binding(' site.name ')).then(function(items) {
            console.log("Total Sites in the list: " +items.length);
            console.log("Site Names from the site list....");
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
        });

        //Checking the sorting order.
        var sorted = [] , unSorted = [];
        var ele = element.all(by.binding(' site.name '));
        ele.map(function(eachName){
            return eachName.getText().then(function(unSorted){
                return unSorted;
            });
        }).then(function(unSorted){
            var sorted = unSorted.slice();
            sorted = sorted.sort(); //sort the array
            console.log('sorted list of Sites: '+sorted);
            expect(sorted).toEqual(unSorted); //check if both sorted and unsorted arrays are same
        });
    });

    it('Delete all sites created:', function () {
        var sitePage = new site_Page();
        // common_Component.appLogin();
        // sitePage.site_Link();
        // sitePage.clickDetailViewButton();

        for (i=0; i<15; i++) {
            sitePage.clickDetailViewButton();
            browser.sleep(1000);
            sitePage.removeSiteButton();
            browser.sleep(1000);
            sitePage.Final_Delete();
            browser.sleep(2000);
        };
        common_Component.appLogout();
    });
});




