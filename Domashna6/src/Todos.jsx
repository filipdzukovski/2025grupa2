import React from 'react';

export const Todos = ({listOfTodos,handleDelete,markTodoAsDone,handleEdit,editTodo,handleCancel,handleSave}) =>{


    return(
        <div id='todos'>
           <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfTodos.map(todo=>{
                        return(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{
                                editTodo && editTodo.id ===todo.id ?
                                <input
                                    type='text'
                                    value={editTodo.text}
                                    onChange={(e)=>{handleEdit(editTodo.id,e.target.value)}}
                                />
                                :
                                <>{todo.text}</>}</td> 
                                <td>
                                    <input
                                        type='checkbox'
                                        value={todo.completed}
                                        checked={todo.completed}
                                        onChange={()=>{markTodoAsDone(todo)}}
                                        />
                                </td>
                                <td>
                                    { editTodo && editTodo.id ===todo.id ?
                                        <>
                                        <button onClick={handleSave}>Save</button>
                                        <button onClick={handleCancel}>Cancel</button>
                                        </>
                                        :
                                        <>
                                    <button onClick={()=>{handleEdit(todo.id,todo.text)}}>Edit</button>
                                    <button onClick={()=>{handleDelete(todo.id)}}>Delete</button> </>
                                    }
                                   
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
           </table>
        </div>
    )
}