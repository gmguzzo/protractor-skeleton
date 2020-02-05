const globalTimeout = 90000;

const mainPage = require('../pages/main.page');

const { Given, When, Then, Before, After } = require('cucumber');

Given('{string} page is open', {timeout:globalTimeout}, async (string) => {
  if(string.toLowerCase() === 'google') {
    await mainPage.get();
  }
});

When('I search for {string}', {timeout:globalTimeout}, async (string) => {
    await mainPage.search(string);
});

Then('I should get results related to {string}', {timeout:globalTimeout}, async (string) => {
  await mainPage.assertSearchResult(string.toLowerCase());
});
