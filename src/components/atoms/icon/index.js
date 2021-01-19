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

const MyIcon = ({ name, color }) => (
  <Icon style={styles} color={color}>
    {name}
  </Icon>
);

MyIcon.defaultProps = {
  name: '',
  color: iconColor.PRIMARY,
};

MyIcon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

export default MyIcon;
