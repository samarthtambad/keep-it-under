import React from 'react';
import './style.css';

import GameInformation from '../GameInformation';
import GamePlay from '../GamePlay';

const App: React.FC = () => {
  return (
    <div>
        <h1 className="h1 text-center mt-3 mb-3">Keep It Under</h1>
      <div className="row ">
        <GameInformation className="col-sm-3"/>
        <GamePlay className="col-sm-9"/>
      </div>
    </div>
  );
}

export default App;
