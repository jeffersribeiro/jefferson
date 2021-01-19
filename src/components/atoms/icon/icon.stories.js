import React from 'react';
import Icon, { iconColor } from './';

export default {
  title: '/atoms/Icon',
  Component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Star = Template.bind({});
export const Home = Template.bind({});
export const Profile = Template.bind({});

Star.args = { name: 'star', color: iconColor.PRIMARY };
Home.args = { name: 'home', color: iconColor.SECONDARY };
Profile.args = { name: 'account_circle', color: iconColor.ACTION };
