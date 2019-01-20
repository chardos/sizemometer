const { promisify } = require("es6-promisify");
const glob = require('glob');
const globPromise = promisify(glob);

module.exports = async function getPathFromGlob(file) {
  const globbedPaths = await globPromise(file.fullPath);
  throwErrorsIfNeeded(globbedPaths, file.shortPath);
  return globbedPaths[0];
}

function throwErrorsIfNeeded(globbedPaths, shortPath) {
  if (globbedPaths.length > 1) {
    console.log('Matching paths:', globbedPaths);
    throw new Error(`${shortPath} matches more than 1 file. Please change it to match only one.`)
  } else if (globbedPaths.length < 1) {
    throw new Error(`${shortPath} matches no files. Please change it to match one.`)
  } 
}