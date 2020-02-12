var home_Page = function() {
    var configuration_Link = element(by.css('a[href="#/configuration/sites"]'));
    services_Link = element(by.css('a[href="#/configuration/security"]'));
    policies_Link = element(by.css('a[href="#/configuration/policies"]'));
    activation_Request_Link = element(by.css('a[href="#/configuration/activationreq"]'));
    sites_Text = element(by.css('div[ui-view="configuration"] h1'));
    services_Text = element(by.css('div[ui-view="configuration"] h1'));
    policies_Text = element(by.css('div[ui-view="configuration"] h1'));
    activationRequest_Text = element(by.css('div[ui-view="configuration"] h1'));


    this.clickConfigLink = function() {
        configuration_Link.click();
    };

    this.clickServicesLink = function() {
        services_Link.click();
    };

    this.clickPoliciesLink = function() {
        policies_Link.click();
    };

    this.clickActivatioRequestLink = function() {
        activation_Request_Link.click();
    };

    this.getSitesTitle = function() {
        return sites_Text.getText();
    };

    this.getServicesTitle = function() {
        return services_Text.getText();
    };

    this.getPoliciesTitle = function() {
        return policies_Text.getText();
    };

    this.getActivationRequestTitle = function() {
        return activationRequest_Text.getText();
    };

}

module.exports = home_Page;
