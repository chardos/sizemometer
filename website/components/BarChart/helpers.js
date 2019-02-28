import { takeLast } from 'ramda';

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

/**
 * prepareData -
 * takes the data and shortens to desired amount of bars depending on
 * screen width. Also returns a min anx max value;
 */
export const prepareData = (data, panelWidth) => {
  const PADDING = 40;
  const numBars = Math.floor((panelWidth - PADDING) / 60);

  const trimmedBars = takeLast(numBars, data);
  const barsWithEmpties = addEmptyBars(numBars)(trimmedBars);

  const maxValue = trimmedBars.reduce((acc, curr) => ((acc > curr.size) ? acc : curr.size), 0);
  const minValue = trimmedBars.reduce(
    (acc, curr) => ((acc < curr.size) ? acc : curr.size),
    trimmedBars[0].size,
  );

  return {
    maxValue,
    minValue,
    bars: barsWithEmpties,
  };
};
