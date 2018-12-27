const nodeCmd = require('node-cmd');
const { promisify } = require('es6-promisify');
exports.cmd = promisify(nodeCmd.get);
