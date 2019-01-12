module.exports = {
  testEnvironment: 'node',
  setupFiles: [
    './jestSetup.js'
  ],
  watchPathIgnorePatterns: [
    './tmp'
  ]
};