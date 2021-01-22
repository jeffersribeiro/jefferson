import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { Link } from 'react-router-dom';

export const linkType = {
  ANCOR: 'ancor',
  NAVIGATE: 'navigate',
};

const MyLink = ({ type, href, children, onClick, color }) => {
  const classes = useStyles({ type, color });
  return (
    <div type={type} className={classes.root}>
      {type === linkType.ANCOR ? (
        <a className={classes.link} href={href} onClick={onClick}>
          {children}
          {type === linkType.ANCOR && (
            <div className={classes.trace}> </div>
          )}
        </a>
      ) : (
        <Link className={classes.link} to={href}>
          {children}
        </Link>
      )}
    </div>
  );
};

MyLink.defaultProps = {
  color: 'black',
  type: linkType.ANCOR,
  children: '',
  href: '#',
  onClick: () => {},
};

MyLink.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default MyLink;
