import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: ({ size, align, color }) => ({
    textAlign: align,
    fontSize: size,
    color: color,
    width: 600,
    margin: '10px',
  }),
}));

export default useStyles;
