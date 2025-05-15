import React,{useState,useEffect} from 'react';
import {Todos} from './components/Todos';

export function App(){
    const [car,setCar] = useState({model: 'BMW',year:2021});
    const [days,setDays] = useState(['Monday','Tuesday','Wednesday']);
    const [person,setPerson] = useState({firstName:"",lastName:""});
    const [todos,setTodos] = useState([
      {id:1,text:'Learn React',done:false},
      {id:2,text: 'Eat Dinner',done:false},
      {id:3,text: 'Go to Sleep',done:false}
    ]);
    const [newTodo,setNewTodo] = useState('');

  useEffect(()=>{
    console.log('Todos: ',todos)
  },[todos])
  
    function newCar(){
    setCar({
      // model: 'Yugo',
      ...car,
      year: 2025
    })
  }


  function addDays(){
    setDays(['Sunday',...days,'Thursday'])
  }

  function markTodoAsDone(todo){
    setTodos([    //item -> iterator
      ...todos.map(item=> (item.id === todo.id) ? // uslovot e najdi go kliknatiot element item.id(1,2,3) todo.id -> kliknatoto id na pr.2
      {id:item.id,text:item.text,done:!item.done} // koga ke go najdeme kliknatiot element go menuvame samo propertito za done (korisime negacija)
      : item // za site ostanati elementi ne gi cepkame odnosno go vrakjame originalniot element od nizata nepromenet
    )
    ])
  }

  function addNewTodo(){
    if(newTodo.trim() !== ''){

    
    let newTodoObject = {
      id: Math.ceil(Math.random()*1000),
      //todos.length + 1,
      text: newTodo,
      done:false
    }
    

    setTodos([...todos,newTodoObject])
    setNewTodo('');
    }
    else {
      alert('No value has been entered\nPlease enter a value to add a TODO')
    }
  }

  function deleteItem(id){
    console.log(id)
    setTodos([
      ...todos.filter(item=> item.id !== id)
    ])
  }

  return(
    <div id='app'>

    <input
      type='text'
      placeholder='Enter TODO'
      value={newTodo}
      onChange={(e)=>{setNewTodo(e.target.value)}}
    />

    <button onClick={addNewTodo}>Add TODO</button>

      <Todos deleteItem={deleteItem} todos={todos} markTodoAsDone={markTodoAsDone}/>
      <hr/>
      <h2>Car</h2>
      <p>Model:{car.model} </p>
      <p>Year: {car.year} </p>
      <button onClick={newCar}>Buy new Car</button>
    <hr/>
    <ul>
      {days.map((day,i)=>(
        <li key={i}>{day}</li>
      ))}
    </ul>
      <button onClick={addDays}>Add Days</button>
      <hr/>
      <input 
        type='text'
        placeholder='Enter First Name'
        value={person.firstName}
        onChange={(e)=>{setPerson({...person,firstName:e.target.value})}}
        />
      <br/>
      <br/>
      <input
        type='text'
        placeholder='Enter Last Name'
        value={person.lastName}
        onChange={(e)=>{setPerson({...person,lastName:e.target.value})}}
      />

    </div>
  )
}