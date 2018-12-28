const git = require('get-git-data');

exports.log = () => new Promise((resolve) => {
  git.log(function (array) {
    resolve(array);
  })
})
