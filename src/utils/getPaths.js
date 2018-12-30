module.exports = (scopePath) => {
  let rootPath = process.cwd();

  if (process.env.ENV === 'test') {
    rootPath = `${rootPath}/tmp/${scopePath}`;
  }

  return {
    root: rootPath,
    dotDirectory: `${rootPath}/.sizemometer`,
    config: `${rootPath}/.sizemometer/config.js`,
    history: `${rootPath}/.sizemometer/history.json`
  }
}