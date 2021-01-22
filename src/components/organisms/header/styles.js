import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    marginBottom: 20,
  },
  um: {
    lineHeight: 0,
    width: '100vw',
    height: 0,
    borderStyle: 'solid',
    borderColor: '#1a1a1a #1a1a1a #FAFAFA #1a1a1a',
    borderWidth: '0px 100vw 50px 0px',
  },
  nav: {
    display: 'flex',
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main: {
    width: '65%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));
export default useStyles;
