import React,{useState}from 'react';
import { Todos } from './Todos';
export function App(){

  const [newTodo,setNewTodo] = useState('');
  const [todos,setTodos] = useState([
    {id:1,text:"Element 1",completed:false},
    {id:2,text:"Element 2",completed:false},
    {id:3,text:"Element 3",completed:false}
])

  const [editTodo,setEditTodo] = useState(null);
  const [showCompletedTodos,setShowCompletedTodos] = useState(true);

function addNewTodo(){
  if(newTodo.trim() !== ''){
    let newObject = {
      id: Math.floor(Math.random()*1000),
      text:newTodo,
      completed:false
    }
    setTodos([...todos,newObject])
    setNewTodo('');
  }
  else{
    alert('No value has been entered!!!\nPlease enter a valid value before adding a TODO')
  }
}

function handleDelete(id){
  setTodos(todos.filter(todo=>todo.id!==id))
}

function handleEdit(id,text){
  setEditTodo({id,text})
}

function handleCancel(){
  setEditTodo(null);
}

function markTodoAsDone(todo){
setTodos([
  ...todos.map(item=>
    item.id === todo.id ?
    {id:item.id,text:item.text,completed:!item.completed}
    :
    item
  )
])
}

function handleSave(){
    if(editTodo){
      const updateTodos = todos.map(todo=>
        todo.id === editTodo.id ? {...todo,text:editTodo.text}
        :
        todo
      )
      setTodos(updateTodos);
      setEditTodo(null);
    }


}
const completedItems = todos.filter(todo=>todo.completed).length
  return(
    <div id='app'>
     
    <input
      type='text'
      placeholder='Enter Todo'
      value={newTodo}
      onChange={(e)=>{setNewTodo(e.target.value)}}
    />

    <button onClick={addNewTodo}>Add Todo</button>
    <h3>Completed Items: {completedItems} </h3>

    <button onClick={()=>{setShowCompletedTodos(!showCompletedTodos)}}>
      {showCompletedTodos ? 'Hide Completed' : 'Show Completed'}
    </button>
     {todos.length === 0 ?<h3>No items in the array</h3> :
      <Todos
      listOfTodos={showCompletedTodos ? todos : todos.filter(todo=>!todo.completed)}
      handleDelete={handleDelete}
      markTodoAsDone={markTodoAsDone}
      handleEdit={handleEdit}
      editTodo={editTodo}
      handleCancel={handleCancel}
      handleSave={handleSave}
      />}
    </div>
  )
}