import { useState } from "react";

const useInput = (validate) => {
    const [inputValue, setInputValue] = useState('');  
    const [isInputTouched, setIsInputTouched] = useState(false);   
    const inputIsValid = validate(inputValue);
    const hasError = !inputIsValid && isInputTouched;
    
    const valueHandler = (event) => {
        setInputValue(event.target.value);
    }
    const touchHandler = () => {
        setIsInputTouched(true);
    } 
    const reset = () => {
        setInputValue('');
        setIsInputTouched(false);
    }
    return {
        value: inputValue,
        hasError,
        isValid: inputIsValid,
        valueHandler,
        touchHandler,
        reset
    }
}

export default useInput;
