import React from 'react';
import { Graph } from './styled';
import Bar from './Bar/Bar'
import Tooltip from './Tooltip/Tooltip';
import { prepareData, getPercentageFromRange } from './helpers';

const BarChart = ({ data, width, height, tooltipTemplate, panelWidth, onBarClick }) => {
  const { bars, maxValue, minValue } = prepareData(data, panelWidth);

  return (
    <div>
      <Graph width={width} height={height}>
        {bars.map(bar => {
          // nulls are the transparent dots
          if (bar === null) {
            return <Bar isEmpty />
          }

          const { tooltip: tooltipData } = bar;

          const percentage = getPercentageFromRange({
            minValue,
            maxValue, 
            currentValue: bar.value, 
            offsetBottom: 10
          });

          return (
            <Bar
              bar={bar}
              percentage={percentage} 
              key={tooltipData.commitHash} 
              onBarClick={onBarClick}
            >
              <Tooltip data={tooltipData}>
                {tooltipTemplate && tooltipTemplate(tooltipData)}
              </Tooltip>
            </Bar>
          )
        })}  
      </Graph>
    </div>
  )
};

export default BarChart;