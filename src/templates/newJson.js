module.exports = ({author, commitHash, commitMessage, size}) => `[{
  "author": "${author}",
  "commitHash": "${commitHash}",
  "commitMessage": "${commitMessage}",
  "size": "${size}"
}]
`