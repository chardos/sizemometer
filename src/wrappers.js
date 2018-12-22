const git = require('git-rev')

exports.log = () => new Promise((resolve) => {
  git.log(function (array) {
    resolve(array);
  })
})
