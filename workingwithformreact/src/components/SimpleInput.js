import React, { useState } from 'react'


const SimpleInput = (props) => {



  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);


  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);



  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;


  let formIsValid = false;


  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }



  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    console.log("3");
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
    console.log("3");
  }





  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    console.log("1");
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
    console.log("1");
  }





  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);

  };




  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';

  const emailInputClasses = enteredEmailIsInValid ? 'form-control invalid' : 'form-control';

  return (

    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInValid && <p className='error-text'>Name must not be empty</p>}
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





