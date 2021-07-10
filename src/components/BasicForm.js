import useInput from "../hook/useInput";

const BasicForm = (props) => {
  const nameValidator = (name) => name.trim().length > 0;
  const emailValidator = (email) =>
    email.trim().length > 0 && email.includes("@");

  const {
    isError: firstNameError,
    enteredValue: firstNameValue,
    inputIsValid: firstNameValid,
    onBlurHandler: firstNameBlurHandler,
    onChangeHandler: firstNameChangeHandler,
    reset: firstNameReset,
  } = useInput(nameValidator);

  const {
    isError: lastNameError,
    enteredValue: lastNameValue,
    inputIsValid: lastNameValid,
    onBlurHandler: lastNameBlurHandler,
    onChangeHandler: lastNameChangeHandler,
    reset: lastNameReset,
  } = useInput(nameValidator);

  const {
    isError: emailError,
    enteredValue: emailValue,
    inputIsValid: emailValid,
    onBlurHandler: emailBlurHandler,
    onChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput(emailValidator);

  const onBlurHandler = (event) => {
    if (event.target.id === "first-name") firstNameBlurHandler();
    else if (event.target.id === "last-name") lastNameBlurHandler();
    else emailBlurHandler();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const onChangeHandler = (event) => {
    if (event.target.id === "first-name")
      firstNameChangeHandler(event.target.value);
    else if (event.target.id === "last-name")
      lastNameChangeHandler(event.target.value);
    else emailChangeHandler(event.target.value);
  };

  const isFormValid = emailValid && lastNameValid && firstNameValid;
  const formClasses = (isError) =>
    !isError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={formClasses(firstNameError)}>
          <label htmlFor="name">First Name</label>
          <input
            value={firstNameValue}
            type="text"
            id="first-name"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
          />
          {firstNameError && (
            <p className="error-text"> First Name must not be empty</p>
          )}
        </div>
        <div className={formClasses(lastNameError)}>
          <label htmlFor="name">Last Name</label>
          <input
            value={lastNameValue}
            type="text"
            id="last-name"
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
          />
          {lastNameError && (
            <p className="error-text"> Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={formClasses(emailError)}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          value={emailValue}
          type="text"
          id="email-address"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {emailError && (
          <p className="error-text"> Please enter a valid Email Address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
