import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: ({ direction }) => ({
    margin: '200px 60px',
    display: 'flex',
    flexDirection: direction ? 'row' : 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  skills: {
    padding: '10px 0',
  },
  imgContainer: {
    marginRight: 26,
    height: 800,
    width: 900,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
  },
  skill: {
    display: 'flex',
    padding: '5px 0',
    flexDirection: 'row',
  },
  img: {
    [theme.breakpoints.only('lg')]: {
      width: 650,
    },
    boxShadow: '0px 0px 20px 5px gray',
    position: 'relative',
    top: 40,
    height: 800,
    width: 800,
    borderRadius: 4,
  },
}));

export default useStyles;
