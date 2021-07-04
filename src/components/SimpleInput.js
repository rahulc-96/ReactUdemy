import useInput from "../hook/useInput";

const SimpleInput = (props) => {
  const nameValidator = (name) => name.trim() !== "";
  const emailValidator = (email) => email.trim() !== "" && email.trim().includes('@');
  const {
    isError: isNameError,
    enteredValue: enteredName,
    inputIsValid: nameIsValid,
    onBlurHandler: nameBlurHandler,
    onChangeHandler: nameChangeHandler,
    reset: nameReset
} = useInput(nameValidator)

const {
  isError: isEmailError,
  enteredValue: enteredEmail,
  inputIsValid: emailIsValid,
  onBlurHandler: emailBlurHandler,
  onChangeHandler: emailChangeHandler,
  reset: emailReset
} = useInput(emailValidator)

 
  const formIsValid = nameIsValid && emailIsValid;

  const onChangeHandler = (event) => {
    if(event.target.id === 'name')
    nameChangeHandler(event.target.value);
    if(event.target.id === 'email')
    emailChangeHandler(event.target.value);
  }

  const onSubmitHandler = (event) => {
         event.preventDefault();
         emailReset()
         nameReset()
  }

  const onBlurHandler = (event) => {
    if(event.target.id === 'name')
      nameBlurHandler()
    if(event.target.id === 'email')
      emailBlurHandler()
  }

  return (
    <form onSubmit = {onSubmitHandler}>
      <div className= {`${!isNameError? 'form-control' : 'form-control invalid' }`}>
        <label htmlFor='name'>Your Name</label>
        <input value = {enteredName} onBlur = {onBlurHandler} onChange= {onChangeHandler} type='text' id='name' />
         {
           isNameError && <p className = 'error-text' > Name must not be empty</p>
         }
      </div>
      <div className= {`${!isEmailError? 'form-control' : 'form-control invalid' }`}>
        <label htmlFor='email'>Your Email</label>
        <input value = {enteredEmail} onBlur = {onBlurHandler} onChange= {onChangeHandler} type='email' id='email' />
         {
           isEmailError && <p className = 'error-text' > Enter Valid Email</p>
         }
      </div>
      <div className="form-actions">
        <button disabled ={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
