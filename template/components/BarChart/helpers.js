import { takeLast, pipe } from 'ramda';

export const prepareData = (data, panelWidth) => {
  const { bars } = data;
  const maxValue = bars.reduce((acc, curr) => {
    return (acc > curr.value) ? acc : curr.value;
  }, 0);

  const PADDING = 40;
  const numBars = Math.floor((panelWidth - PADDING) / 60);

  const preparedBars = pipe(
    takeLast(numBars),
    addEmptyBars(numBars)
  )(bars)

  return {
    maxValue,
    bars: preparedBars
  }
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