import React from 'react'
import './style.css';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import {Card, cardsList} from '../../utils/cards'
import CardItem from '../CardItem';

const Container = styled.div`
  min-height: 200px;
`

const CardDropArea = styled.div`
  min-height: 200px;
`

interface GameArenaProps {
  currentPlayer: string,
  onPlayerMove: () => void,
  className?: string
}

const GameArena: React.FC<GameArenaProps> = ({currentPlayer, className}) => {

  return (
    <Container className="border rounded mr-3 p-3">
      <Droppable droppableId="arena" type={currentPlayer} direction="horizontal">
        {(provided) => (
          <CardDropArea ref={provided.innerRef} {...provided.droppableProps}>
            {provided.placeholder}
          </CardDropArea>
        )}
      </Droppable>
    </Container>
  );
};

export default GameArena;