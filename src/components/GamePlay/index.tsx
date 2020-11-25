import React from 'react'
import './style.css';

import Card from '../Card'

interface Props {
    className?: string
}

const GamePlay: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div className="border rounded mr-3 p-3">
                GamePlay
                <Card imgURL="/images/0C.png" />
                <Card imgURL="/images/2D.png" />
                <Card imgURL="/images/5S.png" />
            </div>
        </div>
    );
};

export default GamePlay;