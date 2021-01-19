import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core';

import App from './App';
import theme from './global/theme';
import reportWebVitals from './reportWebVitals';

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
