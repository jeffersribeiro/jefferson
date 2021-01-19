import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyles from './styles';

export const titleSize = {
  title1: '60px',
  title2: '30px',
};

export const titleTransform = {
  CAPITALIZE: 'capitalize',
  UPPERCASE: 'uppercase',
};

export const titleColor = {
  PRIMARY: 'black',
  SECONDARY: 'secondary',
  ACTION: 'action',
  ERROR: 'error',
  DISABLED: 'disabled',
};

const Title = ({ size, text, color, transform }) => {
  const classes = useStyles({ size, transform, color });
  return (
    <Typography
      size={size}
      transform={transform}
      className={classes.root}
      color={color}
    >
      {text}
    </Typography>
  );
};

Title.defaultProps = {
  size: titleSize.title1,
  transform: titleTransform.CAPITALIZE,
  color: titleColor.PRIMARY,
  text: '',
};

Title.propTypes = {
  size: PropTypes.string,
  transform: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Title;
