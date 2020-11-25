import React, { useState, useRef } from 'react'
import './style.css';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div``

interface Props {
    data: Object,
    index: number,
    className?: string
}

export interface CardProps {
  id: any
  text: string
  data: object
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

const CardItem: React.FC<Props> = ({data, index, className}) => {
    const ref = useRef<HTMLDivElement>(null)
    return (
        <Draggable draggableId={data['code']} index={index}>
            {(provided) => (
                <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div style={{ height: 100 }} className="d-inline-block ml-2 mb-2">
                        <img className="h-100" src={data['image']} alt="This is your card" />
                    </div>
                </Container>
            )}
        </Draggable>
    );
};

export default CardItem;