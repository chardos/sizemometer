module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [
    './jestSetup.js'
  ],
  watchPathIgnorePatterns: [
    './tmp'
  ]
};