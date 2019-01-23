import { takeLast, pipe } from 'ramda';

export const prepareData = (data, panelWidth) => {
  const { bars } = data;
  const maxValue = bars.reduce((acc, curr) => {
    return (acc > curr.value) ? acc : curr.value;
  }, 0);

  const minValue = bars.reduce((acc, curr) => {
    return (acc < curr.value) ? acc : curr.value;
  });

  const PADDING = 40;
  const numBars = Math.floor((panelWidth - PADDING) / 60);

  const preparedBars = pipe(
    takeLast(numBars),
    addEmptyBars(numBars)
  )(bars)

  return {
    maxValue,
    minValue,
    bars: preparedBars
  }
}

export function getPercentageFromRange({minValue, maxValue, currentValue, offsetBottom = 0}) {
  const range = maxValue - minValue;
  const adjustedValue = currentValue - minValue;
  const percentage = adjustedValue / range * 100;
  return scaleMin({percentage, minimum: offsetBottom});
}

// Scales a percentage up based on a minimum value
export function scaleMin({percentage, minimum}) {
  return percentage + (minimum * (100 - percentage)) / 100;
}

function addEmptyBars(numBars) {
  return (bars) => {
    const difference = numBars - bars.length;
  
    if (difference > 0) {
      const nulls = new Array(difference).fill(null);
      return nulls.concat(bars);
    }
    return bars;
  }
}