module.exports = () => {
  const command = process.argv[2];
  const script = require(`./commands/${command}.js`);
  script()
    .catch((err) => {
      console.log(err);
    });
};
