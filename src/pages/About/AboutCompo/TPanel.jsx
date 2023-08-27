import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const CardWithImageAndDescription = ({ image, title, description }) => {
  return (
    <div className="card bg-base-300 shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
      <figure>
        <img className='w-full h-60 rounded-lg' src={image} alt=""/>
      </figure>
      <div className="card-body">
        <p className='text-lg text-center text-white uppercase'>{title}</p>
        <h2 className="text-center text-red-200 text-sm uppercase">{description}</h2>
      </div>
    </div>
  );
};

const TPanel = () => {
  const [cards, setCards] = useState([
    {
      image: 'https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/319234940_3306726226246680_1313282970014797787_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF7cUKOnnTQOknORwwcEuzwuVzvfX9dt0i5XO99f123SILlGFV6p7aP_FwhAhO30iT8ApPafTI0RZ_WJ3gc8eL4&_nc_ohc=u3s6FmSpHEMAX8FDRz8&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfBiagfLCOigCKuUHAxyZdG-7ZOlCIEEFz6K_2MItJi3Qw&oe=64E94EB1',
      title: 'Rifatul Islam',
      description: 'chip engineer of BBA HUB',
    },
    {
      image: 'https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/246230591_567178431038106_7679508755306843248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEr0BIzi4_Culbhzm-uhonwz1KUZOEr_s_PUpRk4Sv-z3FISJdiXAlNK1QUoYDjozQSO65gQ3PDrGsZwy_az42Q&_nc_ohc=dBNdEaXTcDwAX8L5gJi&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfBQz_YV4zvu9_HbzVAGhcTjzM0l37N5qkojcGQ_-zj-BA&oe=64E9DDC9',
      title: 'Zahid hasan Munna',
      description: 'finance accounters of bba hub.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'sajjadul hoque',
      description: 'managing director of BBA HUB.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'Riben dhar',
      description: 'Photographer and video editor.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'sajjadul hoque',
      description: 'managing director of BBA HUB.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'Riben dhar',
      description: 'Photographer and video editor.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'sajjadul hoque',
      description: 'managing director of BBA HUB.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'Riben dhar',
      description: 'Photographer and video editor.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'sajjadul hoque',
      description: 'managing director of BBA HUB.',
    },
    {
      image: 'https://via.placeholder.com/150x150',
      title: 'Riben dhar',
      description: 'Photographer and video editor.',
    },
  ]);

  return (
    <div>
      <SectionTitle heading="Teachers Panel" />
      <h1 className='text-center text-2xl uppercase mb-10 italic text-white'>
        "We are providing the best teachers"
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mx-4 md:mx-10 lg:mx-20">
        {/* Loop through cards */}
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center">
            <CardWithImageAndDescription
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TPanel;

