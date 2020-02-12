//Function to Generate allure reports from xml using maven plugin and deploying them on port:1234[localhost or jenkins node ip] via jetty server
function allure_report_jetty_deploy() {
    console.log('Generating allure reports.');
    var exec = require('child_process').exec;

    function puts(error, stdout, stderr) {
        sys.puts(stdout);
    }
    exec("mvn site -Dallure.results_pattern=allure-results && mvn jetty:run -Djetty.port=1234", puts);
    var startTimes = Date.now();
    while (Date.now() - startTimes < 60000) {
    }
}

function send_mail() {
    console.log("Sending Mail with reports for the test execution.");
    var sys = require('../node_modules/util');
    var exec = require('child_process').exec;

    function puts(error, stdout, stderr) {
        sys.puts(stdout);
    }
    exec("../test-spec/node mail.js", puts);
}

exports.config = {
    // directConnect: true,
    framework: 'jasmine2',
    seleniumPort: 4444,
    seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar',
    specs: [
        '../test-spec/login-DetailTest.spec.js',
        '../test-spec/login-DetailTest_Profile.spec.js'
    ],

    multiCapabilities: [
        // {
        // 'browserName': 'chrome', maxSessions: 1,  maxInstances: 1,
        // },
        {
            'browserName': 'firefox', maxSessions: 1,  maxInstances: 1,
        }
        // {
        // 	'browserName': 'internet explorer', 'platform' : 'ANY', 'version': '11', maxInstances: 1
        // }
    ],

    onPrepare: function() {
        browser.driver.manage().window().maximize();

        console.log('Deleting old allure reports and files.');
        var sys = require('../node_modules/util');
        var exec = require('child_process').exec;

        function puts(error, stdout, stderr) {
            sys.puts(stdout);
        }

        exec("RD /S /Q ./test-results/allure-results", puts);
        exec("RD /S /Q target", puts);

        var AllureReporter = require('../node_modules/jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: './test-results/allure-results/'
            }
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

        console.log('Stopping jetty server if any previous instance is running on port.');

        exec("mvn jetty:stop -Djetty.port=1234", puts);
        var startTimer = Date.now();
        while (Date.now() - startTimer < 10000) {
        }

    },

    onComplete:function () {
        console.log("Sending Mail with reports for the test execution.");
        allure_report_jetty_deploy();
        send_mail();
    },

    'allScriptsTimeout' : 1000000,
    'getPageTimeout' : 1000000,

    jasmineNodeOpts: {
        'onComplete': null,
        'isVerbose': true,
        'showTiming': true,
        'realtimeFailure': true,
        'showColors': true,
        'includeStackTrace': true,
        'defaultTimeoutInterval': 1000000
    }

};
