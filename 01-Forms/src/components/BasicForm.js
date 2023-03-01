import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) =>
    value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
  );

  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formHandler = (e) => {
    e.prevenDefault();
    if (!formIsValid) return;
    nameReset();
    lastNameReset();
    emailReset();
  };

  const nameInputClasses = !nameHasError
    ? "form-control"
    : "form-control invalid";
  const lastNameInputClasses = !lastNameHasError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formHandler}>
      <div className="control-group">
        {/* // NAME */}
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
            type="text"
            id="name"
          />
          {nameHasError && <p>Name not correct</p>}
        </div>
        {/* // LAST NAME */}
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
            type="text"
            id="lastName"
          />
        </div>
      </div>
      {/* // EMAIL */}
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          type="email"
          id="email"
        />
      </div>
      {/* // SUBMIT */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
