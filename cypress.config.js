const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ii27ni', 
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,

  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
