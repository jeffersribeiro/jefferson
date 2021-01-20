import React from 'react';
import Step from './';

export default {
  title: '/organisms/Step',
  Component: Step,
};

const Template = (args) => <Step {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: '',
  title: '',
  direction: 'row',
  description: '',
};
