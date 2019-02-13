const { promisify } = require('es6-promisify');
const glob = require('glob');

const globPromise = promisify(glob);

function throwErrorsIfNeeded(globbedPaths, shortPath) {
  if (globbedPaths.length > 1) {
    // eslint-disable-next-line
    console.log('Matching paths:', globbedPaths);
    throw new Error(`${shortPath} matches more than 1 file. Please change it to match only one.`);
  } else if (globbedPaths.length < 1) {
    throw new Error(`${shortPath} matches no files. Please change it to match one.`);
  }
}

module.exports = async function getPathFromGlob(file) {
  console.log(`Finding path for ${file.fullPath}`);
  const globbedPaths = await globPromise(file.fullPath);

  throwErrorsIfNeeded(globbedPaths, file.shortPath);
  return globbedPaths[0];
};
