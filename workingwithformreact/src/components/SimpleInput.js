import React, { useState } from 'react'
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput

  } = useInput(value => value.trim() !== '');



  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);


  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;


  let formIsValid = false;


  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }



  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
    console.log("3");
  }




  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
    console.log("1");
  }





  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();

    setEnteredEmail('');
    setEnteredEmailTouched(false);

  };




  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClasses = enteredEmailIsInValid ? 'form-control invalid' : 'form-control';
  //
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
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {enteredEmailIsInValid && <p className='error-text'>please Enter a valid Email</p>}
      </div>




      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};



export default SimpleInput;





