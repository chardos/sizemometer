import { getPercentage } from './helpers';

describe('getPercentage', () => {
  it('should return the correct percentage', () => {
    const testCases = [{
      minValue: 150,
      maxValue: 300,
      currentValue: 150,
      offset: 0,
      expectedResult: 0,
    }]

    testCases.forEach((testCase) => {
      const result = getPercentage(testCase);
      expect(result).toEqual(testCase.expectedResult);
    })

    // getPercentage({minValue, maxValue, currentValue, offset})
  })
})


// 300 - 100%
// 225 - 55%
// 150 - 10%

// maxValue 300
// minValue 150


// range = maxValue - minValue = 150

// 300 - minValue = 150

// 225 - minValue = 75

// 150 - minValue = 0;
