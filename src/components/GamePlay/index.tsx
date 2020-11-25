import React, { useEffect, useState } from 'react'
import './style.css';

import {Card, cardsList} from './cards'
import {shuffle} from './utils'
import Hand from '../Hand'

interface GamePlayProps {
    gameInfo: object,
    startNewGame: boolean,
    onGameStart: () => void,
    className?: string,
}

const GamePlay: React.FC<GamePlayProps> = ({gameInfo, startNewGame, onGameStart, className}) => {
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
            setFirstPlayerCards(tmpFirstPlayerCards)
            setSecondPlayerCards(tmpSecondPlayerCards)
            setPlayedCards([])
            // notify game start to parent
            onGameStart()
        }
    }, [startNewGame, onGameStart, gameInfo])

    return (
        <div className={className}>
            <div className="border rounded mr-3 p-3">
                <Hand className=""/>
            </div>
        </div>
    );
};

export default GamePlay;