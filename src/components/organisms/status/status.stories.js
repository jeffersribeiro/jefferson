import React from 'react';
import Status from './';

export default {
  title: '/organisms/Status',
  Component: Status,
};

const Template = (args) => <Status {...args} />;

export const Default = Template.bind({});

Default.args = {
  status: 'Available',
  message: 'I’m currently taking on new projects!',
};
