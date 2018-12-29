const fs = require('fs-extra');
const { addConfigFile, writeFile } = require('./helpers');
const { cmd } = require('./wrappers');
const rimraf = require('rimraf');
const { largeText, smallText } = require('./dummys/textFiles');
const { SIZES_JSON_PATH } = require('./constants');
const add = require('../src/commands/add');
const mockAddGitData = require('./mocks/addGitData');

describe('Command: Add', () => {
  beforeEach(async () => {
    // Pass the "add" command as argument
    process.argv.splice(2);
    process.argv[2] = 'add'
  });

  afterEach(async () => {
    await rimraf.sync(`${process.cwd()}/tmp`);
  });

  describe('when there is no existing history.json', () => {
    it('it should create a history.json with the first entry', async () => {
      await addConfigFile({files: ['dist/test.txt']});
      await writeFile({
        path: 'dist/test.txt',
        body: smallText
      });

      await add(mockAddGitData())

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
      it('should not modify history.json', async () => {
        await addConfigFile({files: ['dist/test.txt']});
        await writeFile({
          path: 'dist/test.txt',
          body: smallText
        });

        await add(mockAddGitData())
        const firstBuffer = await fs.readFile(SIZES_JSON_PATH);

        await add(mockAddGitData())
        const secondBuffer = await fs.readFile(SIZES_JSON_PATH);

        expect(firstBuffer.toString()).toEqual(secondBuffer.toString());
      })
    })  

    describe('and there is a new commit', () => {
    
    })  
  })

  // describe('test multiple files', () => {
    
  // })
})
