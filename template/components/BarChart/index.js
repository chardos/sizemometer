import React from 'react';
import { Graph, Bar } from './styled';
import Tooltip from './Tooltip';

const BarChart = ({ data }) => {
  const { width, height, bars } = data;

  const maxValue = bars.reduce((acc, curr) => {
    return (acc > curr.value) ? acc : curr.value;
  }, 0);

  return (
    <div>
      <Graph width={width} height={height}>
        {bars.map(bar => {
          const percentage = bar.value / maxValue * 100;
          return <Bar percentage={percentage}>
            <Tooltip data={bar.tooltip}>Test</Tooltip>
          </Bar>
        })}  
      </Graph>
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
//       {label: 'Size', value: 12},
//       {label: 'Author', value: 'Richard Tan'},
//       {label: 'Commit message', value: 'Blah},
//       {label: 'Commit hash', value: 'fd2312c32'},
//     ]
//   }]
// }