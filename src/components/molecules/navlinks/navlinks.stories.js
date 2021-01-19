import React from 'react';
import Navlinks from './';
import { linkType } from '../../atoms/link';
export default {
  title: '/molecules/Navlink',
  Component: Navlinks,
};

const Template = (args) => <Navlinks {...args} />;

export const Default = Template.bind({});

Default.args = {
  links: [
    { type: linkType.ANCOR, href: '#', label: 'Projects' },
    { type: linkType.ANCOR, href: '#', label: 'Services' },
    { type: linkType.ANCOR, href: '#', label: 'Process' },
    { type: linkType.ANCOR, href: '#', label: 'About' },
    { type: linkType.ANCOR, href: '#', label: 'Blog' },
  ],
};
