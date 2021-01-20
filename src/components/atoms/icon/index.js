import React from 'react';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import styles from './styles';

export const iconColor = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ACTION: 'action',
  ERROR: 'error',
  DISABLED: 'disabled',
};

const MyIcon = ({ name, color, size }) => (
  <Icon style={{ ...styles, fontSize: size }} color={color}>
    {name}
  </Icon>
);

MyIcon.defaultProps = {
  size: '',
  name: '',
  color: iconColor.PRIMARY,
};

MyIcon.propTypes = {
  size: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
};

export default MyIcon;
