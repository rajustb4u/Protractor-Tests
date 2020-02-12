describe('Acumen SECURITY CONTROLS URL Filtering Validation: ', function() {
//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	browser.sleep(1000);
	
	var HostGroupsPage = new HostGroups_Page();
	browser.sleep(1000);			
	
	it('Navigate to standard url filters exceptions', function () {

		common_Component.appLogin();
		browser.sleep(1000);			
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);		
		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);		
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);
	});	

	it('Check applied button state with url, and user field filled in.', function () {
		
		console.log('\nCheck applied button state with url, and user field filled in.');

		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users('User');
		browser.sleep(1000);	
		
		console.log('Apply button should be enabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual(null);
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url_Clear();
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users_Clear();
		browser.sleep(1000);	
		
	});	
	
	it('Check applied button state with url, and user groups field filled in.', function () {
		
		console.log('\nCheck applied button state with url, and user groups field filled in.');

		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups('Group');
		browser.sleep(1000);	
		
		console.log('Apply button should be enabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual(null);
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url_Clear();
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups_Clear();
		browser.sleep(1000);	
		
	});	

	it('Create Host groups', function () {
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000)	
/*		
        HostGroupsPage.zonesLink();
        browser.sleep(1000); 
					
        HostGroupsPage.add_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_0_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_0_range);	
        browser.sleep(1000);
		HostGroupsPage.addSubnets_Click();
		browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
	
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_1_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_1_range);	
        browser.sleep(1000);
		HostGroupsPage.addSubnets_Click();
		browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
*/
		common_Component.addFirstHostGroup(data.host_groups.group_0_name,data.host_groups.group_0_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_1_name,data.host_groups.group_1_range);
		
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);		
		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);		
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);

		security_Controls_Page.exceptions_Url('www.somewhere.com');
		browser.sleep(1000);
		

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',3);		
		browser.sleep(1000);
		
		console.log('Apply button should be enabled');
		browser.sleep(1000);
		expect(security_Controls_Page.exceptions_Apply_Button_GetState()).toEqual(null);
		browser.sleep(1000);
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);	
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
		
		common_Component.removeHostGroup();
		common_Component.removeHostGroup();	
/*
	    HostGroupsPage.zonesLink();
        browser.sleep(1000); 
		
		var remove_Zone = function(){
			HostGroupsPage.delete_Zone();
			browser.sleep(1000); 
			HostGroupsPage.delete_Yes_Message();
			browser.sleep(1000); 
		}
		
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
*/		
	});		
	
	
	it('logout', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});			
       
});