var securityControls_Page = function() {

    var securityControls_Link = element(by.css('a[href="#/configuration/security"]'));
    this.security_Controls_Link = function() {
        securityControls_Link.click();
    };

    //*********************************************************************************
    //Clicking the checkboxes
    var globalBan = element(by.css('label[for="global_ban"]'));
    this.globalBan = function() {
        globalBan.click();
    };

    var threatManagement = element(by.css('label[for="threat_management"]'));
    this.threat_Management = function() {
        threatManagement.click();
    };
    this.threat_Management_State = function() {
        return threatManagement.getAttribute('disbaled');
    };

    var antiVirus = element(by.css('label[for="anti_virus"]'));
    this.anti_Virus = function() {
        antiVirus.click();
    };

    var antiSpyware = element(by.css('label[for="anti_spyware"]'));
    this.anti_Spyware = function() {
        antiSpyware.click();
    };

    var urlFiltering = element(by.css('label[for="url_filtering"]'));
    this.url_Filtering = function() {
        urlFiltering.click();
    };

    var fileAuditing = element(by.css('label[for="file_auditing"]'));
    this.fileAuditing = function() {
        fileAuditing.click();
    };

    var fileBlocking = element(by.css('label[for="file_blocking"]'));
    this.fileBlocking = function() {
        fileBlocking.click();
    };

    var dnsSinkHole = element(by.css('label[for="dns_sinkhole"]'));
    this.dnsSinkHole = function() {
        dnsSinkHole.click();
    };
    //*********************************************************************************
    //URL Filtering Customize Button
    var urlFiltering_Customize_Button = element(by.css('button[ng-click="openUrlFilterCustomizeModal()"]'));
    this.customizeButton_click = function() {
        urlFiltering_Customize_Button.click();
    };
    this.customizeButton_state = function() {
        return urlFiltering_Customize_Button.getAttribute('disabled');
    };
    //*********************************************************************************
    var  urlFiltering_Standard = element(by.css('input[value="Standard"]'));
    this.urlFiltering_Standard_click = function() {
        urlFiltering_Standard.click();
    };
    this.urlFiltering_Standard_state = function() {
        return urlFiltering_Standard.getAttribute('checked');
    };

    var standardMessage = element(by.css('button[type="submit"]'));
    this.standardMessage_click = function() {
        standardMessage.click();
    };

    var urlFiltering_Strict = element(by.css('input[value="Strict"]'));
    this.urlFiltering_Strict_click = function() {
        urlFiltering_Strict.click();
    };
    this.urlFiltering_Strict_state = function() {
        return urlFiltering_Strict.getAttribute('checked');
    };

    var urlFiltering_Relaxed = element(by.css('input[value="Relaxed"]'));
    this.urlFiltering_Relaxed_click = function() {
        urlFiltering_Relaxed.click();
    };
    this.urlFiltering_Relaxed_state = function() {
        return urlFiltering_Relaxed.getAttribute('checked');
    };
    //*********************************************************************************
    //URL Filtering Form
    var urlFiltering_save = element(by.css('button[ng-click="ctrl.submitUrlFilterData(urlFilterForm)"]'));
    this.urlFiltering_saveButton = function() {
        urlFiltering_save.click();
    };

    var moveRight_Allowed = element(by.css('i.zmdi.zmdi-chevron-right.zmdi-hc-2x'));
    this.move_Right_Allowed = function() {
        moveRight_Allowed.click();
    };

    var moveLeft_Allowed = element(by.css('i.zmdi.zmdi-chevron-left.zmdi-hc-2x'));
    this.move_Left_Allowed = function() {
        moveLeft_Allowed.click();
    };

    var allowed_List = element(by.css('ul[dnd-list="ctrl.categories.allowed"]'));
    this.allowed_List_click = function() {
        allowed_List.click();
    };
    this.allowed_List_get = function() {
        return allowed_List.getText();
    };

    var blocked_List = element(by.css('ul[dnd-list="ctrl.categories.blocked"]'));
    this.blocked_List_click = function() {
        blocked_List.click();
    };
    this.blocked_List_get = function() {
        return blocked_List.getText();
    };
    //*********************************************************************************
    var cancel_button = element(by.buttonText('Cancel'));
    this.cancelbutton = function() {
        cancel_button.click();
    };

    var cancel_button_Message = element.all(by.css('button[ng-click="$close()"]'));
    this.cancelbutton_Message = function() {
        cancel_button_Message.click();
    };

    var yesMessage_ChangeURLFiltering = element.all(by.css('button[type="submit"]'));
    this.yesMessage_Change_URLFiltering = function() {
        yesMessage_ChangeURLFiltering.click();
    };
    //*********************************************************************************
    var alwaysAllowed = element(by.css('input[name="allowed_urls_0_url"]'));
    this.always_Allowed_Click = function() {
        alwaysAllowed.click();
    };
    this.always_Allowed_Clear = function() {
        alwaysAllowed.clear();
    };
    this.always_Allowed = function(name) {
        alwaysAllowed.sendKeys(name);
    };

    var alwaysAllowed1 = element(by.css('input[name="allowed_urls_4503599627370495_url"]'));
    this.always_Allowed1_Click = function() {
        alwaysAllowed1.click();
    };
    this.always_Allowed1_Clear = function() {
        alwaysAllowed1.clear();
    };
    this.always_Allowed1 = function(name) {
        alwaysAllowed1.sendKeys(name);
    };

    var alwaysBlocked = element(by.css('input[name="blocked_urls_0_url"]'));
    this.alwaysBlocked_Click = function() {
        alwaysBlocked.click();
    };
    this.alwaysBlocked_Clear = function() {
        alwaysBlocked.clear();
    };
    this.always_Blocked = function(name) {
        alwaysBlocked.sendKeys(name);
    };

    var alwaysBlocked1 = element(by.css('input[name="blocked_urls_4503599627370495_url"]'));
    this.alwaysBlocked1_Click = function() {
        alwaysBlocked1.click();
    };
    this.alwaysBlocked1_Clear = function() {
        alwaysBlocked1.clear();
    };
    this.always_Blocked1 = function(name) {
        alwaysBlocked1.sendKeys(name);
    };

    var addAlwaysAllowed = element(by.css('#btnAddAllowedUrls'));
    this.add_AlwaysAllowed = function() {
        addAlwaysAllowed.click();
    };
    this.add_AlwaysAllowed_GetState = function(name) {
        return addAlwaysAllowed.getAttribute('disabled');
    };

    var addAlwaysBlocked = element(by.css('#btnAddBlockedUrls'));
    this.add_AlwaysBlocked = function() {
        addAlwaysBlocked.click();
    };
    this.add_AlwaysBlocked_GetState = function(name) {
        return addAlwaysBlocked.getAttribute('disabled');
    };

    var securityControlsBack = element.all(by.css('a[type="button"]'));
    this.securityControls_Back = function() {
        securityControlsBack.click();
    };

    var policies_Text = element(by.css('.table.top-buffer p'));
    this.policies_HeaderText = function(name) {
        return policies_Text.getText(name);
    };

    var submitSecurityControls = element(by.css('a[href="#/configuration/activationreq"]'));
    this.submitSecurity_Controls = function() {
        submitSecurityControls.click();
    };
    this.submitSecurity_Controls_GetState = function(name) {
        return submitSecurityControls.getAttribute('disabled');
    };

    var ActivationRequest = element(by.css('.header p'));
    this.Activation_RequestHeader = function(name) {
        return ActivationRequest.getText(name);
    };
    //*********************************************************************************
    //Validating the Checkbox state
    var globalBanCheckbox = element(by.id('global_ban'));
    this.globalBanCheckbox_GetState = function(name) {
        return globalBanCheckbox.getAttribute('checked');
    };

    var threatManagementCheckbox = element(by.id('threat_management'));
    this.threatManagementCheckbox_GetState = function(name) {
        return threatManagementCheckbox.getAttribute('checked');
    };

    var antiVirusCheckbox = element(by.id('anti_virus'));
    this.antiVirusCheckbox_GetState = function(name) {
        return antiVirusCheckbox.getAttribute('checked');
    };

    var antiSpywareCheckbox = element(by.id('anti_spyware'));
    this.antiSpywareCheckbox_GetState = function(name) {
        return antiSpywareCheckbox.getAttribute('checked');
    };

    var urlFilteringCheckbox = element(by.id('url_filtering'));
    this.urlFilteringCheckbox_GetState = function(name) {
        return urlFilteringCheckbox.getAttribute('checked');
    };

    var fileAuditingCheckbox = element(by.id('file_auditing'));
    this.fileAuditingCheckbox_GetState = function(name) {
        return fileAuditingCheckbox.getAttribute('checked');
    };

    var fileBlockingCheckbox = element(by.id('file_blocking'));
    this.fileBlockingCheckbox_GetState = function(name) {
        return fileBlockingCheckbox.getAttribute('checked');
    };

    var dnsSinkHoleCheckbox = element(by.id('dns_sinkhole'));
    this.dnsSinkHoleCheckbox_GetState = function(name) {
        return dnsSinkHoleCheckbox.getAttribute('checked');
    };
    //*********************************************************************************
    //URL filtering
    var addException = element(by.css('button[ng-click="toggleAddException()"]'));
    this.addException_GetState = function(name) {
        return addException.getAttribute('disabled');
    };
    this.addException_click = function() {
        addException.click();
    };
    //********************************************************************
    //Add, Delete buttons for Allowed URL & Blocked URL
    var addAlwaysAllowed = element(by.css('#btnAddAllowedUrls'));
    this.addAlwaysAllowed_GetState = function() {
        return addAlwaysAllowed.getAttribute('disabled');
    };
    this.addAlwaysAllowed_click = function() {
        addAlwaysAllowed.click();
    };

    var DeleteAlwaysAllowed = element(by.css('#btnDeleteAllowedUrl0'));
    this.DeleteAlwaysAllowed_GetState = function() {
        return DeleteAlwaysAllowed.getAttribute('disabled');
    };
    this.DeleteAlwaysAllowed_click = function() {
        DeleteAlwaysAllowed.click();
    };

    var DeleteAlwaysAllowed1 = element(by.css('#btnDeleteAllowedUrl1'));
    this.DeleteAlwaysAllowed1_GetState = function() {
        return DeleteAlwaysAllowed1.getAttribute('disabled');
    };
    this.DeleteAlwaysAllowed1_click = function() {
        DeleteAlwaysAllowed1.click();
    };


    var addAlwayBlocked = element(by.css('#btnAddBlockedUrls'));
    this.addAlwayBlocked_GetState = function() {
        return addAlwayBlocked.getAttribute('disabled');
    };
    this.addAlwayBlocked_click = function() {
        addAlwayBlocked.click();
    };

    var DeleteAlwaysBlocked = element(by.css('#btnDeleteblockedUrl0'));
    this.DeleteAlwaysBlocked_GetState = function() {
        return DeleteAlwaysBlocked.getAttribute('disabled');
    };
    this.DeleteAlwaysBlocked_click = function() {
        DeleteAlwaysBlocked.click();
    };

    var DeleteAlwaysBlocked1 = element(by.css('#btnDeleteblockedUrl1'));
    this.DeleteAlwaysBlocked1_GetState = function() {
        return DeleteAlwaysBlocked1.getAttribute('disabled');
    };
    this.DeleteAlwaysBlocked1_click = function() {
        DeleteAlwaysBlocked1.click();
    };
    //********************************************************************
    //Blocked File Type:
    var blockedFileType = element(by.id('blocked_files_0_file'));
    this.blockedFileType_getKeyValue = function(name) {
        return blockedFileType.getAttribute('key');
    };
    this.blockedFile_Click = function() {
        blockedFileType.click();
    };
    this.blockedFile_Clear = function() {
        blockedFileType.clear();
    };
    this.blockedFileType_text = function(text) {
        blockedFileType.sendKeys(text);
    };
	
	this.blockedFileType_List = function(){
			return element.all(by.css('input[placeholder="exe"]'));
	};
	
	var blockedFileTypev2 = element.all(by.css('input[placeholder="exe"]')).last();
    this.blockedFileTypev2_getKeyValue = function(name) {
        return blockedFileTypev2.getAttribute('key');
    };
    this.blockedFileTypev2_Click = function() {
        blockedFileTypev2.click();
    };
    this.blockedFileTypev2_Clear = function() {
        blockedFileTypev2.clear();
    };
    this.blockedFileTypev2_text = function(text) {
        blockedFileTypev2.sendKeys(text);
    };	
	//
	var blockedFileType_InputField = element(by.css('input-field-component[name="blocked_files_0_file"]'));
    this.blockedFileType_InputField_Click = function() {
        blockedFileType_InputField.click();
    };	
	
	this.blockedFileType_placeholderAttr = function() {
        return blockedFileType_InputField.getAttribute('placeholder');
    };
    this.blockedFileType_minlengthAttr = function() {
        return blockedFileType_InputField.getAttribute('minlength');
    };
    this.blockedFileType_maxlengthAttr = function() {
        return blockedFileType_InputField.getAttribute('maxlength');
    };
    this.blockedFileType_fieldLabelAttr = function () {
        return blockedFileType_InputField.getAttribute('fieldlabel');
    };	
	
    var addBlockedFile = element(by.id('btnAddBlockedFiles'));
    this.addBlockedFile_getState = function(name) {
        return addBlockedFile.getAttribute('disabled');
    };
    this.addBlockedFile_Click = function() {
        addBlockedFile.click();
    };

    var deleteBlockedFile = element(by.id('btnDeleteblockedFile0'));
    this.deleteBlockedFile_getState = function(name) {
        return deleteBlockedFile.getAttribute('disabled');
    };
    this.deleteBlockedFile_Click = function() {
        deleteBlockedFile.click();
    };

    var deleteBlockedFile1 = element(by.id('btnDeleteblockedFile1'));
    this.deleteBlockedFile1_getState = function(name) {
        return deleteBlockedFile1.getAttribute('disabled');
    };
    this.deleteBlockedFile1_Click = function() {
        deleteBlockedFile1.click();
    };
	
    var deleteBlockedFilev2 = element.all(by.css('button[ng-click="ctrl.removeItem(blockedFile, ctrl.fileAuditor.blocked_files, \'blocked_file\')"]')).last();
    this.deleteBlockedFilev2_getState = function(name) {
        return deleteBlockedFilev2.getAttribute('disabled');
    };
    this.deleteBlockedFilev2_Click = function() {
        deleteBlockedFilev2.click();
    };	
	

    //Allowed Applications
    var allowedApplications = element(by.id('allowed_files_0_file'));
    this.allowedApplications_getKeyValue = function(name) {
        return allowedApplications.getAttribute('key');
    };

    this.allowedApplications_Click = function() {
        allowedApplications.click();
    };
    this.allowedApplications_Clear = function() {
        allowedApplications.clear();
    };
    this.allowedApplications_text = function(text) {
        allowedApplications.sendKeys(text);
    };
	
	this.allowedApplications_List = function(){
		return element.all(by.css('input[placeholder="java-update"]'));
	};
	
    var allowedApplicationsv2 = element.all(by.css('input[placeholder="java-update"]')).last();
    this.allowedApplicationsv2_getKeyValue = function(name) {
        return allowedApplicationsv2.getAttribute('key');
    };
	
    this.allowedApplicationsv2_Click = function() {
        allowedApplicationsv2.click();
    };
    this.allowedApplicationsv2_Clear = function() {
        allowedApplicationsv2.clear();
    };
    this.allowedApplicationsv2_text = function(text) {
        allowedApplicationsv2.sendKeys(text);
    };	

	var allowedApplications_InputField = element(by.css('input-field-component[name="allowed_files_0_file"]'));
    this.allowedApplications_InputField_Click = function() {
        allowedApplications_InputField.click();
    };	
	
	this.allowedApplications_placeholderAttr = function() {
        return allowedApplications_InputField.getAttribute('placeholder');
    };
    this.allowedApplications_minlengthAttr = function() {
        return allowedApplications_InputField.getAttribute('minlength');
    };
    this.allowedApplications_maxlengthAttr = function() {
        return allowedApplications_InputField.getAttribute('maxlength');
    };
    this.allowedApplications_fieldLabelAttr = function () {
        return allowedApplications_InputField.getAttribute('fieldlabel');
    };	
	
    var addAllowedApplications = element(by.id('btnAddAllowedFiles'));
    this.addAllowedApplications_getState = function(name) {
        return addAllowedApplications.getAttribute('disabled');
    };
    this.addAllowedApplications_Click = function() {
        addAllowedApplications.click();
    };

    var deleteAllowedApplications = element(by.id('btnDeleteAllowedFile0'));
    this.deleteAllowedApplications_getState = function(name) {
        return deleteAllowedApplications.getAttribute('disabled');
    };
    this.deleteAllowedApplications_Click = function() {
        deleteAllowedApplications.click();
    };

    var deleteAllowedApplications1 = element(by.id('btnDeleteAllowedFile1'));
    this.deleteAllowedApplications1_getState = function(name) {
        return deleteAllowedApplications1.getAttribute('disabled');
    };
    this.deleteAllowedApplications1_Click = function() {
        deleteAllowedApplications1.click();
    };

	//
    var deleteAllowedApplicationsv2 = element.all(by.css('button[ng-click="ctrl.removeItem(allowedFile, ctrl.fileAuditor.allowed_files, \'allowed_file\')"]')).last();
    this.deleteAllowedApplicationsv2_getState = function(name) {
        return deleteAllowedApplicationsv2.getAttribute('disabled');
    };
    this.deleteAllowedApplicationsv2_Click = function() {
        deleteAllowedApplicationsv2.click();
    };	
	//Domain Exception
    var domainException = element(by.id('allowed_files_0_file'));
    this.domainException_getKeyValue = function(name) {
        return domainException.getAttribute('key');
    };

    this.domainException_Click = function() {
        domainException.click();
    };
    this.domainException_Clear = function() {
        domainException.clear();
    };
    this.domainException_text = function(text) {
        domainException.sendKeys(text);
    };
	
	this.domainException_List = function(){
		return element.all(by.css('input[placeholder="www.mydomain.com"]'));
	};
	
    var domainExceptionv2 = element.all(by.css('input[placeholder="www.mydomain.com"]')).last();
    this.domainExceptionv2_getKeyValue = function(name) {
        return domainExceptionv2.getAttribute('key');
    };
	
    this.domainExceptionv2_Click = function() {
        domainExceptionv2.click();
    };
    this.domainExceptionv2_Clear = function() {
        domainExceptionv2.clear();
    };
    this.domainExceptionv2_text = function(text) {
        domainExceptionv2.sendKeys(text);
    };	

	var domainException_InputField = element(by.css('input-field-component[name="allowed_domains_0_domain"]'));
    this.domainException_InputField_Click = function() {
        domainException_InputField.click();
    };	
	
	this.domainException_placeholderAttr = function() {
        return domainException_InputField.getAttribute('placeholder');
    };
    this.domainException_minlengthAttr = function() {
        return domainException_InputField.getAttribute('minlength');
    };
    this.domainException_maxlengthAttr = function() {
        return domainException_InputField.getAttribute('maxlength');
    };
    this.domainException_fieldLabelAttr = function () {
        return domainException_InputField.getAttribute('fieldlabel');
    };	
	
    var addDomainException = element(by.id('btnAddAllowedDomains'));
    this.addDomainException_getState = function(name) {
        return addDomainException.getAttribute('disabled');
    };
    this.addDomainException_Click = function() {
        addDomainException.click();
    };

    var deleteDomainException = element(by.id('btnDeleteAllowedDomain0'));
    this.deleteDomainException_getState = function(name) {
        return deleteDomainException.getAttribute('disabled');
    };
    this.deleteDomainException_Click = function() {
        deleteDomainException.click();
    };

    var deleteDomainException1 = element(by.id('btnDeleteAllowedDomain1'));
    this.deleteDomainException1_getState = function(name) {
        return deleteDomainException1.getAttribute('disabled');
    };
    this.deleteDomainException1_Click = function() {
        deleteDomainException1.click();
    };

	//
    var deleteDomainExceptionv2 = element.all(by.css('button[ng-click="ctrl.removeItem(allowedDomain, ctrl.fileAuditor.allowed_domains, \'allowed_domain\')"]')).last();
    this.deleteDomainExceptionv2_getState = function(name) {
        return deleteDomainExceptionv2.getAttribute('disabled');
    };
    this.deleteDomainExceptionv2_Click = function() {
        deleteDomainExceptionv2.click();
    };		
	//**********************
    var fileBlockingCustomizeButton = element(by.css('button[ng-click="openFileAuditingModal()"]'));
    this.customizeButton_Click = function() {
        fileBlockingCustomizeButton.click();
    };

    var cancelFileBlock = element(by.css('button[ng-click="$dismiss()"]'));
    this.cancelFileBlock_Click = function() {
        cancelFileBlock.click();
    };

    var cancelFileBlock_OK = element(by.css('button[ng-click="ok()"]'));
    this.cancelFileBlock_OK_Click = function() {
        cancelFileBlock_OK.click();
    };

    var saveFileBlock = element(by.css('button[ng-click="ctrl.submitFileAuditingData(fileAuditingForm)"]'));
    this.saveFileBlock_Click = function() {
        saveFileBlock.click();
    };

    var fileBockUnCheckConform = element(by.css('button[ng-click="$close()"]'));
    this.fileBockUnCheckConform_Click = function() {
        fileBockUnCheckConform.click();
    };

    //*********************************************************************************
    //External IP Block
    var externalIPBlock = element(by.css('label[for="block_ips"]'));
    this.externalIPBlock = function() {
        externalIPBlock.click();
    };

    var externalIPBlockCheckBox = element(by.id('block_ips'));
    this.externalIPBlockCheckBox_GetState = function(name) {
        return externalIPBlockCheckBox.getAttribute('checked');
    };

    var customizeIPBlock = element(by.css('button[ng-click="openIPBlockingModal()"]'));
    this.customizeIPBlock_getState = function(name) {
        return customizeIPBlock.getAttribute('disabled');
    };
    this.customizeIPBlock_Click = function() {
        customizeIPBlock.click();
    };

    var externalIPBlockList = element(by.id('url'));
    this.externalIPBlockList_text = function(text) {
        externalIPBlockList.sendKeys(text);
    };
    this.externalIPBlockList_clear = function() {
        externalIPBlockList.clear();
    };
    var externalIPBlockList_InputName = element(by.css('input[name="url"]'));
    this.eIPBL_nameAttr = function(){
        return externalIPBlockList_InputName.getAttribute('name');
    };
    this.eIPBL_placeholderAttr = function() {
        return externalIPBlockList_InputName.getAttribute('placeholder');
    };
    this.eIPBL_minlengthAttr = function() {
        return externalIPBlockList_InputName.getAttribute('ng-minlength');
    };
    this.eIPBL_maxlengthAttr = function() {
        return externalIPBlockList_InputName.getAttribute('maxlength');
    };
    var externalIPBlockListInputComponent = element(by.css('input-field-component[name="url"]'));
    this.eIPBL_fieldLabelAttr = function() {
        return externalIPBlockListInputComponent.getAttribute('fieldlabel');
    };

    var blockedIP = element.all(by.id('blocked_ips_0_ip'));
    this.blockedIP_text = function(text) {
        blockedIP.sendKeys(text);
    };
    this.blockedIP_clear = function() {
        blockedIP.clear();
    };
    var blockedIP1 = element.all(by.id('blocked_ips_4503599627370495_ip'));
    this.blockedIP1_text = function(text) {
        blockedIP1.sendKeys(text);
    };
    var blockedIP2 = element.all(by.id('blocked_ips_4503599627370496_ip'));
    this.blockedIP2_text = function(text) {
        blockedIP2.sendKeys(text);
    };
    var blockedIP3 = element.all(by.id('blocked_ips_4503599627370497_ip'));
    this.blockedIP3_text = function(text) {
        blockedIP3.sendKeys(text);
    };
    var blockedIP4 = element.all(by.id('blocked_ips_4503599627370498_ip'));
    this.blockedIP4_text = function(text) {
        blockedIP4.sendKeys(text);
    };
    var blockedIP5 = element.all(by.id('blocked_ips_4503599627370499_ip'));
    this.blockedIP5_text = function(text) {
        blockedIP5.sendKeys(text);
    };
    var blockedIP6 = element.all(by.id('blocked_ips_4503599627370500_ip'));
    this.blockedIP6_text = function(text) {
        blockedIP6.sendKeys(text);
    };

    var blockedIP_InputName = element(by.css('input[name="blocked_ips_0_ip"]'));
    this.bEIP_nameAttr = function(){
        return blockedIP_InputName.getAttribute('name');
    };
    this.bEIP_placeholderAttr = function() {
        return blockedIP_InputName.getAttribute('placeholder');
    };
    this.bEIP_minlengthAttr = function() {
        return blockedIP_InputName.getAttribute('ng-minlength');
    };
    this.bEIP_maxlengthAttr = function() {
        return blockedIP_InputName.getAttribute('maxlength');
    };
    var blockedListInputComponent = element(by.css('input-field-component[name="blocked_ips_0_ip"]'));
    this.bEIP_fieldLabelAttr = function() {
        return blockedListInputComponent.getAttribute('fieldlabel');
    };

    var addBlockedIP = element(by.id('btnAddBlockedIPs'));
    this.addBlockedIP_getState = function(name) {
        return addBlockedIP.getAttribute('disabled');
    };
    this.addBlockedIP_Click = function() {
        addBlockedIP.click();
    };

    var deleteBlockedIP = element(by.id('btnDeleteblockedIP0'));
    this.deleteBlockedIP_getState = function(name) {
        return deleteBlockedIP.getAttribute('disabled');
    };
    this.delete_BlockedIP1_Click = function() {
        deleteBlockedIP1.click();
    };
    var deleteBlockedIP1 = element(by.id('btnDeleteblockedIP1'));
    this.deleteBlockedIP1_getState = function(name) {
        return deleteBlockedIP1.getAttribute('disabled');
    };
    this.delete_BlockedIP1_Click = function() {
        deleteBlockedIP1.click();
    };
    var deleteBlockedIP2 = element(by.id('btnDeleteblockedIP2'));
    this.delete_BlockedIP2_Click = function() {
        deleteBlockedIP2.click();
    };
    var deleteBlockedIP3 = element(by.id('btnDeleteblockedIP3'));
    this.delete_BlockedIP3_Click = function() {
        deleteBlockedIP3.click();
    };
    var deleteBlockedIP4 = element(by.id('btnDeleteblockedIP2'));
    this.delete_BlockedIP4_Click = function() {
        deleteBlockedIP4.click();
    };
    var deleteBlockedIP5 = element(by.id('btnDeleteblockedIP5'));
    this.delete_BlockedIP5_Click = function() {
        deleteBlockedIP5.click();
    };
    var deleteBlockedIP6 = element(by.id('btnDeleteblockedIP6'));
    this.delete_BlockedIP6_Click = function() {
        deleteBlockedIP6.click();
    };

    var cancelIPBlock = element(by.css('button[ng-click="$dismiss()"]'));
    this.cancelIPBlock_Click = function() {
        cancelIPBlock.click();
    };
    var cancelIPBlockOK = element(by.css('button[ng-click="ok()"]'));
    this.cancelIPBlockOK_Click = function() {
        cancelIPBlockOK.click();
    };

    var saveIPBlock = element(by.css('button[ng-click="ctrl.submitIPBlockingData(ipBlockingForm)"]'));
    this.saveIPBlock_Click = function() {
        saveIPBlock.click();
    };
    this.saveIPBlock_getState = function(name) {
        return saveIPBlock.getAttribute('disabled');
    };
    //*********************************************************************************
    //GLOBAL BAN
    var customizeGlobalBan = element(by.css('button[ng-click="openGlobalBanCustomizeModal()"]'));
    this.customizeGlobalBan_Click = function() {
        customizeGlobalBan.click();
    };
    this.customizeGlobalBan_State = function() {
        return customizeGlobalBan.getAttribute('disabled');
    };

    var globalBanApp = element(by.id('applications_2_name'));
    this.addGlobalBanApplication_text = function(text) {
        addGlobalBanApplication.sendKeys(text);
    };

    var globalBanApp4 = element.all(by.id('applications_4503599627370495_name'));
    this.globalBanApp4_Click = function() {
        globalBanApp4.click();
    };
    this.globalBanApp4_Clear = function() {
        globalBanApp4.clear();
    };
    this.globalBanApp4_text = function(text) {
        globalBanApp4.sendKeys(text);
    };


    var globalBanAppInputField = element(by.css('input-field-component[name="applications_4503599627370495_name"]'));
    this.gBApp_placeholderAttr = function() {
        return globalBanAppInputField.getAttribute('placeholder');
    };
    this.gBApp_minlengthAttr = function() {
        return globalBanAppInputField.getAttribute('minlength');
    };
    this.gBApp_maxlengthAttr = function() {
        return globalBanAppInputField.getAttribute('maxlength');
    };
    this.gBApp_fieldLabelAttr = function () {
        return globalBanAppInputField.getAttribute('fieldlabel');
    };

    var globalBanPortInputField = element(by.css('input-field-component[name="ports_0_port"]'));
    this.gBPrt_placeholderAttr = function() {
        return globalBanPortInputField.getAttribute('placeholder');
    };
    this.gBPrt_name = function() {
        return globalBanPortInputField.getAttribute('name');
    };
    this.gBPrt_fieldLabelAttr = function () {
        return globalBanPortInputField.getAttribute('fieldlabel');
    };

    var portGlobalBan = element(by.id('ports_0_port'));
    this.portGlobalBan_Click = function() {
        portGlobalBan.click();
    };
    this.portGlobalBan_Clear = function() {
        portGlobalBan.clear();
    };
    this.portGlobalBan_text = function(text) {
        portGlobalBan.sendKeys(text);
    };
    this.portGlobalBan_getText = function() {
        return portGlobalBan.getText();
    };
    this.gBPrt_maxlengthAttr = function() {
        return portGlobalBan.getAttribute('maxlength');
    };

    var addGlobalBanApplication = element(by.css('button[ng-click="addItem(globalBan.applications)"]'));
    this.addGlobalBanApplication_Click = function() {
        addGlobalBanApplication.click();
    };
    this.addGlobalBanApplication_getState = function() {
       return addGlobalBanApplication.getAttribute('disabled');
    };

    var deleteGlobalBanApplication = element(by.id('delete_applications_0'));
    this.deleteGlobalBanApplication_Click = function() {
        deleteGlobalBanApplication.click();
    };
    this.deleteGlobalBanApplication_getState = function() {
        return deleteGlobalBanApplication.getAttribute('disabled');
    };

    var deleteGlobalBanApplication1 = element(by.id('delete_applications_1'));
    this.deleteGlobalBanApplication1_Click = function() {
        deleteGlobalBanApplication1.click();
    };
    this.deleteGlobalBanApplication1_getState = function() {
        return deleteGlobalBanApplication1.getAttribute('disabled');
    };

    var deleteGlobalBanApplication2 = element(by.id('delete_applications_2'));
    this.deleteGlobalBanApplication2_Click = function() {
        deleteGlobalBanApplication2.click();
    };
    this.deleteGlobalBanApplication2_getState = function() {
        return deleteGlobalBanApplication2.getAttribute('disabled');
    };

    var deleteGlobalBanApplication3 = element(by.id('delete_applications_3'));
    this.deleteGlobalBanApplication3_Click = function() {
        deleteGlobalBanApplication3.click();
    };
    this.deleteGlobalBanApplication3_getState = function() {
        return deleteGlobalBanApplication3.getAttribute('disabled');
    };

    var deleteGlobalBanApplication4 = element(by.id('delete_applications_4'));
    this.deleteGlobalBanApplication4_Click = function() {
        deleteGlobalBanApplication4.click();
    };
    this.deleteGlobalBanApplication4_getState = function() {
        return deleteGlobalBanApplication4.getAttribute('disabled');
    };

    var addGlobalBanPort = element(by.css('button[ng-click="addItem(globalBan.ports)"]'));
    this.addGlobalBanPort_Click = function() {
        addGlobalBanPort.click();
    };
    this.addGlobalBanPort_getState = function() {
        return addGlobalBanPort.getAttribute('disabled');
    };

    var deleteGlobalBanPort = element(by.id('delete_ports_0'));
    this.deleteGlobalBanPort_Click = function() {
        deleteGlobalBanPort.click();
    };
    this.deleteGlobalBanPort_getState = function() {
        return deleteGlobalBanPort.getAttribute('disabled');
    };

    var deleteGlobalBanPort1 = element(by.id('delete_ports_1'));
    this.deleteGlobalBanPort1_Click = function() {
        deleteGlobalBanPort1.click();
    };
    this.deleteGlobalBanPort1_getState = function() {
        return deleteGlobalBanPort1.getAttribute('disabled');
    };

    var cancelGlobalBan = element(by.css('button[ng-click="$dismiss()"]'));
    this.cancelGlobalBan_Click = function() {
        cancelGlobalBan.click();
    };
    this.cancelGlobalBan_getState = function() {
        return cancelGlobalBan.getAttribute('disabled');
    };

    var cancelGlobalBan_Ok = element.all(by.css('button[ng-click="ok()"]'));
    this.cancelGlobalBan_Ok_Click = function() {
        cancelGlobalBan_Ok.click();
    };

    var saveGlobalBan = element(by.css('button[ng-click="submitGlobalBanData(globalBanForm, globalBanAddEditForm)"]'));
    this.saveGlobalBan_Click = function() {
        saveGlobalBan.click();
    };
    this.saveGlobalBan_getState = function() {
        return saveGlobalBan.getAttribute('disabled');
    };
	//Global Ban exceptions
	
	var showGlobalBan = element(by.linkText('Global Ban '));
	this.show_GlobalBan = function(){
		showGlobalBan.click();
	};
	
	var showGlobalBanExceptions = element(by.linkText('Exceptions'));
	this.show_GlobalBan_Exceptions = function(){
		showGlobalBanExceptions.click();
	};
	
	var GlobalBanAddExceptionButton = element(by.css('a[ng-click="addException(globalBanAddEditForm)"]'));
	this.globalBan_Add_Exception = function(){
		GlobalBanAddExceptionButton.click();
	};
	var GlobalBanAddExceptionButtonv2 = element(by.css('button[ng-click="addException(globalBanAddEditForm)"]'));
	this.globalBan_Add_Exceptionv2 = function(){
		GlobalBanAddExceptionButtonv2.click();
	};	
	//****
    var globalBanApplications = element(by.id('gb_applications_0_name'));
    this.globalBanApplications_getKeyValue = function(name) {
        return globalBanApplications.getAttribute('key');
    };

    this.globalBanApplications_Click = function() {
        globalBanApplications.click();
    };
    this.globalBanApplications_Clear = function() {
        globalBanApplications.clear();
    };
    this.globalBanApplications_text = function(text) {
        globalBanApplications.sendKeys(text);
    };
	
	this.globalBanApplications_List = function(){
		return element.all(by.css('input[placeholder="SMTP / FTP / HTTP"]'));
	};
	
    var globalBanApplicationsv2 = element.all(by.css('input[placeholder="SMTP / FTP / HTTP"]')).last();
    this.globalBanApplicationsv2_getKeyValue = function(name) {
        return globalBanApplicationsv2.getAttribute('key');
    };
	
    this.globalBanApplicationsv2_Click = function() {
        globalBanApplicationsv2.click();
    };
    this.globalBanApplicationsv2_Clear = function() {
        globalBanApplicationsv2.clear();
    };
    this.globalBanApplicationsv2_text = function(text) {
        globalBanApplicationsv2.sendKeys(text);
    };	

	var globalBanApplications_InputField = element(by.css('input-field-component[name="gb_applications_0_name"]'));
    this.globalBanApplications_InputField_Click = function() {
        globalBanApplications_InputField.click();
    };	

	var globalBanApplications_InputFieldv2 = element.all(by.css('input-field-component[placeholder="SMTP / FTP / HTTP"]')).last();
    this.globalBanApplications_InputFieldv2_Click = function() {
        globalBanApplications_InputFieldv2.click();
    };	
    this.get_globalBanApplications_InputFieldv2 = function() {
        return globalBanApplications_InputFieldv2;
    };	
	
	
	this.globalBanApplications_placeholderAttr = function() {
        return globalBanApplications_InputField.getAttribute('placeholder');
    };
    this.globalBanApplications_minlengthAttr = function() {
        return globalBanApplications_InputField.getAttribute('minlength');
    };
    this.globalBanApplications_maxlengthAttr = function() {
        return globalBanApplications_InputField.getAttribute('maxlength');
    };
    this.globalBanApplications_fieldLabelAttr = function () {
        return globalBanApplications_InputField.getAttribute('fieldlabel');
    };	
	
    var addglobalBanApplications = element(by.css('button[ng-click="addItem(exception.applications)"]'));
    this.addglobalBanApplications_getState = function(name) {
        return addglobalBanApplications.getAttribute('disabled');
    };
    this.addglobalBanApplications_Click = function() {
        addglobalBanApplications.click();
    };

    var deleteglobalBanApplications = element(by.id('delete_applications_0'));
    this.deleteglobalBanApplications_getState = function(name) {
        return deleteglobalBanApplications.getAttribute('disabled');
    };
    this.deleteglobalBanApplications_Click = function() {
        deleteglobalBanApplications.click();
    };
	//
    var deleteglobalBanApplicationsv2 = element.all(by.css('button[ng-click="removeItem(application, exception.applications, \'global_ban_exception_application\')"]')).last();
    this.deleteglobalBanApplicationsv2_getState = function(name) {
        return deleteglobalBanApplicationsv2.getAttribute('disabled');
    };
    this.deleteglobalBanApplicationsv2_Click = function() {
        deleteglobalBanApplicationsv2.click();
    };

	var globalBan_Exceptions_Applied_To_Allow = element(by.css('input[id="allow"]'));
	this.globalBan_Exceptions_Applied_To_Allow_Click = function(){
		globalBan_Exceptions_Applied_To_Allow.click();
	};	

	this.globalBan_Exceptions_Applied_To_Allow_State = function(){
		return globalBan_Exceptions_Applied_To_Allow.getAttribute('checked');
	};
	
	var globalBan_Exceptions_Applied_To_Block = element(by.css('input[id="block"]'));
	this.globalBan_Exceptions_Applied_To_Block_Click = function(){
		globalBan_Exceptions_Applied_To_Block.click()	
	};	

	this.globalBan_Exceptions_Applied_To_Block_State = function(){
		return globalBan_Exceptions_Applied_To_Block.getAttribute('checked');
	};	
	//***
    var globalBanExceptionsPort = element(by.id('gb_ports_0_port'));
    this.globalBanExceptionsPort_getKeyValue = function(name) {
        return globalBanExceptionsPort.getAttribute('key');
    };

    this.globalBanExceptionsPort_Click = function() {
        globalBanExceptionsPort.click();
    };
    this.globalBanExceptionsPort_Clear = function() {
        globalBanExceptionsPort.clear();
    };
    this.globalBanExceptionsPort_text = function(text) {
        globalBanExceptionsPort.sendKeys(text);
    };
	
	this.globalBanExceptionsPort_List = function(){
		return element.all(by.css('input[placeholder="1-65535"]'));
	};
	
    var globalBanExceptionsPortv2 = element.all(by.css('input[placeholder="1-65535"]')).last();
    this.globalBanExceptionsPortv2_getKeyValue = function(name) {
        return globalBanExceptionsPortv2.getAttribute('key');
    };
	
    this.globalBanExceptionsPortv2_Click = function() {
        globalBanExceptionsPortv2.click();
    };
    this.globalBanExceptionsPortv2_Clear = function() {
        globalBanExceptionsPortv2.clear();
    };
    this.globalBanExceptionsPortv2_Text = function(text) {
        globalBanExceptionsPortv2.sendKeys(text);
    };	

	var globalBanExceptionsPort_InputField = element(by.css('input-field-component[name="gb_ports_0_port"]'));
    this.globalBanExceptionsPort_InputField_Click = function() {
        globalBanExceptionsPort_InputField.click();
    };	

	var globalBanExceptionsPort_InputFieldv2 = element.all(by.css('input-field-component[placeholder="1-65535"]')).last()
    this.globalBanExceptionsPort_InputFieldv2_Click = function() {
        globalBanExceptionsPort_InputFieldv2.click();
    };	
    this.get_globalBanExceptionsPort_InputFieldv2 = function() {
        return globalBanExceptionsPort_InputFieldv2;
    };
	
	this.globalBanExceptionsPort_placeholderAttr = function() {
        return globalBanExceptionsPort_InputField.getAttribute('placeholder');
    };
    this.globalBanExceptionsPort_minlengthAttr = function() {
        return globalBanExceptionsPort_InputField.getAttribute('minlength');
    };
    this.globalBanExceptionsPort_maxlengthAttr = function() {
        return globalBanExceptionsPort_InputField.getAttribute('maxlength');
    };
    this.globalBanExceptionsPort_fieldLabelAttr = function () {
        return globalBanExceptionsPort_InputField.getAttribute('fieldlabel');
    };	
	
    var add_GlobalBanExceptionsPort = element(by.css('button[ng-click="addItem(exception.ports)"]'));
    this.add_GlobalBanExceptionsPort_getState = function(name) {
        return add_GlobalBanExceptionsPort.getAttribute('disabled');
    };
    this.add_GlobalBanExceptionsPort_Click = function() {
        add_GlobalBanExceptionsPort.click();
    };	

	var delete_GlobalBanExceptionsPort = element(by.css('button[ng-click="removeItem(port, exception.ports, \'global_ban_exception_port\')"]'));
	this.delete_GlobalBanExceptionsPort_Click = function(){
		delete_GlobalBanExceptionsPort.click();
	};

	var delete_GlobalBanExceptionsPortv2 = element.all(by.css('button[ng-click="removeItem(port, exception.ports, \'global_ban_exception_port\')"]')).last();
	this.delete_GlobalBanExceptionsPortv2_Click = function(){
		delete_GlobalBanExceptionsPortv2.click();
	};
//**	
	var globalBan_Exceptions_Users_InputField = element(by.css('input-field-component[name="global_ban_exception_user0"]'));
    this.globalBan_Exceptions_Users_InputField_Click = function() {
        globalBan_Exceptions_Users_InputField.click();
    };

	var globalBan_Exceptions_Users_InputFieldv2 = element.all(by.css('input-field-component[placeholder="jschmoe"]')).last();
    this.globalBan_Exceptions_Users_InputFieldv2_Click = function() {
        globalBan_Exceptions_Users_InputFieldv2.click();
    };
    this.get_globalBan_Exceptions_Users_InputFieldv2 = function() {
        return globalBan_Exceptions_Users_InputFieldv2;
    };
	
	var globalBan_Exceptions_Users = element(by.css('input[name="global_ban_exception_user0"]'));
    this.globalBan_Exceptions_Users_Click = function() {
        globalBan_Exceptions_Users.click();
    };	

    this.globalBan_Exceptions_Users_Clear = function() {
        globalBan_Exceptions_Users.clear();
    };	
	this.globalBan_Exceptions_Users_Text = function(text) {
        globalBan_Exceptions_Users.sendKeys(text);
	};	
	
    this.globalBan_Exceptions_Users_placeholderAttr = function() {
        return globalBan_Exceptions_Users_InputField.getAttribute('placeholder');
    };
    this.globalBan_Exceptions_Users_minlengthAttr = function() {
        return globalBan_Exceptions_Users_InputField.getAttribute('minlength');
    };
    this.globalBan_Exceptions_Users_maxlengthAttr = function() {
        return globalBan_Exceptions_Users_InputField.getAttribute('maxlength');
    };
    this.globalBan_Exceptions_Users_fieldLabelAttr = function () {
        return globalBan_Exceptions_Users_InputField.getAttribute('fieldlabel');
    };

	var globalBan_Exceptions_Usersv2 = element.all(by.css('input[placeholder="jschmoe"]')).last();
    this.globalBan_Exceptions_Usersv2_Click = function() {
        globalBan_Exceptions_Usersv2.click();
    };	

    this.globalBan_Exceptions_Usersv2_Clear = function() {
        globalBan_Exceptions_Usersv2.clear();
    };	
	this.globalBan_Exceptions_Usersv2_Text = function(text) {
        globalBan_Exceptions_Usersv2.sendKeys(text);
	};		
		
	var globalBan_Exceptions_Users_Add_Button = element(by.css('button[ng-click="addItem(exception.users)"]'));
	this.globalBan_Exceptions_Users_Add_Button_Click = function(){
		globalBan_Exceptions_Users_Add_Button.click();
	};	
	
	var globalBan_Exceptions_Users_Delete_Button = element(by.css('button[ng-click="removeItem(user, exception.users, \'global_ban_exception_user\')"]'));
	this.globalBan_Exceptions_Users_Delete_Button_Click = function(){
		globalBan_Exceptions_Users_Delete_Button.click();
	};	
	
	var globalBan_Exceptions_Users_Delete_Buttonv2 = element.all(by.css('button[ng-click="removeItem(user, exception.users, \'global_ban_exception_user\')"]')).last();
	this.globalBan_Exceptions_Users_Delete_Buttonv2_Click = function(){
		globalBan_Exceptions_Users_Delete_Buttonv2.click();
	};			
//**	
	var globalBan_Exceptions_User_Groups_InputField = element(by.css('input-field-component[name="global_ban_exception_group0"]'));
    this.globalBan_Exceptions_User_Groups_InputField_Click = function() {
        globalBan_Exceptions_User_Groups_InputField.click();
    };

	var globalBan_Exceptions_User_Groups_InputFieldv2 = element.all(by.css('input-field-component[placeholder="sales"]')).last();
    this.globalBan_Exceptions_User_Groups_InputFieldv2_Click = function() {
        globalBan_Exceptions_User_Groups_InputFieldv2.click();
    };
    this.get_globalBan_Exceptions_User_Groups_InputFieldv2 = function() {
        return globalBan_Exceptions_User_Groups_InputFieldv2;
    };	
	var globalBan_Exceptions_User_Groups = element(by.css('input[name="global_ban_exception_group0"]'));
    this.globalBan_Exceptions_User_Groups_Click = function() {
        globalBan_Exceptions_User_Groups.click();
    };	

    this.globalBan_Exceptions_User_Groups_Clear = function() {
        globalBan_Exceptions_User_Groups.clear();
    };	
	this.globalBan_Exceptions_User_Groups_Text = function(text) {
        globalBan_Exceptions_User_Groups.sendKeys(text);
	};	
	
    this.globalBan_Exceptions_User_Groups_placeholderAttr = function() {
        return globalBan_Exceptions_User_Groups_InputField.getAttribute('placeholder');
    };
    this.globalBan_Exceptions_User_Groups_minlengthAttr = function() {
        return globalBan_Exceptions_User_Groups_InputField.getAttribute('minlength');
    };
    this.globalBan_Exceptions_User_Groups_maxlengthAttr = function() {
        return globalBan_Exceptions_User_Groups_InputField.getAttribute('maxlength');
    };
    this.globalBan_Exceptions_User_Groups_fieldLabelAttr = function () {
        return globalBan_Exceptions_User_Groups_InputField.getAttribute('fieldlabel');
    };

	var globalBan_Exceptions_User_Groupsv2 = element.all(by.css('input[placeholder="sales"]')).last();
    this.globalBan_Exceptions_User_Groupsv2_Click = function() {
        globalBan_Exceptions_User_Groupsv2.click();
    };	

    this.globalBan_Exceptions_User_Groupsv2_Clear = function() {
        globalBan_Exceptions_User_Groupsv2.clear();
    };	
	this.globalBan_Exceptions_User_Groupsv2_Text = function(text) {
        globalBan_Exceptions_User_Groupsv2.sendKeys(text);
	};		
		
	var globalBan_Exceptions_User_Groups_Add_Button = element(by.css('button[ng-click="addItem(exception.groups)"]'));
	this.globalBan_Exceptions_User_Groups_Add_Button_Click = function(){
		globalBan_Exceptions_User_Groups_Add_Button.click();
	};	
	
	var globalBan_Exceptions_User_Groups_Delete_Button = element(by.css('button[ng-click="removeItem(group, exception.groups, \'global_ban_exception_group\')"]'));
	this.globalBan_Exceptions_User_Groups_Delete_Button_Click = function(){
		globalBan_Exceptions_User_Groups_Delete_Button.click();
	};	
	
	var globalBan_Exceptions_User_Groups_Delete_Buttonv2 = element.all(by.css('button[ng-click="removeItem(group, exception.groups, \'global_ban_exception_group\')"]')).last();
	this.globalBan_Exceptions_User_Groups_Delete_Buttonv2_Click = function(){
		globalBan_Exceptions_User_Groups_Delete_Buttonv2.click();
	};
//**
	var globalBan_Exceptions_Apply_Button = element(by.css('button[ng-click="applyException(globalBanAddEditForm)"]'));
	this.globalBan_Exceptions_Apply_Button_Click = function(){
		globalBan_Exceptions_Apply_Button.click();
	};	
	
    this.globalBan_Exceptions_Apply_Button_GetState = function(name) {
        return globalBan_Exceptions_Apply_Button.getAttribute('disabled');
    };	
	
	var globalBan_Exceptions_Cancel_Button = element(by.css('button[ng-click="hideAddEditView(globalBanAddEditForm)"]'));
	this.globalBan_Exceptions_Cancel_Button_Click = function(){
		globalBan_Exceptions_Cancel_Button.click();
	};
    this.globalBan_Exceptions_Cancel_Button_GetState = function(name) {
        return globalBan_Exceptions_Cancel_Button.getAttribute('disabled');
    };
//**
	var globalBan_Exceptions_Host_Groups = element(by.css('div[id="hostgroups-multiselect"]'));
	this.globalBan_Exceptions_Host_Groups_Click = function() {
        globalBan_Exceptions_Host_Groups.click();
    };

    this.globalBan_Exceptions_Host_Groups_get = function() {
        return globalBan_Exceptions_Host_Groups.getText();
    };	
	var globalBan_Exceptions_Host_Groups_Search = globalBan_Exceptions_Host_Groups.element(by.css('input[type="text"]'));
	this.globalBan_Exceptions_Host_Groups_Search_Click = function() {
        globalBan_Exceptions_Host_Groups_Search.click();
    };	
	this.globalBan_Exceptions_Host_Groups_Search_Text = function(text) {
        globalBan_Exceptions_Host_Groups_Search.sendKeys(text);
	};	
	this.globalBan_Exceptions_Host_Groups_Search_Clear = function() {
        globalBan_Exceptions_Host_Groups_Search.clear();
	};
	
	var globalBan_Exceptions_Protocolv2 = element.all(by.css('div[class="dropdown form-group"]')).last();
	this.globalBan_Exceptions_Protocolv2_Click = function() {
        globalBan_Exceptions_Protocolv2.click();
    };
	this.globalBan_Exceptions_Protocolv2_TCP = function() {
        this.globalBan_Exceptions_Protocolv2_Click();
		element(by.linkText('TCP')).click();
    };
	this.globalBan_Exceptions_Protocolv2_UDP = function() {
        this.globalBan_Exceptions_Protocolv2_Click();
		element(by.linkText('UDP')).click();
    };
	this.globalBan_Exceptions_Protocolv2_Clear = function() {
        this.globalBan_Exceptions_Protocolv2_Click();
		element(by.linkText('SELECT')).click();
    };	

//**
	var globalBan_Exceptions_List_Edit_Button = element.all(by.css('span[ng-click="editException(exception, globalBanAddEditForm)"]')).first();
	this.globalBan_Exceptions_List_Edit_Button_Click = function(){
		globalBan_Exceptions_List_Edit_Button.click();
	};	
    this.globalBan_Exceptions_List_Edit_Button_GetState = function(name) {
        return globalBan_Exceptions_List_Edit_Button.getAttribute('disabled');
	};
	
	var globalBan_Exceptions_List_Edit_Buttonv2 = element.all(by.css('span[ng-click="editException(exception, globalBanAddEditForm)"]')).last();
	this.globalBan_Exceptions_List_Edit_Buttonv2_Click = function(){
		globalBan_Exceptions_List_Edit_Buttonv2.click();
	};	
    this.globalBan_Exceptions_List_Edit_Buttonv2_GetState = function(name) {
        return globalBan_Exceptions_List_Edit_Buttonv2.getAttribute('disabled');
	};
	
	var globalBan_Exceptions_List_Delete_Button = element.all(by.css('button[ng-click="deleteException(exception)"]')).first();
	this.globalBan_Exceptions_List_Delete_Button_Click = function(){
		globalBan_Exceptions_List_Delete_Button.click();
	};	
    this.globalBan_Exceptions_List_Delete_Button_GetState = function(name) {
        return globalBan_Exceptions_List_Delete_Button.getAttribute('disabled');
	};	

	var globalBan_Exceptions_List_Delete_Buttonv2 = element.all(by.css('button[ng-click="deleteException(exception)"]')).last();
	this.globalBan_Exceptions_List_Delete_Buttonv2_Click = function(){
		globalBan_Exceptions_List_Delete_Buttonv2.click();
	};	
    this.globalBan_Exceptions_List_Delete_Buttonv2_GetState = function(name) {
        return globalBan_Exceptions_List_Delete_Buttonv2.getAttribute('disabled');
	};	
	
	var globalBan_Exceptions_List_Edit_Buttons = element.all(by.css('span[ng-click="editException(exception, globalBanAddEditForm)"]'));
	this.get_globalBan_Exceptions_List_Edit_Buttons = function(){
		return globalBan_Exceptions_List_Edit_Buttons;
	};
	var globalBan_Exceptions_List_Delete_Buttons = element.all(by.css('button[ng-click="deleteException(exception)"]'));
	this.get_globalBan_Exceptions_List_Delete_Buttons = function(){
		return globalBan_Exceptions_List_Delete_Buttons;
	};	
//**
	var globalBan_Window_Cancel_Button = element(by.css('button[confirm-if="confirmOnCancel(globalBanForm, globalBanAddEditForm)"]'));
	this.globalBan_Window_Cancel_Button_Click = function(){
		globalBan_Window_Cancel_Button.click();
	};	
    this.globalBan_Window_Cancel_Button_GetState = function(name) {
        return globalBan_Window_Cancel_Button.getAttribute('disabled');
	};
	
	var globalBan_Window_Save_Button = element(by.css('button[ng-click="submitGlobalBanData(globalBanForm, globalBanAddEditForm)"]'));
	this.globalBan_Window_Save_Button_Click = function(){
		globalBan_Window_Save_Button.click();
	};	
    this.globalBan_Window_Save_Button_GetState = function(name) {
        return globalBan_Window_Save_Button.getAttribute('disabled');
	};

//****
	//**********************************************************************
	//Customizing Filters
	var showUrlFilters = element(by.css('a[ng-click="showUrlfilters()"]'));
	this.show_Url_Filters = function(){
		showUrlFilters.click();
	};
	
	var showExceptions = element(by.css('a[ng-click="showExceptions()"]'));
	this.show_Exceptions = function(){
		showExceptions.click();
	};	
	
	var addExceptionButton = element(by.css('a[ng-click="addException(urlFilterAddEditForm)"]'));
	this.add_Exception_Button_Click = function(){
		addExceptionButton.click();
	};

	var addExceptionButton2 = element(by.css('button[ng-click="addException(urlFilterAddEditForm)"]'));
	this.add_Exception_Button2_Click = function(){
		addExceptionButton2.click();
	};

	var urlfilter_alwaysallow_InputField = element(by.css('input-field-component[name="allowed_urls_0_url"]'));
    this.urlfilter_Always_Allowed_Click = function() {
        urlfilter_alwaysallow_InputField.click();
    };	

    this.urlfilter_alwaysallow_placeholderAttr = function() {
        return urlfilter_alwaysallow_InputField.getAttribute('placeholder');
    };
    this.urlfilter_alwaysallow_minlengthAttr = function() {
        return urlfilter_alwaysallow_InputField.getAttribute('minlength');
    };
    this.urlfilter_alwaysallow_maxlengthAttr = function() {
        return urlfilter_alwaysallow_InputField.getAttribute('maxlength');
    };
    this.urlfilter_alwaysallow_fieldLabelAttr = function () {
        return urlfilter_alwaysallow_InputField.getAttribute('fieldlabel');
    };		
	
	var urlfilter_alwaysblocked_InputField = element(by.css('input-field-component[name="blocked_urls_0_url"]'));
    this.urlfilter_Always_Blocked_Click = function() {
        urlfilter_alwaysblocked_InputField.click();
    };	
	
    this.urlfilter_alwaysblocked_placeholderAttr = function() {
        return urlfilter_alwaysblocked_InputField.getAttribute('placeholder');
    };
    this.urlfilter_alwaysblocked_minlengthAttr = function() {
        return urlfilter_alwaysblocked_InputField.getAttribute('minlength');
    };
    this.urlfilter_alwaysblocked_maxlengthAttr = function() {
        return urlfilter_alwaysblocked_InputField.getAttribute('maxlength');
    };
    this.urlfilter_alwaysblocked_fieldLabelAttr = function () {
        return urlfilter_alwaysblocked_InputField.getAttribute('fieldlabel');
    };	
	
	//Url Exceptions
	var exceptionsUrl_InputField = element(by.css('input-field-component[name="url0"]'));
    this.exceptions_Url_InputField_Click = function() {
        exceptionsUrl_InputField.click();
    };
	
	var exceptionsUrl = element(by.css('input[name="url0"]'));
    this.exceptions_Url_Click = function() {
        exceptionsUrl.click();
    };	
	
    this.exceptions_Url_Clear = function() {
        exceptionsUrl.clear();
    };	
	this.exceptions_Url = function(text) {
        exceptionsUrl.sendKeys(text);
	};	
	
    this.exceptionsUrl_placeholderAttr = function() {
        return exceptionsUrl_InputField.getAttribute('placeholder');
    };
    this.exceptionsUrl_minlengthAttr = function() {
        return exceptionsUrl_InputField.getAttribute('minlength');
    };
    this.exceptionsUrl_maxlengthAttr = function() {
        return exceptionsUrl_InputField.getAttribute('maxlength');
    };
    this.exceptionsUrl_fieldLabelAttr = function () {
        return exceptionsUrl_InputField.getAttribute('fieldlabel');
    };

	var exceptionsUrl_InputFieldv2 = element.all(by.css('input-field-component[placeholder="http://google.com"]')).last();
    this.exceptions_Url_InputFieldv2_Click = function() {
        exceptionsUrl_InputFieldv2.click();
    };	
    this.get_exceptions_Url_InputFieldv2 = function() {
        return exceptionsUrl_InputFieldv2;
    };	
	
	var exceptionsUrlv2 = element.all(by.css('input[placeholder="http://google.com"]')).last();
    this.exceptions_Urlv2_Click = function() {
        exceptionsUrlv2.click();
    };	
	
    this.exceptions_Urlv2_Clear = function() {
        exceptionsUrlv2.clear();
    };	
	this.exceptions_Urlv2 = function(text) {
        exceptionsUrlv2.sendKeys(text);
	};	
	
	var exceptions_Url_Add_Button = element(by.css('button[ng-click="ctrl.addItem(exception.urls)"]'));
	this.exceptions_Url_Add_Button_Click = function(){
		exceptions_Url_Add_Button.click();
	};

	var exceptions_Url_Delete_Button = element(by.css('button[ng-click="ctrl.removeItem(url, exception.urls, \'url\')"]'));
	this.exceptions_Url_Delete_Button_Click = function(){
		exceptions_Url_Delete_Button.click();
	};	
	
	var exceptionsUsers_InputField = element(by.css('input-field-component[name="exception_users0"]'));
    this.exceptions_Users_InputField_Click = function() {
        exceptionsUsers_InputField.click();
    };
	
	var exceptionsUsers = element(by.css('input[name="exception_users0"]'));
    this.exceptions_Users_Click = function() {
        exceptionsUsers.click();
    };	

    this.exceptions_Users_Clear = function() {
        exceptionsUsers.clear();
    };	
	this.exceptions_Users = function(text) {
        exceptionsUsers.sendKeys(text);
	};	
	
    this.exceptionsUsers_placeholderAttr = function() {
        return exceptionsUsers_InputField.getAttribute('placeholder');
    };
    this.exceptionsUsers_minlengthAttr = function() {
        return exceptionsUsers_InputField.getAttribute('minlength');
    };
    this.exceptionsUsers_maxlengthAttr = function() {
        return exceptionsUsers_InputField.getAttribute('maxlength');
    };
    this.exceptionsUsers_fieldLabelAttr = function () {
        return exceptionsUsers_InputField.getAttribute('fieldlabel');
    };

	var exceptionsUsers_InputFieldv2 = element.all(by.css('input-field-component[placeholder="jschmoe"]')).last();
    this.exceptions_Users_InputFieldv2_Click = function() {
        exceptionsUsers_InputFieldv2.click();
    };	
    this.get_exceptions_Users_InputFieldv2 = function() {
        return exceptionsUsers_InputFieldv2;
    };
	
	var exceptionsUsersv2 = element.all(by.css('input[placeholder="jschmoe"]')).last();
    this.exceptions_Usersv2_Click = function() {
        exceptionsUsersv2.click();
    };	

    this.exceptions_Usersv2_Clear = function() {
        exceptionsUsersv2.clear();
    };	
	this.exceptions_Usersv2 = function(text) {
        exceptionsUsersv2.sendKeys(text);
	};		
	
	
	var exceptions_Users_Add_Button = element(by.css('button[ng-click="ctrl.addItem(exception.users)"]'));
	this.exceptions_Users_Add_Button_Click = function(){
		exceptions_Users_Add_Button.click();
	};
	
	var exceptionsGroups_InputField = element(by.css('input-field-component[name="exception_groups0"]'));
    this.exceptions_Groups_InputField_Click = function() {
        exceptionsGroups_InputField.click();
    };
	
	var exceptionsGroups = element(by.css('input[name="exception_groups0"]'));
    this.exceptions_Groups_Click = function() {
        exceptionsGroups.click();
    };	
	
    this.exceptions_Groups_Clear = function() {
        exceptionsGroups.clear();
    };	
	this.exceptions_Groups = function(text) {
        exceptionsGroups.sendKeys(text);
	};
	
    this.exceptionsGroups_placeholderAttr = function() {
        return exceptionsGroups_InputField.getAttribute('placeholder');
    };
    this.exceptionsGroups_minlengthAttr = function() {
        return exceptionsGroups_InputField.getAttribute('minlength');
    };
    this.exceptionsGroups_maxlengthAttr = function() {
        return exceptionsGroups_InputField.getAttribute('maxlength');
    };
    this.exceptionsGroups_fieldLabelAttr = function () {
        return exceptionsGroups_InputField.getAttribute('fieldlabel');
    };		

	var exceptionsGroups_InputFieldv2 = element.all(by.css('input-field-component[placeholder="sales"]')).last();
    this.exceptions_Groups_InputFieldv2_Click = function() {
        exceptionsGroups_InputFieldv2.click();
    };
    this.get_exceptions_Groups_InputFieldv2 = function() {
        return exceptionsGroups_InputFieldv2;
    };	
	var exceptionsGroupsv2 = element.all(by.css('input[placeholder="sales"]')).last();
    this.exceptions_Groupsv2_Click = function() {
        exceptionsGroupsv2.click();
    };	
	
    this.exceptions_Groupsv2_Clear = function() {
        exceptionsGroupsv2.clear();
    };	
	this.exceptions_Groupsv2 = function(text) {
        exceptionsGroupsv2.sendKeys(text);	
	};
	
	var exceptions_Groups_Add_Button = element(by.css('button[ng-click="ctrl.addItem(exception.groups)"]'));
	this.exceptions_Groups_Add_Button_Click = function(){
		exceptions_Groups_Add_Button.click();
	};	

	var exceptionsCategory = element(by.css('div[id="categories-multiselect"]'));
	this.exceptions_Category_Click = function() {
        exceptionsCategory.click();
    };
    this.exceptionsCategory_get = function() {
        return exceptionsCategory.getText();
    };	
	var exceptionsCategory_Search = exceptionsCategory.element(by.css('input[type="text"]'));
	this.exceptions_Category_Search_Click = function() {
        exceptionsCategory_Search.click();
    };	
	this.exceptions_Category_Search = function(text) {
        exceptionsCategory_Search.sendKeys(text);
	};	
	this.exceptions_Category_Search_Clear = function() {
        exceptionsCategory_Search.clear();
	};		

	var exceptionsHostGroups = element(by.css('div[id="hostgroups-multiselect"]'));
	this.exceptions_Host_Groups_Click = function() {
        exceptionsHostGroups.click();
    };

    this.exceptionsHostGroups_get = function() {
        return exceptionsHostGroups.getText();
    };	
	var exceptionsHostGroups_Search = exceptionsHostGroups.element(by.css('input[type="text"]'));
	this.exceptions_Host_Groups_Search_Click = function() {
        exceptionsHostGroups_Search.click();
    };	
	this.exceptions_Host_Groups_Search = function(text) {
        exceptionsHostGroups_Search.sendKeys(text);
	};	
	this.exceptions_Host_Groups_Search_Clear = function() {
        exceptionsHostGroups_Search.clear();
	};	

	var exceptions_Applied_To_Allow = element(by.css('input[id="allow"]'));
	this.exceptions_Applied_To_Allow_Click = function(){
		exceptions_Applied_To_Allow.click();
	};	

	this.exceptions_Applied_To_Allow_State = function(){
		return exceptions_Applied_To_Allow.getAttribute('checked');
	};
	
	var exceptions_Applied_To_Block = element(by.css('input[id="block"]'));
	this.exceptions_Applied_To_Block_Click = function(){
		exceptions_Applied_To_Block.click()	
	};	

	this.exceptions_Applied_To_Block_State = function(){
		return exceptions_Applied_To_Block.getAttribute('checked');
	};	
	
	
	var exceptions_Apply_Button = element(by.css('button[ng-click="applyException(urlFilterAddEditForm)"]'));
	this.exceptions_Apply_Button_Click = function(){
		exceptions_Apply_Button.click();
	};	
	
    this.exceptions_Apply_Button_GetState = function(name) {
        return exceptions_Apply_Button.getAttribute('disabled');
    };	
	
	var exceptions_Cancel_Button = element(by.css('button[ng-click="hideAddEditView(urlFilterAddEditForm)"]'));
	this.exceptions_Cancel_Button_Click = function(){
		exceptions_Cancel_Button.click();
	};
    this.exceptions_Cancel_Button_GetState = function(name) {
        return exceptions_Cancel_Button.getAttribute('disabled');
    };
	
	//********
	var urlFilter_exceptions_List_Delete_Button = element(by.css('button[ng-click="deleteException(exception)"]'));
	this.urlFilter_exceptions_List_Delete_Button_Click = function(){
		urlFilter_exceptions_List_Delete_Button.click();
	};

	var urlFilter_exceptions_List_Delete_Buttonv2 = element.all(by.css('button[ng-click="deleteException(exception)"]')).last();
	this.urlFilter_exceptions_List_Delete_Buttonv2_Click = function(){
		urlFilter_exceptions_List_Delete_Buttonv2.click();
	};	

	var urlFilter_exceptions_List_Edit_Button = element(by.css('span[ng-click="editException(exception, urlFilterAddEditForm)"]'));
	this.urlFilter_exceptions_List_Edit_Button_Click = function(){
		urlFilter_exceptions_List_Edit_Button.click();
	};	
	
	var urlFilter_exceptions_List_Edit_Buttonv2 = element.all(by.css('span[ng-click="editException(exception, urlFilterAddEditForm)"]')).last();
	this.urlFilter_exceptions_List_Edit_Buttonv2_Click = function(){
		urlFilter_exceptions_List_Edit_Buttonv2.click();
	};	

	var urlFilter_exceptions_List_Edit_Buttons = element.all(by.css('span[ng-click="editException(exception, urlFilterAddEditForm)"]'));
	this.get_urlFilter_exceptions_List_Edit_Buttons = function(){
		return urlFilter_exceptions_List_Edit_Buttons;
	};		

	//***********
	
	var urlFilter_exceptions_Url_Delete_Button = element(by.css('button[ng-click="ctrl.removeItem(url, exception.urls, \'url\')"]'));
	this.urlFilter_exceptions_Url_Delete_Button_Click = function(){
		urlFilter_exceptions_Url_Delete_Button.click();
	};

	var urlFilter_exceptions_Url_Delete_Buttonv2 = element.all(by.css('button[ng-click="ctrl.removeItem(url, exception.urls, \'url\')"]')).last();
	this.urlFilter_exceptions_Url_Delete_Buttonv2_Click = function(){
		urlFilter_exceptions_Url_Delete_Buttonv2.click();
	};
	
	var urlFilter_exceptions_Users_Delete_Button = element(by.css('button[ng-click="ctrl.removeItem(user, exception.users, \'user\')"]'));
	this.urlFilter_exceptions_Users_Delete_Button_Click = function(){
		urlFilter_exceptions_Users_Delete_Button.click();
	};	
	
	var urlFilter_exceptions_Users_Delete_Buttonv2 = element.all(by.css('button[ng-click="ctrl.removeItem(user, exception.users, \'user\')"]')).last();
	this.urlFilter_exceptions_Users_Delete_Buttonv2_Click = function(){
		urlFilter_exceptions_Users_Delete_Buttonv2.click();
	};		
	
	var urlFilter_exceptions_Groups_Delete_Button = element(by.css('button[ng-click="ctrl.removeItem(group, exception.groups, \'group\')"]'));
	this.urlFilter_exceptions_Groups_Delete_Button_Click = function(){
		urlFilter_exceptions_Groups_Delete_Button.click();
	};
	
	var urlFilter_exceptions_Groups_Delete_Buttonv2 = element.all(by.css('button[ng-click="ctrl.removeItem(group, exception.groups, \'group\')"]')).last();
	this.urlFilter_exceptions_Groups_Delete_Buttonv2_Click = function(){
		urlFilter_exceptions_Groups_Delete_Buttonv2.click();
	};		


	//*********
	//*********
	var urlFilter_Window_Cancel_Button = element(by.css('button[ng-click="cancelUrlFiltering(urlFilterForm, urlFilterAddEditForm)"]'));
	this.urlFilter_Window_Cancel_Button_Click = function(){
		urlFilter_Window_Cancel_Button.click();
	};	
    this.urlFilter_Window_Cancel_Button_GetState = function(name) {
        return urlFilter_Window_Cancel_Button.getAttribute('disabled');
	};
	
	var urlFilter_Window_Save_Button = element(by.css('button[ng-click="ctrl.submitUrlFilter(urlFilterForm, urlFilterAddEditForm)"]'));
	this.urlFilter_Window_Save_Button_Click = function(){
		urlFilter_Window_Save_Button.click();
	};	
    this.urlFilter_Window_Save_Button_GetState = function(name) {
        return urlFilter_Window_Save_Button.getAttribute('disabled');
	};

    var nextActivationRequest = element(by.css('a[href="#/configuration/activationreq"]'));
    this.nextActivationRequest_Click = function(){
        nextActivationRequest.click();
    };
    this.nextActivationRequest_GetState = function(name) {
        return nextActivationRequest.getAttribute('disabled');
    };

    var confirmActivationRequest = element(by.css('button[ng-click="confirmActivation()"]'));
    this.confirmActivationRequest_Click = function(){
        confirmActivationRequest.click();
    };
    this.confirmActivationRequest_GetState = function(name) {
        return confirmActivationRequest.getAttribute('disabled');
    };
	
    var helpText = element(by.binding('helpContent'));
    this.help_GetText = function() {
        return helpText.getText();
    };

};

module.exports = securityControls_Page;
