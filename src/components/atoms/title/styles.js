import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: ({ transform, color, size }) => ({
    color: color,
    fontSize: size,
    textTransform: transform,
  }),
}));

export default useStyles;
