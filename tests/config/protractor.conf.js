const path = require('path');
const PixDiff = require('pix-diff');

exports.config = {
  framework: 'mocha',
  mochaOpts: {
    timeout: 40000,
  },
  specs: [
    path.join(process.cwd(), 'tests/specs/*.js')
  ],
  onPrepare: () => {
    // As we're using protractor it expects an Angular application.
    // This disables it to be able to use protractor with other kind of applications.
    browser.waitForAngularEnabled(false);

    // Sets the PixDiff object in the global 'browser' variable.
    browser.pixDiff = new PixDiff({
      basePath: 'tests/resources/baselines/',
      diffPath: 'tests/resources/',
      formatImageName: `{tag}-{browserName}-{width}x{height}`,
      baseline: true
    });
  }
};
