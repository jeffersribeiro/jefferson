import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import {
//   TransitionGroup,
//   CSSTransition,
// } from 'react-transition-group';

import Home from '../pages/home';
import Blog from '../pages/blog';
import About from '../pages/about';
import Contact from '../pages/contact';
import Process from '../pages/process';
import Projects from '../pages/projects';
import Services from '../pages/services';

import Header from '../components/organisms/header';

import { linkType } from '../components/atoms/link';
import Copyright from '../components/molecules/copyright';

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
  links: [
    { type: linkType.ANCOR, href: '/projects', label: 'Projects' },
    { type: linkType.ANCOR, href: '/services', label: 'Services' },
    { type: linkType.ANCOR, href: '/process', label: 'Process' },
    { type: linkType.ANCOR, href: '/contact', label: 'contact' },
    { type: linkType.ANCOR, href: '/about', label: 'About' },
    { type: linkType.ANCOR, href: '/blog', label: 'Blog' },
  ],
};

// function AnimationApp() {
//   return (
//     <>
//       <Header {...content} />
//       <TransitionGroup
//         style={{ padding: 0, margin: 0 }}
//         component={null}
//       >
//         <CSSTransition
//           leaving
//           key={location.key}
//           in={true}
//           classNames="fade"
//           timeout={200}
//         >
//           <Switch location={location}>
//             {router.map(({ Component, name, path }, index) => (
//               <Route key={index} exact name={name} path={path}>
//                 <Component />
//               </Route>
//             ))}
//           </Switch>
//         </CSSTransition>
//       </TransitionGroup>
//       <Copyright />
//     </>
//   );
// }

const Routes = () => (
  <>
    <Router>
      <Header {...content} />
      <Switch>
        {router.map(({ Component, name, path }, index) => (
          <Route key={index} exact name={name} path={path}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
    <Copyright />
  </>
);

export default Routes;
