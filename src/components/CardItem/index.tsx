import React from 'react'
import './style.css';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div``

interface Props {
    data: Object,
    index: number,
    disabled: boolean,
    className?: string,
    height: number
}

const CardItem: React.FC<Props> = ({data, index, disabled, className, height}) => {
    
    return (
        <Draggable draggableId={data['code']} isDragDisabled={disabled} index={index}>
            {(provided) => (
                <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <div style={{ height: height }} className="d-inline-block ml-2 mb-2">
                        <img className="h-100" src={data['image']} alt="This is your card" />
                    </div>
                </Container>
            )}
        </Draggable>
    );
};

export default CardItem;