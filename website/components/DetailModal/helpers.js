import React from 'react';

export const addUrl = (commitMessage) => {
  const url = config.repositoryUrl;

  if (url) {
    const isGithub = /github.com/.test(url);
    if (isGithub) {
      return parseGithubUrl(url, commitMessage);
    }
  }

  return commitMessage;
}

/**
 * parseGithubUrl -
 * Wraps the commit message with <a href={githuburl}> if
 * matches a pull request commit message
 */
function parseGithubUrl(url, commitMessage) {
  // bracketed will find the pattern (#234)
  const bracketed = commitMessage.match(/\(#([\d])*\)/);
  if (bracketed) {
    // trims off the (#)
    const prNumber = bracketed[0].match(/\d+/)[0];
    const prUrl = `${url}/pull/${prNumber}`;
    return wrapWithAnchor(prUrl, commitMessage);
  }
  return commitMessage;
}

function wrapWithAnchor(url, commitMessage) {
  return <a href={url} target="_blank">{commitMessage}</a>
}
