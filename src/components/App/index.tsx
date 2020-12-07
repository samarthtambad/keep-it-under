import React, { useState } from 'react';
import './style.css';
import styled from 'styled-components'
import GameInfoForm from '../GameInfoForm';
import GamePlay from '../GamePlay';

const Container = styled.div``
const GameInfoContainer = styled.div``
const GamePlayContainer = styled.div``
const GameRulesContainer = styled.div``
const GameInfoFormContainer = styled.div``
const RulesList = styled.ol``
const Rule = styled.li`
  font-size: 12px;
  text-align: justify;
`

const App: React.FC = () => {
  const [startNewGame, setStartNewGame] = useState(false)
  const [gameInfo, setGameInfo] = useState({
        firstPlayerName: "",
        secondPlayerName: "",
        goalNumber: 21,
        numCards: 10
    })

  const handleGameInfoFormSubmit = (data) => {
    console.log("handleGameInfoFormSubmit", data)
    setGameInfo(data)
    setStartNewGame(true)
  }

  const handleOnGameStart = () => {
    console.log("Game Started")
    setStartNewGame(false)
  }

  return (
      <Container className="row p-3 ml-0 mr-0">
        <GameInfoContainer className="col-sm-3 pl-0 pr-0">
          <GameInfoFormContainer className="border rounded p-3 mb-3">
            <GameInfoForm initialValues={gameInfo} onSubmit={handleGameInfoFormSubmit} />
          </GameInfoFormContainer>
          <GameRulesContainer className="border rounded p-3">
            <h5 className="">Game Rules</h5>
            <RulesList className="pl-3 pr-3 pt-2">
              <Rule>Pick a goal number (G: [21, 120]) and pick the number of cards (N: [G/5, 26]) to be dealt to each player. Then start the game.</Rule>
              <Rule>
                Each player is dealt (face up) N cards randomly picked from a deck of 52 cards. <i>Each card has an associated value (2-10 have corresponding value, J/Q/K have value of 10 and ACE can have a value of 1 or 11). 
                (<b>Note:</b>  The player to whom the ACE belongs will be able to pick a value for it (1 or 11) when making a move) </i>
              </Rule>
              <Rule>
                The first player will make the first move. Players take turns and play a card from their hand by dragging it to the game arena.
              </Rule>
              <Rule>
                The player whose move raises the total value above G loses and the other player wins.
              </Rule>
            </RulesList>
          </GameRulesContainer>
        </GameInfoContainer>
        <GamePlayContainer className="col-sm-9 pl-3 pr-0">
          <GamePlay gameInfo={gameInfo} startNewGame={startNewGame} onGameStart={handleOnGameStart}/>
        </GamePlayContainer>
      </Container>
  );
}

export default App;
