import React from 'react';
import Footer from './';

export default {
  title: '/organisms/Footer',
  Component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Let's Work Together",
  subtitle: "Have a project you'd like to discuss?",
  btnText: 'Get in Touch',
  social: [
    { icon: 'mail', label: 'SEB@SEBKAY.COM' },
    { icon: 'sports_basketball', label: 'IN DRIBBBLE' },
  ],
};
