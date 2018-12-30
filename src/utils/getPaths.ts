interface Paths {
  root: string,
  dotDirectory: string,
  config: string,
  history: string
}

function getPaths(scopePath: string): Paths {
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

export default getPaths;