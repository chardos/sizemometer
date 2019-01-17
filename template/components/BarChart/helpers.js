import { takeLast, pipe } from 'ramda';

export const prepareData = (data, panelWidth) => {
  const { bars } = data;
  const maxValue = bars.reduce((acc, curr) => {
    return (acc > curr.value) ? acc : curr.value;
  }, 0);

  const PADDING = 40;
  const numBars = Math.floor((panelWidth - PADDING) / 60);
  let croppedBars = takeLast(numBars, bars);

  const difference = numBars - croppedBars.length;

  if (difference > 0) {
    console.log('difference', difference);
    const nulls = new Array(difference).fill(null);
    croppedBars = nulls.concat(croppedBars);
  }

  // if croppedbars length is < numBars, add nulls to the front

  return {
    maxValue,
    bars: croppedBars
  }
}
