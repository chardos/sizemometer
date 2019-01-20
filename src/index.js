const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  let scriptName = process.argv[2];

  if (args.v || args.version) {
    scriptName = 'version';
  }

  const script = require(`./commands/${scriptName}`);


  script()
    .catch((err) => {
      console.log(err.message);

      if (process.env.DEBUG) {
        console.log(err);
      }
    });
};
