const fs = require('fs-extra');
const { addConfigFile, writeFile } = require('./helpers');
const { largeText, smallText } = require('./dummys/textFiles');
const add = require('../src/commands/add');
const mockAddGitData = require('./mocks/addGitData');
const getPaths = require('../src/utils/getPaths');

describe('Command: Add', () => {
  beforeEach(async () => {
    // Pass the "add" command as argument
    process.argv[2] = 'add'
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

      const historyJsonBuffer = await fs.readFile(getPaths(scopePath).history);
      expect(
        historyJsonBuffer.toString()
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
      it('should add a new entry to the history.json', async() => {
        const scopePath = 'history-new-commits';
        const trackedFilePath = 'dist/test.txt';
        const commitHash = '1239a73bce5161c84b1a34130f4f902cca2d5f83';
        await addConfigFile({files: ['dist/test.txt'], scopePath});
        await writeFile({
          scopePath,
          path: trackedFilePath,
          body: smallText
        });

        await add(mockAddGitData(), scopePath)
        const firstBuffer = await fs.readFile(getPaths(scopePath).history);

        // Update the tracked file to be 800bytes in size (largeText)
        await writeFile({
          scopePath,
          path: trackedFilePath,
          body: largeText
        });

        await add(mockAddGitData([
          [ 
            commitHash,
            'Third commit',
            '10 minutes ago',
            'Richard Tan' 
          ]
        ]), scopePath)
        const secondBuffer = await fs.readFile(getPaths(scopePath).history);

        const firstResult = JSON.parse(firstBuffer.toString());
        const secondResult = JSON.parse(secondBuffer.toString());

        expect(firstResult[trackedFilePath].length).toEqual(1);
        expect(secondResult[trackedFilePath].length).toEqual(2);
        expect(secondResult[trackedFilePath][0].size).toEqual(80);
        expect(secondResult[trackedFilePath][1].size).toEqual(800);
        expect(secondResult[trackedFilePath][1].commitHash).toEqual(commitHash);
      })
    })  
  })

  // describe('test multiple files', () => {
    
  // })
})
