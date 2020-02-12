    var activation_Request_Page = require('../page-factory/activationRequestPage.js');

    describe('Protractor Site Tests', function () {

        it('Activation Request Page Validation', function () {

            var activation_RequestPage = new activation_Request_Page();
            browser.sleep(2000);
            //click on Activation Request link
            activation_RequestPage.activation_RequestLink();
            expect(activation_RequestPage.activation_RequestLink_Text()).toEqual('Your Configuration\nThe final step: Send your configuration to OPĀQ, so we can activate your Security Services.\nTo do so, an OPĀQ Advisor may reach out to you to confirm and/or revise your configuration.');
            browser.sleep(2000);

           //Click on Sites link to validate the link and its going to the desired page.
            activation_RequestPage.activation_Request_SitesLink();
            console.log('Validating the Sites Link');
            browser.navigate().back();
            browser.sleep(2000);


            //Click on Devices link to validate the link and its going to the desired page.
            activation_RequestPage.activation_Request_DevicesLink();
            console.log('Validating the Devices Link');
            browser.navigate().back();
            browser.sleep(1000);

            //Click on UserRoles link to validate the link and its going to the desired page.
            activation_RequestPage.activation_Request_UserRolesLink();
            console.log('Validating the Administrators Link');
            browser.navigate().back();
            browser.sleep(1000);

            //Click on Security Services link to validate the link and its going to the desired page.
            activation_RequestPage.activation_Request_SecurityServicesLink();
            console.log('Validating the Security Controls Link');
            browser.navigate().back();
            browser.sleep(1000);

            //Click on Directory Services link to validate the link and its going to the desired page.
            activation_RequestPage.activation_Request_DirectoryServicesLink();
            console.log('Validating the Directory Services Link');
            browser.navigate().back();
            browser.sleep(1000);

            //Click on Policies link to validate the link and its going to the desired page.
            activation_RequestPage.activation_Request_PoliciesLink();
            console.log('Validating the Policies Link');
            browser.navigate().back();
            browser.sleep(1000);
            
            //Click on Confirm activation button and validate the header in the dialog
            activation_RequestPage.confirm_activation_button();
            console.log('Validating the Confirm Activation Link');
            browser.sleep(1000);
            // expect(activation_RequestPage.email_Confirmation()).toEqual('automation@automation.com');
            expect(activation_RequestPage.email_to_DevTeam()).toEqual('devteam@opaqnetworks.com');
            
            activation_RequestPage.confirm_activation_cancel();

            });


    });
