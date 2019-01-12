const fs = require('fs-extra');

// Copy the history file into node_modules to be compiled into the build.
exports.copyHistoryIn = async () => {
  const historyOriginPath = `${process.cwd()}/.sizemometer/history.json`;
  const historyDestinationPath = `${__dirname}/../../../template/history.json`;

  await fs.copyFile(historyOriginPath, historyDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${historyOriginPath} was copied to ${historyDestinationPath}`);
  });
}


// Copy the index file over to .sizemometer/report
exports.copyIndexOver = async () => {
  const indexOriginPath = `${__dirname}/../../../template/index.html`;
  const indexDestinationPath = `${process.cwd()}/.sizemometer/report/index.html`;

  await fs.copyFile(indexOriginPath, indexDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${indexOriginPath} was copied to ${indexDestinationPath}`);
  });
}