import React, { useState, useRef } from 'react'
import './style.css';

interface Props {
    className?: string,
    data: Object
}

export interface CardProps {
  id: any
  text: string
  data: object
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

const CardItem: React.FC<Props> = (props) => {
    const ref = useRef<HTMLDivElement>(null)
    return (
        <div style={{ height: 100 }} className="d-inline-block ml-2 mb-2">
            <img className="h-100" src={props.data['image']} alt="This is your card" />
        </div>
    );
};

export default CardItem;