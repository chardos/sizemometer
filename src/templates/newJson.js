module.exports = ({author, commitHash, commitName, size}) => `[{
  "author": "${author}",
  "commitHash": "${commitHash}",
  "commitName": "${commitName}",
  "size": "${size}"
}]
`