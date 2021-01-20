import React from 'react';
import useStyles from './styles';

import Button, {
  buttonSize,
  buttonTheme,
  buttonType,
} from '../../atoms/button';
import TextField from '../../atoms/textField';
import Text from '../../atoms/text';

const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <div className={classes.contact}>
          <div style={{ width: '100%', marginRight: 20 }}>
            <TextField label="NAME" />
          </div>
          <div style={{ width: '100%', marginLeft: 20 }}>
            <TextField label="EMAIL" />
          </div>
        </div>
        <div className={classes.content}>
          <TextField type="multiline" label="HOW CAN I HELP?" />
        </div>
        <div>
          <Button
            size={buttonSize.LARGE}
            theme={buttonTheme.ROUNDED}
            type={buttonType.BUTTON}
          >
            <Text size="20px">Send Message</Text>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
