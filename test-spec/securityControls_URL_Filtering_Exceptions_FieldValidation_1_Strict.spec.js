describe('Acumen SECURITY CONTROLS URL Filtering Validation - Strict: ', function() {
//var logger = require('../test-spec/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var HostGroups_Page = require('../page-factory/HostGroupsPage.js');
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');

	var security_Controls_Page = new securityControls_Page();
	browser.sleep(1000);
	
	var HostGroupsPage = new HostGroups_Page();
	browser.sleep(1000);			

	it('Create Host groups', function () {

		common_Component.appLogin();
		browser.sleep(1000);
		
        HostGroupsPage.zonesLink();
        browser.sleep(1000); 
					
        HostGroupsPage.add_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_0_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_0_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
	
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_1_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_1_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
		
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_2_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_2_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
		
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_3_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_3_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
		
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_4_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_4_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
		
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);

        HostGroupsPage.zone_Name(data.host_groups.group_5_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_5_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);        
		
		HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_6_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_6_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);

        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_7_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_7_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
		
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_8_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_8_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);
		
        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_9_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_9_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);

        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);
		
        HostGroupsPage.zone_Name(data.host_groups.group_10_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_10_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);

        HostGroupsPage.addNew_Zone();	
        browser.sleep(1000);		
		
        HostGroupsPage.zone_Name(data.host_groups.group_11_name);	
        browser.sleep(1000);
        HostGroupsPage.zoneAccessible_From(data.host_groups.group_11_range);	
        browser.sleep(1000);
		HostGroupsPage.submitZone();
		browser.sleep(1000);			
		
	});	
	
	it('Navigate to security controls page url filters', function () {	
	
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);		
		security_Controls_Page.urlFiltering_Strict_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);		
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);
	});


	it('Validate exceptions category search bar', function () {	

		console.log('Checking for categories search bar result.');
		browser.sleep(1000);		
		security_Controls_Page.exceptions_Category_Click();
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Category_Search('malw');
		browser.sleep(1000);	
		common_Component.dropdown_Comparison('div[id="categories-multiselect"]',3,0,['Malware']);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Category_Search_Clear();
		browser.sleep(1000);		
		security_Controls_Page.exceptions_Category_Search('web');
		browser.sleep(1000);		
		common_Component.dropdown_Comparison('div[id="categories-multiselect"]',3,0,['Web Advertisements','Web Based Email','Web Hosting']);
		browser.sleep(1000);
		
	});	

	
	it('Validate exceptions host groups search bar', function () {	

		console.log('Checking host groups search bar result.');
		browser.sleep(1000);		
		security_Controls_Page.exceptions_Host_Groups_Click();
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Host_Groups_Search('trad');
		browser.sleep(1000);	
		common_Component.dropdown_Comparison('div[id="hostgroups-multiselect"]',3,0,['Traders']);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);		
		security_Controls_Page.exceptions_Host_Groups_Search('ma');
		browser.sleep(1000);		
		common_Component.dropdown_Comparison('div[id="hostgroups-multiselect"]',3,0,['Human resources','Information Technology','Marketing']);
		browser.sleep(1000);
		
	});		

	it('Validate host group items', function () {
		
		console.log('Checking host groups.');
		browser.sleep(1000);			
		security_Controls_Page.exceptions_Host_Groups_Click();
		browser.sleep(1000);
		
		var list_results = [];
		list_results.push(data.host_groups.group_0_name);
		list_results.push(data.host_groups.group_1_name);
		common_Component.dropdown_Comparison('div[id="hostgroups-multiselect"]', 3, 0, list_results.sort());	
		
		security_Controls_Page.urlFilter_Window_Cancel_Button_Click();
		browser.sleep(1000);
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);				
	});

	
	it('Delete Host Groups and log out', function () {	
	
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
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);
		remove_Zone();
		browser.sleep(2000);	
		
		common_Component.appLogout();
	});	
      
});