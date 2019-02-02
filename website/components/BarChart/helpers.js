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

// Scales a percentage up based on a minimum size
export function scaleMin({ percentage, minimum }) {
  return percentage + (minimum * (100 - percentage)) / 100;
}

export function getPercentageFromRange({
  minValue, maxValue, currentValue, offsetBottom = 0,
}) {
  const range = maxValue - minValue;
  const adjustedValue = currentValue - minValue;
  const percentage = adjustedValue / range * 100;
  return scaleMin({ percentage, minimum: offsetBottom });
}
