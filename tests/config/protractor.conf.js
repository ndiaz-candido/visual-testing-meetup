const path = require('path');
const Eyes = require("eyes.selenium").Eyes;

exports.config = {
  framework: 'mocha',
  mochaOpts: {
    timeout: 40000,
  },
  specs: [
    path.join(process.cwd(), 'tests/specs/*.js')
  ],
  ignoreUncaughtExceptions: true,
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  multiCapabilities: [{
    browserName: 'chrome',
    name: 'chrome-win10',
    version: '64.0',
    platform: 'Windows 10'
  },
  {
    browserName: 'safari',
    name: 'safari-macOS',
    version: '11.0',
    platform: 'macOS 10.12'
  }],
  onPrepare: () => {
    // As we're using protractor it expects an Angular application.
    // This disables it to be able to use protractor with other kind of applications.
    browser.waitForAngularEnabled(false);

    // Sets the Applitools Eyes object in the global 'browser' variable.
    browser.eyes = new Eyes();
    browser.eyes.setApiKey(process.env.APPLITOOLS_KEY);
  }
};
