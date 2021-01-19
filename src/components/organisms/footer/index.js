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
const Footer = ({ title, subtitle, btnText, social }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.horizontalAlign}>
        <div>
          <Title text={title} size={fontSize.title1} />
          <Text color="gray" size={fontSize.subtitle1}>
            {subtitle}
          </Text>
          <Button
            size={buttonSize.LARGE}
            theme={buttonTheme.DEFAULT}
            type={buttonType.BUTTON}
          >
            <Text size={fontSize.subtitle1}>{btnText}</Text>
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
      <div className={classes.owner}>
        <p>© 2021 Seb Kay. All rights reserved.</p>
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
