const history = require('../history.json');
import React, { Fragment } from 'react';
import BarChart from './BarChart';
import { GlobalStyles, Filename, ChartWrapper, GraphCard, Size, Data } from './styled';
import filesize from 'filesize';
import { formatFileHistories } from './helpers';

const App = () => {
  const fileHistories = formatFileHistories(history);

  return (
    <Fragment>
      <GlobalStyles />
      {
        fileHistories.map(({filename, data}) => (
          <GraphCard>
            <Filename>{filename}</Filename>
            <ChartWrapper>
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
            </ChartWrapper>
          </GraphCard>
        ))
      }
    </Fragment>
  );
};

export default App;