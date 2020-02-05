const globalTimeout = 120000;

/** *************************************************************
 ** set configs for protractor tests
 **
 ************************************************************** */
exports.config = {
  onPrepare() {
    browser.waitForAngularEnabled(false);
  },
  // restartBrowserBetweenTests: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: ['features/*.feature'],

  cucumberOpts: {
    require: ['features/step_definitions/*.step.js'],
    format: ['json:results.json', 'node_modules/cucumber-pretty'],
    profile: false,
    'no-source': true,
  },

  // directConnect: true,

  // /////////////////////////////////
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub/',
  // ////////////////////////////////////////////////////////
  // Capabilities to be passed to the webdriver instance. //
  // ////////////////////////////////////////////////////////
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [],
    },
  },

  // ////////////////////////////////////////////////////////////////////////////////////////
  // Spec patterns are relative to the current working directly when protractor is called //
  // ////////////////////////////////////////////////////////////////////////////////////////
  // suites: {
  //     location: './e2e/location-qdim-table/*-spec.js',
  //     //horseshoe: './e2e/horseshoe/*-spec.js',
  //     //search: './e2e/search/*-spec.js',
  //     //appHome: './e2e/app-home/*-spec.js',
  //     //login: './e2e/login/*-spec.js',
  // },

  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // A base URL for your application under test. Calls to protractor.get() with relative paths will be prepended with this. //
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // baseUrl: 'https://infoplustest.localhost-testsubdomain1.infopluswms.com:8443/',
  baseUrl: 'https://google.com.br/',
  // baseUrl: "http://localhost/",

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // The params object will be passed directly to the Protractor instance, and can be accessed from your test as browser.params. //
  // It is an arbitrary object and can contain anything you may need in your test.                                               //
  //  This can be changed via the command line as: --params.login.user 'Joe'                                                     //
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  params: {
    accessToken: '',
  },

  // ////////////////////////////////////////
  // How long to wait for a page to load. //
  // ////////////////////////////////////////
  getPageTimeout: globalTimeout,
  allScriptsTimeout: globalTimeout,
};
