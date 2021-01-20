import React from 'react';
import Service from './';

export default {
  title: '/organisms/Service',
  Component: Service,
};

const Template = (args) => <Service {...args} />;

export const Minimun = Template.bind({});

Minimun.args = {
  icon: 'code',
  title: 'Web Development',
  features: [
    {
      title: 'Web DevelopmentHTML / CSS',
      description:
        "Creating a strong foundation for a website means getting the HTML and CSS architecture right. If you've got a design I can create the front-end code for it.",
    },
    {
      title: 'WordPress',
      description:
        'Almost all of the websites I make are done using WordPress and the reason is simple: It just works. You can easily update every piece of content, turn sections on or off and so much more.',
    },
    {
      title: 'Performance',
      description:
        "Having a fast website is key to keeping people around which ultimately converts them into customers. There are a myriad of techniques involved in making a fast website, all of which I've spent years learning. I build these techniques into every site I code and can also offer this as a standalone service for existing websites.",
    },
  ],
};
