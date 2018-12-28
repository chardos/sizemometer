const fs = require('fs-extra');
const { TEST_DIRECTORY } = require('./test/constants');
const DOT_SIZEMOMETER_PATH = `${TEST_DIRECTORY}/.sizemometer`;

// Not using fs synchronous methods in this setup file breaks tests. 
// Keep using these for now.
const tmpExists = fs.existsSync(TEST_DIRECTORY);
const dotSizemometerExists = fs.existsSync(DOT_SIZEMOMETER_PATH);

if (!tmpExists) {
  fs.mkdirSync(TEST_DIRECTORY);
}

if (!dotSizemometerExists) {
  fs.mkdirSync(DOT_SIZEMOMETER_PATH);
}