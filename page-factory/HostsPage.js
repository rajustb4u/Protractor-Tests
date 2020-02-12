var Hosts_Page = function() {

    var hosts_Link = element(by.css('a[href="#/configuration/hosts"]'));
    this.hostsLink = function() {
        hosts_Link.click();
    };

    var hostsText = element(by.css('div.col-xs-4'));
    this.hosts_Text = function(text) {
        return hostsText.getText();
    };

    var addHosts= element(by.css('a[href="#/configuration/hosts/add"]'));
    this.add_Hosts = function() {
        addHosts.click();
    };

    var addNewHosts = element(by.css('a[href="#/configuration/hosts/add"]'));
    this.addNew_Hosts = function() {
        addNewHosts.click();
    };

    //********************************************************************************************************
    //Devices
    var hosts_Name = element(by.id('name'));
    //Smart Device data entry
    this.hostsName = function(text) {
        hosts_Name.sendKeys(text);
    };
    this.hostsName_clear = function() {
        hosts_Name.clear();
    };
    this.hosts_Name_value = function() {
        return hosts_Name.getAttribute('value');
    };

    var hosts_Name_InputField = element(by.css('input-field-component[name="name"]'));
    this.hsts_placeholderAttr = function() {
        return hosts_Name_InputField.getAttribute('placeholder');
    };
    this.hsts_maxlengthAttr = function() {
        return hosts_Name_InputField.getAttribute('maxlength');
    };
    this.hsts_minlengthAttr = function() {
        return hosts_Name_InputField.getAttribute('minlength');
    };
    this.hsts_fieldLabelAttr = function () {
        return hosts_Name_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var hosts_Internal_ip = element(by.id('host_internal_ip_address'));
    //Smart Device IP Address data entry
    this.hostsInternal_ip = function(text) {
        hosts_Internal_ip.sendKeys(text);
    };
    this.hosts_Internal_ip_clear = function() {
        hosts_Internal_ip.clear();
    };
    this.hosts_Internal_ip_value = function() {
        return hosts_Internal_ip.getAttribute('value');
    };

    var hosts_Internal_ip_InputField = element(by.css('input-field-component[name="host_internal_ip_address"]'));
    this.hstsIP_placeholderAttr = function() {
        return hosts_Internal_ip_InputField.getAttribute('placeholder');
    };
    this.hstsIP_fieldLabelAttr = function () {
        return hosts_Internal_ip_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var domainName = element(by.id('host_domain'));
    this.domainName_text = function(text) {
        domainName.sendKeys(text);
    };
    this.domainName_clear = function() {
        domainName.clear();
    };
    this.domainName_value = function() {
        return domainName.getAttribute('value');
    };

    var hosts_DName_InputField = element(by.css('input-field-component[name="host_domain"]'));
    this.hstsDN_placeholderAttr = function() {
        return hosts_DName_InputField.getAttribute('placeholder');
    };
    this.hstsDN_maxlengthAttr = function() {
        return hosts_DName_InputField.getAttribute('maxlength');
    };
    this.hstsDN_minlengthAttr = function() {
        return hosts_DName_InputField.getAttribute('minlength');
    };
    this.hstsDN_fieldLabelAttr = function () {
        return hosts_DName_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var externalPort = element(by.id('ports_0_external_port'));
    this.externalPort_text = function(text) {
        externalPort.sendKeys(text);
    };
    this.externalPort_clear = function() {
        externalPort.clear();
    };
    this.externalPort_value = function() {
        return externalPort.getAttribute('value');
    };

    var externalPort_InputField = element(by.css('input-field-component[name="ports_0_external_port"]'));
    this.hstsExP_placeholderAttr = function() {
        return externalPort_InputField.getAttribute('placeholder');
    };
    this.hstsExP_fieldLabelAttr = function () {
        return externalPort_InputField.getAttribute('fieldlabel');
    };

    var internalPort = element(by.id('ports_0_internal_port'));
    this.internalPort_text = function(text) {
        internalPort.sendKeys(text);
    };
    this.internalPort_clear = function() {
        internalPort.clear();
    };
    this.internalPort_value = function() {
        return internalPort.getAttribute('value');
    };

    var internalPort_InputField = element(by.css('input-field-component[name="ports_0_internal_port"]'));
    this.hstsInP_placeholderAttr = function() {
        return internalPort_InputField.getAttribute('placeholder');
    };
    this.hstsInP_fieldLabelAttr = function () {
        return internalPort_InputField.getAttribute('fieldlabel');
    };

    var addPortTranslation = element(by.css('button[ng-click="addItem(host.port_translation_set)"]'));
    this.addPortTranslation_click = function() {
        addPortTranslation.click();
    };
    this.addPortTranslation_State = function() {
        return addPortTranslation.getAttribute('disabled');
    };

    var deletePortTranslation = element.all(by.id('btnDeletePort_0'));
    this.deletePortTranslation_click = function() {
        deletePortTranslation.click();
    };
    this.deletePortTranslation_State = function() {
        return deletePortTranslation.getAttribute('disabled');
    };

    var deletePortTranslation1 = element.all(by.id('btnDeletePort_1'));
    this.deletePortTranslation1_click = function() {
        deletePortTranslation1.click();
    };
    this.deletePortTranslation1_State = function() {
        return deletePortTranslation1.getAttribute('disabled');
    };

    var deletePortTranslation2 = element.all(by.id('btnDeletePort_2'));
    this.deletePortTranslation2_click = function() {
        deletePortTranslation2.click();
    };
    this.deletePortTranslation2_State = function() {
        return deletePortTranslation2.getAttribute('disabled');
    };

    var deletePortTranslation3 = element.all(by.id('btnDeletePort_3'));
    this.deletePortTranslation3_click = function() {
        deletePortTranslation3.click();
    };
    this.deletePortTranslation3_State = function() {
        return deletePortTranslation3.getAttribute('disabled');
    };

    //********************************************************************************************************
    //Multiple Ports
    var externalPort1 = element(by.id('ports_4503599627370495_external_port'));
    this.externalPort1_text = function(text) {
        externalPort1.sendKeys(text);
    };
    var externalPort2 = element(by.id('ports_4503599627370496_external_port'));
    this.externalPort2_text = function(text) {
        externalPort2.sendKeys(text);
    };
    var externalPort3 = element(by.id('ports_4503599627370497_external_port'));
    this.externalPort3_text = function(text) {
        externalPort3.sendKeys(text);
    };
    var externalPort4 = element(by.id('ports_4503599627370498_external_port'));
    this.externalPort4_text = function(text) {
        externalPort4.sendKeys(text);
    };

    var internalPort1 = element(by.id('ports_4503599627370495_internal_port'));
    this.internalPort1_text = function(text) {
        internalPort1.sendKeys(text);
    };
    var internalPort2 = element(by.id('ports_4503599627370496_internal_port'));
    this.internalPort2_text = function(text) {
        internalPort2.sendKeys(text);
    };
    var internalPort3 = element(by.id('ports_4503599627370497_internal_port'));
    this.internalPort3_text = function(text) {
        internalPort3.sendKeys(text);
    };
    var internalPort4 = element(by.id('ports_4503599627370498_internal_port'));
    this.internalPort4_text = function(text) {
        internalPort4.sendKeys(text);
    };
    //********************************************************************************************************

    var submit_Hosts = element(by.css('button[ng-click="saveData()"]'));
    this.submitHosts = function() {
        submit_Hosts.click();
    };
    this.submitHosts_State = function() {
        return submit_Hosts.getAttribute('disabled');
    };

    var cancel_Hosts = element(by.css('a[ng-click="$dismiss()"]'));
    this.cancelHosts = function() {
        cancel_Hosts.click();
    };
    this.cancelHosts_State = function() {
        return cancel_Hosts.getAttribute('disabled');
    };

    var cancelHosts_Yes = element.all(by.css('button[ng-click="ok()"]'));
    this.cancel_HostsYes = function() {
        cancelHosts_Yes.click();
    };

    var detailed_Hosts = element(by.css('#btnHostDetailOpen0'));
    this.detailedHosts = function() {
        detailed_Hosts.click();
    };
    this.detailed_Hosts_State = function() {
        return detailed_Hosts.getAttribute('disabled');
    };

    var editHosts = element(by.id('btnEditHost0'));
    this.edit_Hosts = function() {
        editHosts.click();
    };
    this.editHosts_State = function() {
        return editHosts.getAttribute('disabled');
    };

    var update_Hosts = element(by.buttonText('Update Host'));
    this.updateHosts = function() {
        update_Hosts.click();
    };
    this.update_Hosts_State = function() {
        update_Hosts.getAttribute('disabled');
    };

    var deleteHosts = element(by.id('btnDeleteHost0'));
    this.delete_Hosts = function() {
        deleteHosts.click();
    };
    this.deleteHosts_State = function() {
        return deleteHosts.getAttribute('disabled');
    };

    var delete_YesMessage = element.all(by.css('button[ng-click="$close()"]'));
    this.delete_Yes_Message = function() {
        delete_YesMessage.click();
    };

    var nextZones_Button = element(by.linkText('Next - Host Groups'));
    this.next_Zones_Button = function() {
        nextZones_Button.click();
    };
    this.nextZones_Button_State = function() {
        return nextZones_Button.getAttribute('disabled');
    };

    var scrollbar = element(by.css('div.scrollable-content.tbody.border-top'));
    this.scrollbar_State = function() {
        return scrollbar.getAttribute('disabled');
    };

};

module.exports = Hosts_Page;