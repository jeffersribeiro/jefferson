import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px 0',
  },
  content: {
    padding: '120px 80px',
    borderTop: 'solid 6px #3f51b5',
    borderRadius: 5,
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  icon: { marginRight: 60 },
  features: {},
}));

export default useStyles;
