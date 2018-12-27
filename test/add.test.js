const { addConfigFile, writeFile } = require('./helpers');
const { cmd } = require('./wrappers');
const nodeCmd = require('node-cmd');
const { largeText, smallText } = require('./dummys/textFiles');

// Test:
// no sizes.json
// with sizes.json
// multiple files

describe('Command: Add', () => {
  describe('when there is no existing sizes.json', () => {
    it('it should create a sizes.json with the first entry', async () => {
      await addConfigFile({files: ['dist/test.txt']});
      await writeFile({
        path: 'dist/test.txt',
        body: smallText
      });

      await cmd('sizemometer add').then((output, a, b) => {
        console.log('output:', output);
      });


      // assert file exists
      // assert a snapshot
    })
  })
})
