import React, { useState } from 'react'


const SimpleInput = (props) => {



  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

  //fia true
  // fadye false



  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    console.log("3");
    //  if (enteredName.trim() !== '') {
    //       setEnteredNameIsValid(true);
    //hon iza elna hik..yaane nehna we refer to the old state
    //so el azbat iza badna nheta..nheta event.target.value
    //la tkun synchronus w refer la zet el text
    //   };
  }





  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    console.log("1");
  }





  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    console.log("2");
    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName('');
    setEnteredNameTouched(false);
  };




  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';



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



// import React, { useRef, useState, useEffect } from 'react'


// const SimpleInput = (props) => {



//   const nameInputRef = useRef();
//   const [enteredName, setEnteredName] = useState('');
//   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false)




//   useEffect(() => {
//     if (enteredNameIsValid) {
//       console.log('Name Input is Valid');
//     }
//   }, [enteredNameIsValid]);



//   const nameInputChangeHandler = event => {
//     setEnteredName(event.target.value);
//   };


//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouched(true);

//     if (enteredName.trim() === '') { setEnteredNameIsValid(false); return; }

//     setEnteredNameIsValid(true);
//     const enteredValue = nameInputRef.current.value;
//     setEnteredName('');
//   }




//   const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
//   const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';

//   // console.log(nameInputClasses); //form-control
//   // console.log(nameInputIsInValid);//false


//   return (

//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input ref={nameInputRef} value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} />
//         {nameInputIsInValid && <p className='error-text'>Name must not be empty</p>}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };



// export default SimpleInput;



//before the final

// import React, { useState } from 'react'


// const SimpleInput = (props) => {



//   const [enteredName, setEnteredName] = useState('');
//   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
//   const [enteredNameTouched, setEnteredNameTouched] = useState(false)






//   const nameInputChangeHandler = event => {
//     setEnteredName(event.target.value);
//hon iza 2elna enteredName.trim() ...yaane nehna we refer to the old
//state so el azbat ano nektob event.target.value
//     if (event.target.value.trim() !== '') {
//       setEnteredNameIsValid(true);
//     };
//   }





//   const nameInputBlurHandler = (event) => {
//     setEnteredNameTouched(true);
//     //hon hatayna return la nemna3 el excute taba3 be2e el code
//     // iza mafi code baada mafi de3e nhet el return;
//     if (enteredName.trim() === '') {
//       setEnteredNameIsValid(false);
//     }
//   }





//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameTouched(true);

//     if (enteredName.trim() === '') { setEnteredNameIsValid(false); return; }

//     setEnteredNameIsValid(true);
//     setEnteredName('');
//   }




//   const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
//   const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';



//   return (

//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor='name'>Your Name</label>
//         <input
//           value={enteredName}
//           type='text'
//           id='name'
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//         />
//         {nameInputIsInValid && <p className='error-text'>Name must not be empty</p>}
//       </div>
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };



// export default SimpleInput;

















