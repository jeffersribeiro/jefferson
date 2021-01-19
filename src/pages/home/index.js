import React from 'react';

import Infos from '../../components/molecules/infos';
import Footer from '../../components/organisms/footer';

const content = {
  infos: [
    {
      skills: [
        { icon: 'brush', text: 'LOGO DESIGN' },
        { icon: 'computer', text: 'WEB DESIGN' },
        { icon: 'code', text: 'STATIC SITE DEVELOPMENT' },
      ],
      title: 'Cazz Photography',
      link: '#',
      linkImage: 'https://i.imgur.com/wpf6g3j.jpeg',
      direction: '',
      description:
        'A simple portfolio showcasing the different aspects of Cazz as a photographer.',
      btnText: 'View Details',
    },
    {
      skills: [
        { icon: 'computer', text: 'WEB DESIGN' },
        { icon: 'code', text: 'CUSTOM APP DEVELOPMENT' },
      ],
      title: 'Harlist',
      link: '#',
      linkImage: 'https://i.imgur.com/wpf6g3j.jpeg',
      direction: 'flex-start',
      description:
        'A simple portfolio showcasing the different aspects of Cazz as a photographer.',
      btnText: 'View Details',
    },
    {
      skills: [
        { icon: 'brush', text: 'LOGO DESIGN' },
        { icon: 'computer', text: 'WEB DESIGN' },
        { icon: 'code', text: 'WORDPRESS DEVELOPMENT' },
      ],
      title: 'Inspirational Pixels',
      link: '#',
      linkImage: 'https://i.imgur.com/wpf6g3j.jpeg',
      direction: '',
      description:
        'Web design blog focused on helping beginners with tutorials, videos, code snippets and freebies.',
      btnText: 'View Details',
    },
  ],
  footer: {
    title: "Let's Work Together",
    subtitle: "Have a project you'd like to discuss?",
    btnText: 'Get in Touch',
    social: [
      { icon: 'mail', label: 'SEB@SEBKAY.COM' },
      { icon: 'sports_basketball', label: 'IN DRIBBBLE' },
    ],
  },
};

const Home = () => (
  <div>
    {content.infos.map((info, index) => (
      <Infos key={index} {...info} />
    ))}
    <Footer {...content.footer} />
  </div>
);

export default Home;
