import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 100,
    textAlign: 'center',
    '& p': {
      color: 'white',
      fontSize: 20,
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    width: '100%',
  },
}));

export default useStyles;
