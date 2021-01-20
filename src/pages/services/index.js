import React from 'react';

import Service from '../../components/organisms/service';
import Footer from '../../components/organisms/footer';

const serivces = [
  {
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
  },
  {
    icon: 'computer',
    title: 'Web Design',
    features: [
      {
        title: 'User Focused',
        description:
          "A website should be designed for the people who will use it, so that's exactly what I do. User focused design should be the primary goal of any website.",
      },
      {
        title: 'eCommerce',
        description:
          "Creating a good online store can be hard. Over the years I've learned the best ways to design stores that sell products and provide real value to customers.",
      },
      {
        title: 'Application UI',
        description:
          "The user interface of an application, whether it's mobile or desktop, can make or break a business. Getting the interface right and most importantly of all, making it easy to navigate, are the keys to a successful app.",
      },
    ],
  },
];

const Services = () => (
  <div>
    {serivces.map((item, index) => (
      <Service key={index} {...item} />
    ))}
    <Footer />
  </div>
);

export default Services;
