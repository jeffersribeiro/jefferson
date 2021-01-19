import React from 'react';
import PropTypes from 'prop-types';
// import useStyles from './styles';

export const imgType = {
  SQUARE: 'square',
  AROUND: 'around',
};

export const imgSize = {
  LARGE: '100px 50px',
};

const Image = ({ type, className, src }) => {
  // const classes = useStyles({ size, type });

  return <img type={type} className={className} src={src} />;
};

Image.defaultProps = {
  src: '',
  size: '',
  type: '',
};
Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};
export default Image;
