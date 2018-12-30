const rimraf = require('rimraf');
const fs = require('fs-extra');

const tmpDirectory = `${process.cwd()}/tmp`;

// Not using fs synchronous methods in this setup file breaks tests. 
// Keep using these for now.
rimraf.sync(tmpDirectory);
fs.mkdirSync(tmpDirectory);
