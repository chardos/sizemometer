module.exports = async () => {
  const command = process.argv[2];
  const script = require(`./commands/${command}.js`)
  script();
};
