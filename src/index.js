module.exports = () => {
  const command = process.argv[2];
  const script = require(`./commands/${command}`);
  script()
    .catch((err) => {
      console.log(err);
    });
};
