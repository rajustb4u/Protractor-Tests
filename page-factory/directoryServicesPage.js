var directory_ServicePage = function() {

    var directoryServicesText = element.all(by.css('div.col-xs-4'));
    this.directoryServices_Text = function() {
        return directoryServicesText.getText();
    };

    var directoryServicesLink = element(by.css('a[href="#/configuration/dirservices"]'));
    //Directory Services link
    this.clickDirectoryServicesLink = function() {
        directoryServicesLink.click();
    };
    ///Sites page header
    this.DirectoryServicesTitle = function() {
        return DirectoryServices_Text.getText();
    };

    var addANewDirectoryService_Button = element(by.css('a[href="#/configuration/dirservices/add"]'));
    // Click Add DirectoryServices button
    this.clickAddDirectoryServices = function() {
        addANewDirectoryService_Button.click();
    };
    this.addANewDirectoryService_Button_State = function() {
        return addANewDirectoryService_Button.getAttribute('disabled');
    };

    var submitButton = element(by.buttonText('Add Directory Service'));
    // Submit Add Directory Services Button
    this.submitAddDirectoryServices = function() {
        submitButton.click();
    };
    //Submit Directory Services submit button State
    this.submitAddDirectoryServices_State = function() {
        return submitButton.getAttribute('disabled');
    };

    var  addDirectoryService_CancelButton = element(by.buttonText('Cancel'));
    //Add Directory Services Cancel button
    this.directoryServices_ClickCancel = function() {
        addDirectoryService_CancelButton.click();
    };

    var addDirectoryService_CancelMessageButton = element.all(by.buttonText('Yes'));
    //Cancel message box accept button
    this.addDirecotoryServices_CancelMessageButton = function() {
        addDirectoryService_CancelMessageButton.click();
    };

    var addAnotherDirectoryServices = element(by.css('a[href="#/configuration/dirservices/add"]'));
    this.addAnother_DirectoryServices = function() {
        addAnotherDirectoryServices.click();
    };
    this.addAnotherDirectoryServices_State = function() {
        return addAnotherDirectoryServices.getAttribute('disabled');
    };

    var nextHostsButton = element(by.linkText('Next - Hosts'));
    this.nextHosts_Button = function() {
        nextHostsButton.click();
    };
    this.nextHostsButton_State = function() {
        return nextHostsButton.getAttribute('disabled');
    };

    var hostPageText = element(by.css('div.col-xs-4'));
    this.hostPage_Text = function(text) {
        return hostPageText.getText();
    };


    //Get Directory Services Title text
    this.DirectoryServicesTitle = function() {
        return DirectoryServices_Text.getText();
    };
    //Get  Directory Services Title text
    this.DirectoryServicesTitleMain = function() {
        return DirectoryServices_MainText.getText();
    };

    var dirServicesType = element(by.css('input[name="type"]'));
    this.dirServices_Type = function() {
        return dirServicesType.getAttribute('value');
    };

    //********************************************************************************************************
    var nameField = element.all(by.id('name'));
    //Name field entry
    this.enterNameField = function(name) {
        nameField.sendKeys(name);
    };
    //Name Field Clear
    this.clearNameField = function() {
        nameField.clear();
    };
    //Name field click
    this.clickNameField = function() {
        nameField.click();
    };
    //Name field get text
    this.getNameField = function() {
        return nameField.getAttribute('value');
    };
    var inputfieldComponent_Name = element(by.css('input-field-component[name="name"]'));

    this.dsN_nameAttr = function(){
        return inputfieldComponent_Name.getAttribute('name');
    };
    this.dsN_placeholderAttr = function() {
        return inputfieldComponent_Name.getAttribute('placeholder');
    };
    this.dsN_minlengthAttr = function() {
        return inputfieldComponent_Name.getAttribute('minlength');
    };
    this.dsN_maxlengthAttr = function() {
        return inputfieldComponent_Name.getAttribute('maxlength');
    };
    this.dsN_fieldLabelAttr = function () {
        return inputfieldComponent_Name.getAttribute('fieldlabel');
    };

    //********************************************************************************************************
    //Connection Details entry
    var connectionDetails = element(by.id('connection_details'));
    this.enterConnectionDetails = function(name) {
        connectionDetails.sendKeys(name);
    };
    this.getConnectionDetails = function() {
        return connectionDetails.getAttribute('value');
    };
    this.clearConnectionDetails = function() {
        connectionDetails.clear();
    };
    this.clickConnectionDetails = function() {
        connectionDetails.click();
    };

    var CDFieldInputFieldComponent = element(by.css('input-field-component[name="connection_details"]'));
    this.dsCD_nameAttr = function(){
        return CDFieldInputFieldComponent.getAttribute('name');
    };
    this.dsCD_placeholderAttr = function() {
        return CDFieldInputFieldComponent.getAttribute('placeholder');
    };
    this.dsCD_maxlengthAttr = function() {
        return CDFieldInputFieldComponent.getAttribute('maxlength');
    };
    this.dsCD_fieldLabelAttr = function () {
        return CDFieldInputFieldComponent.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //BASE DN entry
    var  baseDN = element(by.id('connection_obj_base_dn'));
    this.enterBaseDN = function(name) {
        baseDN.sendKeys(name);
    };
    this.clearBaseDN = function() {
        baseDN.clear();
    };
    this.clickBaseDN = function() {
        baseDN.click();
    };
    this.getBaseDN = function() {
        return baseDN.getAttribute('value');
    };

    var inputFieldComponent_BaseDN = element(by.css('input-field-component[name="connection_obj_base_dn"]'));
    this.dsBADN_nameAttr = function(){
        return inputFieldComponent_BaseDN.getAttribute('name');
    };
    this.dsBADN_placeholderAttr = function() {
        return inputFieldComponent_BaseDN.getAttribute('placeholder');
    };
    this.dsBADN_minlengthAttr = function() {
        return inputFieldComponent_BaseDN.getAttribute('minlength');
    };
    this.dsBADN_maxlengthAttr = function() {
        return inputFieldComponent_BaseDN.getAttribute('maxlength');
    };
    this.dsBADN_fieldLabelAttr = function () {
        return inputFieldComponent_BaseDN.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //BIND DN entry
    var bindDN = element(by.id('connection_obj_bind_dn'));
    this.enterBindDN = function(name) {
        bindDN.sendKeys(name);
    };
    this.clearBindDN = function() {
        bindDN.clear();
    };
    this.clickBindDN = function() {
        bindDN.click();
    };
    this.getBindDN = function() {
        return bindDN.getAttribute('value');
    };

    var inputFieldComponent_BindDN = element(by.css('input-field-component[name="connection_obj_bind_dn"]'));
    this.dsBIDN_nameAttr = function(){
        return inputFieldComponent_BindDN.getAttribute('name');
    };
    this.dsBIDN_placeholderAttr = function() {
        return inputFieldComponent_BindDN.getAttribute('placeholder');
    };
    this.dsBIDN_minlengthAttr = function() {
        return inputFieldComponent_BindDN.getAttribute('minlength');
    };
    this.dsBIDN_maxlengthAttr = function() {
        return inputFieldComponent_BindDN.getAttribute('maxlength');
    };
    this.dsBIDN_fieldLabelAttr = function () {
        return inputFieldComponent_BindDN.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var requireSSLTLS = element(by.css('label.checkbox'));
    this.checkboxSSLTLS = function() {
        requireSSLTLS.click();
    };

    //********************************************************************************************************
    //USER NAME entry
    var userName = element(by.id('connection_obj_username'));
    this.enterUserName = function(name) {
        userName.sendKeys(name);
    };
    this.clearUserName = function() {
        userName.clear();
    };
    this.clickUserName = function() {
        userName.click();
    };
    this.getUserName = function() {
        return userName.getAttribute('value');
    };

    var inputfieldComponent_UserName = element(by.css('input-field-component[name="connection_obj_username"]'));
    this.dsUN_nameAttr = function(){
        return inputfieldComponent_UserName.getAttribute('name');
    };
    this.dsUN_maxlengthAttr = function() {
        return inputfieldComponent_UserName.getAttribute('maxlength');
    };
    this.dsUN_fieldLabelAttr = function () {
        return inputfieldComponent_UserName.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //Password entry
    var  password = element(by.id('connection_obj_password'));
    this.enterPassword = function(name) {
        password.sendKeys(name);
    };
    this.clearPassword = function() {
        password.clear();
    };
    this.clickPassword = function() {
        password.click();
    };

    this.showPassword = function (){
        return password.getAttribute('value');
    };


    var password_showbutton = element.all(by.css('span[ng-if="$ctrl.showhidebutton"]'));
    //Password Button field click
    this.passwordshowbutton = function() {
        password_showbutton.click();
    };
    // this.getPassword = function() {
    //     return password.getAttribute('value');
    // };
    this.getPassword = function() {
        return password.getText();
    };

    var inputfieldComponent_Password = element(by.css('input-field-component[name="connection_obj_password"]'));

    this.dsUPW_nameAttr = function(){
        return inputfieldComponent_Password.getAttribute('name');
    };
    this.dsPW_maxlengthAttr = function() {
        return inputfieldComponent_Password.getAttribute('maxlength');
    };
    this.dsPW_fieldLabelAttr = function () {
        return inputfieldComponent_Password.getAttribute('fieldlabel');
    };

    //********************************************************************************************************
    var server = element(by.id('connection_obj_servers_0_server'));
    //Server entry
    this.enter_ServerName = function(name) {
        server.sendKeys(name);
    };
    this.clear_ServerName = function() {
        server.clear();
    };
    this.click_ServerName = function() {
        server.click();
    };
    this.get_ServerName = function() {
        return server.getAttribute('value');
    };

    var inputFieldComponent_Server = element(by.css('input-field-component[name="connection_obj_servers_0_server"]'));
    this.dsServer_nameAttr = function(){
        return inputFieldComponent_Server.getAttribute('name');
    };
    this.dsServer_placeholderAttr = function() {
        return inputFieldComponent_Server.getAttribute('placeholder');
    };
    this.dsServer_fieldLabelAttr = function () {
        return inputFieldComponent_Server.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var server_1 = element(by.id('connection_obj_servers_4503599627370495_server'));
    server_2 = element(by.id('connection_obj_servers_4503599627370496_server'));
    server_3 = element(by.id('connection_obj_servers_4503599627370497_server'));
    server_4 = element(by.id('connection_obj_servers_4503599627370498_server'));
    server_5 = element(by.id('connection_obj_servers_4503599627370499_server'));
    //Server entry
    this.enter_ServerName_1 = function(name) {
        server_1.sendKeys(name);
    };
    this.enter_ServerName_2 = function(name) {
        server_2.sendKeys(name);
    };
    this.enter_ServerName_3 = function(name) {
        server_3.sendKeys(name);
    };this.enter_ServerName_4 = function(name) {
        server_4.sendKeys(name);
    };
    this.enter_ServerName_5 = function(name) {
        server_5.sendKeys(name);
    };
    //********************************************************************************************************
    var port = element(by.id('connection_obj_servers_0_port'));
    //Port entry
    this.enter_Port = function(name) {
        port.sendKeys(name);
    };
    this.clear_Port = function() {
        port.clear();
    };
    this.click_Port = function() {
        port.click();
    };
    this.get_Port = function() {
        port.getText();
    };

    var inputFieldComponent_Port = element(by.css('input-field-component[name="connection_obj_servers_0_port"]'));
    this.dsPort_nameAttr = function(){
        return inputFieldComponent_Port.getAttribute('name');
    };
    this.dsPort_placeholderAttr = function() {
        return inputFieldComponent_Port.getAttribute('placeholder');
    };
    this.dsPort_fieldLabelAttr = function () {
        return inputFieldComponent_Port.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var port_1 = element(by.id('connection_obj_servers_4503599627370495_port'));
    port_2 = element(by.id('connection_obj_servers_4503599627370496_port'));
    port_3 = element(by.id('connection_obj_servers_4503599627370497_port'));
    port_4 = element(by.id('connection_obj_servers_4503599627370498_port'));
    port_5 = element(by.id('connection_obj_servers_4503599627370499_port'));

    //Port entry
    this.enter_Port_1 = function(name) {
        port_1.sendKeys(name);
    };
    this.enter_Port_2 = function(name) {
        port_2.sendKeys(name);
    };
    this.enter_Port_3 = function(name) {
        port_3.sendKeys(name);
    };
    this.enter_Port_4 = function(name) {
        port_4.sendKeys(name);
    };
    this.enter_Port_5 = function(name) {
        port_5.sendKeys(name);
    };
    //********************************************************************************************************
    var addServer = element(by.css('button[ng-click="add()"]'));
    this.clickAddServerButton = function() {
        addServer.click();
    };
    this.getAddServerButtonState = function() {
        return addServer.getAttribute('disabled');
    };
    //********************************************************************************************************
    var deleteServer = element(by.id('delete_connection_obj_servers_0'));
    this.ClickDeleteServer = function() {
        deleteServer.click();
    };
    this.getdeleteServerButtonState = function() {
        return deleteServer.getAttribute('disabled');
    };
    //********************************************************************************************************
    var deleteServer_1 = element(by.id('delete_connection_obj_servers_1'));
    var deleteServer_2 = element(by.id('delete_connection_obj_servers_2'));
    var deleteServer_3 = element(by.id('delete_connection_obj_servers_3'));
    var deleteServer_4 = element(by.id('delete_connection_obj_servers_4'));
    var deleteServer_5 = element(by.id('delete_connection_obj_servers_5'));

    this.ClickDeleteServer_1 = function() {
        deleteServer_1.click();
    };
    this.ClickDeleteServer_2 = function() {
        deleteServer_2.click();
    };
    this.ClickDeleteServer_3 = function() {
        deleteServer_3.click();
    };
    this.ClickDeleteServer_4 = function() {
        deleteServer_4.click();
    };
    this.ClickDeleteServer_5 = function() {
        deleteServer_5.click();
    };
    //********************************************************************************************************

    var detailView = element(by.id('service_detailOpen_0'));
    //Detail view button
    this.clickDetailViewButton = function() {
        detailView.click();
    };
    this.detailView_State = function() {
        return detailView.getAttribute('disabled');
    };

    var  editButton = element(by.id('service_edit_0'));
    //Edit Directory Services button
    this.clickEditButton = function() {
        editButton.click();
    };
    this.editButton_State = function() {
        return editButton.getAttribute('disabled');
    };

    var editdirectoryServices_CancelButton = element(by.buttonText('Cancel'));
    //Eidt Directory Services Cancel button
    this.direcotoryServicesEditCancelButton = function() {
        editdirectoryServices_CancelButton.click();
    };

    var update_directoryServices_Button = element(by.buttonText('Update Directory Service'));
    //Update Directory Services button
    this.updateDirecotryServicesButton = function() {
        update_directoryServices_Button.click();
    };
    this.update_directoryServices_Buttonn_State = function() {
        return update_directoryServices_Button.getAttribute('disabled');
    };

    var closeDetailView = element(by.id('service_detailClose_0'));
    this.close_DetailView = function() {
        closeDetailView.click();
    };

    var direcotryServices_RemoveButton = element(by.id('service_delete_0'));
    //Remove DirectoryServices button
    this.removeDirectoryServicesButton = function() {
        direcotryServices_RemoveButton.click();
    };
    this.removeDirectoryServicesButton_State = function() {
        return direcotryServices_RemoveButton.getAttribute('disabled');
    };

    var deleteMsgBoxText = element(by.css('h3.warning'));
    this.deleteMsgBox_Text = function() {
        return deleteMsgBoxText.getText();
    };

    var deleteFinal_No = element.all(by.buttonText('No'));
    this.deleteFinalNo = function() {
        deleteFinal_No.click();
    };

    var deleteFinal = element.all(by.buttonText('Yes'));
    //click on delete button on message pop up
    this.Final_Delete = function() {
        deleteFinal.click();
    };
    //********************************************************************************************************
    //Help Text
    var helpTextDS = element(by.binding('helpContent'));
    this.getHelpForDS = function() {
        return helpTextDS.getText();
    };

    //********************************************************************************************************
    //Detail View elements
    var checkedStateLDAP_DetailView = element(by.css('.zmdi.zmdi-dot-circle'));
    this.checkedStateLDAP_DetailView = function () {
        checkedStateLDAP_DetailView.getAttribute('checked');
    };

    var detailViewData = element(by.binding(' $ctrl.service.name '));
    this.detailView_DataName = function () {
        return detailViewData.getText();
    };

    var detailViewData1 = element(by.binding(' $ctrl.service.connection_obj.subtype_display '));
    this.detailView_Data_SubType = function () {
        return detailViewData1.getText();
    };

    var detailViewData2 = element(by.binding(' server.server '));
    this.detailView_Data_Server = function () {
        return detailViewData2.getText();
    };

    var detailViewData3 = element(by.binding(' server.port '));
    this.detailView_Data_Port = function () {
        return detailViewData3.getText();
    };






};

module.exports = directory_ServicePage;