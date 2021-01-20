import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';

import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import Title, { titleSize } from '../../atoms/title';

const Service = ({ icon, title, features }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.icon}>
          <Icon name={icon} color="primary" size="250px" />
        </div>
        <div className={classes.features}>
          <div>
            <Title size={titleSize.title1} text={title} />
          </div>
          <div>
            {features.map(({ title, description }, index) => (
              <div key={index}>
                <Title size={titleSize.title2} text={title} />
                <Text color="#828282" size="25px">
                  {description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Service.defaultProps = {
  icon: '',
  title: '',
  features: [],
};

Service.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  features: PropTypes.array,
};

export default Service;
