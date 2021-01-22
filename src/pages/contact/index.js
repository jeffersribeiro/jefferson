import React, { useContext } from 'react';

import Form from '../../components/organisms/form';
import Status from '../../components/organisms/status';
import { contactContext } from './context';
import sendEmail from './sendEmail';
const status = {
  status: 'Available',
  message: 'I’m currently taking on new projects!',
};

const Contact = () => {
  const email = useContext(contactContext);
  return (
    <div>
      <Status {...status} />
      <Form onClick={() => sendEmail(email)} />
    </div>
  );
};

export default Contact;
