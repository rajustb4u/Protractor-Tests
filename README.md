# Requirements

#First Time Set-Up

```
git clone ssh://git@stash.corp.batblue.com:7999/ac/acumen-automated-bdd-e2e-regression-tests.git
cd acumen-automated-BDD-E2E-Regression-tests
npm install
./node_modules/protractor/bin/webdriver-manager update
./node_modules/protractor/bin/protractor conf/config.js
```

#From second-time

```
./node_modules/protractor/bin/protractor conf/config.js
```

Angular modules - Node.js
    http://nodejs.org/download/

    for windows if you want to to check the installation is done successfully, you can go and check in system environment variables. The path will be defined automatically.

    You can also check from the command prompt by typing the command 'npm -version' in command prompt which you give you the installed version.


Protractor
    npm install -g protractor in command prompt.

    If you get any error as "Error: ENOENT, stat 'C:\Users\RT\AppData\Roaming\npm.". Please create a folder named 'npm' which will solve your problem.

    And also make sure you navigate to the folder AppData/Roaming/npm and install protractor

    Path may look like C:\Users\name\AppData\Roaming\npm.

    Once that is done, confirm by typing 'protractor --version' in the commend prompt which will show you the protractor version that is installed


Selenium Server
    If you don’t have the Selenium server on your machine, then download the latest version onto your machine. If you want to run tests on different browsers, then please download the respective drivers as well. For example, Chrome driver will come in handy to run tests on the Chrome browser.

    java -jar selenium/selenium-server-standalone-2.35.0.jar -Dwebdriver.chrome.driver=./selenium/chromedriver


Selenium Webdriver
    To start webdriver 'webdriver-manager'.

    To update the selenium webdriver, please type the command 'webdriver-manager update' in command prompt.

    It will download all webdriver latest version and default chrome driver.

    To start the webdriver go to command prompt and type webdriver-manager start'.

winston:
    In command prompt go to the root folder where the node_modules and 'npm install winston' is the command to install Winston package.

jasmine-allure-reporter
    In command prompt go to the root folder where the node_modules and 'npm i jasmine-allure-reporter' is the command to install Winston package.


Run Protractor tests:
    protractor config.js


-- For all the Nodemodules got to command prompt get to the project folder and 'npm install' it will create node modules folder with all the dependencies installed.

Note: Protractor 5 is compatible with nodejs v6 and newer.




