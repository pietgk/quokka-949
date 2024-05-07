const base = require("./jest.config.base");

module.exports = {
  ...base,
  modulePathIgnorePatterns: ["built", "build", "test.integration.ts$"],
  testTimeout: 10_000,
};

// Emulate global env, runs before tests
process.env = {
  ...process.env,
  IS_OFFLINE: "true",
  PSEUDONYMIZER_URL: "https://pseudonymizer.development.developmentmindler.se/",
};
