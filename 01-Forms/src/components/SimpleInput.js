import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMail,
    hasError: mailInputHasError,
    isValid: enteredMailIsValid,
    valueChangeHandler: mailChangedHandler,
    inputBlurHandler: mailBlurHandler,
    reset: resetMailInput,
  } = useInput((value) =>
    value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
  );

  let formIsValid = false;

  if (enteredNameIsValid && enteredMailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!enteredNameIsValid) return;
    if (!enteredMailIsValid) return;
    resetNameInput();
    resetMailInput();
  };

  // Validation playing with classes
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const mailInputClasses = mailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      {/* NAME */}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {/* Validation playing with state */}
        {nameInputHasError && <p className="error-text">Name not valid</p>}
      </div>
      {/* MAIL */}
      <div className={mailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={mailChangedHandler}
          onBlur={mailBlurHandler}
          value={enteredMail}
        />
        {/* Validation playing with state */}
        {mailInputHasError && <p className="error-text">Email not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
export default SimpleInput;
