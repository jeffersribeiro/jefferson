import React from 'react';
import Form from './';

export default {
  title: '/organisms/Form',
  Component: Form,
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});

Default.args = {};
