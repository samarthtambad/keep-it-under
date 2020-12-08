import React, { useEffect, useState } from 'react'
import './style.css';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import {Card} from '../../utils/cards'
// import CardItem from '../CardItem';
import Hand from '../Hand'

const Container = styled.div`
  min-height: 200px;
`
const CardDropArea = styled.div`
  min-height: 200px;
`
const CardsPlayedListContainer = styled.div`
  width: 100%;
`
const ArenaContainer = styled.div``
const GameInfoArea = styled.div``
const GameStatusArea = styled.div``
const GameArenaTitleContainer = styled.div``

interface GameArenaProps {
  currentPlayer: string,
  totalValue: number,
  cards: Array<Card>,
  goalNumber: number,
  className?: string
}

const GameArena: React.FC<GameArenaProps> = ({currentPlayer, totalValue, cards, goalNumber, className}) => {
  const [player, setPlayer] = useState(currentPlayer)

  useEffect(() => {
    if(currentPlayer === "player-1" && totalValue === 0){
      setPlayer("")
    } else if(currentPlayer !== "over") {
      if(totalValue === goalNumber) {
        setPlayer(currentPlayer === "player-1" ? "player-2" : "player-1")
      } else {
        setPlayer(currentPlayer)
      }
    }
  }, [currentPlayer, totalValue])

  return (
    <Container className="border rounded mt-2 mb-2 p-3">
      <Droppable droppableId="arena" type={currentPlayer} direction="horizontal">
        {(provided) => (
          <CardDropArea ref={provided.innerRef} {...provided.droppableProps}>
            <ArenaContainer className={`row ${(currentPlayer === "")? "d-none" : "" }`}>
              <GameStatusArea className="col-sm-7">
                <GameArenaTitleContainer className="pb-3">
                  <h6 className="d-inline-block w-50">GAME ARENA</h6>
                  <h6 className="d-inline-block h6 w-50 text-muted text-right"><small><i>Drop your cards into this area</i></small></h6>
                </GameArenaTitleContainer>
                <h1 className="text-center display-1">{(totalValue < goalNumber) ? totalValue : "Game Over!"}</h1>
                <h1 className="text-center text-muted">{(totalValue < goalNumber) ? "Total Value" : `${player.split("-").join(" ").toUpperCase()} wins`}</h1>
              </GameStatusArea>
              <GameInfoArea className="col-sm-5 pl-5">
                <h5 className="text-right"><span className="text-muted">Goal Number: </span> {goalNumber}</h5>
                <h5 className="text-right"><span className="text-muted">Last Move: </span> {player.split("-").join(" ").toUpperCase()}</h5>
              </GameInfoArea>
              <CardsPlayedListContainer>
                <Hand height={85} player="" disabled={true} cards={cards} className="pl-3 pr-3"/>
              </CardsPlayedListContainer>
            </ArenaContainer>
            {provided.placeholder}
          </CardDropArea>
        )}
      </Droppable>
    </Container>
  );
};

export default GameArena;