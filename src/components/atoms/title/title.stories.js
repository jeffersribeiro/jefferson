import React from 'react';
import Title, { titleSize, titleColor, titleTransform } from './';

export default {
  title: '/atoms/Title',
  Component: Title,
};

const Template = (args) => <Title {...args} />;

export const Capitalize = Template.bind({});
export const Uppercase = Template.bind({});

Capitalize.args = {
  transform: titleTransform.CAPITALIZE,
  color: titleColor.ACTION,
  size: titleSize.title1,
  text: 'Hey, I’m Seb.',
};

Uppercase.args = {
  size: titleSize.title2,
  transform: titleTransform.UPPERCASE,
  color: titleColor.SECONDARY,
  text: 'Hey, I’m Seb.',
};
