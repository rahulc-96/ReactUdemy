import React, {useState} from "react";

const SimpleInput = (props) => {
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const nameIsValid = enteredName.trim() !== "";
  const renderError = nameTouched && !nameIsValid;
  const formIsValid = nameIsValid;

  console.log(formIsValid);
  
  const onChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const onSubmitHandler = (event) => {
         event.preventDefault();
         console.log(enteredName);
         setEnteredName('');
         setNameTouched(false);
  }

  const onBlurHandler = (event) => {
      setNameTouched(true);
  }

  return (
    <form onSubmit = {onSubmitHandler}>
      <div className= {`${!renderError ? 'form-control' : 'form-control invalid' }`}>
        <label htmlFor='name'>Your Name</label>
        <input value = {enteredName} onBlur = {onBlurHandler} onChange= {onChangeHandler} type='text' id='name' />
         {
           renderError && <p className = 'error-text' > Name must not be empty</p>
         }
      </div>
      <div className="form-actions">
        <button disabled ={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
