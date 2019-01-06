import React from 'react';
import { Wrapper, Bar } from './styled';

const BarChart = ({ data }) => {
  const { width, height, bars } = data;

  const maxValue = bars.reduce((acc, curr) => {
    return (acc > curr.value) ? acc : curr.value;
  }, 0);

  console.log('maxValue', maxValue);

  return (
    <div>

      <Wrapper width={width} height={height}>
        {bars.map(bar => {
          const percentage = bar.value / maxValue * 100;
          return <Bar percentage={percentage} />
        })}  
      </Wrapper>
    </div>
  )
};

export default BarChart;

// const interface = {
//   width,
//   height,
//   bars: [{
//     value,
//     tooltip: [
//       {size: 12},
//       {author: 'Richard Tan'},
//       {commitMessage: 'Blah'},
//       {commitHash: 'fd2312c32'}
//     ]
//   }]
// }