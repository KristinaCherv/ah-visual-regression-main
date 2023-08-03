const { defineConfig } = require('cypress')
const { baseUrl } = require('./endpoints')

module.exports = defineConfig({
  e2e: {
    baseUrl,
    chromeWebSecurity: false,
    video: false
  }
})
