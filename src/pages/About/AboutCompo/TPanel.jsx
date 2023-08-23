import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const CardWithImageAndDescription = ({ image, title, description }) => {
  return (
    
      <div className="card w-96 bg-base-300 shadow-xl ml-24">
    <figure><img className='w-full m-4 h-60 rounded-lg ' src={image} alt=""/></figure>
    <div className="card-body">
    <p className='text-lg text-center text-white uppercase'>{title}</p>
      <h2 className="text-center text-red-200 text-sm uppercase">{description}</h2>
     
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
    
  );
};

const TPanel = () => {
  const [cards, setCards] = useState([
    {
      image: 'https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/319234940_3306726226246680_1313282970014797787_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF7cUKOnnTQOknORwwcEuzwuVzvfX9dt0i5XO99f123SILlGFV6p7aP_FwhAhO30iT8ApPafTI0RZ_WJ3gc8eL4&_nc_ohc=u3s6FmSpHEMAX8FDRz8&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfBiagfLCOigCKuUHAxyZdG-7ZOlCIEEFz6K_2MItJi3Qw&oe=64E94EB1',
      title: 'Rifatul Islam',
      description: ' chip engineer of  BBA HUB',
    },
    {
      image: 'https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/246230591_567178431038106_7679508755306843248_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEr0BIzi4_Culbhzm-uhonwz1KUZOEr_s_PUpRk4Sv-z3FISJdiXAlNK1QUoYDjozQSO65gQ3PDrGsZwy_az42Q&_nc_ohc=dBNdEaXTcDwAX8L5gJi&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfBQz_YV4zvu9_HbzVAGhcTjzM0l37N5qkojcGQ_-zj-BA&oe=64E9DDC9',
      title: 'Zahid hasan Munna',
      description: 'finance accounters  of bba hub.',
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

  // const handleAddCard = () => {
  //   setCards([
  //     ...cards,
  //     {
  //       image: 'https://via.placeholder.com/150x150',
  //       title: 'Card ' + (cards.length + 1),
  //       description: 'This is a new card.',
  //     },
  //   ]);
  // };

  return (
    <div>
     <SectionTitle
                heading="Teachers Panel"
               
            ></SectionTitle>
     
     <h1 className='text-center text-2xl uppercase mb-10 italic text-white'>``we are providing best teachers``</h1>
      <div className="grid md:grid-cols-2 ml-10 gap-y-6">
        {cards.map((card) => (
          <div  className="grid md:grid-cols-2 gap-10">
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
