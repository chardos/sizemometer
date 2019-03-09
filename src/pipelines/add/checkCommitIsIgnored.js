/**
 * Checks the commitIgnorePattern in config to see if the latest commit
 * needs to be ignored.
 */

module.exports = (commitMessage, commitIgnorePattern) => {
  if (commitIgnorePattern instanceof RegExp) {
    return commitIgnorePattern.test(commitMessage)
  }

  if (typeof commitIgnorePattern === 'string') {
    return commitMessage.indexOf(commitIgnorePattern) >= 0;
  }

  throw new Error('Please make sure your `commitIgnorePattern` is either a string or RegExp');
};
