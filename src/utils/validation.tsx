
export const validateName = (fieldName, fieldValue, minLength) => {
    if (fieldValue.trim() === '') {
        return `${fieldName} is required`
    }
    if (fieldValue.trim().length < minLength) {
        return `${fieldName} needs to be at least ` + minLength + ` characters`
    }
    return null
}

export const validateNumberInRange = (fieldName, fieldValue, lowerBound, upperBound) => {
    if (!fieldValue) {
        return fieldName + ' is required'
    }
    if (fieldValue < lowerBound) {
        return fieldName + ' must be at least ' + lowerBound
    }
    if (fieldValue > upperBound) {
        return fieldName + ' must be under ' + upperBound
    }
    return null
}