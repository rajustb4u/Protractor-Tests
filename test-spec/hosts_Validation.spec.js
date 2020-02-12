describe('Acumen HostsValidation Tests for Name, IP Address, Servers and Port Translations', function () {
    var Hosts_Page = require('../page-factory/hostsPage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Hosts page Name Validation "place holder, min length, max length, field label, required', function() {
        var HostsPage = new Hosts_Page();
        common_Component.appLogin();
        HostsPage.hostsLink();
        browser.sleep(1000);

        if(expect(HostsPage.hosts_Text()).toMatch(data.hostsPage_data.hosts_Text)) {
            console.log('Hosts text verification done: ' + data.hostsPage_data.hosts_Text);
            HostsPage.add_Hosts();
        }

        //validation with the Hosts NAME "place holder, max length, min length, field label"
        if(expect(HostsPage.hsts_placeholderAttr()).toMatch(data.hostsPage_data.hosts_name_PlaceHolder_Attribute)) {
            console.log('Hosts NAME Placeholder verification done: ' + data.hostsPage_data.hosts_name_PlaceHolder_Attribute);
        }
        if(expect(HostsPage.hsts_fieldLabelAttr()).toMatch(data.hostsPage_data.hosts_name_fieldLabel_Attribute)) {
            console.log('Hosts NAME Field label verification done: ' + data.hostsPage_data.hosts_name_fieldLabel_Attribute);
        }
        if(expect(HostsPage.hsts_maxlengthAttr()).toMatch(data.hostsPage_data.hosts_name_maxLength_Attribute)) {
            console.log('Hosts NAME Max Length verification done: ' + data.hostsPage_data.hosts_name_maxLength_Attribute);
        }
        if(expect(HostsPage.hsts_minlengthAttr()).toMatch(data.hostsPage_data.hosts_name_minLength_Attribute)) {
            console.log('Hosts NAME Min Length verification done: ' + data.hostsPage_data.hosts_name_minLength_Attribute);
        }

        //validation with the Hosts Internal IP ADDRESS "place holder, field label"
        if(expect(HostsPage.hstsIP_placeholderAttr()).toMatch(data.hostsPage_data.hosts_ip_PlaceHolder_Attribute)) {
            console.log('Hosts Internal IP Placeholder verification done: ' + data.hostsPage_data.hosts_ip_PlaceHolder_Attribute);
        }
        if(expect(HostsPage.hstsIP_fieldLabelAttr()).toMatch(data.hostsPage_data.hosts_ip_fieldLabel_Attribute)) {
            console.log('Hosts Internal IP Field label verification done: ' + data.hostsPage_data.hosts_ip_fieldLabel_Attribute);
        }

        //validation with the Hosts Domain NAME "place holder, max length, min length, field label"
        if(expect(HostsPage.hstsDN_placeholderAttr()).toMatch(data.hostsPage_data.domain_Name_PlaceHolder_Attribute)) {
            console.log('Hosts Domain NAME Placeholder verification done: ' + data.hostsPage_data.domain_Name_PlaceHolder_Attribute);
        }
        if(expect(HostsPage.hstsDN_fieldLabelAttr()).toMatch(data.hostsPage_data.domain_Name_fieldLabel_Attribute)) {
            console.log('Hosts Domain NAME Field label verification done: ' + data.hostsPage_data.domain_Name_fieldLabel_Attribute);
        }
        if(expect(HostsPage.hstsDN_maxlengthAttr()).toMatch(data.hostsPage_data.domain_Name_maxLength_Attribute)) {
            console.log('Hosts DomainNAME Max Length verification done: ' + data.hostsPage_data.domain_Name_maxLength_Attribute);
        }
        if(expect(HostsPage.hstsDN_minlengthAttr()).toMatch(data.hostsPage_data.domain_Name_minLength_Attribute)) {
            console.log('HostsDomain  NAME Min Length verification done: ' + data.hostsPage_data.domain_Name_minLength_Attribute);
        }

        //validation with the Hosts External Port "place holder, field label"
        if(expect(HostsPage.hstsExP_placeholderAttr()).toMatch(data.hostsPage_data.iFS_ExternalPort_PlaceHolder_Attribute)) {
            console.log('Hosts External Port Placeholder verification done: ' + data.hostsPage_data.iFS_ExternalPort_PlaceHolder_Attribute);
        }
        if(expect(HostsPage.hstsExP_fieldLabelAttr()).toMatch(data.hostsPage_data.iFS_ExternalPort_fieldLabel_Attribute)) {
            console.log('Hosts External Port Field label verification done: ' + data.hostsPage_data.iFS_ExternalPort_fieldLabel_Attribute);
        }

        //validation with the Hosts Internal Port "place holder, field label"
        if(expect(HostsPage.hstsInP_placeholderAttr()).toMatch(data.hostsPage_data.iFS_InternalPort_PlaceHolder_Attribute)) {
            console.log('Hosts Internal Port Placeholder verification done: ' + data.hostsPage_data.iFS_InternalPort_PlaceHolder_Attribute);
        }
        if(expect(HostsPage.hstsInP_fieldLabelAttr()).toMatch(data.hostsPage_data.iFS_InternalPort_fieldLabel_Attribute)) {
            console.log('Hosts Internal Port Field label verification done: ' + data.hostsPage_data.iFS_InternalPort_fieldLabel_Attribute);
        }

        if(expect(HostsPage.submitHosts_State()).toEqual('true')) {
            console.log('Submit Hosts button is in disabled state: ');
        }

        if(expect(HostsPage.cancelHosts_State()).toEqual(null)) {
            HostsPage.cancelHosts();
            browser.sleep(1000);
            HostsPage.cancel_HostsYes();
            browser.sleep(1000);
        }
        common_Component.appLogout();
    });
});
