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
      title: 'ideia Hu.mana',
      link: 'http://ideiahumana.com.br/',
      linkImage: 'https://i.ibb.co/ssjB2gB/hu-mana.png',
      direction: '',
      description:
        'A simple portfolio showcasing the different aspects of Cazz as a photographer.',
      btnText: 'View Details',
    },
  ],
};

const Home = () => (
  <div>
    {content.infos.map((info, index) => (
      <Infos key={index} {...info} />
    ))}
    <Footer />
  </div>
);

export default Home;
