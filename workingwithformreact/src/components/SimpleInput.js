import React, { useState } from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const { value: enteredName, isValid: enteredNameIsValid, hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler, inputBlurHandler: nameBlurHandler, reset: resetNameInput }
    = useInput(value => value.trim() !== '');
  // hye defined here but not executed here el function li jawa useInput()
  //hye exexuted bel useinput
  // console.log(enteredName);

  const { value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler, inputBlurHandler: emailBlurHandler, reset: resetEmailInput }
    = useInput(value => value.includes('@'));




  let formIsValid = false;


  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();

    resetEmailInput();

  };




  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (

    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>


      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          value={enteredEmail}
          type='email'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className='error-text'>please Enter a valid Email</p>}
      </div>




      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};



export default SimpleInput;





