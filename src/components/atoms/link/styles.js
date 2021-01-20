import { makeStyles } from '@material-ui/core';
import { linkType } from './';

const useStyles = makeStyles(() => ({
  '@keyframes show': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes out': {
    '0%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 0,
    },
  },
  root: {
    display: 'inline-block',
    '&:hover': {
      '& a div': {
        animation: '$show 200ms',
        width: '80%',
        opacity: 1,
      },
    },
    '&:not(:focus)': {
      '& a div': {
        animation: '$out 200ms',
        width: '10%',
      },
    },
  },
  link: ({ type }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: type === linkType.ANCOR ? '#4a4a4a' : '#0073f7',
    fontSize: 25,
    margin: '0 10px',
    textDecoration: 'none',
    transition: 'color 0.3s',
    '&:hover': {
      color: type === linkType.ANCOR ? 'black' : '#0073f7',
    },
    '& div': {
      transition: 'width 0.2s',
      width: 20,
      opacity: 0,
      height: 7,
      borderRadius: 8,
      backgroundColor: '#3f51b5',
    },
  }),
}));

export default useStyles;
