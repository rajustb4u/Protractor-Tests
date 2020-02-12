describe('SECURITY CONTROLS PAGE Global Ban Exceptions - Functionality', function() {
	//var logger = require('../scripts/log.js');
	var securityControls_Page = require('../page-factory/securityControlsPage.js');
	var data = require('../json/testData.json');
	var common_Component = require('../test-spec/common-component.js');
	var HostGroups_Page = require('../page-factory/HostGroupsPage.js');	

	var security_Controls_Page = new securityControls_Page();
	var HostGroupsPage = new HostGroups_Page();
	
	var exception_total_count = 4;
	var hostgroups_total_count = 12;	
	var compareItem = function(textObj, list){

		textObj.then(function(items){
			var strippedList = [];
			for(i = 0; i < items.length; i++){
				console.log(items[i].replace(/,/g, "").toLowerCase());
				strippedList.push(items[i].replace(/,/g, "").toLowerCase());
			}
			
			var strippedItems = [];
			for(i = 0; i < list.length; i++){
	
				strippedItems.push(list[i].replace(/,/g, "").toLowerCase());
			}
			
			expect(strippedList).toEqual(strippedItems);
		});
	};	
	
	
	it('Log into the portal', function(){	
        common_Component.appLogin();
        browser.sleep(1000);

	});
	
	it('Creating Host groups', function () {

		console.log('Creating host groups');
		browser.sleep(1000);
		
		common_Component.addFirstHostGroup(data.host_groups.group_0_name,data.host_groups.group_0_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_1_name,data.host_groups.group_1_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_2_name,data.host_groups.group_2_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_3_name,data.host_groups.group_3_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_4_name,data.host_groups.group_4_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_5_name,data.host_groups.group_5_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_6_name,data.host_groups.group_6_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_7_name,data.host_groups.group_7_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_8_name,data.host_groups.group_8_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_9_name,data.host_groups.group_9_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_10_name,data.host_groups.group_10_range);
		common_Component.addAnotherHostGroup(data.host_groups.group_11_name,data.host_groups.group_11_range);				
	});	
	
	
	it('Navigate to security controls Global Ban exceptions',function(){
		console.log('Navigate to security controls Global Ban exceptions.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);

		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);				
	});
	
	
	it('Creating global ban exception 1', function () {
		console.log('Creating global ban exception 1.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Add_Exception();
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[0]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[0])).click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[0]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[0]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[0]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_0_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_0_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_UDP();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);			
	});	

	it('Creating global ban exception 2', function () {
		console.log('Creating global ban exception 2.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Add_Exceptionv2();
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[1]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[1])).click();
		browser.sleep(1000);
		security_Controls_Page.addglobalBanApplications_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[5]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[5])).click();
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[1]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[5]);
		browser.sleep(1000);	
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[1]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groups_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[5]);
		browser.sleep(1000);	
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_1_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_1_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_5_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_5_name)).click();
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);	
		
		security_Controls_Page.globalBan_Exceptions_Applied_To_Block_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[1]);
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		security_Controls_Page.add_GlobalBanExceptionsPort_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[5]);
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Protocolv2_UDP();
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);			
	});	

	it('Creating global ban exception 3', function () {
		console.log('Creating global ban exception 3.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Add_Exceptionv2();
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[2]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[2])).click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[2]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[2]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[2]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_2_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_2_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);			
	});		
	
	it('Creating global ban exception 4', function () {
		console.log('Creating global ban exception 4.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Add_Exceptionv2();
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[3]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[3])).click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[3]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[3]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[3]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_3_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_3_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);			
	});	
	
	it('Saving exceptions', function () {
		console.log('Saving exceptions.');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
	});	
	
	it('Navigate to security controls Global Ban exceptions post exception creation',function(){
		console.log('Navigate to security controls Global Ban exceptions post exception creation.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);

		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);				
	});		
	
	it('Checking Global Ban Exceptions list',function(){
		console.log('Checking Global Ban Exceptions list.');
		browser.sleep(1000);
		
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		
		var exception_Row_1 = exception_Rows.get(0);
		var exception_Row_2 = exception_Rows.get(1);
		var exception_Row_3 = exception_Rows.get(2);
		var exception_Row_4 = exception_Rows.get(3);
		
		var listed_exception_1_applications = exception_Row_1.all(by.css('span[ng-if="exception.applications.length"]')).getText();
		var listed_exception_1_ports = exception_Row_1.all(by.css('span[ng-repeat="port in exception.ports"]')).getText();
		var listed_exception_1_hostgroups = exception_Row_1.all(by.css('span[ng-if="exception.zones.length"]')).getText();	
		var listed_exception_1_users = exception_Row_1.all(by.css('span[ng-if="exception.users.length"]')).getText();		
		var listed_exception_1_usergroups = exception_Row_1.all(by.css('span[ng-if="exception.groups.length"]')).getText();

		var listed_exception_2_applications = exception_Row_2.all(by.css('span[ng-if="exception.applications.length"]')).getText();
		var listed_exception_2_ports = exception_Row_2.all(by.css('span[ng-repeat="port in exception.ports"]')).getText();
		var listed_exception_2_hostgroups = exception_Row_2.all(by.css('span[ng-if="exception.zones.length"]')).getText();	
		var listed_exception_2_users = exception_Row_2.all(by.css('span[ng-if="exception.users.length"]')).getText();		
		var listed_exception_2_usergroups = exception_Row_2.all(by.css('span[ng-if="exception.groups.length"]')).getText();	

		var listed_exception_3_applications = exception_Row_3.all(by.css('span[ng-if="exception.applications.length"]')).getText();
		var listed_exception_3_ports = exception_Row_3.all(by.css('span[ng-repeat="port in exception.ports"]')).getText();
		var listed_exception_3_hostgroups = exception_Row_3.all(by.css('span[ng-if="exception.zones.length"]')).getText();	
		var listed_exception_3_users = exception_Row_3.all(by.css('span[ng-if="exception.users.length"]')).getText();		
		var listed_exception_3_usergroups = exception_Row_3.all(by.css('span[ng-if="exception.groups.length"]')).getText();	

		var listed_exception_4_applications = exception_Row_4.all(by.css('span[ng-if="exception.applications.length"]')).getText();
		var listed_exception_4_ports = exception_Row_4.all(by.css('span[ng-repeat="port in exception.ports"]')).getText();
		var listed_exception_4_hostgroups = exception_Row_4.all(by.css('span[ng-if="exception.zones.length"]')).getText();	
		var listed_exception_4_users = exception_Row_4.all(by.css('span[ng-if="exception.users.length"]')).getText();		
		var listed_exception_4_usergroups = exception_Row_4.all(by.css('span[ng-if="exception.groups.length"]')).getText();


		compareItem(listed_exception_1_applications, [data.globalBan_Exceptions.application_names[0]]);
		compareItem(listed_exception_1_ports, ["udp:"+data.globalBan_Exceptions.port_numbers[0]]);
		compareItem(listed_exception_1_hostgroups, [data.host_groups.group_0_name]);
		compareItem(listed_exception_1_users, [data.globalBan_Exceptions.user_names[0]]);
		compareItem(listed_exception_1_usergroups, [data.globalBan_Exceptions.usergroup_names[0]]);
		
		compareItem(listed_exception_2_applications, [data.globalBan_Exceptions.application_names[1],data.globalBan_Exceptions.application_names[5]]);
		compareItem(listed_exception_2_ports, ["tcp:"+data.globalBan_Exceptions.port_numbers[1],"udp:"+data.globalBan_Exceptions.port_numbers[5]]);
		compareItem(listed_exception_2_hostgroups, [data.host_groups.group_1_name+" "+data.host_groups.group_5_name]);
		compareItem(listed_exception_2_users, [data.globalBan_Exceptions.user_names[1],data.globalBan_Exceptions.user_names[5]]);
		compareItem(listed_exception_2_usergroups, [data.globalBan_Exceptions.usergroup_names[1],data.globalBan_Exceptions.usergroup_names[5]]);		
		
		compareItem(listed_exception_3_applications, [data.globalBan_Exceptions.application_names[2]]);
		compareItem(listed_exception_3_ports, ["tcp:"+data.globalBan_Exceptions.port_numbers[2]]);
		compareItem(listed_exception_3_hostgroups, [data.host_groups.group_2_name]);
		compareItem(listed_exception_3_users, [data.globalBan_Exceptions.user_names[2]]);
		compareItem(listed_exception_3_usergroups, [data.globalBan_Exceptions.usergroup_names[2]]);		

		compareItem(listed_exception_4_applications, [data.globalBan_Exceptions.application_names[3]]);
		compareItem(listed_exception_4_ports, ["tcp:"+data.globalBan_Exceptions.port_numbers[3]]);
		compareItem(listed_exception_4_hostgroups, [data.host_groups.group_3_name]);
		compareItem(listed_exception_4_users, [data.globalBan_Exceptions.user_names[3]]);
		compareItem(listed_exception_4_usergroups, [data.globalBan_Exceptions.usergroup_names[3]]);	
	
	});
	
	it('Validate exception list allow and blocked icons', function () {
		console.log('Validate exception list allow and blocked icons.');
		
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		
		var exception_Row_1 = exception_Rows.get(0);
		var exception_Row_2 = exception_Rows.get(1);
		var exception_Row_3 = exception_Rows.get(2);	
		var exception_Row_4 = exception_Rows.get(3);
		
		//expect allow icon for exception 1
		expect(exception_Row_1.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);
		
		//expect blocked icon for exception 2
		expect(exception_Row_2.all(by.css('i[class="zmdi zmdi-block block-icon"]')).isPresent()).toBe(true);
		
		//expect allow icon for exception 3
		expect(exception_Row_3.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);

		//expect allow icon for exception 4
		expect(exception_Row_4.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);		
	});


	it('Checking for exception delete dialogue popup', function () {
		console.log('Checking for exception delete dialogue popup.');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);
		
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('No')).click();
		browser.sleep(1000);
		
	});	
	

	it('Validate global ban exception list exception deletion', function () {
		
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		browser.sleep(1000);
		
		exception_Rows.then(function(rows){
			
			console.log('Initial exceptions row count is - '+rows.length);	
			expect(rows.length).toEqual(exception_total_count);		
		});
		
		security_Controls_Page.globalBan_Exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);
		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);		

		var exception_Rows_Unsaved = element.all(by.css('.tr.row.ng-scope'));
	
		exception_Rows_Unsaved.then(function(rows){
			
			console.log('Post deletion but before save exception row count is - '+rows.length);	
			expect(rows.length).toEqual(exception_total_count - 1);		
		});		
		
		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
		
		//Navigate back to exceptions
		console.log('Navigate to security controls Global Ban exceptions.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);

		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);		
		//			
		var exception_Rows_Validation = element.all(by.css('.tr.row.ng-scope'));
		browser.sleep(1000);
		
		exception_Rows_Validation.then(function(rows){
			
			console.log('Post deletion validation exceptions row count is - '+rows.length);	
			expect(rows.length).toEqual(exception_total_count - 1);		
		});		
	});	

 	it('Validate global ban exception list exception edit', function () {
		
		console.log('Validate global ban exception list exception edit.');
		browser.sleep(1000);

		console.log('Validate global ban exception list exception edit.');
		browser.sleep(1000);
		
		security_Controls_Page.get_globalBan_Exceptions_List_Edit_Buttons().get(1).click();
		browser.sleep(1000);
		
		security_Controls_Page.deleteglobalBanApplicationsv2_Click();
		browser.sleep(1000);
		security_Controls_Page.delete_GlobalBanExceptionsPortv2_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Users_Delete_Buttonv2_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groups_Delete_Buttonv2_Click();
		browser.sleep(1000);
		
		security_Controls_Page.globalBanApplicationsv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Clear();
		

		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[7]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[7])).click();
		browser.sleep(1000);
		security_Controls_Page.addglobalBanApplications_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBanApplicationsv2_text(data.globalBan_Exceptions.application_names[8]);
		browser.sleep(1000);
		element(by.linkText(data.globalBan_Exceptions.application_names[8])).click();
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[7]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Usersv2_Text(data.globalBan_Exceptions.user_names[8]);
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[7]);
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groups_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_User_Groupsv2_Text(data.globalBan_Exceptions.usergroup_names[8]);
		browser.sleep(1000);	
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_1_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_1_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_5_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_5_name)).click();
		browser.sleep(1000);				
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);		
		
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_7_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_7_name)).click();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Clear();
		browser.sleep(1000);
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Search_Text(data.host_groups.group_8_name);
		browser.sleep(1000);
		element(by.linkText(data.host_groups.group_8_name)).click();
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_Host_Groups_Click();
		browser.sleep(1000);

		security_Controls_Page.globalBan_Exceptions_Applied_To_Allow_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[7]);
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Protocolv2_TCP();
		browser.sleep(1000);
		security_Controls_Page.add_GlobalBanExceptionsPort_Click();
		browser.sleep(1000);
		security_Controls_Page.globalBanExceptionsPortv2_Text(data.globalBan_Exceptions.port_numbers[8]);
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Protocolv2_UDP();
		browser.sleep(1000);		
		security_Controls_Page.globalBan_Exceptions_Apply_Button_Click();
		browser.sleep(1000);
		
	});
	
	it('Saving edited exceptions', function () {
		console.log('Saving edited exceptions.');
		browser.sleep(1000);
		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
	});	
		
	it('Navigate to security controls Global Ban exceptions post exception edit',function(){
		console.log('Navigate to security controls Global Ban exceptions post exception edit.');
		browser.sleep(1000);
		
		security_Controls_Page.security_Controls_Link();
        browser.sleep(1000);

		security_Controls_Page.customizeGlobalBan_Click();
		browser.sleep(1000);
		security_Controls_Page.show_GlobalBan_Exceptions();
		browser.sleep(1000);				
	});	
		
	it('Checking Global Ban edited Exceptions list',function(){
		console.log('Checking Global Ban edited Exceptions list.');
		browser.sleep(1000);
		
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		
		var exception_Row_1 = exception_Rows.get(0);
		var exception_Row_2 = exception_Rows.get(1);
		var exception_Row_3 = exception_Rows.get(2);

		
		var listed_exception_1_applications = exception_Row_1.all(by.css('span[ng-if="exception.applications.length"]')).getText();
		var listed_exception_1_ports = exception_Row_1.all(by.css('span[ng-repeat="port in exception.ports"]')).getText();
		var listed_exception_1_hostgroups = exception_Row_1.all(by.css('span[ng-if="exception.zones.length"]')).getText();	
		var listed_exception_1_users = exception_Row_1.all(by.css('span[ng-if="exception.users.length"]')).getText();		
		var listed_exception_1_usergroups = exception_Row_1.all(by.css('span[ng-if="exception.groups.length"]')).getText();

		var listed_exception_2_applications = exception_Row_2.all(by.css('span[ng-if="exception.applications.length"]')).getText();
		var listed_exception_2_ports = exception_Row_2.all(by.css('span[ng-repeat="port in exception.ports"]')).getText();
		var listed_exception_2_hostgroups = exception_Row_2.all(by.css('span[ng-if="exception.zones.length"]')).getText();	
		var listed_exception_2_users = exception_Row_2.all(by.css('span[ng-if="exception.users.length"]')).getText();		
		var listed_exception_2_usergroups = exception_Row_2.all(by.css('span[ng-if="exception.groups.length"]')).getText();	

		var listed_exception_3_applications = exception_Row_3.all(by.css('span[ng-if="exception.applications.length"]')).getText();
		var listed_exception_3_ports = exception_Row_3.all(by.css('span[ng-repeat="port in exception.ports"]')).getText();
		var listed_exception_3_hostgroups = exception_Row_3.all(by.css('span[ng-if="exception.zones.length"]')).getText();	
		var listed_exception_3_users = exception_Row_3.all(by.css('span[ng-if="exception.users.length"]')).getText();		
		var listed_exception_3_usergroups = exception_Row_3.all(by.css('span[ng-if="exception.groups.length"]')).getText();	


		compareItem(listed_exception_1_applications, [data.globalBan_Exceptions.application_names[0]]);
		compareItem(listed_exception_1_ports, ["udp:"+data.globalBan_Exceptions.port_numbers[0]]);
		compareItem(listed_exception_1_hostgroups, [data.host_groups.group_0_name]);
		compareItem(listed_exception_1_users, [data.globalBan_Exceptions.user_names[0]]);
		compareItem(listed_exception_1_usergroups, [data.globalBan_Exceptions.usergroup_names[0]]);
		
		compareItem(listed_exception_2_applications, [data.globalBan_Exceptions.application_names[7],data.globalBan_Exceptions.application_names[8]]);
		compareItem(listed_exception_2_ports, ["tcp:"+data.globalBan_Exceptions.port_numbers[7],"udp:"+data.globalBan_Exceptions.port_numbers[8]]);
		compareItem(listed_exception_2_hostgroups, [data.host_groups.group_7_name+" "+data.host_groups.group_8_name]);
		compareItem(listed_exception_2_users, [data.globalBan_Exceptions.user_names[7],data.globalBan_Exceptions.user_names[8]]);
		compareItem(listed_exception_2_usergroups, [data.globalBan_Exceptions.usergroup_names[7],data.globalBan_Exceptions.usergroup_names[8]]);		
		
		compareItem(listed_exception_3_applications, [data.globalBan_Exceptions.application_names[2]]);
		compareItem(listed_exception_3_ports, ["tcp:"+data.globalBan_Exceptions.port_numbers[2]]);
		compareItem(listed_exception_3_hostgroups, [data.host_groups.group_2_name]);
		compareItem(listed_exception_3_users, [data.globalBan_Exceptions.user_names[2]]);
		compareItem(listed_exception_3_usergroups, [data.globalBan_Exceptions.usergroup_names[2]]);		


	});
	
	it('Validate edited exception list allow and blocked icons', function () {
		console.log('Validate edited exception list allow and blocked icons.');
		
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		
		var exception_Row_1 = exception_Rows.get(0);
		var exception_Row_2 = exception_Rows.get(1);
		var exception_Row_3 = exception_Rows.get(2);	

		
		//expect allow icon for exception 1
		expect(exception_Row_1.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);
		
		//expect allow icon for exception 2
		expect(exception_Row_2.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);
		
		//expect allow icon for exception 3
		expect(exception_Row_3.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);
	});
	
	it('Deleting global ban exceptions', function () {
		console.log('Deleting global ban exceptions.');
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
		
		security_Controls_Page.globalBan_Exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);

		security_Controls_Page.globalBan_Exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);

		security_Controls_Page.globalBan_Window_Save_Button_Click();
		browser.sleep(1000);
		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);
		
	});		
	

	it('Delete Host Groups', function () {	
	
		for (i = 0; i < hostgroups_total_count; i++){
			common_Component.removeHostGroup();
			browser.sleep(2000);
		}
			
	});	
	

	it('logout', function () {
		common_Component.appLogout();
		browser.sleep(1000);
	});
	
});