import React, { Fragment } from 'react';
import get from 'lodash.get';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './styled';
import { formatFileHistories, getGrandTotal } from './helpers';
import Header from './Header';
import Histories from './Histories/Histories';
import GetPanelWidth from './GetPanelWidth';
import store from '../store';
import { Provider } from 'react-redux';

const App = () => {
  // history comes from global created by jsonp include
  const fileHistories = formatFileHistories(window.snapshot);
  const grandTotal = getGrandTotal(fileHistories);
  const title = get(window, 'config.title');
  const theme = get(window, 'config.theme', {});

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Fragment>
          <Normalize />
          <GlobalStyles />
          <Header title={title} grandTotal={grandTotal} />
          <GetPanelWidth>
            {(panelWidth) => (
              <Histories histories={fileHistories} panelWidth={panelWidth} />
            )}
          </GetPanelWidth>
        </Fragment>
      </Provider>
    </ThemeProvider>
  );
};

export default App;