import React, { useState } from 'react';
import './style.css';
import styled from 'styled-components'
import GameInfoForm from '../GameInfoForm';
import GamePlay from '../GamePlay';
import {validateName, validateNumberInRange} from '../../utils/validation'

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
  
  const validate = {
    firstPlayerName: (name) => validateName("First Player name", name, 3),
    secondPlayerName: (name) => validateName("Second Player name", name, 3),
    goalNumber: (value) => validateNumberInRange("Goal number", value, 21, 120),
    numCards: (value) => validateNumberInRange("Number of cards", value, 8, 26)
  }

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
            <GameInfoForm initialValues={gameInfo} validate={validate} onSubmit={handleGameInfoFormSubmit} />
          </GameInfoFormContainer>
          <GameRulesContainer className="border rounded p-3">
            <h5 className="">Game Rules</h5>
            <RulesList className="pl-3 pr-3 pt-2">
              <Rule>Pick a goal number (G: between 21 and 120) and pick the number of cards (N: between 8 and 26) to be dealt to each player.</Rule>
              <Rule>
                Each player is dealt (face up) N cards randomly picked from a deck of 52 cards. 
                <i>Each card has an associated value (2-10 have corresponding value, J/Q/K have value of 10 and A can have a value of 1 or 11).</i>
              </Rule>
              <Rule>
                The players take turns and play a card from their hand by dragging it from their hand to the game arena. 
              </Rule>
              <Rule>
                The total value of cards played cannot exceed G. The player who gets the total to exceed G loses and the other player wins.
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
