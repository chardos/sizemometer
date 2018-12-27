const git = require('git-rev')
const cmd = require('node-cmd');
const { promisify } = require('es6-promisify');
const asyncCmd = promisify(cmd.get);

exports.log = () => new Promise((resolve) => {
  git.log(function (array) {
    resolve(array);
  })
})
