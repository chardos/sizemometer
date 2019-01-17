export const prepareData = (data) => {
  const maxValue = data.bars.reduce((acc, curr) => {
    return (acc > curr.value) ? acc : curr.value;
  }, 0);

  return {
    maxValue,
    bars: data.bars
  }
}