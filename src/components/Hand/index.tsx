import React from 'react'
import './style.css';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import {Card} from '../../utils/cards'
import CardItem from '../CardItem';

const Container = styled.div`
  min-height: 140px;
`

const CardItemList = styled.div`
  display: flex;
  overflow: scroll;
`

interface HandProps {
  player: string,
  cards: Array<Card>,
  disabled: boolean,
  className?: string
}

const Hand: React.FC<HandProps> = ({player, cards, disabled, className}) => {

  return (
    <Container className="border rounded p-3">
      <h6>{player.split("-").join(" ").toUpperCase()}</h6>
      <Droppable droppableId={player} type={player} direction="horizontal">
        {(provided) => (
          <CardItemList id="player-hand" ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => <CardItem data={card} index={index} disabled={disabled} key={`${index}-${card.code}`} /> )}
            {provided.placeholder}
          </CardItemList>
        )}
      </Droppable>
    </Container>
  );
};

export default Hand;