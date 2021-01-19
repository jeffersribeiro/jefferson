import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:
      'url(https://sebkay.com/assets/img/bg-stripes.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
  },
  rate: {
    margin: '20px 0 100px 0',
    '&:before': {
      transform: 'translateX(-50%)',
      width: '60px',
      height: '6px',
      position: 'absolute',
      left: '50%',
      content: '""',
      borderRadius: '1000px',
      background: '#4b6cc1',
    },
    '&:after': {
      transform: 'translateX(-50%)',
      width: '60px',
      height: '6px',
      position: 'absolute',
      left: '50%',
      content: '""',
      borderRadius: '1000px',
      background: '#4b6cc1',
    },
  },
  photo: {
    height: 120,
    width: 120,
    borderRadius: 100,
    filter: 'grayscale(100%)',
  },
  author: {},
  text: {
    height: 100,
    width: 400,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export default useStyles;
