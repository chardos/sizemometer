const history = require('../history.json');
import React from 'react';
import BarChartWrapper from './BarChartWrapper';

console.log('history', history);

const App = () => {
  const fileHistories = Object.keys(history).map(key => {
    return {
      filename: key,
      entries: history[key]
    }
  })

  return (
    <div>
      {
        fileHistories.map(fileHistoryItem => (
          <BarChartWrapper fileHistoryItem={fileHistoryItem} />
        ))
      }
    </div>
  );
};

export default App;