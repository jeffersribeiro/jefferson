import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';
import Link from '../../atoms/link';

const NavLinks = ({ links }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {links.map(({ type, href, label }, index) => (
        <Link key={index} href={href} type={type}>
          {label}
        </Link>
      ))}
    </div>
  );
};

NavLinks.propTypes = {
  links: PropTypes.array,
};

export default NavLinks;
