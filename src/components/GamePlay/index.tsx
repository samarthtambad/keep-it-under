import React, { useEffect, useState } from 'react'
import './style.css';
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import {Card, cardsList} from '../../utils/cards'
import {shuffle} from '../../utils/deck'

import Hand from '../Hand'
import GameArena from '../GameArena'

const Container = styled.div``
const GamePlayAreaContainer = styled.div``
const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: 0;
    background-color: rgba(0,0,0,0.7);
`

interface PopupProps {
    activate: boolean,
    handleSubmit: (value) => void
}

const Popup: React.FC<PopupProps> = ({activate, handleSubmit}) => {
    const [active, setActive] = useState(activate)

    const onChooseOne = () => {
        handleSubmit(1)
        setActive(false)
    }

    const onChooseEleven = () => {
        handleSubmit(11)
        setActive(false)
    }

    useEffect(() => {
        setActive(activate)
    }, [activate])

    return (
        <PopupContainer className={`${(active)? "d-block" : "d-none" } `}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Select ACE value</h5>
                </div>
                <div className="modal-body">
                    Please select a value for the ACE card you are playing. <br/>
                    <b>Note: </b> This value will be assigned to this particular ACE and cannot be changed for the duration of the game.
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={onChooseOne} className="btn btn-primary" data-dismiss="modal">Choose 1</button>
                    <button type="button" onClick={onChooseEleven} className="btn btn-primary">Choose 11</button>
                </div>
                </div>
            </div>
        </PopupContainer>
    );
}

interface GamePlayProps {
    gameInfo: object,
    startNewGame: boolean,
    onGameStart: () => void,
    className?: string,
}

const GamePlay: React.FC<GamePlayProps> = ({gameInfo, startNewGame, onGameStart, className}) => {
    const [currentPlayer, setCurrentPlayer] = useState("")
    const [firstPlayerCards, setFirstPlayerCards] = useState(Array<Card>())
    const [secondPlayerCards, setSecondPlayerCards] = useState(Array<Card>())
    const [playedCards, setPlayedCards] = useState(Array<Card>())
    const [totalValue, setTotalValue] = useState(0)
    const [activatePopup, setActivatePopup] = useState(false)
    const [aceValues, setAceValues] = useState(Array<number>())

    useEffect(() => {
        if(startNewGame) {
            // start new game
            const shuffledDeck: Array<Card> = shuffle(cardsList)
            const numCards = gameInfo['numCards']
            const tmpFirstPlayerCards: Array<Card> = []
            const tmpSecondPlayerCards: Array<Card> = []
            for(var i = 0; i < 2 * numCards; i=i+2) {
                tmpFirstPlayerCards.push(shuffledDeck[i])
                tmpSecondPlayerCards.push(shuffledDeck[i+1])
            }
            setCurrentPlayer("player-1")
            setFirstPlayerCards(tmpFirstPlayerCards)
            setSecondPlayerCards(tmpSecondPlayerCards)
            setPlayedCards([])
            // notify game start to parent
            onGameStart()
        }
    }, [startNewGame, onGameStart, gameInfo])

    useEffect(() => {
        var total = 0
        var aceIdx = 0
        playedCards.forEach((card) => {
            const value = card['value']
            switch(value) {
                case "ACE":
                    const aceValue = aceValues[aceIdx]
                    total += aceValue
                    aceIdx += 1
                    break
                case "JACK":
                case "QUEEN":
                case "KING":
                    total += 10
                    break
                default:
                    total += parseInt(value)
            }
        })
        // console.log(total)
        setTotalValue(total)
    }, [playedCards, gameInfo, aceValues])

    useEffect(() => {
        const goalNumber = gameInfo['goalNumber']
        if(totalValue > goalNumber) {   // game over
            setCurrentPlayer("over")
        }
    }, [totalValue, gameInfo])
    
    const onDragEnd = (result) => {
        const { destination, source } = result
        
        // drag destination is null
        if(!destination) {
            return
        }

        // dropped back to original position
        if(destination.droppableId === source.droppableId && destination.index === source.index) {
            return 
        }
        
        // if player made a move at the arena
        if(destination.droppableId === "arena") {
            if(source.droppableId === "player-1") {
                const card = firstPlayerCards[source.index]
                const tmpFirstPlayerCards = [...firstPlayerCards]
                const tmpPlayedCards = [...playedCards]
                tmpFirstPlayerCards.splice(source.index, 1)
                tmpPlayedCards.push(card)
                setFirstPlayerCards(tmpFirstPlayerCards)
                setPlayedCards(tmpPlayedCards)
                if(card['value'] === "ACE") {
                    setActivatePopup(true)
                }
                setCurrentPlayer("player-2")
            } else if(source.droppableId === "player-2") {
                const card = secondPlayerCards[source.index]
                const tmpSecondPlayerCards = [...secondPlayerCards]
                const tmpPlayedCards = [...playedCards]
                tmpSecondPlayerCards.splice(source.index, 1)
                tmpPlayedCards.push(card)
                setSecondPlayerCards(tmpSecondPlayerCards)
                setPlayedCards(tmpPlayedCards)
                if(card['value'] === "ACE") {
                    setActivatePopup(true)
                }
                setCurrentPlayer("player-1")
            }
            return
        }

        // player rearranging cards in hand
        if(destination.droppableId === source.droppableId) {
            if(source.droppableId === "player-1") {
                const card = firstPlayerCards[source.index]
                const tmpFirstPlayerCards = [...firstPlayerCards]
                tmpFirstPlayerCards.splice(source.index, 1)
                tmpFirstPlayerCards.splice(destination.index, 0, card)
                setFirstPlayerCards(tmpFirstPlayerCards)
            } else if(source.droppableId === "player-2") {
                const card = secondPlayerCards[source.index]
                const tmpSecondPlayerCards = [...secondPlayerCards]
                tmpSecondPlayerCards.splice(source.index, 1)
                tmpSecondPlayerCards.splice(destination.index, 0, card)
                setSecondPlayerCards(tmpSecondPlayerCards)
            }
            return
        }
    }
    
    const handlePopupSubmit = (value) => {
        const tmpAceValues = [...aceValues]
        tmpAceValues.push(value)
        setAceValues(tmpAceValues)
        setActivatePopup(false)
    }

    return (
        <Container>
            <DragDropContext onDragEnd={onDragEnd}>
                <GamePlayAreaContainer className="border rounded p-3">
                    <Hand player="player-1" disabled={currentPlayer !== "player-1"} cards={firstPlayerCards} className=""/>
                    <GameArena currentPlayer={currentPlayer} totalValue={totalValue} cards={playedCards} goalNumber={gameInfo['goalNumber']} />
                    <Hand player="player-2" disabled={currentPlayer !== "player-2"} cards={secondPlayerCards} className=""/>
                    <Popup activate={activatePopup} handleSubmit={handlePopupSubmit} />
                </GamePlayAreaContainer>
            </DragDropContext>
        </Container>
    );
};

export default GamePlay;