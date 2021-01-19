import React from 'react';
import { action } from '@storybook/addon-actions';
import Button, { buttonSize, buttonTheme } from './';

export default {
  title: '/atoms/Button',
  Component: Button,
};
const Template = (args) => <Button {...args}>Learn more</Button>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});

Primary.args = {
  theme: buttonTheme.DEFAULT,
  size: buttonSize.SMALL,
  onClick: action('clicked'),
};

Secondary.args = {
  theme: buttonTheme.ROUNDED,
  size: buttonSize.MEDIUM,
  onClick: action('clicked'),
};

Tertiary.args = {
  theme: buttonTheme.ROUNDED,
  size: buttonSize.LARGE,
  onClick: action('clicked'),
};
