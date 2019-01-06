const history = require('../history.json');
import React from 'react';
import BarChart from './BarChart';

const App = () => {
  const fileHistories = Object.keys(history).map(key => {
    const historyItem = history[key];

    return {
      filename: key,
      data: {
        width: 500,
        height: 250,
        bars: historyItem.map((data) => {
          const { size, ...otherProps } = data;
          return {
            value: size,
            tooltip: otherProps
          }
        })
      }
    }
  })

  return (
    <div>
      {
        fileHistories.map(({filename, data}) => (
          <div>
            <h2>{filename}</h2>
            <BarChart data={data} />
          </div>
        ))
      }
    </div>
  );
};

export default App;