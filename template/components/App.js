import React, { Fragment } from 'react';
import get from 'lodash.get';
import { Normalize } from 'styled-normalize';
import { GlobalStyles, Filename, ChartWrapper, GraphCard, Size, Data } from './styled';
import { formatFileHistories } from './helpers';
import Header from './Header';
import Histories from './Histories/Histories';
import GetPanelWidth from './GetPanelWidth';

const App = () => {
  // history comes from global created by jsonp include
  const fileHistories = formatFileHistories(history);
  const title = get(window, 'config.title');

  return (
    <Fragment>
      <Normalize />
      <GlobalStyles />
      <Header title={title} />
      <GetPanelWidth>
        {(panelWidth) => (
          <Histories histories={fileHistories} panelWidth={panelWidth} />
        )}
      </GetPanelWidth>
    </Fragment>
  );
};

export default App;