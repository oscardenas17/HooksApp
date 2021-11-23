import { useState } from "react"


export const useCounter = (initialState = 10) => {
   
    const [counter, setcounter] = useState(initialState)

    // const increment = (factor = 1) =>{
    //     setstate (state+factor);
    // }

    // const decrement = (factor = 1) =>{
    //     setstate (state-factor);
    // }

    // const reset = () =>{
    //     setstate (initialState);
    // }

    const increment = () =>{
        setcounter (counter+1);
    }

    const decrement = () =>{
        setcounter (counter-1);
    }

    const reset = () =>{
        setcounter (initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
