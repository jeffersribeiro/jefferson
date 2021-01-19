import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalAlign: {
    height: 500,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContent: {},
  icon: { display: 'flex', flexDirection: 'row' },
  owner: {
    '& p': {
      color: 'white',
      fontSize: 18,
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
