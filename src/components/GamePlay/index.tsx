import React from 'react'
import './style.css';

import Hand from '../Hand'

interface Props {
    className?: string
}

const GamePlay: React.FC<Props> = (props) => {
    return (
        <div className={props.className}>
            <div className="border rounded mr-3 p-3">
                <Hand className=""/>
            </div>
        </div>
    );
};

export default GamePlay;