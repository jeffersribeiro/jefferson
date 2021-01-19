import { makeStyles } from '@material-ui/core';
import { imgType } from './';

const useStyles = makeStyles(() => ({
  root: ({ type }) => ({
    height: 'auto',
    width: 'auto',
    borderRadius: type === imgType.AROUND ? '50%' : '0',
  }),
}));
export default useStyles;
