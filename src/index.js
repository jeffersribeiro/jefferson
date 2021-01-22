import React from 'react';
import { render } from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import App from './App';
import theme from './global/theme';
import reportWebVitals from './reportWebVitals';

render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
