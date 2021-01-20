import React from 'react';
import Text from '../../atoms/text';
import useStyles from './styles';

const Copyright = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Text>© 2021 - Jefferson</Text>
    </div>
  );
};
export default Copyright;
