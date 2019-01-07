const history = require('../history.json');
import React from 'react';
import BarChart from './BarChart';
import { Size, Data } from './styled';
import filesize from 'filesize';

const App = () => {
  const fileHistories = Object.keys(history).map(key => {
    const historyItem = history[key];

    return {
      filename: key,
      data: {
        width: 'auto',
        height: 250,
        bars: historyItem.map((data) => {
          const { size, author, commitHash, commitMessage } = data;
          return {
            value: size,
            tooltip: [
              {label: 'Size', value: size},
              {label: 'Author', value: author},
              {label: 'Commit message', value: commitMessage},
              {label: 'Commit hash', value: commitHash},
            ]
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
            <BarChart data={data} tooltipTemplate={(tooltipData) => {
              return (
                <div>
                  <Size>{filesize(tooltipData[0].value)}</Size>
                  <Data>#{tooltipData[3].value}</Data>
                  <Data>{tooltipData[2].value}</Data>
                  <Data>{tooltipData[1].value}</Data>
                </div>
              )
            }}/>
          </div>
        ))
      }
    </div>
  );
};

export default App;