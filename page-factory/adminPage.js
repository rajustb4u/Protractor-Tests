var administrators_Page = function() {

    var scrollIntoView = require('../test-spec/utils').scrollIntoView;
    module.exports = {
        clickBackBtn: function() {
            var el = element(by.css('#sites-multiselect'));
            scrollIntoView(el);
            el.click();
            return;
        }
    };

	var adminPageLink = element(by.css('a[href="#/configuration/administrators"]'));
    //Click on Admin link
    this.Administrators_Link = function () {
        adminPageLink.click();
    };

	var adminPageHeader = element(by.css('div[ui-view="configuration"] h1'));
    // Getting the Admin page header to validate
    this.AdminPage_Header = function (name) {
        return adminPageHeader.getText();
    };

	var adminPageTitle = element(by.css('h1'));
    // Getting the Admin page title to validate
    this.adminPage_Title = function (name) {
        return adminPageTitle.getText();
    };

	var administratorsButton = element.all(by.css('button[ng-click="$ctrl.openAdminModal()"]'));
    // Next Administrator Button
    this.nextAdminButton = function () {
        administratorsButton.click();
    };

	var adminPageBackButton = element(by.linkText('Back'));
    //Admin page back button
    this.AdminBackButton = function (password) {
        adminPageBackButton.click();
    };

	var adminPageCancelButton = element.all(by.buttonText('Cancel'));
    //Click Cancel button in Admin page.
    this.adminPage_CancelButton = function() {
        adminPageCancelButton.click();
    };

    var adminPageCancel_YesButton = element.all(by.css('button[ng-click="ok()"]'));
    //Click Yes button after the Cancel button in Admin page.
    this.adminPageCancel_Yes_Button = function() {
        adminPageCancel_YesButton.click();
    };


	var addAnotherAdminButton = element(by.css('a[href="#/configuration/administrators/add"]'));
    // Click Add Another Admin button
    this.adminAddAnother = function() {
        addAnotherAdminButton.click();
    };
    this.adminAddAnother_State = function() {
        return addAnotherAdminButton.getAttribute('disabled');
    };

    var admin_ResetPasswordNo = element(by.css('button[ng-click="$dismiss()"]'));
    this.admin_ResetPasswordNo_Click = function() {
        admin_ResetPasswordNo.click();
    };

    //*************************************************************
    //Admin First Name
	var adminFristName = element(by.id('user_first_name'));
    // Enter Admin first name
    this.adminFirstNameEntry = function(text) {
        adminFristName.sendKeys(text);
    };
    this.adminFirstName_Clear = function() {
        adminFristName.clear();
    };
    this.adminFirstName_Click = function() {
        adminFristName.click();
    };

    this.an_nameAttr = function(){
        return adminFristName.getAttribute('name');
    };
    this.an_placeholderAttr = function() {
        return adminFristName.getAttribute('placeholder');
    };
    this.an_minlengthAttr = function() {
        return adminFristName.getAttribute('ng-minlength');
    };
    this.an_maxlengthAttr = function() {
        return adminFristName.getAttribute('maxlength');
    };
    this.an_required = function () {
        return adminFristName.getAttribute('required');
    };
    //*************************************************************
    //Admin Email
	var adminEmail = element(by.id('user_email'));
    // Enter Admin Email
    this.adminEmailEntry = function(text) {
        adminEmail.sendKeys(text);
    };
    this.adminEmailClear = function() {
        adminEmail.clear();
    };
    this.adminEmailClick = function() {
        adminEmail.click();
    };

    this.ae_nameAttr = function(){
        return adminEmail.getAttribute('name');
    };
    this.ae_placeholderAttr = function() {
        return adminEmail.getAttribute('placeholder');
    };
    this.ae_maxlengthAttr = function() {
        return adminEmail.getAttribute('maxlength');
    };
    this.ae_required = function () {
        return adminEmail.getAttribute('required');
    };
    //*************************************************************
    //Admin Proimary Phone Number
	var adminPrimaryPhone = element(by.id('primary_phone_number'));
    // Enter Primary Phone Number Entry
    this.adminPrimaryPhoneEntry = function(text) {
        adminPrimaryPhone.sendKeys(text);
    };
    this.adminPrimaryPhoneClear = function() {
        adminPrimaryPhone.clear();
    };
    this.adminPrimaryPhoneClick = function() {
        adminPrimaryPhone.click();
    };

    this.ap_nameAttr = function(){
        return adminPrimaryPhone.getAttribute('name');
    };
    this.ap_placeholderAttr = function() {
        return adminPrimaryPhone.getAttribute('placeholder');
    };
    this.ap_maxlengthAttr = function() {
        return adminPrimaryPhone.getAttribute('maxlength');
    };
    this.ap_required = function () {
        return adminPrimaryPhone.getAttribute('required');
    };
    //*************************************************************
    //Admin Cell Phone Number
	var adminCellPhone = element(by.id('cell_phone_number'));
    // Enter cellphone number Admin Entry
    this.adminCellPhoneEntry = function(text) {
        adminCellPhone.sendKeys(text);
    };
    this.adminCellPhoneClear = function() {
        adminCellPhone.clear();
    };
    this.adminCellPhoneClick = function() {
        adminCellPhone.click();
    };

    this.ac_nameAttr = function(){
        return adminCellPhone.getAttribute('name');
    };
    this.ac_placeholderAttr = function() {
        return adminCellPhone.getAttribute('placeholder');
    };
    this.ac_maxlengthAttr = function() {
        return adminCellPhone.getAttribute('maxlength');
    };
    this.ac_required = function () {
        return adminCellPhone.getAttribute('required');
    };

    //*************************************************************
    //Admin Pass Phrase
	var adminPassPhrase = element(by.id('passphrase'));
    // Enter Password for Admin Entry
    this.admin_PassPhraseEntry = function(text) {
        adminPassPhrase.sendKeys(text);
    };
    this.admin_PassPhraseClear = function() {
        adminPassPhrase.clear();
    };
    this.admin_PassPhraseClick = function() {
        adminPassPhrase.click();
    };

    this.app_nameAttr = function(){
        return adminPassPhrase.getAttribute('name');
    };
    this.app_placeholderAttr = function() {
        return adminPassPhrase.getAttribute('placeholder');
    };
    this.app_minlengthAttr = function() {
        return adminPassPhrase.getAttribute('ng-minlength');
    };
    this.app_maxlengthAttr = function() {
        return adminPassPhrase.getAttribute('maxlength');
    };
    this.app_required = function () {
        return adminPassPhrase.getAttribute('required');
    };

    this.app_Value = function () {
        return adminPassPhrase.getAttribute('value');
    };

    //*************************************************************
    //Help validation
    var help_AdminType = element(by.binding('helpContent'));
    this.help_Admin_Type = function(name) {
        return help_AdminType.getText();
    };

    var help_AdminfullName = element(by.binding('helpContent'));
    this.help_Admin_fullName = function(name) {
        return help_AdminfullName.getText();
    };

    var help_AdminEmail = element(by.binding('helpContent'));
    this.help_Admin_Email = function(name) {
        return help_AdminEmail.getText();
    };

    var help_AdminPhone = element(by.binding('helpContent'));
    this.help_Admin_Phone = function(name) {
        return help_AdminPhone.getText();
    };

    var help_AdminCellPhone = element(by.binding('helpContent'));
    this.help_Admin_CellPhone = function(name) {
        return help_AdminCellPhone.getText();
    };

    var help_AdminPassPhrase = element(by.binding('helpContent'));
    this.help_Admin_PassPhrase = function(name) {
        return help_AdminPassPhrase.getText();
    };

    var help_AdminSelectSites = element(by.binding('helpContent'));
    this.help_AdminSelect_Sites = function(name) {
        return help_AdminSelectSites.getText();
    };
    //*************************************************************

    //*************************************************************
	var adminShowButton = element.all(by.css('span.label.show-hide-password'));
    // Click show button for admin passphrase.
    this.adminPassPhraseShowButton = function() {
        adminShowButton.click();
    };
    //*************************************************************
    var addAdminButton = element(by.buttonText('Add Administrator'));
    // Click Add Admin button.
    this.adminAdd_Button = function() {
        addAdminButton.click();
    };
    this.adminAdd_Button_State = function() {
        return addAdminButton.getAttribute('disabled');
    };
    //*************************************************************
    //Global Admin
    //*************************************************************
    var global_Admin_detailView = element(by.id('admin_detailOpen_0'));
    // Click Admin Detail view button.
    this.globalAdmin_detailView = function() {
        global_Admin_detailView.click();
    };
    this.global_Admin_detailView_State = function() {
        return global_Admin_detailView.getAttribute('isEnabled');
    };

    var global_Admin_detailView1 = element(by.id('admin_detailOpen_1'));
    // Click Admin Detail view button.
    this.globalAdmin_detailView1 = function() {
        global_Admin_detailView1.click();
    };
    this.global_Admin_detailView1_State = function() {
        return global_Admin_detailView1.getAttribute('isEnabled');
    };
    var global_Admin1_Edit = element(by.id('admin_edit_1'));
    // Click Edit button to Edit the Admin created.
    this.globalAdmin1_Edit = function() {
        global_Admin1_Edit.click();
    };
    this.global_Admin1_Edit_State = function() {
        return global_Admin1_Edit.getAttribute('isEnabled');
    };
    var global_Admin1_Delete = element(by.id('admin_delete_1'));
    // Click delete button to delete the Admin created.
    this.globalAdmin1_Delete = function() {
        global_Admin1_Delete.click();
    };
    this.global_Admin1_Delete_State = function() {
        return global_Admin1_Delete.getAttribute('isEnabled');
    };

    var globalAdminRole = element(by.binding(' getAdminRoleName(admin.role_id)'));
    this.globalAdminRole_getText = function(name) {
        return globalAdminRole.getText(name);
    };
    var globalAdminEmail = element(by.binding(' admin.user.email '));
    this.globalAdminEmail_getText = function(name) {
        return globalAdminEmail.getText(name);
    };
    var globalAdminPrimaryPhone = element(by.binding(' admin.primary_phone_number '));
    this.globalAdminPrimaryPhone_getText = function(name) {
        return globalAdminPrimaryPhone.getText(name);
    };
    var globalAdminCellPhone = element(by.binding(' admin.cell_phone_number '));
    this.globalAdminCellPhone_getText = function(name) {
        return globalAdminCellPhone.getText(name);
    };

    //*************************************************************
    //Change Admin
    //*************************************************************
    var changeAdmin_detailView = element(by.id('admin_detailOpen_2'));
    // Click Admin Detail view button.
    this.change_Admin_detailView = function() {
        changeAdmin_detailView.click();
    };
    this.changeAdmin_detailView_State = function() {
        return changeAdmin_detailView.getAttribute('isEnabled');
    };
    var changeAdmin_detailView1 = element(by.id('admin_detailOpen_1'));
    // Click Admin Detail view button.
    this.change_Admin_detailView1 = function() {
        changeAdmin_detailView1.click();
    };
    this.changeAdmin_detailView1_State = function() {
        return changeAdmin_detailView1.getAttribute('isEnabled');
    };
    var change_Admin1_Edit = element(by.id('admin_edit_1'));
    // Click Edit button to Edit the Admin created.
    this.changeAdmin1_Edit = function() {
        change_Admin1_Edit.click();
    };
    this.change_Admin_Edit1_State = function() {
        return change_Admin1_Edit.getAttribute('isEnabled');
    };
    var change_Admin1_Delete = element(by.id('admin_delete_1'));
    // Click delete button to delete the Admin created.
    this.changeAdmin1_Delete = function() {
        change_Admin1_Delete.click();
    };
    this.change_Admin1_Delete_State = function() {
        return change_Admin1_Delete.getAttribute('isEnabled');
    };
    //*************************************************************
    //TroubleShoot Admin
    //*************************************************************
    var troubleShootAdmin_detailView = element(by.id('admin_detailOpen_1'));
    // Click Admin Detail view button.
    this.troubleShoo_Admin_detailView = function() {
        troubleShootAdmin_detailView.click();
    };
    this.troubleShoot_Admin_detailView_State = function() {
        return troubleShootAdmin_detailView.getAttribute('isEnabled');
    };
    var troubleShootAdmin_detailView1 = element(by.id('admin_detailOpen_2'));
    // Click Admin Detail view button.
    this.troubleShoo_Admin_detailView1 = function() {
        troubleShootAdmin_detailView1.click();
    };
    this.troubleShoot_Admin_detailView1_State = function() {
        return troubleShootAdmin_detailView1.getAttribute('isEnabled');
    };
    var troubleShoot_Admin1_Edit = element(by.id('admin_edit_2'));
    // Click Edit button to Edit the Admin created.
    this.troubleShoot_Admin1_Edit = function() {
        troubleShoot_Admin1_Edit.click();
    };
    this.troubleShoot_Admin1_State = function() {
        return troubleShoot_Admin1_Edit.getAttribute('isEnabled');
    };
    var troubleShoot_Admin1_Delete = element(by.id('admin_delete_2'));
    // Click delete button to delete the Admin created.
    this.troubleShoot_Admin1_Delete = function() {
        troubleShoot_Admin1_Delete.click();
    };
    this.troubleShoot_Admin1_Delete_State = function() {
        return troubleShoot_Admin1_Delete.getAttribute('isEnabled');
    };
    //*************************************************************
    //Dashboard Admin
    //*************************************************************
    // var dashboardAdmin_detailView = element(by.id('admin_detailOpen_2'));
    // // Click Admin Detail view button.
    // this.dashboard_Admin_detailView = function() {
    //     dashboardAdmin_detailView.click();
    // };
    // this.dashboardAdmin_detailView_State = function() {
    //     return dashboardAdmin_detailView.getAttribute('isEnabled');
    // };

    var dashboardAdmin1_detailView = element(by.id('admin_detailOpen_3'));
    this.dashboard_Admin1_detailView = function() {
        dashboardAdmin1_detailView.click();
    };
    this.dashboardAdmin1_detailView_State = function() {
        return dashboardAdmin1_detailView.getAttribute('isEnabled');
    };
    var dashboardAdmin1_Edit = element(by.id('admin_edit_3'));
    // Click Edit button to Edit the Admin created.
    this.dashboardAdmin1_Edit = function() {
        dashboardAdmin1_Edit.click();
    };
    this.dashboardAdmin1_Edit_State = function() {
        return dashboardAdmin1_Edit.getAttribute('isEnabled');
    };
    var dashboardAdmin1_Delete = element(by.id('admin_delete_3'));
    // Click delete button to delete the Admin created.
    this.dashboardAdmin1_Delete = function() {
        dashboardAdmin1_Delete.click();
    };
    this.dashboardAdmin1_Delete_State = function() {
        return dashboardAdmin1_Delete.getAttribute('isEnabled');
    };
    //*************************************************************
    var admin_Update_Button = element(by.buttonText('Update Administrator'));
    // Click Update Admin button.
    this.admin_UpdateButton = function() {
        admin_Update_Button.click();
    };

    //*************************************************************
	var admin_Delete_Msg = element.all(by.buttonText('Yes'));
    // Click yes for the admin delete dialog.
    this.delete_yes_Admin = function() {
        admin_Delete_Msg.click();
    };
    //*************************************************************
    //Trouble Shoot Administrator
    //*************************************************************
    var troubleShootAdminNameListView = element.all(by.binding(' admin.user.first_name '));
    this.troubleShootAdminNameListView_text = function(name) {
        return troubleShootAdminNameListView.getText();
    };

    var nextHostsButton = element(by.linkText('Next - Hosts'));
    this.nextHostsButton_click = function() {
        nextHostsButton.click();
    };
    this.nextHostsButton_State = function() {
        return nextHostsButton.getAttribute('isEnabled');
    };

    var directoryServicesButton = element(by.linkText('Next - Directory Services'));
    this.directoryServicesButton_click = function() {
        directoryServicesButton.click();
    };
    this.directoryServicesButton_State = function() {
        return directoryServicesButton.getAttribute('isEnabled');
    };

    var directoryServicesText = element.all(by.css('div.col-xs-4'));
    this.directoryServicesText_Text = function(text) {
        return directoryServicesText.getText();
    };

 };

 module.exports = administrators_Page;

