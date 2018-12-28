const fs = require('fs-extra');
const { addConfigFile, writeFile } = require('./helpers');
const { cmd } = require('./wrappers');
const nodeCmd = require('node-cmd');
const { largeText, smallText } = require('./dummys/textFiles');
const { SIZES_JSON_PATH } = require('./constants');

describe('Command: Add', () => {
  // beforeEach(async () => {
  //   process.argv.splice(2);
  //   process.argv[2] = 'add'
  // });

  describe('when there is no existing history.json', () => {
    it('it should create a history.json with the first entry', async () => {
      await addConfigFile({files: ['dist/test.txt']});
      await writeFile({
        path: 'dist/test.txt',
        body: smallText
      });

      await cmd('sizemometer add').then((output) => {
        console.log('output:', output);
      });

      const jsonExists = await fs.exists(SIZES_JSON_PATH);
      expect(jsonExists).toEqual(true);

      const sizesJsonBuffer = await fs.readFile(SIZES_JSON_PATH);
      expect(
        sizesJsonBuffer.toString()
      ).toMatchSnapshot()
    })
  })

  describe('when there is a pre-existing history.json', () => {
    describe('and there is no new commits', () => {
    
    })  

    describe('and there is a new commit', () => {
    
    })  
  })

  describe('test multiple files', () => {
    
  })
})
