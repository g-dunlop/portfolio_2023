const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  projectId: "um9snp",
  e2e: {
    baseUrl: process.env.VITE_SITE_URL,
  },
});
