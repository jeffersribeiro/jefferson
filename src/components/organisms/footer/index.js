import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import Title from '../../atoms/title';
import Button, {
  buttonSize,
  buttonTheme,
  buttonType,
} from '../../atoms/button';

import useStyles from './styles';
import { fontSize } from '../../../common/_variables.css';
import { useHistory } from 'react-router';

const social = [{ icon: 'mail', label: 'JEFFERSONR128@GMAIL.COM' }];

const Footer = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.horizontalAlign}>
        <div>
          <Title text="Let's Work Together" size={fontSize.title1} />
          <Text color="gray" size={fontSize.subtitle1}>
            Have a project you&apos;d like to discuss?
          </Text>
          <Button
            onClick={() => history.push('/contact')}
            size={buttonSize.LARGE}
            theme={buttonTheme.DEFAULT}
            type={buttonType.BUTTON}
          >
            <Text size={fontSize.subtitle1}>Get in Touch</Text>
          </Button>
        </div>
        <div className={classes.iconContent}>
          {social.map(({ icon, label }, index) => (
            <div className={classes.icon} key={index}>
              <Icon name={icon} color="primary" />
              <Text>{label}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  btnText: PropTypes.string,
  social: PropTypes.array,
};

export default Footer;
