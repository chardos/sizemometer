const fs = require('fs-extra');

exports.copyHistoryIn = async () => {
  const historyOriginPath = `${process.cwd()}/.sizemometer/history.json`;
  const historyDestinationPath = `${__dirname}/../../../template/history.json`;

  await fs.copyFile(historyOriginPath, historyDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${historyOriginPath} was copied to ${historyDestinationPath}`);
  });
}

exports.copyIndexOver = async () => {
  const indexOriginPath = `${__dirname}/../../../template/index.html`;
  const indexDestinationPath = `${process.cwd()}/.sizemometer/report/index.html`;

  await fs.copyFile(indexOriginPath, indexDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${indexOriginPath} was copied to ${indexDestinationPath}`);
  });
}