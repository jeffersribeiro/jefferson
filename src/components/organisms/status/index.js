import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../atoms/text';
import useStyles from './styles';

const Status = ({ status, message }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Text color="#212121" size="40px">
          Status
        </Text>
        <Text size="60px" color="#008cff">
          {status}
        </Text>
        <Text color="#969696" size="35px">
          {message}
        </Text>
      </div>
    </div>
  );
};

Status.defaultProps = {
  status: '',
  message: '',
};

Status.propTypes = {
  status: PropTypes.string,
  message: PropTypes.string,
};

export default Status;
