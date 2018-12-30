const fs = require('fs-extra');
const { addConfigFile, writeFile } = require('./helpers');
const { largeText, smallText } = require('./dummys/textFiles');
const add = require('../src/commands/add');
const mockAddGitData = require('./mocks/addGitData');
const getPaths = require('../src/utils/getPaths');

describe('Command: Add', () => {
  beforeEach(async () => {
    // Pass the "add" command as argument
    process.argv.splice(2);
    process.argv[2] = 'add'
  });

  afterEach(async () => {
    // await rimraf.sync(`${process.cwd()}/tmp`);
  });

  describe('when there is no existing history.json', () => {
    it('it should create a history.json with the first entry', async () => {
      const scopePath = 'no-history';
      await addConfigFile({files: ['dist/test.txt'], scopePath});
      await writeFile({
        scopePath,
        path: 'dist/test.txt',
        body: smallText
      });

      await add(mockAddGitData(), scopePath)

      const historyExists = await fs.exists(
        getPaths(scopePath).history
      );
      expect(historyExists).toEqual(true);

      const sizesJsonBuffer = await fs.readFile(getPaths(scopePath).history);
      expect(
        sizesJsonBuffer.toString()
      ).toMatchSnapshot()
    })
  })

  describe('when there is a pre-existing history.json', () => {
    describe('and there is no new commits', () => {
      it('should not modify history.json', async () => {
        const scopePath = 'history-no-new-commits';
        await addConfigFile({files: ['dist/test.txt'], scopePath});
        await writeFile({
          scopePath,
          path: 'dist/test.txt',
          body: smallText
        });

        await add(mockAddGitData(), scopePath)
        const firstBuffer = await fs.readFile(getPaths(scopePath).history);

        await add(mockAddGitData(), scopePath)
        const secondBuffer = await fs.readFile(getPaths(scopePath).history);

        expect(firstBuffer.toString()).toEqual(secondBuffer.toString());
      })
    })  

    describe('and there is a new commit', () => {
    
    })  
  })

  // describe('test multiple files', () => {
    
  // })
})
