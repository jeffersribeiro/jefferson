import React from 'react';
import Image, { imgType, imgSize } from './';

export default {
  title: '/atoms/Image',
  Component: Image,
};

const Template = (args) => <Image {...args} />;

export const Around = Template.bind({});
export const Square = Template.bind({});

Around.args = {
  src: '',
  type: imgType.AROUND,
  size: imgSize.LARGE,
};

Square.args = {
  src: '',
  size: imgSize.LARGE,
  type: imgType.SQUARE,
};
