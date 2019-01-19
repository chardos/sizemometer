const fs = require('fs-extra');
const findUp = require('find-up');

// Copy the history file into node_modules to be compiled into the build.
// exports.copyHistoryIn = async () => {
//   const historyOriginPath = `${process.cwd()}/.sizemometer/history.json`;
//   const historyDestinationPath = `${__dirname}/../../../template/history.json`;

//   await fs.copyFile(historyOriginPath, historyDestinationPath, (err) => {
//     if (err) throw err;
//     console.log(`${historyOriginPath} was copied to ${historyDestinationPath}`);
//   });
// }


// Copy the index file over to /dist
exports.copyIndexOver = async () => {
  const distDir = await findUp('dist', {cwd: __dirname});
  const indexOriginPath = `${__dirname}/../../../template/index.html`;
  const indexDestinationPath = `${distDir}/index.html`;

  await fs.copyFile(indexOriginPath, indexDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${indexOriginPath} was copied to ${indexDestinationPath}`);
  });
}