import React, { useEffect, useState } from 'react'
import './style.css';

interface Props {
    className?: string
}

const nameValidation = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required`
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
        return 'Invalid characters'
    }
    if (fieldValue.trim().length < 3) {
        return `${fieldName} needs to be at least three characters`
    }
    return null
}

const validateNumberInRange = (fieldName, fieldValue, lowerBound, upperBound) => {
    if (!fieldValue) {
        return fieldName + ' is required'
    }
    if (fieldValue < lowerBound) {
        return fieldName + ' must be at least ' + lowerBound
    }
    if (fieldValue > upperBound) {
        return fieldName + ' must be under ' + upperBound
    }
    return null
}

const GameInformation: React.FC<Props> = (props) => {
    const [firstPlayerName, setFirstPlayerName] = useState("")
    const [secondPlayerName, setSecondPlayerName] = useState("")
    const [goalNumber, setGoalNumber] = useState(21)
    const [numCards, setNumCards] = useState(10)

    const [touched, setTouched] = useState({
        firstPlayerName: true,
        secondPlayerName: false,
        goalNumber: false,
        numCards: false
    })
    const [errors, setErrors] = useState({
        firstPlayerName: "Enter firstPlayerName",
        secondPlayerName: null,
        goalNumber: null,
        numCards: null
    })
    
    const isValid = (fieldName) => {
        return (touched[fieldName] && errors[fieldName] != null)
    }

    const getValidityClass = (fieldName) => {
        return isValid(fieldName) ? "is-invalid" : ""
    }

    useEffect(() => {
        console.log("firstPlayerName changed to", firstPlayerName)
        const error = nameValidation("First Player Name", firstPlayerName)
        if(error === null) {
            console.log(firstPlayerName, "is a valid name")
        } else {
            console.log(error)
        }
    }, [firstPlayerName])

    useEffect(() => {
        console.log("goalNumber changed to", goalNumber)
        const error = validateNumberInRange("Goal Number", goalNumber, 21, 120)
        if(error === null) {
            console.log(goalNumber, "is a valid number")
        } else {
            console.log(error)
        }
    }, [goalNumber])


    const handleStartNewGame= (event: React.MouseEvent) => {
        console.log("Start New Game", firstPlayerName, secondPlayerName, goalNumber, numCards)
    }

    console.log(touched.firstPlayerName, errors.firstPlayerName != null)

    return (
        <div className={props.className}>
            <div className="border rounded ml-3 p-3">
                <h1 className="h4 mb-4">Game Information</h1>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputPlayer1">Player 1</label>
                    </div>
                    <input type="text" 
                        className={`form-control ${getValidityClass("firstPlayerName")}`} 
                        value={firstPlayerName} onChange={(e) => setFirstPlayerName(e.target.value)} id="formInputPlayer1" 
                        placeholder="Enter name"></input>
                    { isValid("firstPlayerName") && <div className="invalid-feedback"> { errors["firstPlayerName"] }</div> }
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputPlayer2">Player 2</label>
                    </div>
                    <input type="text" className={`form-control ${getValidityClass("secondPlayerName")}`} 
                        value={secondPlayerName} onChange={(e) => setSecondPlayerName(e.target.value)} id="formInputPlayer2" 
                        placeholder="Enter name"></input>
                    { isValid("secondPlayerName") && <div className="invalid-feedback"> { errors["secondPlayerName"] }</div> }
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputGoalNumber">Goal Num (G)</label>
                    </div>
                    <input type="number" min="21" max="120" className={`form-control ${getValidityClass("goalNumber")}`}  
                        value={goalNumber} onChange={(e) => setGoalNumber(parseInt(e.target.value))} id="formInputGoalNumber" 
                        placeholder="Enter goal number"></input>
                    { isValid("goalNumber") && <div className="invalid-feedback"> { errors["goalNumber"] }</div> }
                </div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="formInputNumberOfCards">Num Cards (N)</label>
                    </div>
                    <input type="number" min="10" max="26" className={`form-control ${getValidityClass("numCards")}`} 
                        value={numCards} onChange={(e) => setNumCards(parseInt(e.target.value))} id="formInputNumberOfCards" 
                        placeholder="Enter number of cards"></input>
                    { isValid("numCards") && <div className="invalid-feedback"> { errors["numCards"] }</div> }
                </div>
                <button className="btn btn-primary btn-sm" type="button" onClick={handleStartNewGame}>Start New Game</button>
            </div>
        </div>
    );
};

export default GameInformation;