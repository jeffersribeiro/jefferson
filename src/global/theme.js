import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          padding: 0,
          margin: 0,
        },
      },
    },
  },
  palette: {
    text: {
      primary: '#000000',
      secondary: '#d6d6d6',
      disabled: '#cfcfcf',
      hint: '#0c87fa',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    error: {
      main: '#fc1e1e',
    },
    primary: { main: '#0c87fa' },
  },
  typography: {
    fontFamily: 'regular',
  },
});

export default theme;
