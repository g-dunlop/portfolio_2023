const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "um9snp",
  e2e: {
    baseUrl:'http://127.0.0.1:5173/'
  }
});
