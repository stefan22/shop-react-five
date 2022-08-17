const { defineConfig } = require('cypress')

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    projectId: "j1o6r7",
    video: false,
  },
})

