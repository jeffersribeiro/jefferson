import React from 'react';

import Form from '../../components/organisms/form';
import Status from '../../components/organisms/status';

const status = {
  status: 'Available',
  message: 'I’m currently taking on new projects!',
};

const Contact = () => (
  <div>
    <Status {...status} />
    <Form />
  </div>
);

export default Contact;
