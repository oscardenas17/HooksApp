import React, { useState } from 'react'
import { useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
            name:'',
            email:''
    });

    const {name,email} = formState;

 

    useEffect( ()=>{
        // console.log('hey');
    } , []);


    //lanza efecct cuando el form cambia
    useEffect( ()=>{
        // console.log('formState cambio');
    } , [formState]);

    //lanza effect cuando solo el email cambia
    useEffect( ()=>{
        // console.log('email cambio');
    } , [email]);



    const handleInputChange = ({target})=>{  //(e.target)
        // console.log(e.target.name);
        setFormState({
            ...formState,
            [target.name] : target.value
        })


    }
    
    return (
        <>
           <h1>useEffect</h1> 
           <hr />

           <div className="form-group">
               <input type="text" name="name"
                     className="form-control"
                     placeholder="Tu nombre"
                     autoComplete="off"
                     value={name}
                     onChange={handleInputChange}
               />
           </div>


           <div className="form-group">
               <input type="email" name="email"
                     className="form-control"
                     placeholder="Tu email"
                     autoComplete="off"
                     value={email}
                     onChange={handleInputChange}
               />
           </div>

        { (name === '123') && <Message /> }

        </>
    )
}
