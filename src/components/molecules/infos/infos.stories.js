import React from 'react';
import Infos from './';

export default {
  title: '/molecules/Infos',
  Component: Infos,
};

const Template = (args) => <Infos {...args} />;

export const Default = Template.bind({});

Default.args = {
  skills: [
    { icon: 'brush', text: 'LOGO DESIGN' },
    { icon: 'computer', text: 'WEB DESIGN' },
    { icon: 'code', text: 'STATIC SITE DEVELOPMENT' },
  ],
  title: 'Cazz Photography',
  link: '#',
  linkImage: 'https://i.imgur.com/wpf6g3j.jpeg',
  direction: 'flex-start',
  description:
    'A simple portfolio showcasing the different aspects of Cazz as a photographer.',
  btnText: 'View Details',
};
