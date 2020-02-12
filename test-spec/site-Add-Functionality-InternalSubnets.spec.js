describe('Acumen Add_Site Functionality Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Test Case AC-130 - Network - INTERNAL LIST OF SUBNETS', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        //1) validating the IP Address is empty
        console.log('validating the Network IP Address is empty');
        expect(sitePage.networkIPAddress_Range_value()).toEqual('');
        console.log('   Network IP Address Range is empty :');

        // sitePage.network_IPAddress_Range(data.site_data.network_ip_validation);
        // browser.sleep(1000);
        // //capturing the error message and validating when we enter the Device IP Address with 2 characters.
        // expect(common_Component.getElementErrorByInputName('sitesubnet_0_ip_range')).toEqual(data.site_data.network_ip_errorMsg);
        // console.log('The Error message captured for sitesubnet_0_ip_rangee: ' + data.site_data.network_ip_errorMsg);
        // expect(sitePage.submitAddSite_State()).toEqual('true');
        // console.log('Add Site Button is disabled when we have the validation error message: ');
        sitePage.network_IPAddress_Range_clear();
        sitePage.network_IPAddress_Range(data.site_data.network_ip);
        browser.sleep(1000);
    });

    it('Test Case AC-130 - Network - INTERNAL LIST OF SUBNETS validation 1)Add Subnet Button, 2)Delete Button 3)Validating the empty rows with Subnets', function () {
        var sitePage = new site_Page();
        browser.sleep(1000);

        // 1) Validating the Add Subnet button
        expect(sitePage.add_Subnet_Button_State()).toEqual(null);
        console.log('   ADD Subnet" button becomes active (available) if at least one field contains data: ');

        //2) Validating the Delete Subnet button
        console.log('2) Validating the Delete Device button');
        sitePage.addsubnet_Button();
        expect(sitePage.subnet_Delete_Button_State()).toEqual(null);
        console.log('   Delete Subnet Button is enabled after Adding a Network Name, IP & Zone this delete button is for first Device: ');
        expect(sitePage.subnet_Delete_Button_State1()).toEqual(null);
        console.log('   Delete Subnet Button_1 is enabled after Adding a Network Name, IP & Zon this delete button is for second Device: ');

        //3)Validating the empty rows with Subnet
        console.log('3)Validating the empty rows with Subnet');
        sitePage.network_IPAddress_Range1(data.site_data.network_ip1);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        console.log('   Entered Second Subnet:');

        sitePage.network_IPAddress_Range2(data.site_data.network_ip2);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        console.log('   Entered Third Subnet:');

        sitePage.network_IPAddress_Range3(data.site_data.network_ip3);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        console.log('   Entered Fourth Subnet:');

        sitePage.network_IPAddress_Range4(data.site_data.network_ip4);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        console.log('   Entered Fifth Subnet:');

        sitePage.network_IPAddress_Range5(data.site_data.network_ip5);
        console.log('   Entered Sixth Subnet:');

        //Deleting Device 1,3,4
        sitePage.subnet_Delete_Button();
        sitePage.subnet_Delete_Button2();
        sitePage.subnet_Delete_Button3();
        console.log('   Deleted 1, 3, 4 Subnets');
        console.log('   Remaining subnets are 2, 5, 6');
        browser.sleep(1000);

        //Validating the Add Site button is enabled
        expect(sitePage.submitAddSite_State()).toEqual('true');
        console.log('Add Site Button is enabled after all the fields from Physical Address section are correctly entered: ');

        sitePage.clickCancel();
        browser.sleep(1000);
        sitePage.addSiteCancelMessageButton();
        browser.sleep(1000);
        common_Component.appLogout();
    });
});
