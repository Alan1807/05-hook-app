import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {

        // document.querySelector('input').focus(); // Hace focus al control
        //document.querySelector('input').select(); // Hace focus al control seleccionando el contenido
        inputRef.current.select(); // Hace focus al control seleccionando el contenido

    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                type="text" 
                className="form-control" 
                placeholder="Su nombre" />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }>
                    Focus
            </button>
        </div>
    )
}
