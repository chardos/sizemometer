import React, { Fragment } from 'react';
import { Normalize } from 'styled-normalize';
import { GlobalStyles, Filename, ChartWrapper, GraphCard, Size, Data } from './styled';
import { formatFileHistories } from './helpers';
import Header from './Header';
import Histories from './Histories/Histories';
import GetPanelWidth from './GetPanelWidth';

const App = () => {
  // history comes from global created by jsonp include
  const fileHistories = formatFileHistories(history);

  return (
    <Fragment>
      <Normalize />
      <GlobalStyles />
      <Header />
      <GetPanelWidth>
        {(panelWidth) => (
          <Histories histories={fileHistories} panelWidth={panelWidth} />
        )}
      </GetPanelWidth>
    </Fragment>
  );
};

export default App;