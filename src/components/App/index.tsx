import React, { useState } from 'react';
import './style.css';

import GameInfoForm from '../GameInfoForm';
import GamePlay from '../GamePlay';
import {validateName, validateNumberInRange} from './validation'

const App: React.FC = () => {
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
  }

  return (
    <div>
      <h1 className="h1 text-center mt-3 mb-3">Keep It Under</h1>
      <div className="row ">
        <GameInfoForm className="col-sm-3" initialValues={gameInfo} validate={validate} onSubmit={handleGameInfoFormSubmit} />
        <GamePlay className="col-sm-9"/>
      </div>
    </div>
  );
}

export default App;
