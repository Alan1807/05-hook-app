import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    // Custom hook que crea un state para un contról y retorna dicho state
    // con la función de setState y resetState de dicho control
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );
        reset();

    }

    return (
        <>
            
            <h1>Agregar TODO</h1>
            <hr />

            <form onSubmit={ handleSubmit }>

                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar
                    </button>
                </div>                        

            </form>

        </>
    )
}
