import React from 'react';
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  TransitionGroup,
  CSSTransition,
} from 'react-transition-group';

import Home from '../pages/home';
import Blog from '../pages/blog';
import About from '../pages/about';
import Contact from '../pages/contact';
import Process from '../pages/process';
import Projects from '../pages/projects';
import Services from '../pages/services';
import Header from '../components/organisms/header';
import { linkType } from '../components/atoms/link';

const router = [
  { name: 'Home', path: '/', Component: Home },
  { name: 'Blog', path: '/blog', Component: Blog },
  { name: 'About', path: '/about', Component: About },
  { name: 'Contact', path: '/contact', Component: Contact },
  { name: 'Process', path: '/process', Component: Process },
  { name: 'Projects', path: '/projects', Component: Projects },
  { name: 'Services', path: '/services', Component: Services },
];

const content = {
  header: {
    title: 'Hey, I’m Seb.',
    subtitle:
      'A web designer and developer from Southampton in the UK. I create bespoke websites to help people go further online.',
    links: [
      { type: linkType.ANCOR, href: '/projects', label: 'Projects' },
      { type: linkType.ANCOR, href: '/Services', label: 'Services' },
      { type: linkType.ANCOR, href: '/process', label: 'Process' },
      { type: linkType.ANCOR, href: '/contact', label: 'contact' },
      { type: linkType.ANCOR, href: '/About', label: 'About' },
      { type: linkType.ANCOR, href: '/Blog', label: 'Blog' },
    ],
  },
};

function AnimationApp() {
  const location = useLocation();
  return (
    <>
      <Header {...content.header} />
      <TransitionGroup component={null}>
        <CSSTransition
          leaving
          key={location.key}
          in={true}
          classNames="fade"
          timeout={200}
        >
          <Switch location={location}>
            {router.map(({ Component, name, path }, index) => (
              <Route key={index} exact name={name} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

const Routes = () => (
  <Router>
    <Switch>
      <AnimationApp />
    </Switch>
  </Router>
);

export default Routes;
