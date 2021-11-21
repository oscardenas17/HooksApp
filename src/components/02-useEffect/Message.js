import React from 'react'
import { useEffect } from 'react/cjs/react.development'

export const Message = () => {
   
   useEffect(() => {
       console.log('componente montado');
       return () => {
        console.log('componente desmontado');
       }
   }, [])
   
   
    return (
        <div>
            <h3>Message</h3>
        </div>
    )
}
