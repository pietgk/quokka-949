const base = require("./jest.config.base");
const path = require("path");
const root = path.resolve(__dirname, "../../");

module.exports = {
  ...base,
  testMatch: ["**/*/?(*.)test.integration.ts"],
  setupFilesAfterEnv: [path.resolve(root, "test", "setup-integration-test.js")],
  testTimeout: 30_000,
  verbose: true,
};
