import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase } from '@material-ui/core';
import useStyles from './styles';

export const buttonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
};

export const buttonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
};

export const buttonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const Button = ({
  type,
  onClick,
  children,
  theme,
  size,
  disabled,
}) => {
  const classes = useStyles({ size, theme });
  return (
    <ButtonBase
      className={classes.root}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
  theme: PropTypes.string,
  size: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  disabled: PropTypes.bool,
};

export default Button;
