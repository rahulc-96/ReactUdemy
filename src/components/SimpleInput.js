import React, {useState} from "react";

const SimpleInput = (props) => {
  const [nameTouched, setNameTouched] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [enteredMail, setEnteredMail] = useState("");
  const nameIsValid = enteredName.trim() !== ""
  const emailIsValid = enteredMail.trim() !== "" && enteredMail.trim().includes('@');
  const renderNameError = nameTouched && !nameIsValid;
  const renderEmailError = emailTouched && !emailIsValid; 
  const formIsValid = nameIsValid && emailIsValid;

  console.log(formIsValid);

  const onChangeHandler = (event) => {
    if(event.target.id === 'name')
    setEnteredName(event.target.value);
    if(event.target.id === 'email')
    setEnteredMail(event.target.value);
  }

  const onSubmitHandler = (event) => {
         event.preventDefault();
         setEnteredName('');
         setNameTouched(false);
         setEmailTouched(false);
         setEnteredMail('')
  }

  const onBlurHandler = (event) => {
    if(event.target.id === 'name')
      setNameTouched(true)
    if(event.target.id === 'email')
      setEmailTouched(true)
  }

  return (
    <form onSubmit = {onSubmitHandler}>
      <div className= {`${!renderNameError ? 'form-control' : 'form-control invalid' }`}>
        <label htmlFor='name'>Your Name</label>
        <input value = {enteredName} onBlur = {onBlurHandler} onChange= {onChangeHandler} type='text' id='name' />
         {
           renderNameError && <p className = 'error-text' > Name must not be empty</p>
         }
      </div>
      <div className= {`${!renderEmailError ? 'form-control' : 'form-control invalid' }`}>
        <label htmlFor='email'>Your Email</label>
        <input value = {enteredMail} onBlur = {onBlurHandler} onChange= {onChangeHandler} type='email' id='email' />
         {
           renderEmailError && <p className = 'error-text' > Enter Valid Email</p>
         }
      </div>
      <div className="form-actions">
        <button disabled ={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
