import React from 'react';
import { fontSize, colors } from '../../../common/_variables.css';
import Text from './';

export default {
  title: '/atoms/Text',
  Component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: colors.ERROR,
  size: fontSize.title2,
  children:
    'A web designer and developer from Southampton in the UK. I create bespoke websites to help people go further online.',
};
