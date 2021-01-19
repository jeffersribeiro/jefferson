import React from 'react';
import { linkType } from '../../atoms/link';
import Header from './';

export default {
  title: '/organisms/Header',
  Component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Hey, I’m Seb.',
  subtitle:
    'A web designer and developer from Southampton in the UK. I create bespoke websites to help people go further online.',
  links: [
    { type: linkType.ANCOR, href: '#', label: 'Projects' },
    { type: linkType.ANCOR, href: '#', label: 'Services' },
    { type: linkType.ANCOR, href: '#', label: 'Process' },
    { type: linkType.ANCOR, href: '#', label: 'About' },
    { type: linkType.ANCOR, href: '#', label: 'Blog' },
  ],
};
