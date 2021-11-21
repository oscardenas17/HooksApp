import React from 'react';
import { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1:10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2} = state;

    return (
        <>
            <h1>Counter1 {counter1}</h1>
            <h1>Counter1 {counter2}</h1>
            <hr />

            <button className="btn btn-primary"
            onClick={ ()=>{
                setState( {
                     ...state, // permite mantener el  valor de counter2:20 y demas valors iniciales del state y sumar al count1, mantiene el valor con spread
                     counter1: counter1+1
                 })
            } } 
            >
                +1
            </button>
        </>  
    )
}
