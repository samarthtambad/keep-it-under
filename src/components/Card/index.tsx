import React, { useState } from 'react'
import './style.css';

interface Props {
    className?: string,
    imgURL: string
}

const Card: React.FC<Props> = (props) => {
    return (
        <div className="d-inline ml-2">
            <img src={props.imgURL} style={{ height: 100 }} alt="This is your card" />
        </div>
    );
};

export default Card;