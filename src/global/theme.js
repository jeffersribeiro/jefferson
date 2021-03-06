import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          padding: 0,
          margin: 0,
          overflowX: 'hidden',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
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
    primary: { main: '#3f51b5' },
  },
  typography: {
    fontFamily: 'regular',
  },
});

export default theme;
