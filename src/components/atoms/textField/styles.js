import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  label: {},
  input: {
    fontSize: 20,
    padding: '10px 20px',
    width: '99%',
    backgroundColor: '#ededed',
    border: 'solid 1px #a6a4a4',
    borderRadius: 4,
  },
}));

export default useStyles;
