import React from 'react'
import './style.css';

interface Props {
    className?: string
}

const GamePlay: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div className="border rounded mr-3 p-3">
                GamePlay
            </div>
        </div>
    );
};

export default GamePlay;