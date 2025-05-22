import React,{useEffect,useState} from 'react';


export const Todos = () => {
const [todos,setTodos] = useState([]);//vrednost zemena od server lista na todos

function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res=>res.json())
            .then(json=>setTodos(json))
            .catch(err=>alert(err))
}

useEffect(()=>{
    getTodos();
},[])

function handleTodoChange(id){
    console.log(id)
setTodos([...todos.map(todo=>
    todo.id===id ? {...todo,completed:!todo.completed} : todo
)])
}

    return (
        <div id='todos'>
            <ul>
                {todos.map(todo=>{
                    return(
                        <li key={todo.id}>
                            <label>{todo.title}
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={()=>{handleTodoChange(todo.id)}}
                            />
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}