import React from 'react';
import TextField from './';

export default {
  title: '/atoms/TextField',
  Compoent: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Input = Template.bind({});
export const TextArea = Template.bind({});

Input.args = { label: 'NAME' };
TextArea.args = { label: 'HOW CAN I HELP?', type: 'multiline' };
