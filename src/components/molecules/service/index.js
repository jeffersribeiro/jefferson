import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

export const serviceType = {
  CODE: 'code',
  desgin: 'design',
};

const Service = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div></div>
    </div>
  );
};

Service.defaultProps = {
  type: '',
};

Service.propTypes = {
  type: PropTypes.string,
};

export default Service;
