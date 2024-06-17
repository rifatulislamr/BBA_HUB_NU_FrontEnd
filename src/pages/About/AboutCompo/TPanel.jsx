import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const CardWithImageAndDescription = ({ image, title, description }) => {
  return (
    <div className="card bg-base-300 shadow-xl p-4 sm:p-6 md:p-8 lg:p-10">
      <figure>
        <img className="w-full h-60 rounded-lg" src={image} alt="" />
      </figure>
      <div className="card-body">
        <p className="text-center text-white text-lg uppercase">{title}</p>
        <h2 className="text-center text-red-200 text-sm space-x-0 ">
          {description}
        </h2>
      </div>
    </div>
  );
};

const TPanel = () => {
  const [cards, setCards] = useState([
    {
      image: "https://i.imgur.com/lUS9VwJ.jpg",
      title: "Rifatul Islam",
      description: "chip engineer of BBA HUB",
    },
    {
      image: "https://i.postimg.cc/yNmdTBwk/jahid.jpg",
      title: "Zahid hasan Munna",
      description: "finance accounters of bba hub.",
    },
    {
      image: "https://i.postimg.cc/LsfQz7Ws/sajjadsir.jpg",
      title: "sajjadul hoque",
      description: "managing director of BBA HUB.",
    },
    {
      image:
        "https://i.postimg.cc/Zq0DhKxM/361249579-814383556843387-6878866451807518584-n.jpg",
      title: "Riben dhar",
      description: "Photographer and video editor.",
    },
  ]);

  return (
    <div>
      <SectionTitle heading="Teachers Panel" />
      <h1 className="text-center text-2xl uppercase mb-10 italic text-white">
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
