import {useState} from 'react'

const useInput = (validator) => {
    const [inputTouched, setInputTouched] = useState(false);
    const [enteredValue, setEnteredValue] = useState("");
    const inputIsValid = validator(enteredValue);
    const isError = !inputIsValid && inputTouched;


  const onChangeHandler = (inputValue) => {
    setEnteredValue(inputValue);
  }

  const reset = () => {
     setEnteredValue("");
     setInputTouched(false);
  }

  const onBlurHandler = (event) => {
        setInputTouched(true)
  }

  return {
      isError,
      enteredValue,
      inputIsValid,
      onBlurHandler,
      onChangeHandler,
      reset
  }

}

export default useInput