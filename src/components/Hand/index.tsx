import React from 'react'
import './style.css';

import {Card, cardsList} from '../../utils/cards'
import CardItem from '../CardItem';

interface HandProps {
  cards: Array<Card>,
  className?: string
}

const Hand: React.FC<HandProps> = ({cards, className}) => {

  return (
    <div>
      {cards.map((card, index) => (
        <CardItem data={card} key={`${index}-{card.code}`} />
      ))}
    </div>
  );
};

export default Hand;