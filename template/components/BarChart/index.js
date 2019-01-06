import React from 'react';
import { Wrapper, Bar } from './styled';

const BarChart = ({ fileHistoryItem }) => {
  const { filename, entries } = fileHistoryItem;

  const maxValue = entries.reduce((acc, curr) => {
    return (acc > curr.size) ? acc : curr.size;
  }, 0);

  console.log('entries', entries);
  console.log('maxValue', maxValue);

  return (
    <div>
      <h2>{filename}</h2>
      
      <Wrapper>
        {entries.map(entry => {
          const percentage = entry.size / maxValue * 100;
          return <Bar percentage={percentage} />
        })}  
      </Wrapper>
    </div>
  )
};

export default BarChart;