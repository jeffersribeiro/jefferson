import React from 'react';
import Service from './';

export default {
  title: '/molecules/Service',
  Component: Service,
};

const Template = (args) => <Service {...args} />;

export const Minimun = Template.bind({});

Minimun.args = {};
