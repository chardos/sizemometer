import { takeLast, pipe } from 'ramda';

function addEmptyBars(numBars) {
  return (bars) => {
    const difference = numBars - bars.length;

    if (difference > 0) {
      const nulls = new Array(difference).fill(null);
      return nulls.concat(bars);
    }
    return bars;
  };
}


export const prepareData = (data, panelWidth) => {
  const maxValue = data.reduce((acc, curr) => ((acc > curr.size) ? acc : curr.size), 0);

  const minValue = data.reduce((acc, curr) => ((acc < curr.size) ? acc : curr.size), data[0].size);

  const PADDING = 40;
  const numBars = Math.floor((panelWidth - PADDING) / 60);

  const preparedBars = pipe(
    takeLast(numBars),
    addEmptyBars(numBars),
  )(data);

  return {
    maxValue,
    minValue,
    bars: preparedBars,
  };
};
