import React from 'react';

import Router from './global/routes';
import EmailProveder from './pages/contact/context';
const App = () => (
  <div>
    <EmailProveder>
      <Router />
    </EmailProveder>
  </div>
);

export default App;
