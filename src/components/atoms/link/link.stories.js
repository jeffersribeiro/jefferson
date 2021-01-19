import React from 'react';
import { action } from '@storybook/addon-actions';
import Link, { linkType } from './';

export default {
  title: '/atoms/Link',
  Component: Link,
};

const Template = (args) => <Link {...args}>Link</Link>;

export const Ancor = Template.bind({});

Ancor.args = {
  type: linkType.ANCOR,
  href: '#',
  onclick: action('clicked'),
};

export const Navigate = Template.bind({});

Navigate.args = {
  type: linkType.NAVIGATE,
  label: 'Navigate',
  href: '#',
  onclick: action('clicked'),
};
