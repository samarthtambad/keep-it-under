import React, { useEffect, useState } from 'react'
import './style.css';
import { DragDropContext } from 'react-beautiful-dnd'
import {Card, cardsList} from '../../utils/cards'
import {shuffle} from '../../utils/deck'

import Hand from '../Hand'
import GameArena from '../GameArena'

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
            // console.log(tmpFirstPlayerCards)
            // console.log(tmpSecondPlayerCards)
            setCurrentPlayer("player-1")
            setFirstPlayerCards(tmpFirstPlayerCards)
            setSecondPlayerCards(tmpSecondPlayerCards)
            setPlayedCards([])
            // notify game start to parent
            onGameStart()
        }
    }, [startNewGame, onGameStart, gameInfo])

    const onDragStart = (result) => {
        console.log(result)
    }
    
    const onDragEnd = (result) => {
        console.log(result)
        const { destination, source, draggableId } = result
        if(!destination) {
            return
        }
        if(destination.droppableId === source.droppableId && destination.index === source.index) {
            return 
        }
        const card = firstPlayerCards[source.index]
        console.log(card)
    }

    const handleOnPlayerMove = () => {
        
    }

    return (
        <div className={className}>
            <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
                <div className="border rounded mr-3 p-3">
                    <Hand player="player-1" disabled={currentPlayer !== "player-1"} cards={firstPlayerCards} className=""/>
                    <GameArena currentPlayer={currentPlayer} onPlayerMove={handleOnPlayerMove} />
                    <Hand player="player-2" disabled={currentPlayer !== "player-2"} cards={secondPlayerCards} className=""/>
                </div>
            </DragDropContext>
        </div>
    );
};

export default GamePlay;