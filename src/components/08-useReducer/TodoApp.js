import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';

const init = () => {

    // Si el local storage está vacío regresará un arreglo vacío,
    // de lo contrario regresará todos los 'todos' que estén en el local storage
    return JSON.parse( localStorage.getItem('todos') ) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    // Crea reducer con el estado inicial vacío y la función init
    // que leerá el local storage...si está vacío retorna un arreglo vacío,
    // de lo contrario retornará los 'todos' y será el nuevo estado
    // todos = STATE
    // dispatch = FUNCION QUE RECIBIRÁ LOS ACTIONS
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    // Effect que se ejecutará cada vez que 'todos' cambie. Almacenará
    // los 'todos' en el local storage
    // (que en este punto ya se agrega el todo capturado en pantalla al listado)
    useEffect(() => {
        
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
        
    }, [ todos ]);

    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete', 
            payload: todoId
        }

        dispatch( action );

    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle } />

                </div>
                
                <div className="col">
                    
                    <TodoAdd handleAddTodo={ handleAddTodo } />

                </div>
            </div>            

        </div>
    )
}
