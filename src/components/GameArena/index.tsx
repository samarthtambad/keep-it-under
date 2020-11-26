import React, { useEffect, useState } from 'react'
import './style.css';
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
  min-height: 200px;
`
const CardDropArea = styled.div`
  min-height: 200px;
`
const ArenaContainer = styled.div``
const GameInfoArea = styled.div``
const GameStatusArea = styled.div``
const GameArenaTitleContainer = styled.div``

interface GameArenaProps {
  currentPlayer: string,
  totalValue: number,
  goalNumber: number,
  className?: string
}

const GameArena: React.FC<GameArenaProps> = ({currentPlayer, totalValue, goalNumber, className}) => {
  const [player, setPlayer] = useState(currentPlayer)

  useEffect(() => {
    if(currentPlayer === "player-1" && totalValue === 0){
      setPlayer("")
    } else if(currentPlayer !== "over") {
        setPlayer((currentPlayer === "player-1") ? "player-2" : "player-1")
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
                <h1 className="text-center display-1">{(totalValue <= goalNumber) ? totalValue : "Game Over!"}</h1>
                <h1 className="text-center text-muted">{(totalValue <= goalNumber) ? "Total Value" : `${player.split("-").join(" ").toUpperCase()} loses`}</h1>
              </GameStatusArea>
              <GameInfoArea className="col-sm-5 pl-5">
                <h5 className="text-right"><span className="text-muted">Goal Number: </span> {goalNumber}</h5>
                <h5 className="text-right"><span className="text-muted">Last Move: </span> {player.split("-").join(" ").toUpperCase()}</h5>
              </GameInfoArea>
            </ArenaContainer>
            
            {provided.placeholder}
          </CardDropArea>
        )}
      </Droppable>
    </Container>
  );
};

export default GameArena;