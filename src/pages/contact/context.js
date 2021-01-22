import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const contactContext = createContext({
  email: '',
  setEmail: (email) => {
    email;
  },
  name: '',
  setName: (name) => {
    name;
  },
  message: '',
  setMessage: (message) => {
    message;
  },
});

const EmailProveder = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { Provider } = contactContext;

  return (
    <Provider
      value={{ email, setEmail, name, setName, message, setMessage }}
    >
      {children}
    </Provider>
  );
};

EmailProveder.propTypes = {
  children: PropTypes.string,
};

export default EmailProveder;
