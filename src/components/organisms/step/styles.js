import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '70%',
    margin: '70px 0',
  },
  box: ({ direction }) => ({
    display: 'flex',
    flexDirection: direction,
  }),
  icon: {
    backgroundColor: '#f2f2f2',
    borderRadius: 4,
    margin: 10,
    padding: 20,
  },
  content: {},
}));
export default useStyles;
