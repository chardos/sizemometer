import { takeLast } from 'ramda';

export const formatFileHistories = (histories) => {
  return Object.keys(histories).map(key => {
    const singleFileHistory = histories[key];

    return {
      filename: key,
      data: singleFileHistory
    }
  })
}

export const getGrandTotal = (histories) => histories.reduce((acc, curr) => {
  const currentValue = takeLast(1, curr.data)[0].size;
  return acc + currentValue;
}, 0)
