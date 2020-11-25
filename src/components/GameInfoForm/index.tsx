import React, { useEffect, useState } from 'react'
import './style.css';

interface FormElementProps {
    id: string,
    type: string,
    data: object,
    label: string,
    validate: object,
    placeholder?: string,
    onChange: (data: any) => void
}

const FormElement: React.FC<FormElementProps> = ({id, type, data, label, validate, placeholder, onChange}) => {
    const [value, setValue] = useState(data[id])
    const [error, setError] = useState(null)

    const handleOnChange = (event) => {
        const fieldValue = (type === "number") ? parseInt(event.target.value) : event.target.value
        const err = validate[id](fieldValue)
        setValue(fieldValue)
        setError(err)
        onChange(event)
    }

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
    validate: Object,
    onSubmit: (data: any) => void,
    className?: string
}

const GameInforForm: React.FC<GameInfoProps> = ({initialValues, validate, onSubmit, className}) => {
    const [values, setValues] = useState(initialValues)
    const [error, setError] = useState(true)
    
    const handleOnChange = (event) => {
        const fieldName = event.target.id
        const fieldType = event.target.type
        const fieldValue = (fieldType === "number") ? parseInt(event.target.value) : event.target.value
        setValues({...values, [fieldName]:fieldValue })
    }

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
        <div className={className}>
            <div className="border rounded ml-3 p-3">
                <h1 className="h4 mb-4">Game Information</h1>
                <FormElement id="firstPlayerName" type="text" data={values} validate={validate} 
                    label="Player 1" placeholder="Enter name" onChange={handleOnChange} />
                <FormElement id="secondPlayerName" type="text" data={values} validate={validate} 
                    label="Player 2" placeholder="Enter name" onChange={handleOnChange} />
                <FormElement id="goalNumber" type="number" data={values} validate={validate} 
                    label="Goal Num (G)" placeholder="Enter goal number" onChange={handleOnChange} />
                <FormElement id="numCards" type="number" data={values} validate={validate} 
                    label="Num Cards (N)" placeholder="Enter number of cards" onChange={handleOnChange} />
                <button className="btn btn-primary btn-sm" type="button" disabled={error} onClick={handleStartNewGame}>Start New Game</button>
            </div>
        </div>
    );
};

export default GameInforForm;