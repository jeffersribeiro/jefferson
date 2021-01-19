import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import { colors, fontSize } from '../../../common/_variables.css';
import useStyles from './styles';

export const textAlign = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
  JUTIFY: 'justify',
};

const Text = ({ align, children, color, size }) => {
  const classes = useStyles({ color, size, align });
  return (
    <Typography
      align={align}
      color={color}
      className={classes.root}
      size={size}
    >
      {children}
    </Typography>
  );
};

Text.defaultProps = {
  align: textAlign.left,
  size: fontSize.body1,
  color: colors.common.black,
  children: 'text',
};

Text.propTypes = {
  align: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
};

export default Text;
