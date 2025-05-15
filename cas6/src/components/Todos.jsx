import React from 'react';

export const Todos = ({todos,markTodoAsDone,deleteItem}) =>{
    return(
        <ol>
            {todos.length ===0 ? <h2>No Elements </h2> : todos.map(todo=>{
                return(
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input
                            type='checkbox'
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>{markTodoAsDone(todo)}}
                        />
                        <button onClick={()=>{deleteItem(todo.id)}}>Delete</button>
                    </li>
                )
            })}
        </ol>
    )
}