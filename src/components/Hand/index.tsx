import React from 'react'
import './style.css';
import styled from 'styled-components'

import {Card, cardsList} from '../../utils/cards'
import CardItem from '../CardItem';

const Container = styled.div``

const CardItemList = styled.div`
  display: flex;
  overflow: scroll;
`

interface HandProps {
  cards: Array<Card>,
  className?: string
}

const Hand: React.FC<HandProps> = ({cards, className}) => {

  return (
    <Container className="border rounded mr-3 p-3">
      <CardItemList>
        {cards.map((card, index) => <CardItem data={card} key={`${index}-{card.code}`} /> )}
      </CardItemList>
    </Container>
  );
};

export default Hand;