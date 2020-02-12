exports.config = {
    // directConnect: true,
    framework: 'jasmine2',
    seleniumPort: 4444,
    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar',

    suites: {
        // loginPage: [
        //     '../test-spec/login-DetailTest.spec.js',
        //     '../test-spec/login-DetailTest_1.spec.js',
        //     '../test-spec/login-DetailTest_2.spec.js',
        //     '../test-spec/login-DetailTest_Profile.spec.js'
        // ],
        // sitePageValidation: [
        //     '../test-spec/site-Page-Field-Validation.spec.js',
        //     '../test-spec/site-Page-Field-Validation_1.spec.js',
        //     '../test-spec/site-Page-Field-Validation_2.spec.js',
        //     '../test-spec/site-Page-Field-Validation_3.spec.js',
        //     '../test-spec/site-Page-Field-Validation_4.spec.js',
        //     '../test-spec/site-Page-Field-Validation_5.spec.js',
        //     '../test-spec/site-Page-Field-Validation_6.spec.js',
        //     '../test-spec/site-Page-Field-Validation_7.spec.js',
        //     '../test-spec/site-Page-Field-Validation_8.spec.js'
        // ],
        // sitePageFunctionality: [
        //     '../test-spec/site-Add-Functionality-Information.spec.js',
        //     '../test-spec/site-Add-Functionality-PhysicalLocation.spec.js',
        //     '../test-spec/site-Add-Functionality-PrimaryISP.spec.js',
        //     '../site-Add-Functionality-SecondaryISP-ReservedSubnet.spec.js',
        //     '../test-spec/site-Add-Functionality-ConnectivityConfiguration.spec.js',
        //     '../test-spec/site-Add-Functionality-CompletePage.spec.js',
        //     '../test-spec/site-List-Functionality.spec.js',
        //     '../test-spec/site-DetailView-Functionality.spec.js',
        //     '../test-spec/site-DetailView-DeleteFunctionality.spec.js',
        //     '../test-spec/site-Edit.spec.js',
        //     '../test-spec/site-Edit_1.spec.js',
        //     '../test-spec/site-Help-Functionality.spec.js',
        //     '../test-spec/site-List-Functionality_1.spec.js'
        // ],
        // administratorPage: [
        //     '../test-spec/administrators_UICheck.spec.js',
        //     '../test-spec/administrators_UICheck_Errors.spec.js',
        //     '../test-spec/administrators_Add_All.spec.js',
        //     '../test-spec/administrators_AddRelatedToSites.spec.js',
        //     '../test-spec/administrators_AddRelatedToSites_1.spec.js',
        //     '../test-spec/administrators_Edit.spec.js',
        //     '../test-spec/administrators_Edit_1.spec.js',
        //     '../test-spec/administrators_Edit_2.spec.js',
        //     '../test-spec/administrators_HelpText.spec.js',
        //     '../test-spec/administrators_Remove.spec.js',
        //     '../test-spec/administrators_GlobalAdmin_DetailView.spec.js',
        //     '../test-spec/administrators_ChangeAdmin_DetailView.spec.js',
        //     '../test-spec/administrators_TroubleShootAdmin_DetailView.spec.js',
        //     '../test-spec/administrators_DashboardAdmin_DetailView.spec.js',
        //     '../test-spec/administrators_ListView.spec.js'
        // ],
        // troubleShootAdministratorPage: [
        //     '../test-spec/troubleShootAdministrators_Add.spec.js',
        //     '../test-spec/troubleShootAdministrators_ValidateSite&AllAdmins.spec.js',
        //     '../test-spec/troubleShootAdministrators_ValidateDirectoryServices.spec.js',
        //    '../test-spec/troubleShootAdministrators_ValidateHosts.spec.js',
        //     '../test-spec/troubleShootAdministrators_ValidateHostGroups.spec.js',
        //     '../test-spec/troubleShootAdministrators_ValidatePolicies.spec.js',
        // ],
       //  hostsPage: [
       //      '../test-spec/hosts_Validation.spec.js',
       //      // '../test-spec/hosts_Error_Validation.spec.js',
       //      '../test-spec/hosts_Add.spec.js',
       //      // '../test-spec/hosts_Edit.spec.js',
       //      // '../test-spec/hosts_ListView.spec.js',
       //      '../test-spec/hosts_Delete.spec.js'
       // ],
       //  directoryServicesPage: [
       //      '../test-spec/directoryServices_Add_PageValidation.spec.js',
       //      '../test-spec/directoryServices_Add_PageValidation_1.spec.js',
       //      '../test-spec/directoryServices_Add.spec.js',
       //      '../test-spec/directoryServices_Add_1.spec.js',
       //      '../test-spec/directoryServices_Add_2.spec.js',
       //      '../test-spec/directoryServices_Add_3.spec.js',
       //      '../test-spec/directoryServices_Edit.spec.js',
       //      '../test-spec/directoryServices_Edit_1.spec.js',
       //      '../test-spec/directoryServices_Edit_2.spec.js',
       //      '../test-spec/directoryServices_Help.spec.js',
       //      '../test-spec/directoryServices_ListView.spec.js',
       //      '../test-spec/directoryServices_ListView_1.spec.js',
       //      '../test-spec/directoryServices_ListView_2.spec.js',
       //      '../test-spec/directoryServices_Delete.spec.js'
       //  ],
       //  hostGroupsPage: [
       //      '../test-spec/HostGroupsUIValidation.spec.js',
       //      '../test-spec/HostGroupsUIValidation_1.spec.js',
       //      '../test-spec/HostGroupsAdd.spec.js',
       //      '../test-spec/HostGroupsAdd_1.spec.js',
       //      '../test-spec/HostGroupsEdit.spec.js',
       //      '../test-spec/HostGroupsEdit_1.spec.js',
       //      '../test-spec/HostGroupsList.spec.js',
       //      '../test-spec/HostGroupsRemove.spec.js'
       //  ],
       //  inBoundPoliciesPage: [
       //      '../test-spec/inBoundPoliciesUIValidation.spec.js',
       //      '../test-spec/inBoundPoliciesUIValidation_1.spec.js',
       //      '../test-spec/inBoundPoliciesAdd.spec.js',
       //      '../test-spec/inBoundPoliciesAdd_1.spec.js',
       //      '../test-spec/inBoundPoliciesAdd_2.spec.js',
       //      '../test-spec/inBoundPoliciesEdit.spec.js',
       //      '../test-spec/inBoundPoliciesEdit_1.spec.js',
       //      '../test-spec/inBoundPoliciesListView.spec.js',
       //      '../test-spec/inBoundPoliciesRemove.spec.js'
       //  ],
        // internalNetworkPolciesPage: [
        //     '../test-spec/internalNetworkPoliciesUIValidation.spec.js',
        //     '../test-spec/internalNetworkPoliciesUIValidation_1.spec.js',
        //     '../test-spec/internalNetworkPoliciesAdd.spec.js',
        //     '../test-spec/internalNetworkPoliciesAdd_1.spec.js',
        //     '../test-spec/internalNetworkPoliciesAdd_2.spec.js',
        //     '../test-spec/internalNetworkPoliciesEdit.spec.js',
        //     '../test-spec/internalNetworkPoliciesRemove.spec.js'
        // ],
        // outboundPoliciesPage: [
        //     '../test-spec/outBoundPoliciesUIValidation.spec.js',
        //     '../test-spec/outBoundPoliciesUIValidation_1.spec.js',
        //     '../test-spec/outBoundPoliciesAdd.spec.js',
        //     '../test-spec/outBoundPoliciesAdd_1.spec.js',
        //     '../test-spec/outBoundPoliciesAdd_2.spec.js',
        //     '../test-spec/outBoundPoliciesEdit.spec.js',
        //     '../test-spec/outBoundPoliciesRemove.spec.js'
        // ],
        securityControlsPage: [
            '../test-spec/securityControls.spec.js'
        ],
        securityControlsGlobalBANPage: [
            '../test-spec/securityControlsGlobalBan-Validation.spec.js',
            '../test-spec/securityControlsGlobalBan-Functionality.spec.js',
            '../test-spec/securityControlsGlobalBan-Functionality_1.spec.js',
            '../test-spec/securityControlsGlobalBan_Exceptions_FieldValidation.spec.js',
			'../test-spec/securityControlsGlobalBan_Exceptions_FieldValidation_1.spec.js',
			'../test-spec/securityControlsGlobalBan_Exceptions_Functionality.spec.js',
			'../test-spec/securityControlsGlobalBan_Exceptions_Functionality_1.spec.js',
        ],
        securityControlsURLFilteringPage: [
            '../test-spec/securityControls_URL _Filtering.spec.js',
            '../test-spec/securityControls_URL _Filtering_1.spec.js',
            '../test-spec/securityControls_URL _Filtering_2.spec.js'
        ],
        securityControlsUrlFilterExceptions: [
            '../test-spec/securityControls_URL_Filtering_Exceptions_FieldValidation.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_FieldValidation_Strict.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_FieldValidation_Relaxed.spec.js',
            '../test-spec/securityControls_URL_Filtering_Exceptions_FieldValidation.spec_1.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_FieldValidation.spec_1_Strict.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_FieldValidation.spec_1_Relaxed.js',
            '../test-spec/securityControls_URL_Filtering_Exceptions_Functionality.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_Strict.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_Relaxed.spec.js',
            '../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_1.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_1_Strict.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_1_Relaxed.spec.js',
            '../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_2.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_2_Strict.spec.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_2_Relaxed.spec.js',
            '../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_3.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_3_Strict.js',
			'../test-spec/securityControls_URL_Filtering_Exceptions_Functionality_3_Relaxed.js'
        ],
        securityControlsFileAuditingFileBlockingPage: [
        '../test-spec/securityControlsFileAuditing-Blocking.spec.js',
        '../test-spec/securityControls_Enable_File_Blocking_FieldValidation.spec.js',
        '../test-spec/securityControls_Enable_File_Blocking_Functionality.spec.js'
        ],
        securityControlsExternalIPBlockPage: [
            '../test-spec/securityControlsExternalIPBlock-Validation.spec.js',
            '../test-spec/securityControlsExternalIPBlock-Validation1.spec.js',
            '../test-spec/securityControlsExternalIPBlock-Functionality.spec.js'
        ],
        // activationRequest: [
        //     '../test-spec/activationRequest_Link_Validation.spec.js',
        //     '../test-spec/activationRequest_Functionality.spec.js'
        // ],
        // notesFunctionality: [
			//'../test-spec/Url_Filtering_Notes_Functionality.spec.js',
			//'../test-spec/GlobalBan_Notes_Functionality.spec.js',
			//'../test-spec/HostGroups_Notes_Functionality.spec.js',
			//'../test-spec/directoryServices_Notes_Functionality.spec.js',
			//'../test-spec/site-Page_Notes_Functionality.spec.js',
			//'../test-spec/Policies_Notes_Functionality.spec.js',
			//'../test-spec/Administrators_Notes_Functionality.spec.js'
        // ]
     },

    multiCapabilities: [
        {
        'browserName': 'chrome'
        }
        // {
        //     'browserName': 'firefox', 'acceptInsecureCerts':true
        // }
        // {
        // 	'browserName': 'internet explorer', 'platform' : 'ANY', 'version': '11', 'shardTestFiles': true, 'maxInstances': 1
        // }
    ],
    // maxSessions: 1,
    // maxInstances: 1,

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        // browser.manage().window().setSize(1600, 1000);
        // var SpecReporter = require('C:/acumen-automated-regression-tests/acumen-automated-BDD-E2E-tests/node_modules/jasmine-spec-reporter').SpecReporter;
        // jasmine.getEnv().clearReporters();               // remove default reporter logs
        // jasmine.getEnv().addReporter(new SpecReporter({  // add jasmine-spec-reporter
        //     spec: {
        //         displayPending: true
        //     }
        // }));



        var AllureReporter = require('../node_modules/jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: './test-results/allure-results/'
        }));
        jasmine.getEnv().afterEach(function(done){
        	browser.takeScreenshot().then(function (png) {
        		allure.createAttachment('Screenshot', function () {
        			return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
              	})
        });
    },
    'allScriptsTimeout' : 360000,
    'getPageTimeout' : 360000,

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        'onComplete': null,
        // If true, display spec names.
        'isVerbose': true,
        'showTiming': true,
        'realtimeFailure': true,
        // If true, print colors to the terminal.
        'showColors': true,
        // If true, include stack traces in failures.
        'includeStackTrace': true,
        // Default time to wait in ms before a test fails.
        'defaultTimeoutInterval': 360000
    }

};
