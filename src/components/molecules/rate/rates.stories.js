import React from 'react';
import Rate from './';
export default {
  title: '/molecules/Rate',
  Component: Rate,
};

const Template = (args) => <Rate {...args} />;

export const Default = Template.bind({});

Default.args = {
  rate:
    'Seb is an excellent web designer and faultless technician. He’s a pleasure to work with, great value for money and will always go the extra mile when necessary.',
  author: 'Chris Fenwick',
  authorPhoto: '',
  link: '#',
  linkText: 'Fenwick Studios',
};
