describe('Get Started page', function() {

    //var logger = require('../scripts/log.js');
    var home_Page = require('../page-factory/homePage.js');
    var data = require('../json/testData.json');

    it('Validate Get Started Page', function() {
        var homePage = new home_Page();

        browser.sleep(2000);
        //validating Configuration Link and the header text.
        homePage.clickConfigLink();
        console.log('Configuration link test and validating the title');
        // expect(homePage.getSitesTitle()).toEqual('CONFIGURE SITES');
        expect(homePage.getSitesTitle()).toEqual('Configure Sites');
        //logger.log('info', 'Verifying whether the Configuration link is working or not');
        browser.navigate().back();

        //validating Service Link and the header text.
        homePage.clickServicesLink();
        console.log('Services link test and validating the title');
        // expect(homePage.getServicesTitle()).toEqual('CONFIGURE SECURITY CONTROLS');
        expect(homePage.getServicesTitle()).toEqual('Configure Security Controls');
        //	logger.log('info', 'Verifying whether the Security link is working or not');
        browser.navigate().back();

        //validating Policies Link and the header text.
        homePage.clickPoliciesLink();
        console.log('Policies link test and validating the title');
        // expect(homePage.getPoliciesTitle()).toEqual('CONFIGURE POLICIES');
        expect(homePage.getPoliciesTitle()).toEqual('Configure Policies');
        //	logger.log('info', 'Verifying whether the Policies link is working or not');
        browser.navigate().back();

        //validating Activation REquest Link and the header text.
        homePage.clickActivatioRequestLink();
        console.log('Activation Request link test and validating the title');
        // expect(homePage.getActivationRequestTitle()).toEqual('ACTIVATION REQUEST');
        expect(homePage.getActivationRequestTitle()).toEqual('Activation Request');
        //	logger.log('info', 'Verifying whether the Click Activation Request link is working or not');
        browser.navigate().back();
    });
});

