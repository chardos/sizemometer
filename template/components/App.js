const history = require('../history.json');
import React, { Fragment } from 'react';
import { Normalize } from 'styled-normalize';
import { GlobalStyles, Filename, ChartWrapper, GraphCard, Size, Data } from './styled';
import { formatFileHistories } from './helpers';
import Header from './Header';
import Histories from './Histories/Histories';

const App = () => {
  const fileHistories = formatFileHistories(history);

  return (
    <Fragment>
      <Normalize />
      <GlobalStyles />
      <Header />
      <Histories histories={fileHistories} />
    </Fragment>
  );
};

export default App;