const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ii27ni', 
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  pageLoadTimeout: 9000,
  defaultCommandTimeout: 15000,
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
