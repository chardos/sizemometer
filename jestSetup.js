const rimraf = require('rimraf');
const fs = require('fs-extra');
const { TEST_DIRECTORY } = require('./test/constants');

// Not using fs synchronous methods in this setup file breaks tests. 
// Keep using these for now.
rimraf.sync(`${process.cwd()}/tmp`);
fs.mkdirSync(TEST_DIRECTORY);
