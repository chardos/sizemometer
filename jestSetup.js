const fs = require('fs-extra');
const { TEST_DIRECTORY } = require('./test/constants');

const tmpExists = fs.existsSync(TEST_DIRECTORY);

if (!tmpExists) {
  fs.mkdirSync(TEST_DIRECTORY);
}