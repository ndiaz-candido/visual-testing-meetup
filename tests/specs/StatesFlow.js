describe('WebApp Visual Test', () => {
  before(() => {
    return browser.get('http://18.221.198.12/');
  });

  describe('WebApp first state', () => {
    it('should match the firts state of the WebApp', () => {
      return browser.pixDiff.checkScreen('state-1');
    });
  });

  describe('WebApp second state', () => {
    it('should match the second state of the WebApp', () => {
      $('#show-dali').click();

      return browser.pixDiff.checkScreen('state-2');
    });
  });
});
