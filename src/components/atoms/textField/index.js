import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './styles';
import Text from '../text';

const Field = ({ type, value, label, onChange, error }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Text size="20px" color="#bdbdbd">
        {label}
      </Text>
      <div>
        {type ? (
          <textarea
            className={classes.input}
            rowsMax={10}
            rows={10}
            value={value}
            style={{ width: '100%' }}
            variant="outlined"
            onChange={onChange}
          />
        ) : (
          <input
            className={classes.input}
            onChange={onChange}
            value={value}
            style={{ height: 60 }}
            error={error}
            variant="outlined"
          />
        )}
      </div>
    </div>
  );
};

Field.defaultProps = {
  type: '',
  error: false,
  label: '',
  value: '',
  onChange: () => {},
};

Field.propTypes = {
  error: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Field;
