var site_Page = function() {
    var commonComponent = require('../test-spec/common-component.js');

    //site link
    // var siteLink = element.all(by.linkText('SITES'));
    var siteLink = element(by.css('a[href="#/configuration/sites"]'))
    this.site_Link = function() {
        siteLink.click();
    };

    //Cancel Password window
    var changePassword_Cancel = element.all(by.buttonText('Cancel'));
    this.changePasswordCancelButton = function() {
        changePassword_Cancel.click();
    };

    //Configuration button
    var startConfiguration_Button = element(by.linkText('Start Configuration'));
    this.start_Configuration = function() {
        startConfiguration_Button.click();
    };
    this.startConfiguration_Button_State = function() {
        return startConfiguration_Button.getAttribute('disabled');
    };

    //Add New Sites
    // var addNewSite_Button = element(by.linkText('Add Site'));
    var addNewSite_Button = element(by.css('a[ng-click="$ctrl.openSiteModal()"]'))
    this.addSite_Button = function() {
        addNewSite_Button.click();
    };
    //Submit AddNewSite State
    this.AddNewSite_State = function() {
        return addNewSite_Button.getAttribute('disabled');
    };

    var NextAdministrators_Button = element(by.linkText('Next - Administrators'));
    //Next Administrators button State
    this.NextAdministrators_Button_Click = function() {
        NextAdministrators_Button.click();
    };
    this.Next_Administrators_Button_State = function() {
        return NextAdministrators_Button.getAttribute('disabled');
    };

    //Add Site button for more than one sites
    //var Add_Site_ForMore = element(by.css('a.btn.btn-tertiary.btn-link.btn-add.pull-right'));
    var Add_Site_ForMore = element(by.css('button[ng-click="$ctrl.openSiteModal()"]'));
    this.AddSite_ForMore = function() {
        Add_Site_ForMore.click();
    };
    this.Add_Site_ForMore_State = function() {
        return Add_Site_ForMore.getAttribute('disabled');
    };


    ///Sites page header
    var site_Text = element(by.css('h1'));
    this.sitesTitle = function() {
        return site_Text.getText();
    };

    var addSite_Text = element(by.css('h1'));
    this.getSiteTitle = function() {
        return addSite_Text.getText();
    };
    //********************************************************************************************************
    //Alias
    //********************************************************************************************************
    var  nameField = element.all(by.id('name'));
    //Name field entry
    this.siteName = function(name) {
        nameField.sendKeys(name);
    };
    this.siteName_Clear = function() {
        nameField.clear();
    };
    //Name field click
    this.clickNameField = function() {
        nameField.click();
    };
    //Name field get text
    this.get_SiteName = function() {
        return nameField.getText();
    };
    var siteName_InputField = element(by.css('input-field-component[name="name"]'));

    this.sn_nameAttr = function(){
        return siteName_InputField.getAttribute('name');
    };
    this.sn_placeholderAttr = function() {
        return siteName_InputField.getAttribute('placeholder');
    };
    this.sn_minlengthAttr = function() {
        return siteName_InputField.getAttribute('minlength');
    };
    this.sn_maxlengthAttr = function() {
        return siteName_InputField.getAttribute('maxlength');
    };
    this.sn_fieldLabelAttr = function () {
        return siteName_InputField.getAttribute('fieldlabel');
    };
    this.sn_classAttr = function () {
        return nameField.getAttribute('class');
    };
    this.sn_required = function () {
        return nameField.getAttribute('required');
    };
    //********************************************************************************************************
    var site_Tag = element.all(by.css('input[type="search"]'));
    //Site Tag data entry
    this.siteTag = function(text) {
        site_Tag.sendKeys(text);
    };

    this.siteTag_Clear = function() {
        site_Tag.clear();
    };

    this.siteTag_Click = function() {
        site_Tag.click();
    };

    var siteTag_InputField = element.all(by.css('item-selector[name="tags_0_"]'));

    this.stg_placeholderAttr = function() {
        return siteTag_InputField.getAttribute('placeholder');
    };
    this.stg_maxlengthAttr = function() {
        return siteTag_InputField.getAttribute('maxlength');
    };
    this.stg_fieldLabelAttr = function () {
        return siteTag_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var location_Type = element.all(by.id('location_type'));
    //Location Type data entry
    this.locationType = function(text) {
        location_Type.sendKeys(text);
    };

    var location_Type_InputField = element(by.css('input-field-component[name="location_type"]'));
    this.lt_placeholderAttr = function() {
        return location_Type_InputField.getAttribute('placeholder');
    };
    this.lt_maxlengthAttr = function() {
        return location_Type_InputField.getAttribute('maxlength');
    };
    this.lt_fieldLabelAttr = function () {
        return location_Type_InputField.getAttribute('fieldlabel');
    };

    //********************************************************************************************************
    var userCount = element(by.id('user_count'));
    this.user_Count = function(name) {
        userCount.sendKeys(name);
    };
    this.userCount_Clear = function() {
        userCount.clear();
    };
    //Name field click
    this.click_userCountField = function() {
        userCount.click();
    };
    //Name field get text
    this.get_userCount = function() {
        return userCount.getText();
    };
    var userCount_InputField = element(by.css('input[name="user_count"]'));

    this.uc_nameAttr = function(){
        return userCount_InputField.getAttribute('name');
    };
    this.uc_placeholderAttr = function() {
        return userCount_InputField.getAttribute('placeholder');
    };
    this.uc_maxlengthAttr = function() {
        return userCount_InputField.getAttribute('maxlength');
    };
    //********************************************************************************************************
    //Physical Location
    //********************************************************************************************************
    var address = element.all(by.id('street_address'));
    //Physical Address data entry
    this.physicalAddress = function(text) {
        address.sendKeys(text);
    };
    this.physicalAddress_Clear = function() {
        address.clear();
    };

    var address_InputField = element(by.css('input-field-component[name="street_address"]'));
    this.pa_placeholderAttr = function() {
        return address_InputField.getAttribute('placeholder');
    };
    this.pa_maxlengthAttr = function() {
        return address_InputField.getAttribute('maxlength');
    };
    this.pa_fieldLabelAttr = function () {
        return address_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    suite_Unit = element.all(by.id('suite_unit'));
    //Physical Suite/Unit data entry
    this.suiteUnit = function(text) {
        suite_Unit.sendKeys(text);
    };
    this.suiteUnit_Clear = function() {
        suite_Unit.clear();
    };

    var suiteUnit_InputField = element(by.css('input-field-component[name="suite_unit"]'));
    this.su_placeholderAttr = function() {
        return suiteUnit_InputField.getAttribute('placeholder');
    };
    this.su_maxlengthAttr = function() {
        return suiteUnit_InputField.getAttribute('maxlength');
    };
    this.su_minlengthAttr = function() {
        return suiteUnit_InputField.getAttribute('minlength');
    };
    this.su_fieldLabelAttr = function () {
        return suiteUnit_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    city_field = element.all(by.id('city'));
    //Physical CITY data entry
    this.city = function(text) {
        city_field.sendKeys(text);
    };
    this.city_Clear = function() {
        city_field.clear();
    };

    var city_field_InputField = element(by.css('input-field-component[name="city"]'));
    this.ct_placeholderAttr = function() {
        return city_field_InputField.getAttribute('placeholder');
    };
    this.ct_maxlengthAttr = function() {
        return city_field_InputField.getAttribute('maxlength');
    };
    this.ct_minlengthAttr = function() {
        return city_field_InputField.getAttribute('minlength');
    };
    this.ct_fieldLabelAttr = function () {
        return city_field_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    state_field = element.all(by.id('state'));
    //Physical STATE data entry
    this.state = function(text) {
        state_field.sendKeys(text);
    };
    this.state_Clear = function() {
        state_field.clear();
    };

    var state_field_InputField = element(by.css('input-field-component[name="state"]'));
    this.st_placeholderAttr = function() {
        return state_field_InputField.getAttribute('placeholder');
    };
    this.st_maxlengthAttr = function() {
        return state_field_InputField.getAttribute('maxlength');
    };
    this.st_minlengthAttr = function() {
        return state_field_InputField.getAttribute('minlength');
    };
    this.st_fieldLabelAttr = function () {
        return state_field_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    zipCode_field = element.all(by.id('zipcode'));
    //Physical ZIPCODE data entry
    this.zipcode = function(text) {
        zipCode_field.sendKeys(text);
    };
    this.zipcode_Clear = function() {
        zipCode_field.clear();
    };

    var zipCode_field_InputField = element(by.css('input-field-component[name="zipcode"]'));
    this.zc_placeholderAttr = function() {
        return zipCode_field_InputField.getAttribute('placeholder');
    };
    this.zc_maxlengthAttr = function() {
        return zipCode_field_InputField.getAttribute('maxlength');
    };
    this.zc_fieldLabelAttr = function () {
        return zipCode_field_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************

    //********************************************************************************************************
    //Point Of Contact
    //********************************************************************************************************
    var contact_Name = element(by.id('contact_name'));
    //Contact name data entry
    this.contactName = function(text) {
        contact_Name.sendKeys(text);
    };
    this.contactName_Clear = function() {
        contact_Name.clear();
    };

    var contact_Name_InputField = element(by.css('input-field-component[name="contact_name"]'));
    this.cn_placeholderAttr = function() {
        return contact_Name_InputField.getAttribute('placeholder');
    };
    this.cn_maxlengthAttr = function() {
        return contact_Name_InputField.getAttribute('maxlength');
    };
    this.cn_minlengthAttr = function() {
        return contact_Name_InputField.getAttribute('minlength');
    };
    this.cn_fieldLabelAttr = function () {
        return contact_Name_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************

    var contact_Email = element(by.id('contact_email'));
    //Contact Email Address data entry
    this.contactEmail = function(text) {
        contact_Email.sendKeys(text);
    };
    this.contactEmail_Clear = function() {
        contact_Email.clear();
    };

    var contact_Email_InputField = element(by.css('input-field-component[name="contact_email"]'));
    this.ce_placeholderAttr = function() {
        return contact_Email_InputField.getAttribute('placeholder');
    };
    this.ce_maxlengthAttr = function() {
        return contact_Email.getAttribute('maxlength');
    };
    this.ce_minlengthAttr = function() {
        return contact_Email_InputField.getAttribute('minlength');
    };
    this.ce_fieldLabelAttr = function () {
        return contact_Email_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    contact_Phone = element(by.id('contact_phone_1'));
    //Contact Phone number data entry
    this.contactPhone = function(text) {
        contact_Phone.sendKeys(text);
    };
    this.contactPhone_Clear = function() {
        contact_Phone.clear();
    };

    var contact_Phone_InputField = element(by.css('input-field-component[name="contact_phone_1"]'));
    this.cp_placeholderAttr = function() {
        return contact_Phone_InputField.getAttribute('placeholder');
    };
    this.cp_maxlengthAttr = function() {
        return contact_Phone.getAttribute('maxlength');
    };
    this.cp_minlengthAttr = function() {
        return contact_Phone_InputField.getAttribute('minlength');
    };
    this.cp_fieldLabelAttr = function () {
        return contact_Phone_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var contact_CellPhone = element(by.id('contact_phone_2'));
    //Contact Cell Phone Number data entry
    this.contactCellPhone = function(text) {
        contact_CellPhone.sendKeys(text);
    };
    this.contactCellPhone_Clear = function() {
        contact_CellPhone.clear();
    };

    var contact_CellPhone_InputField = element(by.css('input-field-component[name="contact_phone_2"]'));
    this.ccp_placeholderAttr = function() {
        return contact_CellPhone_InputField.getAttribute('placeholder');
    };
    this.ccp_maxlengthAttr = function() {
        return contact_CellPhone.getAttribute('maxlength');
    };
    this.ccp_minlengthAttr = function() {
        return contact_CellPhone_InputField.getAttribute('minlength');
    };
    this.ccp_fieldLabelAttr = function () {
        return contact_CellPhone_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //Devices
    var device_Name = element(by.id('device_set_0_name'));
    //Smart Device data entry
    this.deviceName = function(text) {
        device_Name.sendKeys(text);
    };
    this.deviceName_clear = function() {
        device_Name.clear();
    };
    this.deviceName_value = function() {
        return device_Name.getAttribute('value');
    };

    var device_Name_InputField = element(by.css('input-field-component[name="device_set_0_name"]'));
    this.dvn_placeholderAttr = function() {
        return device_Name_InputField.getAttribute('placeholder');
    };
    this.dvn_maxlengthAttr = function() {
        return device_Name_InputField.getAttribute('maxlength');
    };
    this.dvn_minlengthAttr = function() {
        return device_Name_InputField.getAttribute('minlength');
    };
    this.dvn_fieldLabelAttr = function () {
        return device_Name_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var device_ipAddress = element(by.id('device_set_0_ip_address'));
    //Smart Device IP Address data entry
    this.smartDeviceIP = function(text) {
        device_ipAddress.sendKeys(text);
    };
    this.smartDeviceIP_clear = function() {
        device_ipAddress.clear();
    };
    this.device_ipAddress_value = function() {
        return device_ipAddress.getAttribute('value');
    };

    var device_IP_InputField = element(by.css('input-field-component[name="device_set_0_ip_address"]'));
    this.dvip_placeholderAttr = function() {
        return device_IP_InputField.getAttribute('placeholder');
    };
    this.dvip_fieldLabelAttr = function () {
        return device_IP_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var domainName = element(by.id('device_set_0_domain_name'));
    this.domainName_text = function(text) {
        domainName.sendKeys(text);
    };
    this.domainName_clear = function() {
        domainName.clear();
    };
    this.domainName_value = function() {
        return domainName.getAttribute('value');
    };

    var domainName_InputField = element(by.css('input-field-component[name="device_set_0_domain_name"]'));
    this.dnm_placeholderAttr = function() {
        return domainName_InputField.getAttribute('placeholder');
    };
    this.dnm_maxlengthAttr = function() {
        return domainName_InputField.getAttribute('maxlength');
    };
    this.dnm_minlengthAttr = function() {
        return domainName_InputField.getAttribute('minlength');
    };
    this.dnm_fieldLabelAttr = function () {
        return domainName_InputField.getAttribute('fieldlabel');
    };

    //********************************************************************************************************
    var portTranslation = element(by.css('button[name="btnShowPortTranslations_0"]'));
    this.portTranslation_state = function() {
        return portTranslation.getAttribute('disabled');
    };
    this.portTranslation_click = function() {
        portTranslation.click();
    };

    var portTranslation1 = element(by.css('button[name="btnShowPortTranslations_1"]'));
    this.portTranslation1_state = function() {
        return portTranslation1.getAttribute('disabled');
    };
    this.portTranslation1_click = function() {
        portTranslation1.click();
    };

    var portTranslation2 = element(by.css('button[name="btnShowPortTranslations_2"]'));
    this.portTranslation2_state = function() {
        return portTranslation2.getAttribute('disabled');
    };
    this.portTranslation2_click = function() {
        portTranslation2.click();
    };

    var portTranslation3 = element(by.css('button[name="btnShowPortTranslations_3"]'));
    this.portTranslation3_state = function() {
        return portTranslation3.getAttribute('disabled');
    };
    this.portTranslation3_click = function() {
        portTranslation3.click();
    };

    var portTranslation4 = element(by.css('button[name="btnShowPortTranslations_4"]'));
    this.portTranslation4_state = function() {
        return portTranslation4.getAttribute('disabled');
    };
    this.portTranslation4_click = function() {
        portTranslation4.click();
    };

    var portTranslation5 = element(by.css('button[name="btnShowPortTranslations_5"]'));
    this.portTranslation5_state = function() {
        return portTranslation5.getAttribute('disabled');
    };
    this.portTranslation5_click = function() {
        portTranslation5.click();
    };

    var portTranslation6 = element(by.css('button[name="btnShowPortTranslations_6"]'));
    this.portTranslation6_click = function() {
        portTranslation6.click();
    };

    var portTranslation7 = element(by.css('button[name="btnShowPortTranslations_7"]'));
    this.portTranslation7_click = function() {
        portTranslation7.click();
    };

    var portTranslation8 = element(by.css('button[name="btnShowPortTranslations_8"]'));
    this.portTranslation8_click = function() {
        portTranslation8.click();
    };

    var portTranslation9 = element(by.css('button[name="btnShowPortTranslations_9"]'));
    this.portTranslation9_click = function() {
        portTranslation9.click();
    };

    var portTranslation10 = element(by.css('button[name="btnShowPortTranslations_10"]'));
    this.portTranslation10_click = function() {
        portTranslation10.click();
    };

    var portTranslation11 = element(by.css('button[name="btnShowPortTranslations_11"]'));
    this.portTranslation11_click = function() {
        portTranslation11.click();
    };

    var portTranslation12 = element(by.css('button[name="btnShowPortTranslations_12"]'));
    this.portTranslation12_click = function() {
        portTranslation12.click();
    };

    var portTranslation13 = element(by.css('button[name="btnShowPortTranslations_13"]'));
    this.portTranslation13_click = function() {
        portTranslation13.click();
    };

    var portTranslation14 = element(by.css('button[name="btnShowPortTranslations_14"]'));
    this.portTranslation14_click = function() {
        portTranslation14.click();
    };

    var portTranslation15 = element(by.css('button[name="btnShowPortTranslations_15"]'));
    this.portTranslation15_click = function() {
        portTranslation15.click();
    };
    //********************************************************************************************************
    var externalPort = element(by.id('device_0_ports_set_0_external_port'));
    this.externalPort_text = function(text) {
        externalPort.sendKeys(text);
    };
    this.externalPort_clear = function() {
        externalPort.clear();
    };
    this.externalPort_value = function() {
        return externalPort.getAttribute('value');
    };

    var iFSExternalPort_InputField = element(by.css('input-field-component[name="device_0_ports_set_0_external_port"]'));
    this.iFSEP_placeholderAttr = function() {
        return iFSExternalPort_InputField.getAttribute('placeholder');
    };
    this.iFSEP_fieldLabelAttr = function () {
        return iFSExternalPort_InputField.getAttribute('fieldlabel');
    };
    var iFSExternalPort_InputName = element(by.css('input[name="device_0_ports_set_0_external_port"]'));
    this.iFSEP_maxlengthAttr = function() {
        return iFSExternalPort_InputName.getAttribute('maxlength');
    };

    //External port for Server0
    var externalPort_0_1 = element(by.id('device_0_ports_set_4503599627370495_external_port'));
    this.externalPort_0_1_text = function(text) {
        externalPort_0_1.sendKeys(text);
    };
    var externalPort_0_2 = element(by.id('device_0_ports_set_4503599627370496_external_port'));
    this.externalPort_0_2_text = function(text) {
        externalPort_0_2.sendKeys(text);
    };
    var externalPort_0_3 = element(by.id('device_0_ports_set_4503599627370497_external_port'));
    this.externalPort_0_3_text = function(text) {
        externalPort_0_3.sendKeys(text);
    };
    var externalPort_0_4 = element(by.id('device_0_ports_set_4503599627370498_external_port'));
    this.externalPort_0_4_text = function(text) {
        externalPort_0_4.sendKeys(text);
    };
    var externalPort_0_5 = element(by.id('device_0_ports_set_4503599627370499_external_port'));
    this.externalPort_0_5_text = function(text) {
        externalPort_0_5.sendKeys(text);
    };

    //External port for Server1
    var externalPort_1 = element(by.id('device_4503599627370495_ports_set_0_external_port'));
    this.externalPort_1_text = function(text) {
        externalPort_1.sendKeys(text);
    };
    var externalPort_1_1 = element(by.id('device_4503599627370495_ports_set_4503599627370495_external_port'));
    this.externalPort_1_1_text = function(text) {
        externalPort_1_1.sendKeys(text);
    };
    var externalPort_1_2 = element(by.id('device_4503599627370495_ports_set_4503599627370496_external_port'));
    this.externalPort_1_2_text = function(text) {
        externalPort_1_2.sendKeys(text);
    };
    var externalPort_1_3 = element(by.id('device_4503599627370495_ports_set_4503599627370497_external_port'));
    this.externalPort_1_3_text = function(text) {
        externalPort_1_3.sendKeys(text);
    };
    var externalPort_1_4 = element(by.id('device_4503599627370495_ports_set_4503599627370498_external_port'));
    this.externalPort_1_4_text = function(text) {
        externalPort_1_4.sendKeys(text);
    };
    var externalPort_1_5 = element(by.id('device_4503599627370495_ports_set_4503599627370499_external_port'));
    this.externalPort_1_5_text = function(text) {
        externalPort_1_5.sendKeys(text);
    };

    //internet port translation for 2-15 servers
    var externalPort_2 = element(by.id('device_4503599627370496_ports_set_0_external_port'));
    this.externalPort_2_text = function(text) {
        externalPort_2.sendKeys(text);
    };

    var externalPort_3 = element(by.id('device_4503599627370497_ports_set_0_external_port'));
    this.externalPort_3_text = function(text) {
        externalPort_3.sendKeys(text);
    };

    var externalPort_4 = element(by.id('device_4503599627370498_ports_set_0_external_port'));
    this.externalPort_4_text = function(text) {
        externalPort_4.sendKeys(text);
    };

    var externalPort_5 = element(by.id('device_4503599627370499_ports_set_0_external_port'));
    this.externalPort_5_text = function(text) {
        externalPort_5.sendKeys(text);
    };

    var externalPort_6 = element(by.id('device_4503599627370500_ports_set_0_external_port'));
    this.externalPort_6_text = function(text) {
        externalPort_6.sendKeys(text);
    };

    var externalPort_7 = element(by.id('device_4503599627370501_ports_set_0_external_port'));
    this.externalPort_7_text = function(text) {
        externalPort_7.sendKeys(text);
    };

    var externalPort_8 = element(by.id('device_4503599627370502_ports_set_0_external_port'));
    this.externalPort_8_text = function(text) {
        externalPort_8.sendKeys(text);
    };

    var externalPort_9 = element(by.id('device_4503599627370503_ports_set_0_external_port'));
    this.externalPort_9_text = function(text) {
        externalPort_9.sendKeys(text);
    };

    var externalPort_10 = element(by.id('device_4503599627370504_ports_set_0_external_port'));
    this.externalPort_10_text = function(text) {
        externalPort_10.sendKeys(text);
    };

    var externalPort_11 = element(by.id('device_4503599627370505_ports_set_0_external_port'));
    this.externalPort_11_text = function(text) {
        externalPort_11.sendKeys(text);
    };

    var externalPort_12 = element(by.id('device_4503599627370506_ports_set_0_external_port'));
    this.externalPort_12_text = function(text) {
        externalPort_12.sendKeys(text);
    };

    var externalPort_13 = element(by.id('device_4503599627370507_ports_set_0_external_port'));
    this.externalPort_13_text = function(text) {
        externalPort_13.sendKeys(text);
    };

    var externalPort_14 = element(by.id('device_4503599627370508_ports_set_0_external_port'));
    this.externalPort_14_text = function(text) {
        externalPort_14.sendKeys(text);
    };

    var externalPort_15 = element(by.id('device_4503599627370509_ports_set_0_external_port'));
    this.externalPort_15_text = function(text) {
        externalPort_15.sendKeys(text);
    };
    //********************************************************************************************************
    var internalPort = element.all(by.id('device_0_ports_set_0_internal_port'));
    this.internalPort_text = function(text) {
        internalPort.sendKeys(text);
    };
    this.internalPort_clear = function() {
        internalPort.clear();
    };
    this.internalPort_value = function() {
        return internalPort.getAttribute('value');
    };

    var iFSInternalPort_InputField = element(by.css('input-field-component[name="device_0_ports_set_0_internal_port"]'));
    this.iFSIP_placeholderAttr = function() {
        return iFSInternalPort_InputField.getAttribute('placeholder');
    };
    this.iFSIP_fieldLabelAttr = function () {
        return iFSInternalPort_InputField.getAttribute('fieldlabel');
    };
    var iFSInternalPort_InputName = element(by.css('input[name="device_0_ports_set_0_internal_port"]'));
    this.iFSIP_maxlengthAttr = function() {
        return iFSInternalPort_InputName.getAttribute('maxlength');
    };

    //Internal port for Server0
    var internalPort_0_1 = element.all(by.id('device_0_ports_set_4503599627370495_internal_port'));
    this.internalPort_0_1_text = function(text) {
        internalPort_0_1.sendKeys(text);
    };
    var internalPort_0_2 = element.all(by.id('device_0_ports_set_4503599627370496_internal_port'));
    this.internalPort_0_2_text = function(text) {
        internalPort_0_2.sendKeys(text);
    };
    var internalPort_0_3 = element.all(by.id('device_0_ports_set_4503599627370497_internal_port'));
    this.internalPort_0_3_text = function(text) {
        internalPort_0_3.sendKeys(text);
    };
    var internalPort_0_4 = element.all(by.id('device_0_ports_set_4503599627370498_internal_port'));
    this.internalPort_0_4_text = function(text) {
        internalPort_0_4.sendKeys(text);
    };
    var internalPort_0_5 = element.all(by.id('device_0_ports_set_4503599627370499_internal_port'));
    this.internalPort_0_5_text = function(text) {
        internalPort_0_5.sendKeys(text);
    };

    //Internal port for Server1
    var internalPort_1 = element.all(by.id('device_4503599627370495_ports_set_0_internal_port'));
    this.internalPort_1_text = function(text) {
        internalPort_1.sendKeys(text);
    };
    var internalPort_1_1 = element.all(by.id('device_4503599627370495_ports_set_4503599627370495_internal_port'));
    this.internalPort_1_1_text = function(text) {
        internalPort_1_1.sendKeys(text);
    };
    var internalPort_1_2 = element.all(by.id('device_4503599627370495_ports_set_4503599627370496_internal_port'));
    this.internalPort_1_2_text = function(text) {
        internalPort_1_2.sendKeys(text);
    };
    var internalPort_1_3 = element.all(by.id('device_4503599627370495_ports_set_4503599627370497_internal_port'));
    this.internalPort_1_3_text = function(text) {
        internalPort_1_3.sendKeys(text);
    };
    var internalPort_1_4 = element.all(by.id('device_4503599627370495_ports_set_4503599627370498_internal_port'));
    this.internalPort_1_4_text = function(text) {
        internalPort_1_4.sendKeys(text);
    };
    var internalPort_1_5 = element.all(by.id('device_4503599627370495_ports_set_4503599627370499_internal_port'));
    this.internalPort_1_5_text = function(text) {
        internalPort_1_5.sendKeys(text);
    };

    var internalPort_2 = element.all(by.id('device_4503599627370496_ports_set_0_internal_port'));
    this.internalPort_2_text = function(text) {
        internalPort_2.sendKeys(text);
    };

    var internalPort_3 = element.all(by.id('device_4503599627370497_ports_set_0_internal_port'));
    this.internalPort_3_text = function(text) {
        internalPort_3.sendKeys(text);
    };

    var internalPort_4 = element.all(by.id('device_4503599627370498_ports_set_0_internal_port'));
    this.internalPort_4_text = function(text) {
        internalPort_4.sendKeys(text);
    };

    var internalPort_5 = element.all(by.id('device_4503599627370499_ports_set_0_internal_port'));
    this.internalPort_5_text = function(text) {
        internalPort_5.sendKeys(text);
    };

    var internalPort_6 = element.all(by.id('device_4503599627370500_ports_set_0_internal_port'));
    this.internalPort_6_text = function(text) {
        internalPort_6.sendKeys(text);
    };

    var internalPort_7 = element.all(by.id('device_4503599627370501_ports_set_0_internal_port'));
    this.internalPort_7_text = function(text) {
        internalPort_7.sendKeys(text);
    };

    var internalPort_8 = element.all(by.id('device_4503599627370502_ports_set_0_internal_port'));
    this.internalPort_8_text = function(text) {
        internalPort_8.sendKeys(text);
    };

    var internalPort_9 = element.all(by.id('device_4503599627370503_ports_set_0_internal_port'));
    this.internalPort_9_text = function(text) {
        internalPort_9.sendKeys(text);
    };

    var internalPort_10 = element.all(by.id('device_4503599627370504_ports_set_0_internal_port'));
    this.internalPort_10_text = function(text) {
        internalPort_10.sendKeys(text);
    };

    var internalPort_11 = element.all(by.id('device_4503599627370505_ports_set_0_internal_port'));
    this.internalPort_11_text = function(text) {
        internalPort_11.sendKeys(text);
    };

    var internalPort_12 = element.all(by.id('device_4503599627370506_ports_set_0_internal_port'));
    this.internalPort_12_text = function(text) {
        internalPort_12.sendKeys(text);
    };

    var internalPort_13 = element.all(by.id('device_4503599627370507_ports_set_0_internal_port'));
    this.internalPort_13_text = function(text) {
        internalPort_13.sendKeys(text);
    };

    var internalPort_14 = element.all(by.id('device_4503599627370508_ports_set_0_internal_port'));
    this.internalPort_14_text = function(text) {
        internalPort_14.sendKeys(text);
    };

    var internalPort_15 = element.all(by.id('device_4503599627370509_ports_set_0_internal_port'));
    this.internalPort_15_text = function(text) {
        internalPort_15.sendKeys(text);
    };
    //********************************************************************************************************
    var addPortTranslation = element(by.id('btnAddPortTranslations_0git sta'));
    this.addPortTranslation_click = function() {
        addPortTranslation.click();
    };
    this.addPortTranslation_State = function() {
        return addPortTranslation.getAttribute('disabled');
    };

    var addPortTranslation1 = element(by.id('btnAddPortTranslations_1git sta'));
    this.addPortTranslation1_click = function() {
        addPortTranslation1.click();
    };
    this.addPortTranslation1_State = function() {
        return addPortTranslation1.getAttribute('disabled');
    };

    var addPortTranslation2 = element(by.id('btnAddPortTranslations_2git sta'));
    this.addPortTranslation2_click = function() {
        addPortTranslation2.click();
    };
    this.addPortTranslation2_State = function() {
        return addPortTranslation2.getAttribute('disabled');
    };

    var addPortTranslation3 = element(by.id('btnAddPortTranslations_3git sta'));
    this.addPortTranslation3_click = function() {
        addPortTranslation3.click();
    };
    this.addPortTranslation3_State = function() {
        return addPortTranslation3.getAttribute('disabled');
    };

    var addPortTranslation4 = element(by.id('btnAddPortTranslations_4git sta'));
    this.addPortTranslation4_click = function() {
        addPortTranslation4.click();
    };
    this.addPortTranslation4_State = function() {
        return addPortTranslation4.getAttribute('disabled');
    };

    //******************************************************************************************************
    var deletePortTranslation_0 = element(by.id('delete_port_translation_set_0'));
    this.deletePortTranslation_0_click = function() {
        deletePortTranslation_0.click();
    };
    this.deletePortTranslation_0_state = function() {
        return deletePortTranslation_0.getAttribute('disabled');
    };

    var deletePortTranslation_1 = element(by.id('delete_port_translation_set_1'));
    this.deletePortTranslation_1_click = function() {
        deletePortTranslation_1.click();
    };
    this.deletePortTranslation_1_state = function() {
        return deletePortTranslation_1.getAttribute('disabled');
    };

    var deletePortTranslation_2 = element(by.id('delete_port_translation_set_2'));
    this.deletePortTranslation_2_click = function() {
        deletePortTranslation_2.click();
    };
    this.deletePortTranslation_2_state = function() {
        return deletePortTranslation_2.getAttribute('disabled');
    };

    var deletePortTranslation_3 = element(by.id('delete_port_translation_set_3'));
    this.deletePortTranslation_3_click = function() {
        deletePortTranslation_3.click();
    };
    this.deletePortTranslation_3_state = function() {
        return deletePortTranslation_3.getAttribute('disabled');
    };

    var deletePortTranslation_4 = element(by.id('delete_port_translation_set_4'));
    this.deletePortTranslation_4_click = function() {
        deletePortTranslation_4.click();
    };
    this.deletePortTranslation_4_state = function() {
        return deletePortTranslation_4.getAttribute('disabled');
    };

    var deletePortTranslation_5 = element(by.id('delete_port_translation_set_5'));
    this.deletePortTranslation_5_click = function() {
        deletePortTranslation_5.click();
    };
    this.deletePortTranslation_5_state = function() {
        return deletePortTranslation_5.getAttribute('disabled');
    };
    //********************************************************************************************************
    //Multiple Devices
    var device_Name1 = element(by.id('device_set_4503599627370495_name'));
    //Smart Device data entry
    this.deviceName1 = function(text) {
        device_Name1.sendKeys(text);
    };
    this.deviceName_value1 = function() {
        return device_Name1.getAttribute('value');
    };
    var device_Name2 = element(by.id('device_set_4503599627370496_name'));
    //Smart Device data entry
    this.deviceName2 = function(text) {
        device_Name2.sendKeys(text);
    };
    this.deviceName_value2 = function() {
        return device_Name2.getAttribute('value');
    };
    var device_Name3 = element(by.id('device_set_4503599627370497_name'));
    //Smart Device data entry
    this.deviceName3 = function(text) {
        device_Name3.sendKeys(text);
    };
    this.deviceName_value3 = function() {
        return device_Name3.getAttribute('value');
    };
    var device_Name4 = element(by.id('device_set_4503599627370498_name'));
    //Smart Device data entry
    this.deviceName4 = function(text) {
        device_Name4.sendKeys(text);
    };
    this.deviceName_value4 = function() {
        return device_Name4.getAttribute('value');
    };
    var device_Name5 = element(by.id('device_set_4503599627370499_name'));
    //Smart Device data entry
    this.deviceName5 = function(text) {
        device_Name5.sendKeys(text);
    };
    this.deviceName_value5 = function() {
        return device_Name5.getAttribute('value');
    };
    var device_Name6 = element(by.id('device_set_4503599627370500_name'));
    //Smart Device data entry
    this.deviceName6 = function(text) {
        device_Name6.sendKeys(text);
    };
    var device_Name7 = element(by.id('device_set_4503599627370501_name'));
    //Smart Device data entry
    this.deviceName7 = function(text) {
        device_Name7.sendKeys(text);
    };
    var device_Name8 = element(by.id('device_set_4503599627370502_name'));
    //Smart Device data entry
    this.deviceName8 = function(text) {
        device_Name8.sendKeys(text);
    };
    var device_Name9 = element(by.id('device_set_4503599627370503_name'));
    //Smart Device data entry
    this.deviceName9 = function(text) {
        device_Name9.sendKeys(text);
    };
    var device_Name10 = element(by.id('device_set_4503599627370504_name'));
    //Smart Device data entry
    this.deviceName10 = function(text) {
        device_Name10.sendKeys(text);
    };
    var device_Name11 = element(by.id('device_set_4503599627370505_name'));
    //Smart Device data entry
    this.deviceName11 = function(text) {
        device_Name11.sendKeys(text);
    };
    var device_Name12 = element(by.id('device_set_4503599627370506_name'));
    //Smart Device data entry
    this.deviceName12 = function(text) {
        device_Name12.sendKeys(text);
    };
    var device_Name13 = element(by.id('device_set_4503599627370507_name'));
    //Smart Device data entry
    this.deviceName13 = function(text) {
        device_Name13.sendKeys(text);
    };
    var device_Name14 = element(by.id('device_set_4503599627370508_name'));
    //Smart Device data entry
    this.deviceName14 = function(text) {
        device_Name14.sendKeys(text);
    };
    var device_Name15 = element(by.id('device_set_4503599627370509_name'));
    //Smart Device data entry
    this.deviceName15 = function(text) {
        device_Name15.sendKeys(text);
    };

    var device_ipAddress1 = element(by.id('device_set_4503599627370495_ip_address'));
    //Smart Device IP Address data entry
    this.smartDeviceIP1 = function(text) {
        device_ipAddress1.sendKeys(text);
    };
    this.device_ipAddress_value1 = function() {
        return device_ipAddress1.getAttribute('value');
    };
    var device_ipAddress2 = element(by.id('device_set_4503599627370496_ip_address'));
    //Smart Device IP Address data entry
    this.smartDeviceIP2 = function(text) {
        device_ipAddress2.sendKeys(text);
    };
    this.device_ipAddress_value2 = function() {
        return device_ipAddress2.getAttribute('value');
    };
    var device_ipAddress3 = element(by.id('device_set_4503599627370497_ip_address'));
    //Smart Device IP Address data entry
    this.smartDeviceIP3 = function(text) {
        device_ipAddress3.sendKeys(text);
    };
    this.device_ipAddress_value3 = function() {
        return device_ipAddress3.getAttribute('value');
    };
    var device_ipAddress4 = element(by.id('device_set_4503599627370498_ip_address'));
    //Smart Device IP Address data entry
    this.smartDeviceIP4 = function(text) {
        device_ipAddress4.sendKeys(text);
    };
    this.device_ipAddress_value4 = function() {
        return device_ipAddress4.getAttribute('value');
    };
    var device_ipAddress5 = element(by.id('device_set_4503599627370499_ip_address'));
    //Smart Device IP Address data entry
    this.smartDeviceIP5 = function(text) {
        device_ipAddress5.sendKeys(text);
    };
    this.device_ipAddress_value5 = function() {
        return device_ipAddress5.getAttribute('value');
    };
    var device_ipAddress6 = element(by.id('device_set_4503599627370500_ip_address'));
    this.smartDeviceIP6 = function(text) {
        device_ipAddress6.sendKeys(text);
    };
    var device_ipAddress7 = element(by.id('device_set_4503599627370501_ip_address'));
    this.smartDeviceIP7 = function(text) {
        device_ipAddress7.sendKeys(text);
    };
    var device_ipAddress8 = element(by.id('device_set_4503599627370502_ip_address'));
    this.smartDeviceIP8 = function(text) {
        device_ipAddress8.sendKeys(text);
    };
    var device_ipAddress9 = element(by.id('device_set_4503599627370503_ip_address'));
    this.smartDeviceIP9 = function(text) {
        device_ipAddress9.sendKeys(text);
    };
    var device_ipAddress10 = element(by.id('device_set_4503599627370504_ip_address'));
    this.smartDeviceIP10 = function(text) {
        device_ipAddress10.sendKeys(text);
    };
    var device_ipAddress11 = element(by.id('device_set_4503599627370505_ip_address'));
    this.smartDeviceIP11 = function(text) {
        device_ipAddress11.sendKeys(text);
    };
    var device_ipAddress12 = element(by.id('device_set_4503599627370506_ip_address'));
    this.smartDeviceIP12 = function(text) {
        device_ipAddress12.sendKeys(text);
    };
    var device_ipAddress13 = element(by.id('device_set_4503599627370507_ip_address'));
    this.smartDeviceIP13 = function(text) {
        device_ipAddress13.sendKeys(text);
    };
    var device_ipAddress14 = element(by.id('device_set_4503599627370508_ip_address'));
    this.smartDeviceIP14 = function(text) {
        device_ipAddress14.sendKeys(text);
    };
    var device_ipAddress15 = element(by.id('device_set_4503599627370509_ip_address'));
    this.smartDeviceIP15 = function(text) {
        device_ipAddress15.sendKeys(text);
    };

    var domainName1 = element(by.id('device_set_4503599627370495_domain_name'));
    this.domainName1_text = function(text) {
        domainName1.sendKeys(text);
    };

    var domainName2 = element(by.id('device_set_4503599627370496_domain_name'));
    this.domainName2_text = function(text) {
        domainName2.sendKeys(text);
    };

    var domainName3 = element(by.id('device_set_4503599627370497_domain_name'));
    this.domainName3_text = function(text) {
        domainName3.sendKeys(text);
    };

    var domainName4 = element(by.id('device_set_4503599627370498_domain_name'));
    this.domainName4_text = function(text) {
        domainName4.sendKeys(text);
    };

    var domainName5 = element(by.id('device_set_4503599627370499_domain_name'));
    this.domainName5_text = function(text) {
        domainName5.sendKeys(text);
    };

    var domainName6 = element(by.id('device_set_4503599627370500_domain_name'));
    this.domainName6_text = function(text) {
        domainName6.sendKeys(text);
    };

    var domainName7 = element(by.id('device_set_4503599627370501_domain_name'));
    this.domainName7_text = function(text) {
        domainName7.sendKeys(text);
    };

    var domainName8 = element(by.id('device_set_4503599627370502_domain_name'));
    this.domainName8_text = function(text) {
        domainName8.sendKeys(text);
    };

    var domainName9 = element(by.id('device_set_4503599627370503_domain_name'));
    this.domainName9_text = function(text) {
        domainName9.sendKeys(text);
    };

    var domainName10 = element(by.id('device_set_4503599627370504_domain_name'));
    this.domainName10_text = function(text) {
        domainName10.sendKeys(text);
    };

    var domainName11 = element(by.id('device_set_4503599627370505_domain_name'));
    this.domainName11_text = function(text) {
        domainName11.sendKeys(text);
    };

    var domainName12 = element(by.id('device_set_4503599627370506_domain_name'));
    this.domainName12_text = function(text) {
        domainName12.sendKeys(text);
    };

    var domainName13 = element(by.id('device_set_4503599627370507_domain_name'));
    this.domainName13_text = function(text) {
        domainName13.sendKeys(text);
    };

    var domainName14 = element(by.id('device_set_4503599627370508_domain_name'));
    this.domainName14_text = function(text) {
        domainName14.sendKeys(text);
    };

    var domainName15 = element(by.id('device_set_4503599627370509_domain_name'));
    this.domainName15_text = function(text) {
        domainName15.sendKeys(text);
    };
    //********************************************************************************************************
    var add_Device_Button = element(by.css('button[ng-click="$ctrl.addDevice($ctrl.devices)"]'))
    this.addDevice_Button = function() {
        add_Device_Button.click();
    };
    //Add Device button State
    this.add_Device_Button_State = function() {
        return add_Device_Button.getAttribute('disabled');
    };
    //********************************************************************************************************
    var device_Delete = element(by.id('delete_device_0'));
    this.device_Delete_Button = function() {
        device_Delete.click();
    };
    //Add Device button State
    this.device_Delete_Button_State = function() {
        return device_Delete.getAttribute('disabled');
    };

    var device_Delete1 = element(by.id('delete_device_1'));
    this.device_Delete_Button1 = function() {
        device_Delete1.click();
    };
    //Add Device button_1 State
    this.device_Delete_Button_State1 = function() {
        return device_Delete1.getAttribute('disabled');
    };

    var device_Delete2 = element(by.id('delete_device_2'));
    this.device_Delete_Button2 = function() {
        device_Delete2.click();
    };
    var device_Delete3 = element(by.id('delete_device_3'));
    this.device_Delete_Button3 = function() {
        device_Delete3.click();
    };
    var device_Delete4 = element(by.id('delete_device_4'));
    this.device_Delete_Button4 = function() {
        device_Delete4.click();
    };
    var device_Delete5 = element(by.id('delete_device_5'));
    this.device_Delete_Button5 = function() {
        device_Delete5.click();
    };
    //********************************************************************************************************

    //********************************************************************************************************
    //Network
    //********************************************************************************************************
    //Internal List Of Subnets Network IP RANGE
    var networkIPAddress_Range = element(by.id('sitesubnet_0_ip_range'));
    this.network_IPAddress_Range = function(text) {
        networkIPAddress_Range.sendKeys(text);
    };
    this.network_IPAddress_Range_clear = function() {
        networkIPAddress_Range.clear();
    };
    this.networkIPAddress_Range_value = function() {
        return networkIPAddress_Range.getAttribute('value');
    };

    var networkIPAddress_Range_InputField = element(by.css('input-field-component[name="sitesubnet_0_ip_range"]'));
    this.nnIP_fieldLabelAttr = function () {
        return networkIPAddress_Range_InputField.getAttribute('fieldlabel');
    };

    var networkIPAddress_Range_InputName = element(by.css('input[name="sitesubnet_0_ip_range"]'));
    this.nnIP_placeholderAttr = function() {
        return networkIPAddress_Range_InputName.getAttribute('placeholder');
    };
    this.nnIP_maxlengthAttr = function() {
        return networkIPAddress_Range_InputName.getAttribute('maxlength');
    };
    this.nnIP_minlengthAttr = function() {
        return networkIPAddress_Range_InputName.getAttribute('ng-minlength');
    };

    //********************************************************************************************************
    //Multiple Network IP Addresses
    var  networkIPAddress_Range1 = element(by.id('sitesubnet_4503599627370495_ip_range'));
    this.network_IPAddress_Range1 = function(text) {
        networkIPAddress_Range1.sendKeys(text);
    };
    this.networkIPAddress_Range_value1 = function() {
        return networkIPAddress_Range1.getAttribute('value');
    };
    var networkIPAddress_Range2 = element(by.id('sitesubnet_4503599627370496_ip_range'));
    this.network_IPAddress_Range2 = function(text) {
        networkIPAddress_Range2.sendKeys(text);
    };
    this.networkIPAddress_Range_value2 = function() {
        return networkIPAddress_Range2.getAttribute('value');
    };
    var networkIPAddress_Range3 = element(by.id('sitesubnet_4503599627370497_ip_range'));
    this.network_IPAddress_Range3 = function(text) {
        networkIPAddress_Range3.sendKeys(text);
    };
    this.networkIPAddress_Range_value3 = function() {
        return networkIPAddress_Range3.getAttribute('value');
    };
    var networkIPAddress_Range4 = element(by.id('sitesubnet_4503599627370498_ip_range'));
    this.network_IPAddress_Range4 = function(text) {
        networkIPAddress_Range4.sendKeys(text);
    };
    this.networkIPAddress_Range_value4 = function() {
        return networkIPAddress_Range4.getAttribute('value');
    };
    var  networkIPAddress_Range5 = element(by.id('sitesubnet_4503599627370499_ip_range'));
    this.network_IPAddress_Range5 = function(text) {
        networkIPAddress_Range5.sendKeys(text);
    };
    this.networkIPAddress_Range_value5 = function() {
        return networkIPAddress_Range5.getAttribute('value');
    };
    var  networkIPAddress_Range6 = element(by.id('sitesubnet_4503599627370500_ip_range'));
    this.network_IPAddress_Range6 = function(text) {
        networkIPAddress_Range6.sendKeys(text);
    };
    var  networkIPAddress_Range7 = element(by.id('sitesubnet_4503599627370501_ip_range'));
    this.network_IPAddress_Range7 = function(text) {
        networkIPAddress_Range7.sendKeys(text);
    };
    var  networkIPAddress_Range8 = element(by.id('sitesubnet_4503599627370502_ip_range'));
    this.network_IPAddress_Range8 = function(text) {
        networkIPAddress_Range8.sendKeys(text);
    };
    var  networkIPAddress_Range9 = element(by.id('sitesubnet_4503599627370503_ip_range'));
    this.network_IPAddress_Range9 = function(text) {
        networkIPAddress_Range9.sendKeys(text);
    };
    var  networkIPAddress_Range10 = element(by.id('sitesubnet_4503599627370504_ip_range'));
    this.network_IPAddress_Range10 = function(text) {
        networkIPAddress_Range10.sendKeys(text);
    };
    var  networkIPAddress_Range11 = element(by.id('sitesubnet_4503599627370505_ip_range'));
    this.network_IPAddress_Range11 = function(text) {
        networkIPAddress_Range11.sendKeys(text);
    };
    var  networkIPAddress_Range12 = element(by.id('sitesubnet_4503599627370506_ip_range'));
    this.network_IPAddress_Range12 = function(text) {
        networkIPAddress_Range12.sendKeys(text);
    };
    var  networkIPAddress_Range13 = element(by.id('sitesubnet_4503599627370507_ip_range'));
    this.network_IPAddress_Range13 = function(text) {
        networkIPAddress_Range13.sendKeys(text);
    };
    var  networkIPAddress_Range14 = element(by.id('sitesubnet_4503599627370508_ip_range'));
    this.network_IPAddress_Range14 = function(text) {
        networkIPAddress_Range14.sendKeys(text);
    };
    var  networkIPAddress_Range15 = element(by.id('sitesubnet_4503599627370509_ip_range'));
    this.network_IPAddress_Range15 = function(text) {
        networkIPAddress_Range15.sendKeys(text);
    };
    var  networkIPAddress_Range16 = element(by.id('sitesubnet_4503599627370510_ip_range'));
    this.network_IPAddress_Range16 = function(text) {
        networkIPAddress_Range16.sendKeys(text);
    };
    var  networkIPAddress_Range17 = element(by.id('sitesubnet_4503599627370511_ip_range'));
    this.network_IPAddress_Range17 = function(text) {
        networkIPAddress_Range17.sendKeys(text);
    };
    var  networkIPAddress_Range18 = element(by.id('sitesubnet_4503599627370512_ip_range'));
    this.network_IPAddress_Range18 = function(text) {
        networkIPAddress_Range18.sendKeys(text);
    };
    //********************************************************************************************************
    var add_Subnet_Button = element(by.css('button[ng-click="$ctrl.addItem($ctrl.sitesubnets)"]'));
    //Add SUBNET button State
    this.addsubnet_Button = function() {
        add_Subnet_Button.click();
    };
    this.add_Subnet_Button_State = function() {
        return add_Subnet_Button.getAttribute('disabled');
    };
    //********************************************************************************************************
    var subnet_Delete = element(by.id('delete_sitesubnet_0'));
    this.subnet_Delete_Button = function() {
        subnet_Delete.click();
    };
    //Add subnet Delete button State
    this.subnet_Delete_Button_State = function() {
        return subnet_Delete.getAttribute('disabled');
    };

    var subnet_Delete1 = element(by.id('delete_sitesubnet_1'));
    this.subnet_Delete_Button1 = function() {
        subnet_Delete1.click();
    };
    //Add Device button_1 State
    this.subnet_Delete_Button_State1 = function() {
        return subnet_Delete1.getAttribute('disabled');
    };

    var subnet_Delete2 = element(by.id('delete_sitesubnet_2'));
    this.subnet_Delete_Button2 = function() {
        subnet_Delete2.click();
    };
    var subnet_Delete3 = element(by.id('delete_sitesubnet_3'));
    this.subnet_Delete_Button3 = function() {
        subnet_Delete3.click();
    };
    var subnet_Delete4 = element(by.id('delete_sitesubnet_4'));
    this.subnet_Delete_Button4 = function() {
        subnet_Delete4.click();
    };
    var subnet_Delete5 = element(by.id('delete_sitesubnet_5'));
    this.subnet_Delete_Button5 = function() {
        subnet_Delete5.click();
    };
    //********************************************************************************************************

    //********************************************************************************************************
    //Primary Internet Service Provider
    primaryISP = element.all(by.id('siteprovider_set_0_name'));
    //Primary Internet Service Provider data entry
    this.primary_ISP = function(text) {
        primaryISP.sendKeys(text);
    };
    this.primary_ISP_clear = function() {
        primaryISP.clear();
    };

    var primaryISP_InputField = element(by.css('input-field-component[name="siteprovider_set_0_name"]'));
    this.pisp_placeholderAttr = function() {
        return primaryISP_InputField.getAttribute('placeholder');
    };
    this.pisp_maxlengthAttr = function() {
        return primaryISP_InputField.getAttribute('maxlength');
    };
    this.pisp_minlengthAttr = function() {
        return primaryISP_InputField.getAttribute('minlength');
    };
    this.pisp_fieldLabelAttr = function () {
        return primaryISP_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //Primary Internet Service Provider IP Address
    primaryISP_IPAddress = element.all(by.id('siteprovider_set_0_ip_address'));
    this.primary_ISP_IPAddress = function(text) {
        primaryISP_IPAddress.sendKeys(text);
    };
    this.primary_ISP_IPAddress_clear = function() {
        primaryISP_IPAddress.clear();
    };

    var primaryISP_IPAddress_InputField = element(by.css('input-field-component[name="siteprovider_set_0_ip_address"]'));
    this.pspIP_placeholderAttr = function() {
        return primaryISP_IPAddress_InputField.getAttribute('placeholder');
    };
    this.pspIP_fieldLabelAttr = function () {
        return primaryISP_IPAddress_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //Primary Internet Service Provider UP Bandwidth
    var PISPBandwidth_UP = element.all(by.id('siteprovider_set_0_bandwidth_up'));
    this.PISP_Bandwidth_UP = function(text) {
        PISPBandwidth_UP.sendKeys(text);
    };
    this.PISP_Bandwidth_UP_clear = function() {
        PISPBandwidth_UP.clear();
    };

    var PISPBandwidth_UP_InputField = element(by.css('input-field-component[name="siteprovider_set_0_bandwidth_up"]'));
    this.pspUP_placeholderAttr = function() {
        return PISPBandwidth_UP_InputField.getAttribute('placeholder');
    };
    this.pspUP_fieldLabelAttr = function () {
        return PISPBandwidth_UP_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //Primary Internet Service Provider DOWN Bandwidth
    var PISPBandwidth_Down = element.all(by.id('siteprovider_set_0_bandwidth_down'));
    this.PISP_Bandwidth_Down = function(text) {
        PISPBandwidth_Down.sendKeys(text);
    };
    this.PISP_Bandwidth_Down_clear = function() {
        PISPBandwidth_Down.clear();
    };

    var PISPBandwidth_Down_InputField = element(by.css('input-field-component[name="siteprovider_set_0_bandwidth_down"]'));
    this.pspDN_placeholderAttr = function() {
        return PISPBandwidth_Down_InputField.getAttribute('placeholder');
    };
    this.pspDN_fieldLabelAttr = function () {
        return PISPBandwidth_Down_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var PISPBandwidth_Gateway = element.all(by.id('siteprovider_set_0_gateway_ip_address'));
    this.PISP_Bandwidth_Gateway = function(text) {
        PISPBandwidth_Gateway.sendKeys(text);
    };
    this.PISP_Bandwidth_Gateway_clear = function() {
        PISPBandwidth_Gateway.clear();
    };

    var PISPBandwidth_Gateway_InputField = element(by.css('input-field-component[name="siteprovider_set_0_gateway_ip_address"]'));
    this.pspGW_placeholderAttr = function() {
        return PISPBandwidth_Gateway_InputField.getAttribute('placeholder');
    };
    this.pspGW_fieldLabelAttr = function () {
        return PISPBandwidth_Gateway_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
   var PISPBandwidth_Netmask = element.all(by.id('siteprovider_set_0_net_mask'));
    this.PISP_Bandwidth_Netmask = function(text) {
        PISPBandwidth_Netmask.sendKeys(text);
    };
    this.PISP_Bandwidth_Netmask_clear = function() {
        PISPBandwidth_Netmask.clear();
    };

    var PISPBandwidth_Netmask_InputField = element(by.css('input-field-component[name="siteprovider_set_0_net_mask"]'));
    this.pspNM_placeholderAttr = function() {
        return PISPBandwidth_Netmask_InputField.getAttribute('placeholder');
    };
    this.pspNM_fieldLabelAttr = function () {
        return PISPBandwidth_Netmask_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //Secondary Internet Service Provider
    var secondaryISP = element(by.id('siteprovider_set_1_name'));
    //Primary Internet Service Provider data entry
    this.secondary_ISP = function(text) {
        secondaryISP.sendKeys(text);
    };
    this.secondary_ISP_clear = function() {
        secondaryISP.clear();
    };

    var secondaryISP_InputField = element(by.css('input-field-component[name="siteprovider_set_1_name"]'));
    this.sisp_placeholderAttr = function() {
        return secondaryISP_InputField.getAttribute('placeholder');
    };
    this.sisp_maxlengthAttr = function() {
        return secondaryISP_InputField.getAttribute('maxlength');
    };
    this.sisp_minlengthAttr = function() {
        return secondaryISP_InputField.getAttribute('minlength');
    };
    this.sisp_fieldLabelAttr = function () {
        return secondaryISP_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //SECONDARY IP ADDRESS
    var sec_IPAddress = element(by.id('siteprovider_set_1_ip_address'));
    this.sec_IP_Address = function(text) {
        sec_IPAddress.sendKeys(text);
    };
    this.sec_IP_Address_clear = function() {
        sec_IPAddress.clear();
    };

    var secondaryISP_IPAddress_InputField = element(by.css('input-field-component[name="siteprovider_set_1_ip_address"]'));
    this.sspIP_placeholderAttr = function() {
        return secondaryISP_IPAddress_InputField.getAttribute('placeholder');
    };
    this.sspIP_fieldLabelAttr = function () {
        return secondaryISP_IPAddress_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var sec_ISPBandwidth_UP = element.all(by.id('siteprovider_set_1_bandwidth_up'));
    this.sec_ISP_Bandwidth_UP = function(text) {
        sec_ISPBandwidth_UP.sendKeys(text);
    };
    this.sec_ISP_Bandwidth_UP_clear = function() {
        sec_ISPBandwidth_UP.clear();
    };

    var SISPBandwidth_UP_InputField = element(by.css('input-field-component[name="siteprovider_set_1_bandwidth_up"]'));
    this.sspUP_placeholderAttr = function() {
        return SISPBandwidth_UP_InputField.getAttribute('placeholder');
    };
    this.sspUP_fieldLabelAttr = function () {
        return SISPBandwidth_UP_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var sec_ISPBandwidth_Down = element.all(by.id('siteprovider_set_1_bandwidth_down'));
    this.sec_ISP_Bandwidth_Down = function(text) {
        sec_ISPBandwidth_Down.sendKeys(text);
    };
    this.sec_ISP_Bandwidth_Down_clear = function() {
        sec_ISPBandwidth_Down.clear();
    };

    var SISPBandwidth_Down_InputField = element(by.css('input-field-component[name="siteprovider_set_1_bandwidth_down"]'));
    this.sspDN_placeholderAttr = function() {
        return SISPBandwidth_Down_InputField.getAttribute('placeholder');
    };
    this.sspDN_fieldLabelAttr = function () {
        return SISPBandwidth_Down_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var sec_ISPBandwidth_Gateway = element.all(by.id('siteprovider_set_1_gateway_ip_address'));
    this.sec_ISP_Bandwidth_Gateway = function(text) {
        sec_ISPBandwidth_Gateway.sendKeys(text);
    };
    this.sec_ISP_Bandwidth_Gateway_clear = function() {
        sec_ISPBandwidth_Gateway.clear();
    };

    var SISPBandwidth_Gateway_InputField = element(by.css('input-field-component[name="siteprovider_set_1_gateway_ip_address"]'));
    this.sspGW_placeholderAttr = function() {
        return SISPBandwidth_Gateway_InputField.getAttribute('placeholder');
    };
    this.sspGW_fieldLabelAttr = function () {
        return SISPBandwidth_Gateway_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var sec_ISPBandwidth_Netmask = element.all(by.id('siteprovider_set_1_net_mask'));
    this.sec_ISP_Bandwidth_Netmask = function(text) {
        sec_ISPBandwidth_Netmask.sendKeys(text);
    };
    this.sec_ISP_Bandwidth_Netmask_clear = function() {
        sec_ISPBandwidth_Netmask.clear();
    };

    var SISPBandwidth_Netmask_InputField = element(by.css('input-field-component[model="$ctrl.siteproviders[1].net_mask"]'));
    this.sspNM_placeholderAttr = function() {
        return SISPBandwidth_Netmask_InputField.getAttribute('placeholder');
    };
    this.sspNM_fieldLabelAttr = function () {
        return SISPBandwidth_Netmask_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    // Reserved Subnet
    var reservedSubnet = element(by.id('reserved_subnet'));
    this.reservedSubnet_text = function(text) {
        reservedSubnet.sendKeys(text);
    };
    this.reservedSubnet_click = function() {
        reservedSubnet.click();
    };
    this.reservedSubnet_clear = function() {
        reservedSubnet.clear();
    };

    var reservedSubnet_InputField = element(by.css('input-field-component[name="reserved_subnet"]'));
    this.resSub_placeholderAttr = function() {
        return reservedSubnet_InputField.getAttribute('placeholder');
    };
    this.resSub_fieldLabelAttr = function () {
        return reservedSubnet_InputField.getAttribute('fieldlabel');
    };

    //********************************************************************************************************
    // Connection
    //********************************************************************************************************
    //Connection Method OPAQ VPN Device
    var opaq_VPNDevice_InputField = element(by.css('input[name="input_opaq_vpn_device"]'));
    this.opVPN_Checked = function() {
        return opaq_VPNDevice_InputField.getAttribute('checked');
    };
    this.opVPN_Value = function() {
        return opaq_VPNDevice_InputField.getAttribute('value');
    };
    this.opVPN_Name = function() {
        return opaq_VPNDevice_InputField.getAttribute('name');
    };
    //********************************************************************************************************
    //Connection Type
    //OPAQ VPN DEVICE
    var opaq_VPNDevice_Text = element(by.css('.col-md-5.square.selected p'));
    this.opaq_VPN_Device_Text = function() {
        return opaq_VPNDevice_Text.getText();
    };

    var internal_IP_Address_Opaq = element.all(by.id('connection_obj_internal_ip_address_opaq'));
    this.internalIP_Address_Opaq = function(text) {
        internal_IP_Address_Opaq.sendKeys(text);
    };
    this.internalIP_Address_Opaq_clear = function() {
        internal_IP_Address_Opaq.clear();
    };

    var internal_IP_Address_Opaq_InputField = element(by.css('input-field-component[name="connection_obj_internal_ip_address_opaq"]'));
    this.cinIP_placeholderAttr = function() {
        return internal_IP_Address_Opaq_InputField.getAttribute('placeholder');
    };
    this.cinIP_fieldLabelAttr = function () {
        return internal_IP_Address_Opaq_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var netmask_OpaqVPNDevice = element(by.id('connection_obj_netmask_opaq'));
    this.netmask_OpaqVPNDevice_Enter = function(text) {
        netmask_OpaqVPNDevice.sendKeys(text);
    };
    this.netmask_OpaqVPNDevice_clear = function() {
        netmask_OpaqVPNDevice.clear();
    };

    var netmask_OpaqVPNDevice_InputField = element(by.css('input-field-component[name="connection_obj_netmask_opaq"]'));
    this.nmOPVPNDev_placeholderAttr = function() {
        return netmask_OpaqVPNDevice_InputField.getAttribute('placeholder');
    };
    this.nmOPVPNDev_fieldLabelAttr = function() {
        return netmask_OpaqVPNDevice_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    var gateway_OpaqVPNDevice =element(by.id('connection_obj_gateway_opaq')) ;
    this.gateway_OpaqVPNDevice_Enter = function(text) {
        gateway_OpaqVPNDevice.sendKeys(text);
    };
    this.gateway_OpaqVPNDevice_clear = function() {
        gateway_OpaqVPNDevice.clear();
    };

    var gateway_OpaqVPNDevice_InputField = element(by.css('input-field-component[name="connection_obj_gateway_opaq"]'));
    this.gwOPVPNDev_placeholderAttr = function() {
        return gateway_OpaqVPNDevice_InputField.getAttribute('placeholder');
    };
    this.gwOPVPNDev_fieldLabelAttr = function() {
        return gateway_OpaqVPNDevice_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //OTHER VPN DEVICE
    var other_VPNDevice_Radio = element.all(by.css('input[value="Other VPN Device"]'));
    this.otherVPNDevice_Radio = function() {
        other_VPNDevice_Radio.click();
    };

    var other_VPNDevice_InputField = element.all(by.css('input[name="input_other_vpn_device"]'));
    this.otVPN_Checked = function() {
        return other_VPNDevice_InputField.getAttribute('checked');
    };
    this.otVPN_Value = function() {
        return other_VPNDevice_InputField.getAttribute('value');
    };
    this.otVPN_Name = function() {
        return other_VPNDevice_InputField.getAttribute('name');
    };

    var other_VPNDevice_Text = element(by.css('.col-md-5.square.selected p'));
    this.other_VPN_Device_Text = function() {
        return other_VPNDevice_Text.getText();
    };

    var IP_Address_OtherVPNDevice = element.all(by.id('connection_obj_internal_ip_address_other'));
    this.IP_Address_OtherVPNDevice_enter = function(text) {
        IP_Address_OtherVPNDevice.sendKeys(text);
    };
    this.IP_Address_OtherVPNDevice_clear = function() {
        IP_Address_OtherVPNDevice.clear();
    };
    this.IP_Address_OtherVPNDevice_click = function() {
        IP_Address_OtherVPNDevice.click();
    };

    var IP_Address_OtherVPNDevice_InputField = element(by.css('input-field-component[model="$ctrl.connectiongroup[$ctrl.site.connection_type_name].internal_ip_address_other"]'));
    this.cOtIP_placeholderAttr = function() {
        return IP_Address_OtherVPNDevice_InputField.getAttribute('placeholder');
    };
    this.cOtIP_fieldLabelAttr = function () {
        return IP_Address_OtherVPNDevice_InputField.getAttribute('fieldlabel');
    };

    var device_Details_Other = element.all(by.id('connection_obj_device_detail'));
    this.deviceDetails_Other = function(text) {
        device_Details_Other.sendKeys(text);
    };
    this.deviceDetails_Other_clear = function() {
        device_Details_Other.clear();
    };

    var deviceDetails_OtherVPNDevice_InputField = element(by.css('input-field-component[model="$ctrl.connectiongroup[$ctrl.site.connection_type_name].device_detail"]'));
    this.ddOtVPNDev_placeholderAttr = function() {
        return deviceDetails_OtherVPNDevice_InputField.getAttribute('placeholder');
    };
    this.ddOtVPNDev_fieldLabelAttr = function() {
        return deviceDetails_OtherVPNDevice_InputField.getAttribute('fieldlabel');
    };
    //********************************************************************************************************
    //Data Center Cross Connect
    var dataCenterCross_Connect_Radio = element.all(by.css('input[value="Data Center Cross-Connect"]'));
    this.dataCenter_Cross_Connect_Radio = function() {
        dataCenterCross_Connect_Radio.click();
    };

    var dataCenterCross_Connect_InputField = element.all(by.css('input[name="input_direct_connect"]'));
    this.dcCcVPN_Checked = function() {
        return dataCenterCross_Connect_InputField.getAttribute('checked');
    };
    this.dcCcVPN_Value = function() {
        return dataCenterCross_Connect_InputField.getAttribute('value');
    };
    this.dcCcVPN_Name = function() {
        return dataCenterCross_Connect_InputField.getAttribute('name');
    };

    var dataCenterCross_Connect_Text = element(by.css('.col-md-5.square.selected p'));
    this.dataCenter_Cross_Connect_Text = function() {
        return dataCenterCross_Connect_Text.getText();
    };

    var handOffType_DropDown = element.all(by.id('btn-append-to-body'));
    // handOffType = commonComponent.selectItemDropDown('btn-append-to-body');

    var dc_Requested_Bandwidth = element.all(by.id('connection_obj_requested_bandwidth'));
    this.dcRequested_Bandwidth = function(text) {
        dc_Requested_Bandwidth.sendKeys(text);
    };
    this.dcRequested_Bandwidth_click = function() {
        dc_Requested_Bandwidth.click();
    };
    this.dcRequested_Bandwidth_clear = function() {
        dc_Requested_Bandwidth.clear();
    };

    var dataCenterCross_Connect_BandwidthInputField = element(by.css('input-field-component[model="$ctrl.connectiongroup[$ctrl.site.connection_type_name].requested_bandwidth"]'));
    this.dcCcRB_placeholderAttr = function() {
        return dataCenterCross_Connect_BandwidthInputField.getAttribute('placeholder');
    };
    this.dcCcRB_fieldLabelAttr = function () {
        return dataCenterCross_Connect_BandwidthInputField.getAttribute('fieldlabel');
    };

    var dc_peerIPAddress = element.all(by.id('connection_obj_peer_ip_address'));
    this.dcpeerIPAddress_enter = function(name) {
        dc_peerIPAddress.sendKeys(name);
    };
    this.dcpeerIPAddress_clear = function() {
        dc_peerIPAddress.clear();
    };

    var dataCenterCross_Connect_IPInputField = element(by.css('input-field-component[name="connection_obj_peer_ip_address"]'));
    this.dcCcPIP_placeholderAttr = function() {
        return dataCenterCross_Connect_IPInputField.getAttribute('placeholder');
    };
    this.dcCcPIP_fieldLabelAttr = function () {
        return dataCenterCross_Connect_IPInputField.getAttribute('fieldlabel');
    };

    //********************************************************************************************************
    //buttons
    var submitButton = element(by.css('button[ng-click="saveData(site)"]'));
    // Submit Add Site Button
    this.submitAddSite = function() {
        submitButton.click();
    };

    //Submit Add Site State
    this.submitAddSite_State = function() {
        return submitButton.getAttribute('disabled');
    };

    var addSite_CancelButton = element.all(by.buttonText('Cancel'));
    //Add Site Cancel button
    this.clickCancel = function() {
        addSite_CancelButton.click();
    };

    var addSite_CancelMessageButton = element(by.css('button[ng-click="ok()"]'));
    //Cancel message box accept button
    this.addSiteCancelMessageButton = function() {
        addSite_CancelMessageButton.click();
    };

    //Edit Site'
    var detailView = element.all(by.id('detailOpen_0'));
    //Detail view button
    this.clickDetailViewButton = function() {
        detailView.click();
    };
    this.detailView_State = function() {
        return detailView.getAttribute('disabled');
    };

    var editButton = element(by.id('edit_0'));
    //Edit site button
    this.clickEditButton = function() {
        editButton.click();
    };
    this.editButton_State = function() {
        return editButton.getAttribute('disabled');
    };


    var editSite_CancelButton = element(by.css('button[ng-click="ok()"]'));
    //Eidt Site Cancel button
    this.siteEditCancelButton = function() {
        addSite_CancelButton.click();
    };

    var update_Site_Button = element(by.buttonText('Update Site'));
    //Update Site button
    this.updateSiteButton = function() {
        update_Site_Button.click();
    };
    this.update_SiteButton_State = function() {
        return update_Site_Button.getAttribute('disabled');
    };

    var site_RemoveButton = element(by.id('delete_0'));
    //Remove Site button
    this.removeSiteButton = function() {
        site_RemoveButton.click();
    };
    this.site_RemoveButton_State = function() {
        return site_RemoveButton.getAttribute('disabled');
    };

    var getSiteName = element(by.binding(' site.name '));
    //Get the Sitename trying to delete to validate with the message.
    this.SiteToDelete = function() {
        return getSiteName.getText();
    };

    var deleteFinal = element(by.css('button[ng-click="$close()"]'));
    //click on delete button on message pop up
    this.Final_Delete = function() {
        deleteFinal.click();
    };

    var deleteFinal_No = element(by.css('button[ng-click="$dismiss()"]'));
    //click on delete button on message pop up
    this.finalDelete_No = function() {
        deleteFinal_No.click();
    };

//********************************************************************************************************
    // Site List View
    var configure_Sites_Text = element.all(by.css('div.col-xs-4'));
    this.configureSites_Text = function() {
        return configure_Sites_Text.getText();
    };

    //Detail view button
    var detailView_State = element(by.id('detailOpen_0'));
    //Detail view button state
    this.detailView_State_Click = function () {
        detailView_State.click();
    };
    this.detail_View_State = function() {
        return detailView_State.getAttribute('disabled');
    };

    //Edit Button
    var editButton_State = element(by.id('edit_0'));
    //Edit site button state
    this.edit_Button_State = function() {
        return editButton_State.getAttribute('disabled');
    };

    var site_RemoveButton_State = element(by.id('delete_0'));
    //Remove Site button state
    this.siteRemoveButton_State = function() {
        return site_RemoveButton_State.getAttribute('disabled');
    };

    //close detail view
    var close_DetailView = element(by.id('detailClose_0'));
    this.close_Detail_View = function () {
        close_DetailView.click();
    };

    //close detail view State
    var close_DetailView_State = element(by.id('detailClose_0'));
    this.closeDetailView_State = function () {
        return close_DetailView_State.getAttribute('disabled');
    };

    //Delete site message box.
    var delete_msgBox_text = element(by.css('h3.warning'));
    this.deletemsgBox_text = function() {
        return delete_msgBox_text.getText();
    };

    var delete_msgBox_text1 = element.all(by.binding('$ctrl.name | uppercase'));
    this.deletemsgBox_text1 = function() {
        return delete_msgBox_text1.getText();
    };

    var detailView_SiteTag = element.all(by.css('div.btn.btn-tag'));
    this.detail_View_SiteTag = function() {
        return detailView_SiteTag.getText();
    };

    var detailView_LocationType = element(by.binding(' $ctrl.site.location_type '));
    this.detail_View_LocationType = function() {
        return detailView_LocationType.getText();
    };

    var detailView_Address = element(by.binding(' $ctrl.site.street_address '));
    this.detail_View_Address = function() {
        return detailView_Address.getText();
    };

    var detailView_Suite = element(by.binding(' $ctrl.site.suite_unit '));
    this.detail_View_Suite = function() {
        return detailView_Suite.getText();
    };

    var detailView_ContactName = element(by.binding(' $ctrl.site.contact.name '));
    this.detail_View_ContactName = function() {
        return detailView_ContactName.getText();
    };

    var detailView_ContactEmail = element(by.binding(' $ctrl.site.contact.email '));
    this.detail_View_ContactEmail = function() {
        return detailView_ContactEmail.getText();
    };

    var detailView_contactPhone = element(by.binding(' $ctrl.site.contact.phone_1 '));
    this.detail_View_contactPhone = function() {
        return detailView_contactPhone.getText();
    };

    var detailView_ContactCellPhone = element(by.binding(' $ctrl.site.contact.phone_2 '));
    this.detail_View_ContactCellPhone = function() {
        return detailView_ContactCellPhone.getText();
    };

    var detailView_DeviceName = element(by.binding(' device.name '));
    this.detail_View_DeviceName = function() {
        return detailView_DeviceName.getText();
    };

    var detailView_DeviceIP = element(by.binding(' device.ip_address '));
    this.detail_View_DeviceIP = function() {
        return detailView_DeviceIP.getText();
    };

    var detailView_NetworkIP = element(by.binding(' subnet.ip_range '));
    this.detail_View_NetworkIP = function() {
        return detailView_NetworkIP.getText();
    };

    var detailView_NetworkZone = element(by.binding(' subnet.zone.name '));
    this.detail_View_NetworkZone = function() {
        return detailView_NetworkZone.getText();
    };

    var detailView_PrimaryISP_IP = element(by.binding(' $ctrl.site.primary_isp.ip_address '));
    this.detail_View_PrimaryISP_IP = function() {
        return detailView_PrimaryISP_IP.getText();
    };

    var detailView_PrimaryISP_Gateway = element(by.binding(' $ctrl.site.primary_isp.gateway_ip_address '));
    this.detail_View_PrimaryISP_Gateway = function() {
        return detailView_PrimaryISP_Gateway.getText();
    };

    var detailView_SecondaryISP_IP = element(by.binding(' $ctrl.site.secondary_isp.ip_address '));
    this.detail_View_SecondaryISP_IP = function() {
        return detailView_SecondaryISP_IP.getText();
    };

    var detailView_SecondaryISP_Gateway = element(by.binding(' $ctrl.site.secondary_isp.gateway_ip_address '));
    this.detail_View_SecondaryISP_Gateway = function() {
        return detailView_SecondaryISP_Gateway.getText();
    };

    var detailView_Opaq_Internal_IP = element(by.binding(' $ctrl.site.connection_obj.internal_ip_address_opaq '));
    this.detail_View_Opaq_Internal_IP = function() {
        return detailView_Opaq_Internal_IP.getText();
    };

    var detailView_Opaq_External_IP = element(by.binding(' $ctrl.site.connection_obj.external_ip_address_opaq '));
    this.detail_View_Opaq_External_IP = function() {
        return detailView_Opaq_External_IP.getText();
    };

    var detailView_OtherVPN_Inernal_IP = element(by.binding(' $ctrl.site.connection_obj.internal_ip_address_other '));
    this.detail_View_OtherVPN_Inernal_IP = function() {
        return detailView_OtherVPN_Inernal_IP.getText();
    };

    var detailView_OtherVPN_External_IP = element(by.binding(' $ctrl.site.connection_obj.external_ip_address_other '));
    this.detail_View_OtherVPN_External_IP = function() {
        return detailView_OtherVPN_External_IP.getText();
    };

    var detailView_OtherVPN_Device = element(by.binding(' $ctrl.site.connection_obj.device_detail '));
    this.detail_View_OtherVPN_Device = function() {
        return detailView_OtherVPN_Device.getText();
    };

    var detailView_DirectConnect_Handoff = element(by.binding(' $ctrl.hand_off_type '));
    this.detail_View_DirectConnect_Handoff = function() {
        return detailView_DirectConnect_Handoff.getText();
    };

    var detailView_DirectConnect_RequestedBandwidth = element(by.binding(' $ctrl.site.connection_obj.requested_bandwidth '));
    this.detail_View_DirectConnect_RequestedBandwidth = function() {
        return detailView_DirectConnect_RequestedBandwidth.getText();
    };

    var detailView_DirectConnect_PeerIP = element(by.binding(' $ctrl.site.connection_obj.peer_ip_address '));
    this.detail_View_DirectConnect_PeerIP = function() {
        return detailView_DirectConnect_PeerIP.getText();
    };

    //*******************************************************
    var helpText = element(by.binding('helpContent'));
    this.help_GetText = function() {
        return helpText.getText();
    };

};

module.exports = site_Page;
