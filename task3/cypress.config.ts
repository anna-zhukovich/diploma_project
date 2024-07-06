const { defineConfig } = require("cypress");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  reporter: "mocha-allure-reporter",
  reporterOptions: {
    reportDir: "task3/cypress",
    overwrite: true,
    html: false,
    json: true,
    "mocha-allure-reporter": {
      options: {
        reportDir: "./task3/cypress",
      },
    },
  },

  e2e: {
    specPattern: "task3/cypress/e2e/*.cy.{js,jsx,ts,tsx}",
    supportFile: false,
    fixturesFolder: "task3/cypress/fixtures",

    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./task3/cypress/report/allure-results",
      });
      return config;
      // implement node event listeners here
    },
    screenshotOnRunFailure: true,
    video: false,
    viewportHeight: 900,
    viewportWidth: 1440,
  },
  env: {
    allureReuseAfterSpec: true,
    allureResultsPath: "./task3/cypress/report/allure-results",
    allure: true,
  },
});
