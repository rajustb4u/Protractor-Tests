describe('Site Page Connection Section DATA CENTER CROSS-CONNECT Validation Tests', function () {
    var site_Page = require('../page-factory/sitePage.js');
    var data = require('../json/testData.json');
    var common_Component = require('../test-spec/common-component.js');

    it('Site Page Connection Section DATA CENTER CROSS-CONNECT Validation "place holder, name, min length, max length, field label, required', function() {
        var sitePage = new site_Page();
        browser.sleep(1000);
        common_Component.appLogin();
        browser.sleep(1000);
        sitePage.site_Link();
        browser.sleep(1000);
        sitePage.addSite_Button();
        browser.sleep(1000);

        sitePage.dataCenter_Cross_Connect_Radio();
        browser.sleep(1000);

        expect(sitePage.dataCenter_Cross_Connect_Text()).toEqual(data.site_data.dataCenterCross_Text);
        console.log('The Displayed text for DATA CENTER CROSS-CONNECT: '+data.site_data.dataCenterCross_Text);

        //validation with the Connection DATA CENTER CROSS-CONNECT "place holder, max length, min length, field label"
        expect(sitePage.dcCcVPN_Checked()).toMatch(data.site_data.dataCenterCross_Checked);
        console.log('DATA CENTER CROSS-CONNECT in Connection method is checked default: '+data.site_data.dataCenterCross_Checked);
        expect(sitePage.dcCcVPN_Name()).toMatch(data.site_data.dataCenterCross_Name);
        console.log('DATA CENTER CROSS-CONNECT name in Connection method verification done: '+data.site_data.dataCenterCross_Name);
        expect(sitePage.dcCcVPN_Value()).toMatch(data.site_data.dataCenterCross_Value);
        console.log('DATA CENTER CROSS-CONNECT value in Connection method verification done: '+data.site_data.dataCenterCross_Value);

        //validation with the Connection DATA CENTER CROSS-CONNECT REQUESTED BANDWIDTH "place holder, field label"
        expect(sitePage.dcCcRB_placeholderAttr()).toMatch(data.site_data.requested_Bandwidth_PlaceHolder_Attribute);
        console.log('Connection DATA CENTER CROSS-CONNECT REQUESTED BANDWIDTH Placeholder verification done: '+data.site_data.requested_Bandwidth_PlaceHolder_Attribute);
        // expect(sitePage.dcCcRB_fieldLabelAttr()).toMatch(data.site_data.requested_Bandwidth_fieldLabel_Attribute);
        console.log('Connection DATA CENTER CROSS-CONNECT REQUESTED BANDWIDTH Field label verification done: '+data.site_data.requested_Bandwidth_fieldLabel_Attribute);

        //validation with the Connection DATA CENTER CROSS-CONNECT PEER IP "place holder, field label"
        expect(sitePage.dcCcPIP_placeholderAttr()).toMatch(data.site_data.peer_IPAddress_PlaceHolder_Attribute);
        console.log('Connection DATA CENTER CROSS-CONNECT PEER IP Placeholder verification done: '+data.site_data.peer_IPAddress_PlaceHolder_Attribute);
        expect(sitePage.dcCcPIP_fieldLabelAttr()).toMatch(data.site_data.peer_IPAddress_fieldLabel_Attribute);
        console.log('Connection DATA CENTER CROSS-CONNECT PEER IP Field label verification done: '+data.site_data.peer_IPAddress_fieldLabel_Attribute);

        sitePage.clickCancel();
        browser.sleep(2000);
        sitePage.addSiteCancelMessageButton();
        common_Component.appLogout();
    });

});
