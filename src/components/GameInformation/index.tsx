import React, { useState } from 'react'
import './style.css';

interface Props {
    className?: string
}

const GameInformation: React.FC<Props> = (props) => {

    // const [className, setClassName] = useState(props.className)
    // setClassName("border " + className)

    const handleStartNewGame= (event: React.MouseEvent) => {
        console.log("submit")
    }

    return (
        <div className={props.className}>
            <div className="border rounded ml-3 p-3">
                <h1 className="h4 mb-4">Game Information</h1>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputPlayer1">Player 1</label>
                    </div>
                    <input type="text" className="form-control" id="formInputPlayer1" placeholder="Enter name"></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputPlayer2">Player 2</label>
                    </div>
                    <input type="text" className="form-control" id="formInputPlayer2" placeholder="Enter name"></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputGoalNumber">G</label>
                    </div>
                    <input type="number" min="21" max="120" className="form-control" id="formInputGoalNumber" placeholder="Enter goal number"></input>
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputNumberOfCards">N</label>
                    </div>
                    <input type="number" min="21" max="120" className="form-control" id="formInputNumberOfCards" placeholder="Enter number of cards"></input>
                </div>
                <button className="btn btn-primary btn-sm" type="button" onClick={handleStartNewGame}>Start New Game</button>
            </div>
        </div>
    );
};

export default GameInformation;