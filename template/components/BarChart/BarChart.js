import React from 'react';
import { Graph } from './styled';
import Bar from './Bar/Bar'
import Tooltip from './Tooltip/Tooltip';
import { prepareData, getPercentageFromRange } from './helpers';

const BarChart = ({ data, width, height, tooltipTemplate, panelWidth, onBarClick, filename }) => {
  const { bars, maxValue, minValue } = prepareData(data, panelWidth);

  return (
    <div>
      <Graph width={width} height={height}>
        {bars.map(bar => {
          // nulls are the transparent dots
          if (bar === null) {
            return <Bar isEmpty />
          }

          const percentage = getPercentageFromRange({
            minValue,
            maxValue, 
            currentValue: bar.size, 
            offsetBottom: 10
          });

          return (
            <Bar
              bar={bar}
              filename={filename}
              percentage={percentage} 
              key={data.commitHash} 
              onBarClick={onBarClick}
            >
              <Tooltip data={data}>
                {tooltipTemplate && tooltipTemplate(bar)}
              </Tooltip>
            </Bar>
          )
        })}  
      </Graph>
    </div>
  )
};

export default BarChart;