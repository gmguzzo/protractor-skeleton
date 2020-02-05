const MainPage = function() {
  const json = require('../locators/mainPageLocators.json');
  const helper = require('ca-protractor-helper');

  const globalTimeout = 30000;

  const {
    cmpBusca,
    txtResult
  } = json.locators;

  this.get = () => {
    return browser.get(browser.baseUrl);
  };

  this.search = (searchString) => {
    return helper.fillFieldWithTextWhenVisibleAndPressEnter(cmpBusca, searchString, "Não foi possivel interagir com o input.",globalTimeout);
  };

  this.assertSearchResult = (search) => {
    return helper.waitForElementPresence(txtResult[search],"Não foi possivel verificar os resultados obtidos.",globalTimeout);
  };

};

module.exports = new MainPage();
