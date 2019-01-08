const opn = require('opn');

module.exports =  () => {
  const reportPath = `${process.cwd()}/.sizemometer/report/index.html`;
  opn(reportPath)
}