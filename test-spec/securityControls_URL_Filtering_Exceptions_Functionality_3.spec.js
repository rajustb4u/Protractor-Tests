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
	
	var exception_total_count = 12;
	var hostgroups_total_count = 12;
	
	var exception_1_sites = ["WWW.THIS.COM"];
	var exception_1_users = ["Person1"];
	var exception_1_usergroups = ["Group1"];
	var exception_1_hostgroups = ["Accounting"];

	var exception_2_sites = ["WWW.THAT.COM"];
	var exception_2_users = ["Person2","Person3","Person4"];
	var exception_2_usergroups = ["Group2","Group3"];
	var exception_2_hostgroups = ["Human Resources"];
	
	var exception_3_sites = ["WWW.THEM.COM", "WWW.THING.COM"];
	var exception_3_users = ["Person5","Person6"];
	var exception_3_usergroups = ["Group4","Group5","Group6"];
	var exception_3_hostgroups = ["Information Technology"];
	
	var exception_4_sites = ["WWW.THESE.COM"];
	var exception_4_users = ["Person11"];
	var exception_4_usergroups = ["Group11"];
	var exception_4_hostgroups = ["Investigations"];
	
	var exception_5_sites = ["WWW.THINK.COM"];
	var exception_5_users = ["Person12"];
	var exception_5_usergroups = ["Group12"];
	var exception_5_hostgroups = ["Loans"];
	
	var exception_6_sites = ["WWW.THEY.COM"];
	var exception_6_users = ["Person13"];
	var exception_6_usergroups = ["Group13"];
	var exception_6_hostgroups = ["Marketing"];
	
	var exception_7_sites = ["WWW.THUD.COM"];
	var exception_7_users = ["Person14"];
	var exception_7_usergroups = ["Group14"];
	var exception_7_hostgroups = ["Payments"];

	var exception_8_sites = ["WWW.THOU.COM"];
	var exception_8_users = ["Person15"];
	var exception_8_usergroups = ["Group15"];
	var exception_8_hostgroups = ["Office Services"];
	
	var exception_9_sites = ["WWW.THY.COM"];
	var exception_9_users = ["Person16"];
	var exception_9_usergroups = ["Group16"];
	var exception_9_hostgroups = ["Operations"];

	var exception_10_sites = ["WWW.THINE.COM"];
	var exception_10_users = ["Person17"];
	var exception_10_usergroups = ["Group17"];
	var exception_10_hostgroups = ["Sales"];	
	
	var exception_11_sites = ["WWW.THICK.COM"];
	var exception_11_users = ["Person18"];
	var exception_11_usergroups = ["Group18"];
	var exception_11_hostgroups = ["Security"];	

	var exception_12_sites = ["WWW.THANK.COM"];
	var exception_12_users = ["Person19"];
	var exception_12_usergroups = ["Group19"];
	var exception_12_hostgroups = ["Traders"];		

	it('Login', function () {
		
		common_Component.appLogin();
		browser.sleep(1000);
	}),
	
	it('Create Host groups', function () {

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
	
	it('Navigate to standard url filters exceptions', function () {
		
		security_Controls_Page.security_Controls_Link();
		browser.sleep(1000);		
		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);		

	});
	

	it('Creating exceptions.', function () {
		
		console.log('\nCreating exceptions.');
		
		security_Controls_Page.add_Exception_Button_Click();		
		browser.sleep(1000);
		
		//Creating exception 1
		security_Controls_Page.exceptions_Url(exception_1_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_1_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_1_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',5);
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);		

		//Creating exception 2
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Applied_To_Block_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Url(exception_2_sites[0]);
		browser.sleep(1000);
	
		security_Controls_Page.exceptions_Users(exception_2_users[0]);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Usersv2(exception_2_users[1]);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Usersv2(exception_2_users[2]);
		browser.sleep(1000);
			
		security_Controls_Page.exceptions_Groups(exception_2_usergroups[0]);
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Groups_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Groupsv2(exception_2_usergroups[1]);
		browser.sleep(1000);	

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',6);
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);

		//Creating exception 3
		
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);
		security_Controls_Page.exceptions_Url(exception_3_sites[0]);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Url_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Urlv2(exception_3_sites[1]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_3_users[0]);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Usersv2(exception_3_users[1]);
		browser.sleep(1000);

		
		security_Controls_Page.exceptions_Groups(exception_3_usergroups[0]);
		browser.sleep(1000);	
		security_Controls_Page.exceptions_Groups_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Groupsv2(exception_3_usergroups[1]);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Groups_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Groupsv2(exception_3_usergroups[2]);
		browser.sleep(1000);			

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',7);
		browser.sleep(1000);				
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);

		//Creating exception 4
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_4_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_4_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_4_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',8);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);
		
		//Creating exception 5
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_5_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_5_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_5_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',9);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);
		
		//Creating exception 6
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_6_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_6_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_6_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',10);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);
		
		//Creating exception 7
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_7_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_7_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_7_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',11);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);
		
		//Creating exception 8
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_8_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_8_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_8_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',12);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);
		
		//Creating exception 9
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_9_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_9_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_9_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',13);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);
		
		//Creating exception 10
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_10_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_10_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_10_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',14);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);

		//Creating exception 111
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_11_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_11_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_11_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',15);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);

		//Creating exception 12
		security_Controls_Page.add_Exception_Button2_Click();		
		browser.sleep(1000);		
		
		security_Controls_Page.exceptions_Url(exception_12_sites[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Users(exception_12_users[0]);
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Groups(exception_12_usergroups[0]);
		browser.sleep(1000);

		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',16);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(1000);		
		//Saving
		security_Controls_Page.urlFilter_Window_Save_Button_Click();
		browser.sleep(1000);	
	});	
	
	
	it('Navigate to exceptions list and validate url, user, and usergroup items', function () {
		
		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);	
	
		var compareItem = function(textObj, list){

			textObj.then(function(items){
				var stripedList = [];
				for(i = 0; i < items.length; i++){
					console.log(items[i].replace(/,/g, ""));
					stripedList.push(items[i].replace(/,/g, ""));
				}
			
				expect(stripedList).toEqual(list);
			});
		};		
			
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		
		var exception_Row_1 = exception_Rows.get(0);
		var exception_Row_2 = exception_Rows.get(1);
		var exception_Row_3 = exception_Rows.get(2);
		
		var listed_exception_1_sites = exception_Row_1.all(by.css('span[ng-if="exception.urls.length"]')).getText();
		var listed_exception_1_users = exception_Row_1.all(by.css('span[ng-if="exception.users.length"]')).getText();
		var listed_exception_1_usergroups = exception_Row_1.all(by.css('span[ng-if="exception.groups.length"]')).getText();
		var listed_exception_1_hostgroups = exception_Row_1.all(by.css('span[ng-repeat="hostgroups in exception.zones"]')).getText();
		

		var listed_exception_2_sites = exception_Row_2.all(by.css('span[ng-if="exception.urls.length"]')).getText();
		var listed_exception_2_users = exception_Row_2.all(by.css('span[ng-if="exception.users.length"]')).getText();
		var listed_exception_2_usergroups = exception_Row_2.all(by.css('span[ng-if="exception.groups.length"]')).getText();
		var listed_exception_2_hostgroups = exception_Row_2.all(by.css('span[ng-repeat="hostgroups in exception.zones"]')).getText();
		
		var listed_exception_3_sites = exception_Row_3.all(by.css('span[ng-if="exception.urls.length"]')).getText();
		var listed_exception_3_users = exception_Row_3.all(by.css('span[ng-if="exception.users.length"]')).getText();
		var listed_exception_3_usergroups = exception_Row_3.all(by.css('span[ng-if="exception.groups.length"]')).getText();
		var listed_exception_3_hostgroups = exception_Row_3.all(by.css('span[ng-repeat="hostgroups in exception.zones"]')).getText();
		
		compareItem(listed_exception_1_sites, exception_1_sites);
		compareItem(listed_exception_1_users, exception_1_users);
		compareItem(listed_exception_1_usergroups, exception_1_usergroups);
		compareItem(listed_exception_1_hostgroups, exception_1_hostgroups);
		
		compareItem(listed_exception_2_sites, exception_2_sites);
		compareItem(listed_exception_2_users, exception_2_users);
		compareItem(listed_exception_2_usergroups, exception_2_usergroups);
		compareItem(listed_exception_2_hostgroups, exception_2_hostgroups);
		
		compareItem(listed_exception_3_sites, exception_3_sites);
		compareItem(listed_exception_3_users, exception_3_users);
		compareItem(listed_exception_3_usergroups, exception_3_usergroups);	
		compareItem(listed_exception_3_hostgroups, exception_3_hostgroups);
		
	});			 
 	
	it('Validate exception list allow and blocked icons', function () {
		
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		
		var exception_Row_1 = exception_Rows.get(0);
		var exception_Row_2 = exception_Rows.get(1);
		var exception_Row_3 = exception_Rows.get(2);	

		//expect allow icon for exception 1
		expect(exception_Row_1.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);


		//expect blocked icon for exception 2
		expect(exception_Row_2.all(by.css('i[class="zmdi zmdi-block block-icon"]')).isPresent()).toBe(true);
		
		//expect allow icon for exception 3
		expect(exception_Row_3.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);		
	});	

	it('Validate exception list is scrollable',function(){
		
		console.log('Checking if list of '+exception_total_count+' elements are scrollable');
		
		expect(element(by.css('div.scrollable-exception-content.tbody.border-top')).getAttribute('disabled')).toBe(null);
		if (expect(element(by.css('div.scrollable-exception-content.tbody.border-top')).getAttribute('disabled')).toBe(null)){
			console.log('The list of elements are scrollable.')
		}
				
	});
	

	it('Validate exception list exception deletion dialogue', function () {

		security_Controls_Page.urlFilter_exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);
		
		expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
	
		element.all(by.buttonText('No')).click();
		browser.sleep(1000);
	
	});
 
 
	it('Validate exception list exception deletion', function () {
		
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		browser.sleep(1000);
		
		exception_Rows.then(function(rows){
			
			console.log('Initial exceptions row count is - '+rows.length);	
			expect(rows.length).toEqual(exception_total_count);		
		});
		
		security_Controls_Page.urlFilter_exceptions_List_Delete_Buttonv2_Click();	
		browser.sleep(1000);
		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);		

		var exception_Rows_Unsaved = element.all(by.css('.tr.row.ng-scope'));
	
		exception_Rows_Unsaved.then(function(rows){
			
			console.log('Post deletion but before save exception row count is - '+rows.length);	
			expect(rows.length).toEqual(exception_total_count - 1);		
		});		
		
		security_Controls_Page.urlFilter_Window_Save_Button_Click();
		browser.sleep(1000);
		
		element.all(by.buttonText('Yes')).click();
		browser.sleep(1000);

		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);	
			
		var exception_Rows_Validation = element.all(by.css('.tr.row.ng-scope'));
		browser.sleep(1000);
		
		exception_Rows_Validation.then(function(rows){
			
			console.log('Post deletion validation exceptions row count is - '+rows.length);	
			expect(rows.length).toEqual(exception_total_count - 1);		
		});		
	});			

 	it('Validate exception list exception edit.', function () {
		
		var new_exception_2_sites = ["WWW.THAT.COM","WWW.THEIR.COM"];
		var new_exception_2_users = ["Person2","Person8","Person9"];
		var new_exception_2_usergroups = ["Group2","Group8","Group9"];
		var new_exception_2_categories = ["ABORTION"];
		var new_exception_2_hostgroups = ["Human Resources","Loans"];
		
		
		//security_Controls_Page.urlFilter_exceptions_List_Edit_Buttonv2_Click();
		security_Controls_Page.get_urlFilter_exceptions_List_Edit_Buttons().get(1).click();
		browser.sleep(1000);
		
		security_Controls_Page.exceptions_Applied_To_Allow_Click();
		browser.sleep(1000);	
		
		common_Component.selectItemDropDown_2('div[id="categories-multiselect"]',5);
		browser.sleep(1000);		
		
		security_Controls_Page.urlFilter_exceptions_Users_Delete_Buttonv2_Click();
		browser.sleep(1000);	
		security_Controls_Page.urlFilter_exceptions_Users_Delete_Buttonv2_Click();
		browser.sleep(1000);	
		
		security_Controls_Page.urlFilter_exceptions_Groups_Delete_Buttonv2_Click();
		browser.sleep(1000);	
		
		//Adding items
		security_Controls_Page.exceptions_Url_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Urlv2(new_exception_2_sites[1]);
		browser.sleep(1000);		

		security_Controls_Page.exceptions_Users_Add_Button_Click();
		browser.sleep(1000);
		security_Controls_Page.exceptions_Usersv2(new_exception_2_users[1]);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Users_Add_Button_Click();
		browser.sleep(1000);		
		security_Controls_Page.exceptions_Usersv2(new_exception_2_users[2]);
		browser.sleep(1000);		

		security_Controls_Page.exceptions_Groups_Add_Button_Click();
		browser.sleep(1000);		
		security_Controls_Page.exceptions_Groupsv2(new_exception_2_usergroups[1]);
		browser.sleep(1000);
		security_Controls_Page.exceptions_Groups_Add_Button_Click();
		browser.sleep(1000);		
		security_Controls_Page.exceptions_Groupsv2(new_exception_2_usergroups[2]);
		browser.sleep(1000);
				
		common_Component.selectItemDropDown_2('div[id="hostgroups-multiselect"]',9);
		browser.sleep(1000);				
		
		security_Controls_Page.exceptions_Apply_Button_Click();
		browser.sleep(5000);

		security_Controls_Page.urlFilter_Window_Save_Button_Click();
		browser.sleep(1000);
		
		security_Controls_Page.urlFiltering_Standard_click();
		browser.sleep(1000);
		security_Controls_Page.customizeButton_click();
		browser.sleep(1000);
		
		security_Controls_Page.show_Exceptions();
		browser.sleep(1000);

		var compareItem = function(textObj, list){

			textObj.then(function(items){
				var stripedList = [];
				for(i = 0; i < items.length; i++){
					console.log(items[i].replace(/,/g, ""));
					stripedList.push(items[i].replace(/,/g, ""));
				}
			
				expect(stripedList).toEqual(list);
			});
		};	
		var exception_Rows = element.all(by.css('.tr.row.ng-scope'));
		
		var exception_Row_1 = exception_Rows.get(0);
		var exception_Row_2 = exception_Rows.get(1);
	
		//expect allow icon for exception 2
		expect(exception_Row_2.all(by.css('i[class="zmdi zmdi-check-circle icon-medium success-icon"]')).isPresent()).toBe(true);

		//validate items
		var listed_exception_2_sites = exception_Row_2.all(by.css('span[ng-if="exception.urls.length"]')).getText();
		var listed_exception_2_users = exception_Row_2.all(by.css('span[ng-if="exception.users.length"]')).getText();
		var listed_exception_2_usergroups = exception_Row_2.all(by.css('span[ng-if="exception.groups.length"]')).getText();
		var listed_exception_2_categories = exception_Row_2.all(by.css('span[ng-if="exception.categories.length"]')).getText();
		var listed_exception_2_hostgroups = exception_Row_2.all(by.css('span[ng-repeat="hostgroups in exception.zones"]')).getText();
		
		compareItem(listed_exception_2_sites, new_exception_2_sites);
		compareItem(listed_exception_2_users, new_exception_2_users);
		compareItem(listed_exception_2_usergroups, new_exception_2_usergroups);
		compareItem(listed_exception_2_categories, new_exception_2_categories);	
		compareItem(listed_exception_2_hostgroups, new_exception_2_hostgroups);	
		
		browser.sleep(1000);
		
	});	
 

	it('delete exceptions from list', function () {

		for (i = 0;i< exception_total_count - 1 ;i++){
			
			security_Controls_Page.urlFilter_exceptions_List_Delete_Buttonv2_Click();
			browser.sleep(1000);	
			
			expect(element.all(by.css('.modal-dialog')).isPresent()).toBe(true);
		
			element.all(by.buttonText('Yes')).click();
			browser.sleep(1000)	;
		}
		
		security_Controls_Page.urlFilter_Window_Save_Button_Click();
		browser.sleep(1000);

	});			

	it('Delete Host Groups', function () {	

		for (i = 0; i < hostgroups_total_count; i++){
			common_Component.removeHostGroup();
		}
			
	});	
	
	it('logout', function () {
		
		common_Component.appLogout();
		browser.sleep(1000);
	});			
   
});