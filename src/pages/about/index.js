import React from 'react';

import Button, {
  buttonSize,
  buttonTheme,
  buttonType,
} from '../../components/atoms/button';
import Text from '../../components/atoms/text';
import Title from '../../components/atoms/title';
import Divider from '../../components/atoms/divider';

import Footer from '../../components/organisms/footer';

import useStyles from './styles';
import { useHistory } from 'react-router';

const About = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Title text="Who I Am" />
        <Text size="30px">
          My name&apos;s Seb. I&apos;m a web designer and developer
          based in Southampton, UK.
        </Text>

        <Text size="30px">
          During the day I’m the lead developer at a local agency.
          During the evenings I spend my time working on freelance
          projects and building my own products.
        </Text>

        <Text size="30px">
          My most recent project is called Calendi. It’s a simple yet
          powerful editorial calendar for WordPress.
        </Text>
      </div>
      <Divider />
      <div className={classes.content}>
        <Title text="From Start to Finish" />
        <Text size="30px">
          From wireframes to design to code. I cover every step of the
          process in getting a website launched.
        </Text>
        <Button
          onClick={() => history.push('/process')}
          size={buttonSize.LARGE}
          theme={buttonTheme.DEFAULT}
          type={buttonType.BUTTON}
        >
          <Text size="18px">See My Process</Text>
        </Button>
      </div>
      <Divider />
      <div className={classes.content}>
        <Title text="Why Work With Me" />
        <Text size="30px">
          There’s nothing I enjoy more than designing and developing
          good websites for nice people. It really is that simple.
        </Text>
        <Text size="30px">
          I’ve spent many years trying to perfect what I do and while
          I’ll never be perfect, I do my best to come close.
        </Text>
        <Text size="30px">
          If you’ve got a project you’d like to work on with me just
          get in touch and we can get to work!
        </Text>
        <Button
          onClick={() => history.push('/contact')}
          size={buttonSize.LARGE}
          theme={buttonTheme.DEFAULT}
          type={buttonType.BUTTON}
        >
          <Text size="18px">Contact Me</Text>
        </Button>
      </div>
      <Divider />
      <Footer />
    </div>
  );
};

export default About;
