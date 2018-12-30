const fs = require('fs-extra');
const { TEST_DIRECTORY } = require('./test/constants');

// Not using fs synchronous methods in this setup file breaks tests. 
// Keep using these for now.
const tmpExists = fs.existsSync(TEST_DIRECTORY);

if (!tmpExists) {
  fs.mkdirSync(TEST_DIRECTORY);
}
