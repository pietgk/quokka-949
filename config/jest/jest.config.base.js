module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  moduleNameMapper: {
    "^@shared(.*)$": "<rootDir>/../../shared$1",
  },
};
