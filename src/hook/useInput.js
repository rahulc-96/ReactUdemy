import {useReducer} from 'react'
const useInput = (validator) => {

  const defaultState = {
    inputTouched: false,
    enteredValue: ""
  };

  const inputReducer = (prevState, action) => {
    if(action.type === 'change'){
        return {...prevState, enteredValue:action.value}   
    }
    if(action.type === 'blur'){
      return {...prevState, inputTouched: true}
    }
    if(action.type === 'reset'){
      return defaultState
    }
    return defaultState;
  }
  
  const [currentState, inputDispatcher] = useReducer(inputReducer, defaultState);

  const {enteredValue, inputTouched} = currentState
  const inputIsValid = validator(enteredValue);
  const isError = !inputIsValid && inputTouched;

  const onChangeHandler = (inputValue) => {
    inputDispatcher({type:'change', value:inputValue})
  }

  const reset = () => {
    inputDispatcher({type:'reset', value:''})
  }

  const onBlurHandler = (event) => {
    inputDispatcher({type:'blur', value:''})
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