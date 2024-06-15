// file: src/components/Card.jsx

import React from 'react';
import { Cards } from "./constant"; 
import { useToggleBorder } from './Contex';

const Card = () => {
  const { activeCard, toggleCard, updateCardValue} = useToggleBorder();

  return (
    <div className="flex flex-col mx-4 my-[70px] lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
      {Cards.map((card, index) => (
        <div 
          key={index} 
          className={`cursor-pointer bg-red-50 px-3 py-4 lg:h-full lg:w-full rounded-md w-full md:w-1/2 lg:w-auto mb-4 lg:mb-0 ${activeCard === index ? 'border-2 border-red-800' : ''}`} 
          onClick={(event) => {
            toggleCard(index)
            updateCardValue(card.title) 
          }
          }
        >
          <div className={`bg-red-50 w-10 h-10 shadow-md relative bottom-8 left-[40%] ${activeCard === index ? 'border-2 border-red-800' : ''}`}>
            <img src={card.image} alt={card.title} className="w-full" />
          </div>
          <h2 className="font-semibold text-center font-gilory pb-1 mt-0">{card.title}</h2>
          <p className="text-center font-helvetica">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;