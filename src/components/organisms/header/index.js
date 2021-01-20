import React, { useEffect, useState } from 'react';
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

const subtitle = [
  {
    title: 'Hey, I’m Jef.',
    pathname: '/Hey',
    desc:
      'A web designer and developer from Southampton in the UK. I create bespoke websites to help people go further online.',
  },
  {
    title: 'Projects',
    pathname: '/projects',
    desc:
      'For over 10 years I’ve been designing and developing websites. Below are some of my favourites.',
  },
  {
    title: 'Services',
    pathname: '/services',
    desc: 'Everything I offer with a detailed overview of each.',
  },
  {
    title: 'Process',
    pathname: '/process',
    desc:
      'From wireframes to code, below is a detailed look at how I run a typical project.',
  },
  {
    title: 'About',
    pathname: '/about',
    desc: "Find out who I am, where I'm from and what I'm all about.",
  },
  {
    title: 'Contact',
    pathname: '/contact',
    desc:
      'If you’d like to chat about a project please fill in the form below and I’ll get back within 1-2 days.',
  },
  {
    title: 'Blog',
    pathname: '/blog',
    desc:
      'Behind the scenes of products I’ve built, projects I’ve worked on and more.',
  },
];

const Header = ({ links }) => {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    (() => {
      subtitle.forEach((item, index) => {
        if (location.pathname === item.pathname) {
          setIndex(index);
        }
      });
    })();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div>
          <Link href="/" type={linkType.ANCOR}>
            R. Jef
          </Link>
        </div>
        <div>
          <NavLinks links={links} />
        </div>
      </div>
      <div className={classes.main}>
        <div>
          <Title
            size={fontSize.title1}
            text={subtitle[index].title}
          />
        </div>
        <div>
          <Text size={fontSize.title2}>{subtitle[index].desc}</Text>
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
