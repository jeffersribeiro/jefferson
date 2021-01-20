import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

import Icon from '../../atoms/icon';
import Text from '../../atoms/text';
import Title, { titleSize } from '../../atoms/title';

const Step = ({ icon, title, description, direction }) => {
  const classes = useStyles({ direction });
  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div className={classes.icon}>
          <Icon size="100px" name={icon} color="primary" />
        </div>
        <div className={classes.content}>
          <Title size={titleSize.title2} text={title} />
          <Text size="25px">{description}</Text>
        </div>
      </div>
    </div>
  );
};

Step.defaultProps = {
  direction: 'row',
  icon: '',
  title: '',
  description: '',
};

Step.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  direction: PropTypes.string,
  description: PropTypes.string,
};

export default Step;
