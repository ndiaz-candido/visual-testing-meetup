const PixDiff = require('pixel-diff');

const checkRegion = (webElementSelector, tag) => {
  const webElement = element(By.css(webElementSelector));

  return new Promise((resolve, reject) => {
    browser.pixDiff.checkRegion(webElement, tag)
      .then((result) => {
        const isValid = [PixDiff.RESULT_IDENTICAL, PixDiff.RESULT_SIMILAR].some((code) => result.code === code);

        if (isValid) {
          resolve();
        } else {
          reject(new Error(`Image ${tag} does not match. Diferences: ${result.differences}`));
        }
      })
      .catch((err) => reject(new Error(err)));
  });
};

module.exports = {
  checkRegion
};
