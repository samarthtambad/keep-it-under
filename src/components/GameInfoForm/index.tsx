import React, { useEffect, useState } from 'react'
import './style.css';
import styled from 'styled-components'
import {validateName, validateNumberInRange} from '../../utils/validation'

const Container = styled.div``

interface FormElementProps {
    id: string,
    type: string,
    data: object,
    label: string,
    validate: object,
    placeholder?: string,
    onChange: (id:string, value:any) => void
}

const FormElement: React.FC<FormElementProps> = ({id, type, data, label, validate, placeholder, onChange}) => {
    const [value, setValue] = useState(data[id])
    const [error, setError] = useState(null)

    const handleOnChange = (event) => {
        const fieldValue = (type === "number") ? parseInt(event.target.value) : event.target.value
        const err = validate[id](fieldValue)
        setValue(fieldValue)
        setError(err)
        onChange(id, fieldValue)
    }

    useEffect(() => {
        if(id === "goalNumber" || id === "numCards"){
            const fieldValue = data[id]
            const err = validate[id](fieldValue)
            setValue(fieldValue)
            setError(err)   
        }
    }, [data, id, validate])

    return (
        <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor={id}>{label}</label>
            </div>
            <input type={type}
                className={`form-control ${(error != null) ? "is-invalid" : ""}`} 
                value={value} onChange={handleOnChange} id={id}
                placeholder={placeholder}></input>
            { (error != null) && <div className="invalid-feedback"> { error }</div> }
        </div>
    );
}

interface GameInfoProps {
    initialValues: Object,
    onSubmit: (data: any) => void,
    className?: string
}

const GameInforForm: React.FC<GameInfoProps> = ({initialValues, onSubmit, className}) => {
    const [values, setValues] = useState(initialValues)
    const [error, setError] = useState(true)
    const [validate, setValidate] = useState({
        firstPlayerName: (name) => validateName("First Player name", name, 3),
        secondPlayerName: (name) => validateName("Second Player name", name, 3),
        goalNumber: (value) => validateNumberInRange("Goal number", value, 21, 120),
        numCards: (value) => validateNumberInRange("Number of cards", value, Math.ceil(values['goalNumber']/5), 26)
    })
    
    const handleOnChange = (id, value) => {
        const fieldName = id
        const fieldValue = value
        if(fieldName === "goalNumber") {
            setValues({...values, [fieldName]:fieldValue, "numCards": Math.ceil(value/5) })
        } else {
            setValues({...values, [fieldName]:fieldValue })
        }
    }

    useEffect(() => {
        setValidate({
        firstPlayerName: (name) => validateName("First Player name", name, 3),
        secondPlayerName: (name) => validateName("Second Player name", name, 3),
        goalNumber: (value) => validateNumberInRange("Goal number", value, 21, 120),
        numCards: (value) => validateNumberInRange("Number of cards", value, Math.ceil(values['goalNumber']/5), 26)
    })
    }, [values])

    useEffect(() => {
        var isError = false
        Object.keys(values).forEach((key) => {
            const err = validate[key](values[key])
            if(err != null){
                isError = isError || true
            }
        })
        setError(isError)
    }, [values, validate])

    const handleStartNewGame= (event: React.MouseEvent) => {
        onSubmit(values)
    }

    return (
        <Container>
            <h5 className="mb-3">Game Information</h5>
            <FormElement id="firstPlayerName" type="text" data={values} validate={validate} 
                label="Player 1" placeholder="Enter name" onChange={handleOnChange} />
            <FormElement id="secondPlayerName" type="text" data={values} validate={validate} 
                label="Player 2" placeholder="Enter name" onChange={handleOnChange} />
            <FormElement id="goalNumber" type="number" data={values} validate={validate} 
                label="Goal Num (G)" placeholder="Enter goal number" onChange={handleOnChange} />
            <FormElement id="numCards" type="number" data={values} validate={validate} 
                label="Num Cards (N)" placeholder="Enter number of cards" onChange={handleOnChange} />
            <button className="btn btn-primary btn-sm" type="button" disabled={error} onClick={handleStartNewGame}>Start New Game</button>
        </Container>
    );
};

export default GameInforForm;