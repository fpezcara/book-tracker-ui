module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  },
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/setupEnv.js"],
  transformIgnorePatterns: [],
};
