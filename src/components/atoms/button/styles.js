import { makeStyles } from '@material-ui/core';
import { buttonSize, buttonTheme } from './';

const useStyles = makeStyles(() => ({
  root: ({ size, theme }) => ({
    transition: 'transform 500ms',
    transform: 'translateX(0) scale(0.9)',
    '&:hover, :focus': { transform: 'translateX(0) scale(1.1)' },
    width:
      (size === buttonSize.LARGE && 170) ||
      (size === buttonSize.MEDIUM && 150) ||
      (size === buttonSize.SMALL && 130),
    height:
      (size === buttonSize.LARGE && 60) ||
      (size === buttonSize.MEDIUM && 50) ||
      (size === buttonSize.SMALL && 40),
    borderRadius: 10,
    fontSize: 16,
    color: theme === buttonTheme.DEFAULT ? 'white' : 'black',
    backgroundColor:
      theme === buttonTheme.DEFAULT ? 'black' : 'white',
    border:
      theme === buttonTheme.DEFAULT
        ? 'solid 1px black'
        : 'solid 1px black',
  }),
}));

export default useStyles;
