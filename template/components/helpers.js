import { takeLast } from 'ramda';

export const formatFileHistories = (history) => {
  return Object.keys(history).map(key => {
    const historyItem = history[key];

    return {
      filename: key,
      data: {
        bars: historyItem.map((data) => {
          const { size } = data;
          return {
            value: size,
            tooltip: data
          }
        })
      }
    }
  })
}

export const getGrandTotal = (histories) => histories.reduce((acc, curr) => {
  const currentValue = takeLast(1, curr.data.bars)[0].value;
  return acc + currentValue;
}, 0)
