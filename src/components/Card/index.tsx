import React, { useState } from 'react'
import './style.css';

interface Props {
    className?: string,
    data: Object
}

const Card: React.FC<Props> = (props) => {
    return (
        <div style={{ height: 80 }} className="d-inline-block ml-2 mb-2">
            <img className="h-100" src={props.data['image']} alt="This is your card" />
        </div>
    );
};

export default Card;