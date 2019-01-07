export const prepareData = (data) =>{
  const maxValue = data.bars.reduce((acc, curr) => {
    return (acc > curr.value) ? acc : curr.value;
  }, 0);

  const width = (typeof data.width === 'number')
    ? `${data.width}px`
    : data.width;

  const height = (typeof data.height === 'number')
    ? `${data.height}px`
    : data.height;

  return {
    maxValue,
    width,
    height,
    bars: data.bars
  }
}