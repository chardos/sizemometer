module.exports = (additionalCommits = []) => async (trackedFiles) => {
  const commits = [
    ...additionalCommits,
    [ '7c89a73bce5161c84b1a34130f4f902cca2d5f83',
        'Second commit',
        '11 minutes ago',
        'Richard Tan' ],
      [ '5fb38c82c5f1ce8879552f0020e98a2edbf0279b',
        'First commit',
        '81 minutes ago',
        'Richard Tan' ]
  ]

  const latestCommit = commits[0];
  const [commitHash, commitMessage, timeStamp, author] = latestCommit;

  const filesWithGitData = trackedFiles.map(file => ({
    ...file,
    commitHash,
    commitMessage,
    author
  }))

  return filesWithGitData
}
