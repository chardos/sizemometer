const fs = require('fs-extra');
const newJsonTemplate = require('./templates/newJson');

module.exports = async () => {
  console.log('Success! Running file-size-graph.');
  const jsonPath = `${process.cwd()}/sizes.json`;
  const fileName = `${process.cwd()}/README.md`;

  const stats = await fs.stat(fileName);
  const { size } = stats;

  console.log('stats', stats);  
  console.log('stats.size', stats.size);

  // look for the JSON (sizes.json)
  const jsonExists = await fs.exists(jsonPath);
  console.log('jsonExists', jsonExists);
  
  if(jsonExists){

  } else {
    fs.writeFile(jsonPath, newJsonTemplate({
      author: 'bro',
      commitHash: '3123124124',
      commitName: 'A commit name',
      size
    }))
  }
};
