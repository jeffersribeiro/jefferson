import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router';

import Button, {
  buttonSize,
  buttonTheme,
  buttonType,
} from '../../atoms/button';
import Text from '../../atoms/text';
import Title from '../../atoms/title';
import NavLinks from '../../molecules/navlinks';
import Link, { linkType } from '../../atoms/link';

import useStyles from './styles';
import { fontSize } from '../../../common/_variables.css';

const Header = ({ title, subtitle, links }) => {
  const location = useLocation();
  const history = useHistory();

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div>
          <Link href="/" type={linkType.ANCOR}>
            SUB KAY
          </Link>
        </div>
        <div>
          <NavLinks links={links} />
        </div>
      </div>
      <div className={classes.main}>
        <div>
          <Title size={fontSize.title1} text={title} />
        </div>
        <div>
          <Text size={fontSize.title2}>{subtitle}</Text>
        </div>
        <div>
          {location.pathname === '/' && (
            <Button
              onClick={() => history.push('/projects')}
              size={buttonSize.LARGE}
              theme={buttonTheme.DEFAULT}
              type={buttonType.BUTTON}
            >
              <Text size={fontSize.subtitle1}>My projects</Text>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  links: PropTypes.array,
};

export default Header;
