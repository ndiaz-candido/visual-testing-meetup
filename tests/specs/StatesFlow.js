describe('WebApp Visual Test', () => {
  before(() => {
    browser.eyes.open(browser, "Dali App", "Visual Testing for Dali App");

    return browser.get('http://18.221.198.12/?diff');
  });

  after(() => {
    browser.eyes.close();
  });

  describe('WebApp first state', () => {
    it('should match the firts state of the WebApp', () => {

      return browser.eyes.checkWindow('state-1');
    });
  });

  describe('WebApp second state', () => {
    it('should match the second state of the WebApp', () => {
      $('#show-dali').click();

      return browser.eyes.checkWindow('state-2');
    });
  });
});
