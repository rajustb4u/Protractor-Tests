module.exports = {
    siteAddress: 'https://qa.opaqnetworks.net/#/login', // need redefined in your case
    // siteAddress: 'https://dev.opaqnetworks.net/',
    // siteAddress: 'https://opaq360.staging.opaqnetworks.com/#/login', // need redefined in your case
    // siteAddress: 'http://10.0.80.27',

    // siteAddress: 'https://integration.opaqnetworks.net/#/login',

    //Create Site with 2 devices.
    siteCreate: function(siteName) {
        browser.sleep(1000);
        var siteLink = element(by.css('a[href="#/configuration/sites"]')).click();
        browser.sleep(1000);
        var addNewSite_Button = element(by.css('a[ng-click="$ctrl.openSiteModal()"]')).click();
        browser.sleep(1000);
        var nameField = element.all(by.id('name')).sendKeys(siteName);
        var submitButton = element(by.buttonText('Add Site')).click();
        browser.sleep(1000);
    },
    siteCreate_More: function(siteName) {
        browser.sleep(1000);
        var siteLink = element(by.css('a[href="#/configuration/sites"]')).click();
        browser.sleep(1000);
        var addMoreSite_Button = element(by.css('button[ng-click="$ctrl.openSiteModal()"]')).click();
        browser.sleep(1000);
        var nameField = element.all(by.id('name')).sendKeys(siteName);
        var submitButton = element(by.buttonText('Add Site')).click();
        browser.sleep(1000);
    },
    siteCreate_More_WithSiteName: function(siteName) {
        browser.sleep(1000);
        var siteLink = element(by.css('a[href="#/configuration/sites"]')).click();
        browser.sleep(1000);
        var addMoreSite_Button = element(by.css('button[ng-click="$ctrl.openSiteModal()"]')).click();
        browser.sleep(1000);
        var nameField = element.all(by.id('name')).sendKeys(siteName);
        var submitButton = element(by.buttonText('Add Site')).click();
        browser.sleep(1000);
    },
    siteDelete: function() {
        var siteLink = element.all(by.linkText('SITES')).click();
        var detailView = element.all(by.id('detailOpen_0')).click();
        var site_RemoveButton = element(by.id('delete_0')).click();
        var deleteFinal = element.all(by.buttonText('Yes')).click();
    },

    adminDelete: function() {
        var adminPageLink = element.all(by.linkText('ADMINISTRATORS')).click();
        var admin_detailView = element(by.id('admin_detailOpen_1')).click();
        var admin_Delete = element.all(by.id('admin_delete_1')).click();
        var admin_Delete_Msg = element.all(by.buttonText('Yes')).click();
    },

    hosts_Create: function(hosts_name,hosts_ip) {
        var Hosts_Page = require('../page-factory/hostsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');
        var HostsPage = new Hosts_Page();
        HostsPage.hostsLink();
        browser.sleep(2000);
        HostsPage.add_Hosts();
        browser.sleep(2000);
        HostsPage.hostsName(hosts_name);
        HostsPage.hostsInternal_ip(hosts_ip);
        HostsPage.submitHosts();
        browser.sleep(2000);
    },

    hosts_Create_More: function(hosts_name,hosts_ip) {
        var Hosts_Page = require('../page-factory/hostsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');
        var HostsPage = new Hosts_Page();
        HostsPage.hostsLink();
        browser.sleep(2000);
        HostsPage.addNew_Hosts();
        browser.sleep(2000);
        HostsPage.hostsName(hosts_name);
        HostsPage.hostsInternal_ip(hosts_ip);
        HostsPage.submitHosts();
        browser.sleep(2000);
    },

    hostGroup_Create: function() {
        var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
        var data = require('../json/testData.json');

        var HostGroupsPage = new HostGroups_Page();
        browser.sleep(1000);
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        HostGroupsPage.add_Zone();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name_1);
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom_1);
        console.log('Created New Zone: ');
        browser.sleep(1000);
        HostGroupsPage.submitZone();
    },

    directoryServices_Create: function() {
        var directory_ServicePage = require('../page-factory/directoryServicesPage.js');
        var data = require('../json/testData.json');

        var directoryService_Page = new directory_ServicePage();
        browser.sleep(1000);
        directoryService_Page.clickDirectoryServicesLink();
        browser.sleep(1000);
        directoryService_Page.clickAddDirectoryServices();
        browser.sleep(1000);
        directoryService_Page.enterNameField(data.directoryServicesPage_data.directoryServicesName);
        directoryService_Page.enterBaseDN(data.directoryServicesPage_data.directoryServicesBaseDN);
        directoryService_Page.enterBindDN(data.directoryServicesPage_data.directoryServicesBindDN);
        directoryService_Page.enterUserName(data.directoryServicesPage_data.directoryServicesUserName);
        directoryService_Page.enterPassword(data.directoryServicesPage_data.directoryServicesPWD);
        directoryService_Page.enter_ServerName(data.directoryServicesPage_data.directoryServicesServer);
        directoryService_Page.enter_Port(data.directoryServicesPage_data.directoryServicesPort);
        browser.sleep(1000);
        directoryService_Page.submitAddDirectoryServices();
        browser.sleep(1000);
    },

    inBoundPolicies_Create: function() {
        var policies_Page = require('../page-factory/policiesPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');
        var policiesPage = new policies_Page();
        policiesPage.policiesLink();
        browser.sleep(1000);

        //Adding InBound Policy
        //Adding Policy
        policiesPage.add_Policy();
        browser.sleep(1000);
        common_Component.selectItemDropDown('device_id', 3);
        browser.sleep(1000);
        policiesPage.inbound_AccessibleForm(data.policies_Page_Data.policy_AccessibleFrom);
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        browser.sleep(1000);
        common_Component.selectItemDropDown_2('.dropdown.form-group',2);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitInboundPolicy_Click();
        browser.sleep(1000);
    },

    internalNetworkPolicies_Create: function() {
        var policies_Page = require('../page-factory/policiesPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');
        var policiesPage = new policies_Page();
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.interZonePolicies_Link_Click();
        browser.sleep(1000);

        //Adding Policy
        policiesPage.add_Policy();
        browser.sleep(1000);
        common_Component.selectItemDropDown('btn-append-to-body',0);
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 3);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        common_Component.selectItemDropDown_2('.dropdown.form-group',13);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitInterZonePolicy_Click();
        browser.sleep(1000);
    },
    outBoundPolicies_Create: function() {
        var policies_Page = require('../page-factory/policiesPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');
        var policiesPage = new policies_Page();
        policiesPage.policiesLink();
        browser.sleep(1000);
        policiesPage.outboundPolicies_Link_Click();
        browser.sleep(1000);

        //Adding Policy
        policiesPage.add_Policy();
        browser.sleep(1000);
        common_Component.selectItemDropDown_Zones('div[ng-dropdown-multiselect="multipleSelect"]', 3);
        browser.sleep(1000);
        policiesPage.users_ZonePolicy(data.policies_Page_Data.policy_Users);
        policiesPage.userGroups_ZonePolicy(data.policies_Page_Data.policy_Group);
        policiesPage.application_Enter(data.policies_Page_Data.policy_Application);
        common_Component.selectItemDropDown_2('.dropdown.form-group',1);
        browser.sleep(1000);
        policiesPage.port_Enter(data.policies_Page_Data.policy_Port);
        policiesPage.submitOutboundPolicy_Click();
        browser.sleep(1000);
    },

    //Method to get the Page validation errors.
    getElementErrorByName: function (elementName) {
        var inputElement = browser.findElement(by.css('input-field-component[name="' + elementName + '"]'));
        browser.sleep(1000);
        var errorElement = inputElement.findElement(by.xpath('div/p'));
        browser.sleep(1000);
        return errorElement.getText();
        browser.sleep(1000);
    },

    getElementErrorByInputName: function (elementName) {
        var inputElement = element(by.css('input-field-component[name="' + elementName + '"] p'));
        browser.sleep(1000);
        return inputElement.getText();
        browser.sleep(1000);
    },

    getElementErrorByFormName: function (elementName) {

        var inputElement = browser.findElement(by.css('form[name="' + elementName + '"]'));
        var errorElement = inputElement.findElement(by.xpath('div/div'));
        return errorElement.getText();
    },

    selectItemDropDown: function (elementName,Item_No) {
        element(by.id(elementName)).click();
        browser.sleep(1000);
        element.all(by.css('.dropdown-menu li')).then(function(items) {

            console.log("printing Items from the drop down list....");
            browser.sleep(1000);
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
            items[Item_No].click();
        });
    },

    selectItemDropDown_1: function (elementName,Item_No) {
        element(by.css(elementName)).click();
        browser.sleep(1000);
        element.all(by.css('.dropdown-menu li')).then(function(items) {

            console.log("printing Items from the drop down list....");
            browser.sleep(1000);
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
            items[Item_No].click();
        });
    },

    selectItemDropDown_2: function (elementName,Item_No) {
        element.all(by.css(elementName)).click();
        browser.sleep(1000);
        element.all(by.css('.dropdown-menu li')).then(function(items) {

            console.log("printing Items from the drop down list....");
            browser.sleep(1000);
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
            browser.sleep(2000);
            items[Item_No].click();
        });
    },

    selectItemDropDown_Zones: function (elementName,Item_No) {
        element.all(by.css(elementName)).click();
        browser.sleep(1000);
        element.all(by.css('.dropdown-menu.dropdown-menu-form li')).then(function(items) {
            console.log("printing Items from the drop down list....");
            browser.sleep(1000);
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
            browser.sleep(1000);
            items[Item_No].click();
        });
    },

    displayDropDownItems: function (elementName) {
        element(by.id(elementName)).click();
        browser.sleep(1000);
        element.all(by.css('.dropdown-menu li')).then(function(items) {

            console.log("printing Items from the drop down list....");
            browser.sleep(1000);
            for (i = 0; i < items.length; i++) {
                items[i].getText().then(function(text) {
                    console.log(text);
                });
            }
        });
    },

    detailViewItemCompare: function (elementName) {
        element.all(by.css(elementName)).getText().then(function(text) {
            console.log(' '+text);
        });
    },

    AddSiteWithData: function (Site_Name,Device_Name,Device_IP) {
        element(by.css('button[ng-click="$ctrl.openSiteModal()"]')).click()
        element.all(by.id('name')).sendKeys(Site_Name);
        element.all(by.id('device_set_0_name')).sendKeys(Device_Name);
        browser.sleep(1000);
        element.all(by.id('device_set_0_ip_address')).sendKeys(Device_IP);
        browser.sleep(1000);
        element.all(by.buttonText('Add Site')).click();
        browser.sleep(1000);
        // sitePage.siteName(Site_Name);
        // sitePage.deviceName(Device_Name);
        // sitePage.smartDeviceIP(Device_IP);
        // sitePage.submitAddSite();
    },

    //Method for the elements to which are adding with '1' number in the element
    handleDeviceIDIncrement: function (number) {
        for (number = 1; number < 6; number++) {
            element(by.id('device_set_' + number + '_name'));
        }
    },

    setCharInField: function (fieldName, char) {
        element(by.css('input[name="' + fieldName + '"]')).sendKeys(char);
    },

    setNotValidFieldByLenght: function (fieldName, charCount) {
        element(by.css('input[name="' + fieldName + '"')).sendKeys(Array(charCount + 1).join('a'));
    },

    setNotValidFieldByChar: function (fieldName, disallowChar) {
        this.setCharInField(fieldName, disallowChar)
    },

    checkFieldCharCount: function (fieldName) {
        var foundField = element(by.css('input[name="' + fieldName + '"]'));
        expect(foundField.isPresent()).toBe(true);
        return foundField.getAttribute('value').then(function (text) {
            return text.length
        })
    },

    checkLengthErrorData: function (data) {
        for (var i = 0; i < data.length; ++i) {
            this.setNotValidFieldByLenght(data[i][0], data[i][1] + 1);

            expect(this.checkFieldCharCount(data[i][0])).toEqual(data[i][1]);
        }
    },

    checkDissallowCharErrorData: function (data) {
        for (var i = 0; i < data.length; ++i) {
            this.setNotValidFieldByChar(data[i][0], data[i][1]);
        }

        element(by.css('.btn-primary')).click(); //Here is Submit identificator

        for (i = 0; i < data.length; ++i) {
            expect(this.getElementErrorByName(data[i][0]))
                .toEqual(data[i][2])
        }
    },

    siteAllFields: function () {
        var site_Page = require('../page-factory/sitePage.js');
        var data = require('../json/testData.json');

        var sitePage = new site_Page();
        browser.sleep(1000);
        sitePage.site_Link();
        sitePage.addSite_Button();
        browser.sleep(1000);
        sitePage.siteName(data.site_data.siteName);
        sitePage.locationType(data.site_data.locationType);
        sitePage.user_Count(data.site_data.userCount);
        browser.sleep(1000);

        //Adding Site Tag & Location Type
        sitePage.siteTag(data.site_data.siteTag);
        sitePage.siteTag(',');
        browser.sleep(1000);

        //Adding Physical Location, Physical Address details.
        sitePage.physicalAddress(data.site_data.address);
        sitePage.suiteUnit(data.site_data.suite_unit);
        sitePage.city(data.site_data.city);
        sitePage.state(data.site_data.state);
        sitePage.zipcode(data.site_data.zipcode);
        browser.sleep(1000);

        //Adding Physical Location, Point of contact details.
        sitePage.contactName(data.site_data.contact_name);
        sitePage.contactEmail(data.site_data.contact_email);
        sitePage.contactPhone(data.site_data.contact_phone1);
        sitePage.contactCellPhone(data.site_data.contact_phone2);
        browser.sleep(1000);

        //Network External Primary
        sitePage.primary_ISP(data.site_data.primary_ISP);
        sitePage.primary_ISP_IPAddress(data.site_data.primaryISP_ip);
        sitePage.PISP_Bandwidth_UP(data.site_data.primaryISP_UP);
        sitePage.PISP_Bandwidth_Down(data.site_data.primaryISP_Down);
        sitePage.PISP_Bandwidth_Gateway(data.site_data.primaryISP_Gateway);
        sitePage.PISP_Bandwidth_Netmask(data.site_data.primaryISP_Netmask);
        browser.sleep(1000);
        //Secondary
        sitePage.secondary_ISP(data.site_data.secondary_ISP);
        sitePage.sec_IP_Address(data.site_data.secondaryISP_ip);
        sitePage.sec_ISP_Bandwidth_UP(data.site_data.secondaryISP_UP);
        sitePage.sec_ISP_Bandwidth_Down(data.site_data.secondaryISP_Down);
        sitePage.sec_ISP_Bandwidth_Gateway(data.site_data.secondaryISP_Gateway);
        sitePage.sec_ISP_Bandwidth_Netmask(data.site_data.secondaryISP_Netmask);
        browser.sleep(1000);

        sitePage.reservedSubnet_text(data.site_data.reservedSubnet);
        browser.sleep(1000);

        //Connection OPAQ VPN DEVICE
        sitePage.internalIP_Address_Opaq(data.site_data.opaqVPN_InternalIP);
        sitePage.netmask_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Netmask);
        sitePage.gateway_OpaqVPNDevice_Enter(data.site_data.opaqVPN_Gateway);
        browser.sleep(1000);

        //Network Add Subnets
        sitePage.network_IPAddress_Range(data.site_data.network_ip);
        browser.sleep(1000);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range1(data.site_data.network_ip1);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range2(data.site_data.network_ip2);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range3(data.site_data.network_ip3);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range4(data.site_data.network_ip4);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range5(data.site_data.network_ip5);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range6(data.site_data.network_ip6);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range7(data.site_data.network_ip7);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range8(data.site_data.network_ip8);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range9(data.site_data.network_ip9);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range10(data.site_data.network_ip10);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range11(data.site_data.network_ip11);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range12(data.site_data.network_ip12);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range13(data.site_data.network_ip13);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range14(data.site_data.network_ip14);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range15(data.site_data.network_ip15);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range16(data.site_data.network_ip16);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range17(data.site_data.network_ip17);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range18(data.site_data.network_ip18);
        browser.sleep(1000);

        sitePage.submitAddSite();
        console.log('New Site created with all field data: ');
        browser.sleep(1000);
    },

    siteFields: function () {
        var site_Page = require('../page-factory/sitePage.js');
        var data = require('../json/testData.json');

        var sitePage = new site_Page();
        browser.sleep(1000);
        sitePage.site_Link();
        sitePage.addSite_Button();
        browser.sleep(1000);
        sitePage.siteName(data.site_data.siteName);
        browser.sleep(1000);

        //Adding Site Tag & Location Type
        sitePage.siteTag(data.site_data.siteTag);
        sitePage.siteTag(',');
        browser.sleep(1000);

        //Network Add Subnets
        sitePage.network_IPAddress_Range(data.site_data.network_ip);
        browser.sleep(1000);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range1(data.site_data.network_ip1);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range2(data.site_data.network_ip2);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.network_IPAddress_Range3(data.site_data.network_ip3);
        sitePage.addsubnet_Button();
        browser.sleep(1000);
        sitePage.submitAddSite();
        console.log('New Site created with all field data: ');
        browser.sleep(1000);
    },

    ZonesAdd: function () {
        var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
        var data = require('../json/testData.json');
        var common_Component = require('../test-spec/common-component.js');
        var HostGroupsPage = new HostGroups_Page();
        HostGroupsPage.zonesLink();
        browser.sleep(1000);
        HostGroupsPage.add_Zone();
        browser.sleep(1000);
        HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name);
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom);
        browser.sleep(1000);
        HostGroupsPage.submitZone();
        browser.sleep(1000);

        for (i=1; i<=9; i++) {
            browser.sleep(1000);
            HostGroupsPage.addNew_Zone();
            browser.sleep(1000);
            HostGroupsPage.zone_Name(data.zones_Page_Data.zone_Name+i);
            browser.sleep(1000);
            HostGroupsPage.zoneAccessible_From(data.zones_Page_Data.zoneAccessibleFrom);
            browser.sleep(1000);
            HostGroupsPage.submitZone();
            browser.sleep(1000);
        };

    },

    dropdown_Comparison: function(dropdownElement, start_offset, end_offset, compareItem){

        var element_Items = element.all(by.css(dropdownElement)).getText();
        //console.log(compareItem);
        browser.sleep(1000);

        element_Items.then(function(textArr){
            var list_items = textArr.toString().split("\n");
            //console.log(list_items);
            for (i = 0; i < list_items.length; i++){
                console.log('item '+(i+1)+' in drop down list is '+list_items[i]);
            };

            var selected_elements = [];

            for (i = start_offset; i < list_items.length - end_offset; i++){
                selected_elements.push(list_items[i]);
            };

            console.log("\nSelected items are: "+selected_elements);
            //console.log("\nValidating category list");
            expect(selected_elements).toEqual(compareItem);

        });
    },

    dropdown_Return_Range: function(dropdownElement, start_offset, end_offset){

        var element_Items = element.all(by.css(dropdownElement)).getText();
        //console.log(compareItem);
        browser.sleep(1000);

        element_Items.then(function(textArr){
            var list_items = textArr.toString().split("\n");
            //console.log(list_items);
            for (i = 0; i < list_items.length; i++){
                console.log('item '+(i+1)+' in drop down list is '+list_items[i]);
            };

            var selected_elements = [];

            for (i = start_offset; i < list_items.length - end_offset; i++){
                selected_elements.push(list_items[i]);
            };

            console.log("\nSelected items are: "+selected_elements);

            return selected_elements;

        });
    },

    DuoPassCode: function () {
        browser.sleep(5000);
        browser.driver.switchTo().frame("duo_iframe");
        browser.sleep(1000);

        browser.driver.findElement(By.xpath("//button[text() = ' Enter a Passcode ']")).click();
        browser.sleep(1000);
        browser.driver.findElement(by.css('input[class="passcode-input"]')).sendKeys('123456789');
        browser.sleep(1000);
        browser.driver.findElement(By.xpath("//button[text() = 'Log In']")).click();
        browser.sleep(1000);
        browser.driver.switchTo().defaultContent();
        browser.sleep(1000);
    },


    appLogin: function () {
        browser.get(this.siteAddress + '#/login');
        browser.sleep(1000);
        element.all(by.id('username')).sendKeys('rmenda@opaqnetworks.com');
		//element.all(by.id('username')).sendKeys('dcox@opaqnetworks.com');
		browser.sleep(1000);
        element.all(by.id('password')).sendKeys('test1234');
        browser.sleep(1000);
        element.all(by.buttonText('Login')).click();
        browser.sleep(2000);
        element.all(by.buttonText('Cancel')).click();
        element.all(by.css('button[ng-click="$close()"]')).click()
    },

    // appLogin: function () {
    //     browser.get(this.siteAddress + '#/login');
    //     browser.sleep(1000);
    //     element(by.id('username')).sendKeys('rmenda@opaqnetworks.com');
    //     browser.sleep(1000);
    //     element(by.id('password')).sendKeys('Myr3dsungl@sse$');
    //     // element(by.id('password')).sendKeys('test1234');
    //     browser.sleep(1000);
    //     element(by.buttonText('Login')).click();
    //     browser.sleep(2000);
    //     element.all(by.buttonText('Cancel')).click();
    // element.all(by.css('button[ng-click="$close()"]')).click();
    // },

    appLogin_TSAdmin: function () {
        browser.get(this.siteAddress + '#/login');
        browser.sleep(1000);
        element.all(by.id('username')).sendKeys('rmendat@opaqnetworks.com');
        browser.sleep(1000);
        element.all(by.id('password')).sendKeys('test1234');
        browser.sleep(1000);
        element.all(by.buttonText('Login')).click();
        browser.sleep(2000);
        element.all(by.buttonText('Cancel')).click();
        browser.sleep(1000);
        element.all(by.css('button[ng-click="$close()"]')).click();
    },

    // appLogin_TSAdmin: function () {
    //     browser.get(this.siteAddress + '#/login');
    //     browser.sleep(1000);
    //     element.all(by.id('username')).sendKeys('rmendat@opaqnetworks.com');
    //     browser.sleep(1000);
    //     element.all(by.id('password')).sendKeys('Myr3dsungl@sse$');
    //     browser.sleep(1000);
    //     element.all(by.buttonText('Login')).click();
    //     browser.sleep(2000);
    //     element.all(by.buttonText('Cancel')).click();
    // element.all(by.css('button[ng-click="$close()"]')).click();
    // },
	
    appLogin_TS_Duo: function () {
        browser.get(this.siteAddress + '#/login');
        browser.sleep(1000);
		element.all(by.id('username')).sendKeys('testing_support@opaqnetworks.com');
        browser.sleep(1000);
        element.all(by.id('password')).sendKeys('test1234');
        browser.sleep(1000);
        element.all(by.buttonText('Login')).click();
        browser.sleep(4000);

		browser.driver.switchTo().frame("duo_iframe");
		browser.sleep(1000);

		browser.driver.findElement(By.xpath("//button[text() = ' Enter a Passcode ']")).click();
		browser.sleep(1000);
		browser.driver.findElement(by.css('input[class="passcode-input"]')).sendKeys('123456789');
        browser.sleep(1000);
		browser.driver.findElement(By.xpath("//button[text() = 'Log In']")).click();
		browser.sleep(1000);
		browser.driver.switchTo().defaultContent();
		browser.sleep(1000);
        // element.all(by.css('button[ng-click="$close()"]')).click();
    },

    // appLogin_TS_Duo: function () {
    //     browser.get(this.siteAddress + '#/login');
    //     browser.sleep(1000);
    //     element.all(by.id('username')).sendKeys('testing_support@opaqnetworks.com');
    //     browser.sleep(1000);
    //     element.all(by.id('password')).sendKeys('Myr3dsungl@sse$');
    //     browser.sleep(1000);
    //     element.all(by.buttonText('Login')).click();
    //     browser.sleep(4000);
    //
    //     browser.driver.switchTo().frame("duo_iframe");
    //     browser.sleep(1000);
    //
    //     browser.driver.findElement(By.xpath("//button[text() = ' Enter a Passcode ']")).click();
    //     browser.sleep(1000);
    //     browser.driver.findElement(by.css('input[class="passcode-input"]')).sendKeys('123456789');
    //     browser.sleep(1000);
    //     browser.driver.findElement(By.xpath("//button[text() = 'Log In']")).click();
    //     browser.sleep(1000);
    //     browser.driver.switchTo().defaultContent();
    //     browser.sleep(1000);
    // element.all(by.css('button[ng-click="$close()"]')).click()
    // },

    TS_Customer: function () {

		//var customerName = 'Derrick Cox';
		var customerName = 'Raj Empire';
		return customerName;
    },
	
	support_admin_login: function(){
		
		this.appLogin_TS_Duo();
		
		element.all(by.id('btn-append-to-body')).click();
		browser.sleep(1000);
		element.all(by.linkText(this.TS_Customer())).click();
		browser.sleep(1000);
        element.all(by.buttonText('Select')).click();
        browser.sleep(1000);
	},	
		
    appLogout: function () {
        browser.sleep(2000);
        element.all(by.css('a[href="#"]')).click();
        browser.sleep(1000);
    },

    appLogin_dJangoSupportAdmin: function () {
        var ptor = protractor.getInstance();
        var driver = ptor.driver;
        driver.get('https://qa.opaqnetworks.net/admin/login/?next=/admin/');
        var findByName = function(name) {
            return driver.findElement(protractor.By.name(name));
        };

        driver.get(config.url);
        findByName('username').sendKeys('testing_support@opaqnetworks.com');
        findByName('password').sendKeys('test1234');
        findByName('Log in').click();
    },

	input_field_note: function(fieldlabel_value, error_message){
		var field_note = element(by.css('input-field-component[fieldlabel="'+fieldlabel_value+'"]')).element(by.css('i[class="zmdi zmdi-assignment zmdi-hc-2x position"]'))
		field_note.click();
		browser.sleep(1000);
		element(by.css('input-field-component[fieldlabel="Add Error Message"]')).element(by.css('input[id="name"]')).clear();
		browser.sleep(1000);			
		element(by.css('input-field-component[fieldlabel="Add Error Message"]')).element(by.css('input[id="name"]')).sendKeys(error_message);
		browser.sleep(1000);
		element.all(by.css('div[class="modal-content"]')).first().element(by.buttonText('Save')).click();
		browser.sleep(1000);			
	},

	input_field_note_by_InputFieldComponent: function(inputFieldComponent, error_message){
		var field_note = inputFieldComponent.element(by.css('i[class="zmdi zmdi-assignment zmdi-hc-2x position"]'));
		field_note.click();
		browser.sleep(1000);
		element(by.css('input-field-component[fieldlabel="Add Error Message"]')).element(by.css('input[id="name"]')).clear();
		browser.sleep(1000);			
		element(by.css('input-field-component[fieldlabel="Add Error Message"]')).element(by.css('input[id="name"]')).sendKeys(error_message);
		browser.sleep(1000);
		element.all(by.css('div[class="modal-content"]')).first().element(by.buttonText('Save')).click();
		browser.sleep(1000);			
	},		

	input_field_note_by_TextFieldComponent: function(inputFieldComponent, error_message){
		var field_note = inputFieldComponent.element(by.css('i[class="zmdi zmdi-assignment zmdi-hc-2x textnote position"]'));
		field_note.click();
		browser.sleep(1000);
		element(by.css('input-field-component[fieldlabel="Add Error Message"]')).element(by.css('input[id="name"]')).clear();
		browser.sleep(1000);			
		element(by.css('input-field-component[fieldlabel="Add Error Message"]')).element(by.css('input[id="name"]')).sendKeys(error_message);
		browser.sleep(1000);
		element.all(by.css('div[class="modal-content"]')).first().element(by.buttonText('Save')).click();
		browser.sleep(1000);			
	},
	
	getFieldComponentNoteByName: function(fieldComponentName){
		element(by.css('input-field-component[name="'+fieldComponentName+'"]')).element(by.css('p[class="help-block error ng-binding ng-scope"]')).getText().then(function(text){
			console.log('Note is - '+text);
			browser.sleep(1000);
			return text;
		});
	},
	
	getFieldComponentNoteByFieldComponent: function(fieldComponentElement){
		fieldComponentElement.element(by.css('p[class="help-block error ng-binding ng-scope"]')).getText().then(function(text){
			console.log('Note is - '+text);
			browser.sleep(1000);
			return text;
		});
	},	

	validateFieldComponentNoteByName: function(fieldComponentName, noteMessage){
		element(by.css('input-field-component[name="'+fieldComponentName+'"]')).element(by.css('p[class="help-block error ng-binding ng-scope"]')).getText().then(function(text){
			console.log('Note is - '+text+'\nExpected note message is - '+noteMessage);
			browser.sleep(1000);
			expect(text).toEqual(noteMessage);
			browser.sleep(1000);
		});
	},
	
	validateFieldComponentNoteByFieldComponent: function(fieldComponentElement, noteMessage){
		fieldComponentElement.element(by.css('p[class="help-block error ng-binding ng-scope"]')).getText().then(function(text){
			console.log('Note is - '+text+'\nExpected note message is - '+noteMessage);
			browser.sleep(1000);
			expect(text).toEqual(noteMessage);
			browser.sleep(1000);
		});
	},	

	addFirstHostGroup: function (name, ip){
		var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	
		var data = require('../json/testData.json');
		var HostGroupsPage = new HostGroups_Page();
		
        HostGroupsPage.zonesLink();
        browser.sleep(1000); 
			
        HostGroupsPage.add_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(ip);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);		
	},
	
	addAnotherHostGroup: function(name, ip){
		var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	
		var data = require('../json/testData.json');
		var HostGroupsPage = new HostGroups_Page();
		
        HostGroupsPage.zonesLink();
        browser.sleep(1000); 
		
		HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(ip);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);		
	},	
	
	removeHostGroup: function(){	
		var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	
		var data = require('../json/testData.json');
		var HostGroupsPage = new HostGroups_Page();

        HostGroupsPage.zonesLink();
        browser.sleep(1000); 
		
		HostGroupsPage.delete_Zone();
		browser.sleep(1000); 
		HostGroupsPage.delete_Yes_Message();
		browser.sleep(1000); 
	},
	
}