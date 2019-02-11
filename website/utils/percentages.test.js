import { getPercentageFromRange, scaleMin } from './percentages';

describe('getPercentageFromRange', () => {
  const testCases = [
    {
      minValue: 150,
      maxValue: 300,
      currentValue: 150,
      offsetBottom: 0,
      expectedResult: 0,
    },
    {
      minValue: 150,
      maxValue: 300,
      currentValue: 225,
      offsetBottom: 0,
      expectedResult: 50,
    },
    {
      minValue: 150,
      maxValue: 300,
      currentValue: 150,
      offsetBottom: 10,
      expectedResult: 10,
    },
    {
      minValue: 150,
      maxValue: 300,
      currentValue: 225,
      offsetBottom: 0,
      expectedResult: 50,
    },
  ];

  testCases.forEach((testCase) => {
    const {
      minValue, maxValue, currentValue, offsetBottom, expectedResult,
    } = testCase;
    const result = getPercentageFromRange(testCase);
    it(`maxValue: ${maxValue}, minValue: ${minValue}, currentValue: ${currentValue}, offsetBottom: ${offsetBottom}, should return ${expectedResult}`, () => {
      expect(result).toEqual(testCase.expectedResult);
    });
  });
});

describe('scaleMin', () => {
  it('should return the correct percentage', () => {
    const testCases = [
      {
        percentage: 0,
        minimum: 10,
        expectedResult: 10,
      },
      {
        percentage: 50,
        minimum: 10,
        expectedResult: 55,
      },
      {
        percentage: 100,
        minimum: 10,
        expectedResult: 100,
      },
      {
        percentage: 50,
        minimum: 20,
        expectedResult: 60,
      },
    ];

    testCases.forEach((testCase) => {
      const result = scaleMin(testCase);
      expect(result).toEqual(testCase.expectedResult);
    });
  });
});
