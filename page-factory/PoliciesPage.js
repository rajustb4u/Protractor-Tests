var policies_Page = function() {

    var policies_Link = element(by.css('a[href="#/configuration/policies/inbound"]'));
    this.policiesLink = function() {
        policies_Link.click();
    };

    //INBOUND Policy page
    var addPolicy = element(by.linkText('Add Policy'));
    this.add_Policy = function() {
        addPolicy.click();
    };
    this.add_Policy_State = function() {
        return addPolicy.getAttribute('disabled');
    };

    var inBoundPolicyText = element(by.css('.table.top-buffer p'));
    this.inBoundPolicy_Text = function() {
        return inBoundPolicyText.getText();
    };

    var addNewPolicy = element(by.linkText('ADD POLICY'));
    this.addNewPolicy_Click = function() {
        addNewPolicy.click();
    };
    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    //Accessible from IP Address
    var inboundAccessibleForm = element.all(by.css('input[name="ips_0_ip"]'));
    // var inboundAccessibleForm = element(by.id('ips_4503599627370495_ip'));
    this.inbound_AccessibleForm_Click = function() {
        inboundAccessibleForm.click();
    };
    this.inbound_AccessibleForm_Clear = function() {
        inboundAccessibleForm.clear();
    };
    this.inbound_AccessibleForm = function(name) {
        inboundAccessibleForm.sendKeys(name);
    };

    this.inAcIP_nameAttr = function(){
        return inboundAccessibleForm.getAttribute('name');
    };
    this.inAcIP_placeholderAttr = function() {
        return inboundAccessibleForm.getAttribute('placeholder');
    };
    this.inAcIP_minlengthAttr = function() {
        return inboundAccessibleForm.getAttribute('ng-minlength');
    };
    this.inAcIP_maxlengthAttr = function() {
        return inboundAccessibleForm.getAttribute('maxlength');
    };

    var inboundAccessibleForm1 = element.all(by.css('input[name="ips_4503599627370495_ip"]'));
    this.inbound_AccessibleForm1 = function(name) {
        inboundAccessibleForm1.sendKeys(name);
    };
    var inboundAccessibleForm2 = element.all(by.css('input[name="ips_4503599627370496_ip"]'));
    this.inbound_AccessibleForm2 = function(name) {
        inboundAccessibleForm2.sendKeys(name);
    };
    var inboundAccessibleForm3 = element.all(by.css('input[name="ips_4503599627370497_ip"]'));
    this.inbound_AccessibleForm3 = function(name) {
        inboundAccessibleForm3.sendKeys(name);
    };
    var inboundAccessibleForm4 = element.all(by.css('input[name="ips_4503599627370498_ip"]'));
    this.inbound_AccessibleForm4 = function(name) {
        inboundAccessibleForm4.sendKeys(name);
    };
    var inboundAccessibleForm5 = element.all(by.css('input[name="ips_4503599627370499_ip"]'));
    this.inbound_AccessibleForm5 = function(name) {
        inboundAccessibleForm5.sendKeys(name);
    };
    var inboundAccessibleForm6 = element.all(by.css('input[name="ips_4503599627370500_ip"]'));
    this.inbound_AccessibleForm6 = function(name) {
        inboundAccessibleForm6.sendKeys(name);
    };

    var policyIP_AddButton = element(by.css('button[ng-click="addItem(policy.ips)"]'));
    this.policyIP_Add_Button = function() {
        policyIP_AddButton.click();
    };
    this.policyIP_Add_State = function() {
        return policyIP_AddButton.getAttribute('disabled');
    };

    var policyIP_DeleteButton = element(by.css('#delete_ips_0'));
    this.policyIP_Delete_Button = function() {
        policyIP_DeleteButton.click();
    };
    this.policyIP_DeleteButton_State = function() {
        return policyIP_DeleteButton.getAttribute('disabled');
    };

    var policyIP_DeleteButton1 = element(by.css('#delete_ips_1'));
    this.policyIP_Delete_Button1 = function() {
        policyIP_DeleteButton1.click();
    };
    this.policyIP_DeleteButton1_State = function() {
        return policyIP_DeleteButton1.getAttribute('disabled');
    };

    var policyIP_DeleteButton2 = element(by.css('#delete_ips_2'));
    this.policyIP_Delete_Button2 = function() {
        policyIP_DeleteButton2.click();
    };
    this.policyIP_DeleteButton2_State = function() {
        return policyIP_DeleteButton2.getAttribute('disabled');
    };

    var policyIP_DeleteButton3 = element(by.css('#delete_ips_3'));
    this.policyIP_Delete_Button3 = function() {
        policyIP_DeleteButton3.click();
    };
    this.policyIP_DeleteButton3_State = function() {
        return policyIP_DeleteButton3.getAttribute('disabled');
    };

    var policyIP_DeleteButton4 = element(by.css('#delete_ips_4'));
    this.policyIP_Delete_Button4 = function() {
        policyIP_DeleteButton4.click();
    };
    this.policyIP_DeleteButton4_State = function() {
        return policyIP_DeleteButton4.getAttribute('disabled');
    };

    var policyIP_DeleteButton5 = element(by.css('#delete_ips_5'));
    this.policyIP_Delete_Button5 = function() {
        policyIP_DeleteButton5.click();
    };
    this.policyIP_DeleteButton5_State = function() {
        return policyIP_DeleteButton5.getAttribute('disabled');
    };

    var policyIP_DeleteButton6 = element(by.css('#delete_ips_6'));
    this.policyIP_Delete_Button6 = function() {
        policyIP_DeleteButton6.click();
    };
    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
   //Application for Policy
    var application = element(by.css('input[name="applications_0_name"]'));
    // var application = element(by.id('applications_4503599627370495_name'));
    this.application_Click = function() {
        application.click();
    };
    this.application_Clear = function() {
        application.clear();
    };
    this.application_Enter = function(name) {
        application.sendKeys(name);
    };

    this.pApp_nameAttr = function(){
        return application.getAttribute('name');
    };
    this.pApp_placeholderAttr = function() {
        return application.getAttribute('placeholder');
    };
    this.pApp_minlengthAttr = function() {
        return application.getAttribute('ng-minlength');
    };
    this.pApp_maxlengthAttr = function() {
        return application.getAttribute('maxlength');
    };

    var application1 = element(by.css('input[name="applications_4503599627370495_name"]'));
    this.application_Enter1 = function(name) {
        application1.sendKeys(name);
    };
    var application2 = element(by.css('input[name="applications_4503599627370496_name"]'));
    this.application_Enter2 = function(name) {
        application2.sendKeys(name);
    };
    var application3 = element(by.css('input[name="applications_4503599627370497_name"]'));
    this.application_Enter3 = function(name) {
        application3.sendKeys(name);
    };
    var application4 = element(by.css('input[name="applications_4503599627370498_name"]'));
    this.application_Enter4 = function(name) {
        application4.sendKeys(name);
    };
    var application5 = element(by.css('input[name="applications_4503599627370499_name"]'));
    this.application_Enter5 = function(name) {
        application5.sendKeys(name);
    };
    var application6 = element(by.css('input[name="applications_4503599627370500_name"]'));
    this.application_Enter6 = function(name) {
        application6.sendKeys(name);
    };

    var policyApp_AddButton = element(by.css('button[ng-click="addItem(policy.applications)"]'));
    this.policyApp_Add_Button = function() {
        policyApp_AddButton.click();
    };
    this.policyApp_AddButton_State = function() {
        return policyApp_AddButton.getAttribute('disabled');
    };

    var policyApp_DeleteButton = element(by.css('#delete_applications_0'));
    this.policyApp_Delete_Button = function() {
        policyApp_DeleteButton.click();
    };
    this.policyApp_DeleteButton_State = function() {
        return policyApp_DeleteButton.getAttribute('disabled');
    };

    var policyApp_DeleteButton1 = element(by.css('#delete_applications_1'));
    this.policyApp_Delete_Button1 = function() {
        policyApp_DeleteButton1.click();
    };
    this.policyApp_DeleteButton1_State = function() {
        return policyApp_DeleteButton1.getAttribute('disabled');
    };

    var policyApp_DeleteButton2 = element(by.css('#delete_applications_2'));
    this.policyApp_Delete_Button2 = function() {
        policyApp_DeleteButton2.click();
    };
    this.policyApp_DeleteButton2_State = function() {
        return policyApp_DeleteButton2.getAttribute('disabled');
    };

    var policyApp_DeleteButton3 = element(by.css('#delete_applications_3'));
    this.policyApp_Delete_Button3 = function() {
        policyApp_DeleteButton3.click();
    };
    this.policyApp_DeleteButton3_State = function() {
        return policyApp_DeleteButton3.getAttribute('disabled');
    };

    var policyApp_DeleteButton4 = element(by.css('#delete_applications_4'));
    this.policyApp_Delete_Button4 = function() {
        policyApp_DeleteButton4.click();
    };
    this.policyApp_DeleteButton4_State = function() {
        return policyApp_DeleteButton4.getAttribute('disabled');
    };

    var policyApp_DeleteButton5 = element(by.css('#delete_applications_5'));
    this.policyApp_Delete_Button5 = function() {
        policyApp_DeleteButton5.click();
    };
    this.policyApp_DeleteButton5_State = function() {
        return policyApp_DeleteButton5.getAttribute('disabled');
    };

    var policyApp_DeleteButton6 = element(by.css('#delete_applications_6'));
    this.policyApp_Delete_Button6 = function() {
        policyApp_DeleteButton6.click();
    };
    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    //Policy Port
    var port = element(by.css('input[name="ports_0_port"]'));
    // var port = element(by.id('ports_4503599627370495_port'));
    this.port_Click = function() {
        port.click();
    };
    this.port_Clear = function() {
        port.clear();
    };
    this.port_Enter = function(name) {
        port.sendKeys(name);
    };

    this.pPort_nameAttr = function(){
        return port.getAttribute('name');
    };
    this.pPort_placeholderAttr = function() {
        return port.getAttribute('placeholder');
    };
    this.pPort_maxlengthAttr = function() {
        return port.getAttribute('maxlength');
    };

    var port1 = element(by.css('input[name="ports_4503599627370495_port"]'));
    this.port1_Enter = function(name) {
        port1.sendKeys(name);
    };
    var port2 = element(by.css('input[name="ports_4503599627370496_port"]'));
    this.port2_Enter = function(name) {
        port2.sendKeys(name);
    };
    var port3 = element(by.css('input[name="ports_4503599627370497_port"]'));
    this.port3_Enter = function(name) {
        port3.sendKeys(name);
    };
    var port4 = element(by.css('input[name="ports_4503599627370498_port"]'));
    this.port4_Enter = function(name) {
        port4.sendKeys(name);
    };
    var port5 = element(by.css('input[name="ports_4503599627370499_port"]'));
    this.port5_Enter = function(name) {
        port5.sendKeys(name);
    };
    var port6 = element(by.css('input[name="ports_4503599627370500_port"]'));
    this.port6_Enter = function(name) {
        port6.sendKeys(name);
    };

    var policyPort_AddButton = element(by.css('button[ng-click="addItem(policy.ports)"]'));
    this.policyPort_Add_Button = function() {
        policyPort_AddButton.click();
    };
    this.policyPort_AddButton_State = function() {
        return policyPort_AddButton.getAttribute('disabled');
    };

    var policyPort_DeleteButton = element(by.css('#delete_ports_0'));
    this.policyPort_Delete_Button = function() {
        policyPort_DeleteButton.click();
    };
    this.policyPort_DeleteButton_State = function() {
        return policyPort_DeleteButton.getAttribute('disabled');
    };


    var policyPort_DeleteButton1 = element(by.css('#delete_ports_1'));
    this.policyPort_Delete_Button1 = function() {
        policyPort_DeleteButton1.click();
    };
    this.policyPort_DeleteButton1_State = function() {
        return policyPort_DeleteButton1.getAttribute('disabled');
    };

    var policyPort_DeleteButton2 = element(by.css('#delete_ports_2'));
    this.policyPort_Delete_Button2 = function() {
        policyPort_DeleteButton2.click();
    };
    this.policyPort_DeleteButton2_State = function() {
        return policyPort_DeleteButton2.getAttribute('disabled');
    };

    var policyPort_DeleteButton3 = element(by.css('#delete_ports_3'));
    this.policyPort_Delete_Button3 = function() {
        policyPort_DeleteButton3.click();
    };
    this.policyPort_DeleteButton3_State = function() {
        return policyPort_DeleteButton3.getAttribute('disabled');
    };

    var policyPort_DeleteButton4 = element(by.css('#delete_ports_4'));
    this.policyPort_Delete_Button4 = function() {
        policyPort_DeleteButton4.click();
    };
    this.policyPort_DeleteButton4_State = function() {
        return policyPort_DeleteButton4.getAttribute('disabled');
    };

    var policyPort_DeleteButton5 = element(by.css('#delete_ports_5'));
    this.policyPort_Delete_Button5 = function() {
        policyPort_DeleteButton5.click();
    };
    this.policyPort_DeleteButton5_State = function() {
        return policyPort_DeleteButton5.getAttribute('disabled');
    };

    var policyPort_DeleteButton6 = element(by.css('#delete_ports_6'));
    this.policyPort_Delete_Button6 = function() {
        policyPort_DeleteButton6.click();
    };
    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    var submitInboundPolicy = element(by.css('button[ng-click="saveData()"]'));
    this.submitInboundPolicy_Click = function() {
        submitInboundPolicy.click();
    };
    this.submitInboundPolicy_State = function(name) {
        return submitInboundPolicy.getAttribute('disabled');
    };

    var cancelPolicy = element(by.css('button[ng-click="$dismiss()"]'));
    this.cancelPolicy_Click = function() {
        cancelPolicy.click();
    };

    var cancelPolicy_Message_Yes = element(by.css('button[ng-click="ok()"]'));
    this.cancelPolicy_Message_Yes_Click = function() {
        cancelPolicy_Message_Yes.click();
    };

    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    //INTER ZONE Policy page
    var interZonePolicies_Link = element(by.css('a[href="#/configuration/policies/internal"]'));
    this.interZonePolicies_Link_Click = function() {
        interZonePolicies_Link.click();
    };

    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    //Users
    var users_ZonePolicy = element(by.css('input[name="user_0_name"]'));
    this.users_ZonePolicy_Click = function() {
        users_ZonePolicy.click();
    };
    this.users_ZonePolicy_Clear = function() {
        users_ZonePolicy.clear();
    };
    this.users_ZonePolicy = function(name) {
        users_ZonePolicy.sendKeys(name);
    };

    this.iZPUs_nameAttr = function(){
        return users_ZonePolicy.getAttribute('name');
    };
    this.iZPUs_placeholderAttr = function() {
        return users_ZonePolicy.getAttribute('placeholder');
    };
    this.iZPUs_maxlengthAttr = function() {
        return users_ZonePolicy.getAttribute('maxlength');
    };
	//**********
	var interZoneSourceHostGroups = element(by.css('div[id="multiselect_host_group"]'));
	this.interZoneSourceHostGroups_Click = function(){
		interZoneSourceHostGroups.click();
	}
	var interZoneSourceHostGroups_Search = interZoneSourceHostGroups.element(by.css('input[type="text"]'));
	this.interZoneSourceHostGroups_Search_Click = function() {
        interZoneSourceHostGroups_Search.click();
    };	
	this.interZoneSourceHostGroups_Category_Search = function(text) {
        interZoneSourceHostGroups_Search.sendKeys(text);
	};	
	this.interZoneSourceHostGroups_Category_Search_Clear = function() {
        interZoneSourceHostGroups_Search.clear();
	};		
	

	//var interZoneSourceDestGroups = element(by.css('div[id="multiselect_host_group_destination"]'));
	var interZoneSourceDestGroups = element(by.css('div[id="multiselect_host_group_destination"]'));
	this.interZoneSourceDestGroups_Click = function(){
		interZoneSourceDestGroups.click();
	}
	var interZoneSourceDestGroups_Search = interZoneSourceDestGroups.element(by.css('input[type="text"]'));
	this.interZoneSourceDestGroups_Search_Click = function() {
        interZoneSourceDestGroups_Search.click();
    };	
	this.interZoneSourceDestGroups_Category_Search = function(text) {
        interZoneSourceDestGroups_Search.sendKeys(text);
	};	
	this.interZoneSourceDestGroups_Category_Search_Clear = function() {
        interZoneSourceDestGroups_Search.clear();
	};		
	

	
    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    //Groups
    var userGroups_ZonePolicy = element(by.css('input[name="group_0_name"]'));
    this.userGroups_ZonePolicy_Click = function() {
        userGroups_ZonePolicy.click();
    };
    this.userGroups_ZonePolicy_Clear = function() {
        userGroups_ZonePolicy.clear();
    };
    this.userGroups_ZonePolicy = function(name) {
        userGroups_ZonePolicy.sendKeys(name);
    };

    this.iZPUsGps_nameAttr = function(){
        return userGroups_ZonePolicy.getAttribute('name');
    };
    this.iZPUsGps_placeholderAttr = function() {
        return userGroups_ZonePolicy.getAttribute('placeholder');
    };
    this.iZPUsGps_maxlengthAttr = function() {
        return userGroups_ZonePolicy.getAttribute('maxlength');
    };

    //''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    var submitInterZonePolicy = element(by.buttonText('Add Internal Network Policy'));
    this.submitInterZonePolicy_Click = function() {
        submitInterZonePolicy.click();
    };
    this.submitInterZonePolicy_State = function(name) {
        return submitInterZonePolicy.getAttribute('disabled');
    };

    //OUTBOUND Policy Page
    var outboundPolicies_Link = element(by.css('a[href="#/configuration/policies/outbound"]'));
    this.outboundPolicies_Link_Click = function() {
        outboundPolicies_Link.click();
    };
//*****
   var outboundDestinationIP = element(by.id('ips_0_ip'));
    this.outboundDestinationIP_getKeyValue = function(name) {
        return outboundDestinationIP.getAttribute('key');
    };

    this.outboundDestinationIP_Click = function() {
        outboundDestinationIP.click();
    };
    this.outboundDestinationIP_Clear = function() {
        outboundDestinationIP.clear();
    };
    this.outboundDestinationIP_text = function(text) {
        outboundDestinationIP.sendKeys(text);
    };
	
	this.outboundDestinationIP_List = function(){
		return element.all(by.css('input[placeholder="0.0.0.0/0 (optional)"]'));
	};
	
    var outboundDestinationIPv2 = element.all(by.css('input[placeholder="0.0.0.0/0 (optional)"]')).last();
    this.outboundDestinationIPv2_getKeyValue = function(name) {
        return outboundDestinationIPv2.getAttribute('key');
    };
	
    this.outboundDestinationIPv2_Click = function() {
        outboundDestinationIPv2.click();
    };
    this.outboundDestinationIPv2_Clear = function() {
        outboundDestinationIPv2.clear();
    };
    this.outboundDestinationIPv2_text = function(text) {
        outboundDestinationIPv2.sendKeys(text);
    };	

	var outboundDestinationIP_InputField = element(by.css('input-field-component[name="ips_0_ip"]'));
    this.outboundDestinationIP_InputField_Click = function() {
        outboundDestinationIP_InputField.click();
    };	

	var outboundDestinationIP_InputFieldv2 = element.all(by.css('input-field-component[placeholder="0.0.0.0/0 (optional)"]')).last();
    this.outboundDestinationIP_InputFieldv2_Click = function() {
        outboundDestinationIP_InputFieldv2.click();
    };	
    this.get_outboundDestinationIP_InputFieldv2 = function() {
        return outboundDestinationIP_InputFieldv2;
    };	
	
	
	this.outboundDestinationIP_placeholderAttr = function() {
        return outboundDestinationIP_InputField.getAttribute('placeholder');
    };
    this.outboundDestinationIP_minlengthAttr = function() {
        return outboundDestinationIP_InputField.getAttribute('minlength');
    };
    this.outboundDestinationIP_maxlengthAttr = function() {
        return outboundDestinationIP_InputField.getAttribute('maxlength');
    };
    this.outboundDestinationIP_fieldLabelAttr = function () {
        return outboundDestinationIP_InputField.getAttribute('fieldlabel');
    };	


	
    var add_outboundDestinationIP = element(by.css('button[ng-click="addItem(outbound_policy.ips)"]'));
    this.add_outboundDestinationIP_getState = function(name) {
        return add_outboundDestinationIP.getAttribute('disabled');
    };
    this.add_outboundDestinationIP_Click = function() {
        add_outboundDestinationIP.click();
    };

    var delete_outboundDestinationIP = element(by.id('delete_ips_0'));
    this.delete_outboundDestinationIP_getState = function(name) {
        return delete_outboundDestinationIP.getAttribute('disabled');
    };
    this.delete_outboundDestinationIP_Click = function() {
        delete_outboundDestinationIP.click();
    };
	//
    var delete_outboundDestinationIPv2 = element.all(by.css('button[ng-click="removeItem(ip, outbound_policy.ips, \'outbound_policy_ips\')"]')).last();
    this.delete_outboundDestinationIPv2_getState = function(name) {
        return delete_outboundDestinationIPv2.getAttribute('disabled');
    };
    this.delete_outboundDestinationIPv2_Click = function() {
        delete_outboundDestinationIPv2.click();
    };


//*****	
    var submitOutboundPolicy = element(by.css('button[ng-click="saveData()"]'));
    this.submitOutboundPolicy_Click = function() {
        submitOutboundPolicy.click();
    };
    this.submitOutboundPolicy_State = function(name) {
        return submitOutboundPolicy.getAttribute('disabled');
    };

	
    var deletePolicy = element(by.css('#policy_delete_0'));
    this.deletePolicy_Click = function() {
        deletePolicy.click();
    };

    var deletePolicyMessageYesButton = element(by.buttonText('Yes'));
    this.deletePolicyMessageYesButton_Click = function() {
        deletePolicyMessageYesButton.click();
    };

    var updateInterZonePolicy = element.all(by.buttonText('Update Internal Network Policy'));
    this.updateInterZonePolicy_Click = function() {
        updateInterZonePolicy.click();
    };
    this.updateInterZonePolicy_State = function(name) {
        return updateInterZonePolicy.getAttribute('disabled');
    };

    var updateInboundPolicy = element(by.buttonText('Update Inbound Policy'));
    this.updateInboundPolicy_Click = function() {
        updateInboundPolicy.click();
    };
    this.updateInboundPolicy_State = function(name) {
        return updateInboundPolicy.getAttribute('disabled');
    };

    var updateOutBoundPolicy = element(by.buttonText('Update Outbound Blocking Policy'));
    this.updateOutBoundPolicy_Click = function() {
        updateOutBoundPolicy.click();
    };
    this.updateOutBoundPolicy_State = function(name) {
        return updateOutBoundPolicy.getAttribute('disabled');
    };

//Edit Policy
    // Detail View
    var policyDetailView = element(by.id('detailOpen_0'));
    this.policyDetailView_click = function() {
        policyDetailView.click();
    };
    this.policyDetailView_State = function() {
        return policyDetailView.getAttribute('disabled');
    };

    //Edit View
    var editPolicy = element(by.id('policy_edit_0'));
    this.edit_Policy_click = function() {
        editPolicy.click();
    };
    this.edit_Policy_State = function() {
        return editPolicy.getAttribute('disabled');
    };

    var cancelEditPolicy = element(by.css('button[ng-click="$dismiss()"]'));
    this.cancelEdit_Policy = function() {
        cancelEditPolicy.click();
    };
    this.cancelEditPolicy_State = function() {
        return cancelEditPolicy.getAttribute('disabled');
    };

    var cancelEditPolicyMsg = element.all(by.css('button[ng-click="ok()"]'));
    this.cancelEditPolicyMsg_Click = function() {
        cancelEditPolicyMsg.click();
    };

    var submitEditInBound = element(by.buttonText('Update Inbound Policy'));
    this.submitEditInBound_Click = function() {
        submitEditInBound.click();
    };
    this.submitEditInBound_State = function() {
        return submitEditInBound.getAttribute('disabled');
    };

    var submitEditInterZone = element(by.css('button[type="submit"]'));
    this.submitEditInterZone_Click = function() {
        submitEditInterZone.click();
    };
    this.submitEditInterZone_State = function() {
        return submitEditInterZone.getAttribute('disabled');
    };

    var submitEditOutBound = element(by.buttonText('Update Outbound Policy'));
    this.submitEditOutBound_Click = function() {
        submitEditOutBound.click();
    };
    this.submitEditOutBound_State = function() {
        return submitEditOutBound.getAttribute('disabled');
    };

    var deleteInBound = element(by.id('policy_delete_0'));
    this.deleteInBound_Click = function() {
        deleteInBound.click();
    };
    this.deleteInBound_State = function() {
        return deleteInBound.getAttribute('disabled');
    };

    var deleteMsgInBound = element.all(by.buttonText('Yes'));
    this.deleteMsgInBound_Click = function() {
        deleteMsgInBound.click();
    };

    var deviceID_Get = element(by.binding(' item.ip_address '));
    this.deviceID_GetText = function() {
        return deviceID_Get.getText();
    };

    var inBoundPoliciesText = element(by.css('.table.top-buffer p'));
    this.inBoundPolicies_Text = function() {
        return inBoundPoliciesText.getText();
    };

    var scrollbarExist = element(by.css('div.scrollable-policy-content.tbody.border-top.striped-div'));
    this.scrollbar_Exist = function() {
        return scrollbarExist.getAttribute('disabled');
    };

    var Zones_SearchExists = element(by.css('input[ng-keydown="keyDownSearchDefault($event); keyDownSearch($event, input.searchFilter);"]'));
    this.Zones_Search_Exists = function() {
        return Zones_SearchExists.getAttribute('disabled');
    };

    var inBoundColumns = element(by.css('.thead.striped-head div.row'));
    this.inBound_Columns = function() {
        return inBoundColumns.getText();
    };

    var inBoundPoliciesNextButton = element(by.linkText('Next - Internal Network Policies'));
    this.inBoundPolicies_NextButton = function() {
        inBoundPoliciesNextButton.click();
    };
    this.inBoundPoliciesNextButton_State = function() {
        return inBoundPoliciesNextButton.getAttribute('disabled');
    };

    var backButton = element.all(by.css('a[role="button"]'));
    this.back_Button = function() {
        backButton.click();
    };

    var nextPoliciesButton = element(by.linkText('Next - Policies'));
    this.nextPolicies_Button = function() {
        nextPoliciesButton.click();
    };

    var interZonePoliciesText = element(by.css('.col-xs-4 p'));
    this.interZonePolicies_Text = function() {
        return interZonePoliciesText.getText();
    };

    var internalNetworkPoliciesNextButton = element(by.linkText('Next - Outbound Policies'));
    this.internalNetwork_PoliciesNextButton = function() {
        internalNetworkPoliciesNextButton.click();
    };
    this.internalNetworkPoliciesNextButton_State = function() {
        return internalNetworkPoliciesNextButton.getAttribute('disabled');
    };

    var outBoundPoliciesNextButton = element(by.linkText('Next - Security Controls'));
    this.outBoundPolicies_NextButton = function() {
        outBoundPoliciesNextButton.click();
    };
    this.outBoundPoliciesNextButton_State = function() {
        return outBoundPoliciesNextButton.getAttribute('disabled');
    };


};

module.exports = policies_Page;