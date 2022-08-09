import { useReducer } from 'react'


const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
        return { isTouched: true, value: state.value };
    }
    if (action.type === "RESET") {
        return { isTouched: false, value: '' }
    }


    return initialInputState;
};



// const inputReducer = (state, action) => {
//     switch (action.type) {
//         case "CHANGE":
//             return { value: action.value };
//         case "BLUR":
//             return { ...state, isTouched: true };
//         case "RESET":
//             return { value: "", isTouched: false };
//         default:
//             return defaultInputState;
//     }
// };




const useInputt = (ValidateValue) => {


    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);



    const valueIsValid = ValidateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;


    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    }


    const inputBlurHandler = (event) => {
        dispatch({ type: 'BLUR' });
    }

    const reset = () => {
        dispatch({ type: 'RESET' });
    }


    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };

};

export default useInputt
