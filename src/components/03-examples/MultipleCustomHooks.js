import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(1);
    
    const {loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log (state)

    const {author, quote} = !!data && data[0]; //if exist data extrae [0]

    return (
        <div>
            <h1>BreakinBad Quotes</h1>


            {
                loading
                ?
                    (
                     <div className="alert alert-info text-center"> Loading ...</div>
                    )
                :
                (
                    
                    <blockquote className="blockquote text-right">
                         <p className="mb-0"> {quote}</p>
                         <footer className="blockquote-footer"> {author} </footer>
                     </blockquote>
                )   
            }

            <button className="btn btn-prrimary" onClick={ increment }>Siguiente frase</button>


        </div>
    )
}
