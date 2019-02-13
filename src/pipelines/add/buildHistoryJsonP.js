/**
 * Creates a history.jsonp file based on the history.json file to be consumed
 * by a <script> tag in index.html
 */

module.exports = (history) => {
  const outputStr = `window.snapshot = ${JSON.stringify(history, null, 2)}`;
  return outputStr;
};
