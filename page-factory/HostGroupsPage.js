var HostGroups_Page = function() {

    var zones_Link = element(by.css('a[href="#/configuration/hostgroups"]'));
    this.zonesLink = function() {
        zones_Link.click();
    };


    var addZone = element(by.css('a[href="#/configuration/hostgroups/add"]'));
    this.add_Zone = function() {
        addZone.click();
    };
    this.add_Zone_State = function() {
        return addZone.getAttribute('disabled');
    };


    var addNewZone = element(by.css('a[href="#/configuration/hostgroups/add"]'));
    this.addNew_Zone = function() {
        addNewZone.click();
    };
    this.add_NewZone_State = function() {
        return addNewZone.getAttribute('disabled');
    };

    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    var zoneName = element.all(by.css('input[name="name"]'));
    this.zone_Name = function(name) {
        zoneName.sendKeys(name);
    };
    this.zoneName_Click = function() {
        zoneName.click();
    };
    this.zoneName_Clear = function() {
        zoneName.clear();
    };

    var inputfield_Name = element(by.css('input[name="name"]'));

    this.znN_nameAttr = function(){
        return inputfield_Name.getAttribute('name');
    };
    this.znN_placeholderAttr = function() {
        return inputfield_Name.getAttribute('placeholder');
    };
    this.znN_minlengthAttr = function() {
        return inputfield_Name.getAttribute('ng-minlength');
    };
    this.znN_maxlengthAttr = function() {
        return inputfield_Name.getAttribute('maxlength');
    };
    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    //Accessible Subnets
    var zoneAccessibleFrom = element(by.id('host0_ip_range'));
    this.zoneAccessible_From = function(name) {
        zoneAccessibleFrom.sendKeys(name);
    };
    this.zoneAccessibleFrom_Click = function() {
        zoneAccessibleFrom.click();
    };
    this.zoneAccessibleFrom_Clear = function() {
        zoneAccessibleFrom.clear();
    };

    var inputElement = element.all(by.css('input[name="host0_ip_range"]'));
    this.zAcF_nameAttr = function(){
        return inputElement.getAttribute('name');
    };
    this.zAcF_placeholderAttr = function() {
        return inputElement.getAttribute('placeholder');
    };
    this.zAcF_minlengthAttr = function() {
        return inputElement.getAttribute('ng-minlength');
    };
    this.zAcF_maxlengthAttr = function() {
        return inputElement.getAttribute('maxlength');
    };

    var zoneAccessibleFrom1 = element(by.id('host4503599627370495_ip_range'));
    this.zoneAccessible_From1 = function(name) {
        zoneAccessibleFrom1.sendKeys(name);
    };
    var zoneAccessibleFrom2 = element(by.id('host4503599627370496_ip_range'));
    this.zoneAccessible_From2 = function(name) {
        zoneAccessibleFrom2.sendKeys(name);
    };
    var zoneAccessibleFrom3 = element(by.id('host4503599627370497_ip_range'));
    this.zoneAccessible_From3 = function(name) {
        zoneAccessibleFrom3.sendKeys(name);
    };
    var zoneAccessibleFrom4 = element(by.id('host4503599627370498_ip_range'));
    this.zoneAccessible_From4 = function(name) {
        zoneAccessibleFrom4.sendKeys(name);
    };
    var zoneAccessibleFrom5 = element(by.id('host4503599627370499_ip_range'));
    this.zoneAccessible_From5 = function(name) {
        zoneAccessibleFrom5.sendKeys(name);
    };
    var zoneAccessibleFrom6 = element(by.id('host45035996273704910_ip_range'));
    this.zoneAccessible_From6 = function(name) {
        zoneAccessibleFrom6.sendKeys(name);
    };

    var addSubnets = element(by.css('button[ng-click="addItem(zone.hosts)"]'));
    this.addSubnets_State = function() {
        return addSubnets.getAttribute('disabled');
    };
    this.addSubnets_Click = function() {
        addSubnets.click();
    };

    var DeleteSubnets = element(by.id('delete_host_0'));
    this.DeleteSubnets_State = function() {
        return DeleteSubnets.getAttribute('disabled');
    };
    this.DeleteSubnets_Click = function() {
        DeleteSubnets.click();
    };

    var DeleteSubnets1 = element(by.id('delete_host_1'));
    this.DeleteSubnets1_State = function() {
        return DeleteSubnets1.getAttribute('disabled');
    };
    this.DeleteSubnets1_Click = function() {
        DeleteSubnets1.click();
    };
    var DeleteSubnets2 = element(by.id('delete_host_2'));
    this.DeleteSubnets2_State = function() {
        return DeleteSubnets2.getAttribute('disabled');
    };
    this.DeleteSubnets2_Click = function() {
        DeleteSubnets2.click();
    };
    var DeleteSubnets3 = element(by.id('delete_host_3'));
    this.DeleteSubnets3_State = function() {
        return DeleteSubnets3.getAttribute('disabled');
    };
    this.DeleteSubnets3_Click = function() {
        DeleteSubnets3.click();
    };
    var DeleteSubnets4 = element(by.id('delete_host_4'));
    this.DeleteSubnets4_State = function() {
        return DeleteSubnets4.getAttribute('disabled');
    };
    this.DeleteSubnets4_Click = function() {
        DeleteSubnets4.click();
    };
    var DeleteSubnets5 = element(by.id('delete_host_5'));
    this.DeleteSubnets5_State = function() {
        return DeleteSubnets5.getAttribute('disabled');
    };
    this.DeleteSubnets5_Click = function() {
        DeleteSubnets5.click();
    };
    var DeleteSubnets6 = element(by.id('delete_host_6'));
    this.DeleteSubnets6_State = function() {
        return DeleteSubnets6.getAttribute('disabled');
    };
    this.DeleteSubnets6_Click = function() {
        DeleteSubnets6.click();
    };

    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    var submit_Zone = element(by.css('button[ng-click="saveData()"]'));
    this.submitZone = function() {
        submit_Zone.click();
    };
    this.submitZone_State = function() {
        return submit_Zone.getAttribute('disabled');
    };

    var cancel_Zone = element.all(by.css('button[ng-click="$dismiss()"]'));
    this.cancelZone = function() {
        cancel_Zone.click();
    };

    var cancelZone_Yes = element.all(by.css('button[ng-click="ok()"]'));
    this.cancel_Zone_Yes = function() {
        cancelZone_Yes.click();
    };

    var cancelZone_No = element.all(by.css('button[ng-click="cancel()"]'));
    this.cancel_Zone_No = function() {
        cancelZone_No.click();
    };

    var editZone = element(by.css('#zone_edit_0'));
    this.edit_Zone = function() {
        editZone.click();
    };
    this.edit_Zone_State = function() {
        return editZone.getAttribute('disabled');
    };

    var deleteZone = element(by.id('zone_delete_0'));
    this.delete_Zone = function() {
        deleteZone.click();
    };
    this.delete_Zone_State = function() {
        return deleteZone.getAttribute('disabled');
    };

    var delete_YesMessage = element.all(by.css('button[ng-click="$close()"]'));
    this.delete_Yes_Message = function() {
        delete_YesMessage.click();
    };

    var helpTextZn = element(by.binding('helpContent'));
    this.getHelpForZN = function() {
        return helpTextZn.getText();
    };

    var nextPoliciesButton = element(by.linkText('Next - Policies'));
    this.nextPolicies_Button = function() {
        nextPoliciesButton.click();
    };
    this.nextPoliciesButton_State = function() {
        return nextPoliciesButton.getAttribute('disabled');
    };

    var backtoZonesButton = element(by.linkText('Back'));
    this.back_toZones_Button = function() {
        backtoZonesButton.click();
    };
    this.backtoZonesButton_State = function() {
        return backtoZonesButton.getAttribute('disabled');
    };

    var backInZonesButton = element(by.linkText('Back'));
    this.backIn_Zones_Button = function() {
        backInZonesButton.click();
    };
    this.backInZonesButton_State = function() {
        return backInZonesButton.getAttribute('disabled');
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

    var hostsGroupPage_Text = element(by.css('div.col-xs-4'));
    this.hostsGroup_Page_Text = function(text) {
        return hostsGroupPage_Text.getText();
    };


};

module.exports = HostGroups_Page;