const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  projectId: "memboo",
  e2e: {
    baseUrl: process.env.VITE_SITE_URL,
  },
});
