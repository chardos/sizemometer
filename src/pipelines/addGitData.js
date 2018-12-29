const { log } = require('../wrappers');

module.exports = async (data) => {
  console.log('MOCKER ORIG')
  const { files } = data;
  
  const commits = [
    [ '7c89a73bce5161c84b1a34130f4f902cca2d5f83',
        'Removing bromap folder',
        '11 minutes ago',
        'Richard Tan' ],
      [ '5fb38c82c5f1ce8879552f0020e98a2edbf0279b',
        'Remove logs',
        '81 minutes ago',
        'Richard Tan' ]
  ]
  const latestCommit = commits[0];
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  const newFiles = files.map(file => ({
    ...file,
    commitHash,
    commitMessage,
    author
  }))

  return {
    ...data,
    files: newFiles
  }
}