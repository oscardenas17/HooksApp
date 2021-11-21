import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export const Message = () => {
   
    const [coords, setcoords] = useState( {x:0 , y:0 } )
    const {x,y} = coords;

   useEffect(() => {
    //    console.log('componente montado');
    const mouseMove = (e) =>{
         // console.log(e);
         const coords = { x: e.x, y:e.y};
        //  console.log(coords);
        setcoords(coords);
    }
    window.addEventListener('mousemove', mouseMove);

       return () => {
        // console.log('componente desmontado');
        window.removeEventListener('mousemove', mouseMove);


       }
   }, [])
   
   
    return (
        <div>
            <h3>Message</h3>
            <p> x: {x } y: {y} </p>
        </div>
    )
}
