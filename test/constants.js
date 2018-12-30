const TEST_DIRECTORY = `${process.cwd()}/tmp`;
const SIZES_JSON_PATH = `${TEST_DIRECTORY}/.sizemometer/history.json`;

const getPaths = (scopePath) => {
  return {
    root: `${TEST_DIRECTORY}/${scopePath}`,
    dotDirectory: `${TEST_DIRECTORY}/${scopePath}/.sizemometer`,
    config: `${TEST_DIRECTORY}/${scopePath}/.sizemometer/config.js`,
    history: `${TEST_DIRECTORY}/${scopePath}/.sizemometer/history.json`
  }
}

module.exports = {
  TEST_DIRECTORY,
  SIZES_JSON_PATH,
  getPaths
}