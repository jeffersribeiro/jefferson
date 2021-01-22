import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

import Button, {
  buttonSize,
  buttonTheme,
  buttonType,
} from '../../atoms/button';
import TextField from '../../atoms/textField';
import Text from '../../atoms/text';
import { contactContext } from '../../../pages/contact/context';

const Form = ({ onClick }) => {
  const {
    email,
    message,
    name,
    setEmail,
    setMessage,
    setName,
  } = useContext(contactContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <div className={classes.contact}>
          <div style={{ width: '100%', marginRight: 20 }}>
            <TextField
              label="NAME"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </div>
          <div style={{ width: '100%', marginLeft: 20 }}>
            <TextField
              label="EMAIL"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
          </div>
        </div>
        <div className={classes.content}>
          <TextField
            type="multiline"
            label="HOW CAN I HELP?"
            value={message}
            onChange={(evt) => setMessage(evt.target.value)}
          />
        </div>
        <div>
          <Button
            size={buttonSize.LARGE}
            theme={buttonTheme.ROUNDED}
            type={buttonType.BUTTON}
            onClick={onClick}
          >
            <Text size="20px">Send Message</Text>
          </Button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  onClick: PropTypes.string,
};

export default Form;
