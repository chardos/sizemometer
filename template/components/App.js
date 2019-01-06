const history = require('../history.json');
import React from 'react';
import BarChart from './BarChart';

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
          <BarChart fileHistoryItem={fileHistoryItem} />
        ))
      }
    </div>
  );
};

export default App;