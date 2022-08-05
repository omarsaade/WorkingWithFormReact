import React, { useRef, useState, useEffect } from 'react'


const SimpleInput = (props) => {



  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)




  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name Input is Valid');
    }
  }, [enteredNameIsValid]);



  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') { setEnteredNameIsValid(false); return; }

    setEnteredNameIsValid(true);
    const enteredValue = nameInputRef.current.value;
    setEnteredName('');
  }




  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';

  // console.log(nameInputClasses); //form-control
  // console.log(nameInputIsInValid);//false


  return (

    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} />
        {nameInputIsInValid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};



export default SimpleInput;


// initillay

// enteredNameIsValid false
// enteredNameTouched   false
// const nameInputIsInValid false
// const nameInputClasses: form-control

// ==================

// fadye

// enteredNameTouched   true
// enterdnameisvalid false
// nameInputisinvalid : true
// nameInputclasses : form-control invalid
// <p>sss</p>

// ==============================
// fiii


// enteredNametouched true 
// enterednameisvalid true
// nameInputisinvalid = false
// nameInputclasses = form-control

// ============================











