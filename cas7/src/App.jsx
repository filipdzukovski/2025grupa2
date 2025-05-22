import React,{useState,useEffect} from 'react';
import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Routes,Route} from 'react-router';
import {Navigation} from './components/Navigation';
import {ChildComponent} from './components/ChildComponent';
import { NotFound } from './components/NotFound';
import {Users} from './components/Users';
import {Posts} from './components/Posts';
import {Todos} from './components/Todos'


export function App(){
  const [users,setUsers] = useState([]);
  const [posts,setPosts] = useState([]);

  function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
          .then(res=>res.json())
          .then(json=>setUsers(json))
          .catch(err=>alert(err))
  }

  function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(json=>setPosts(json))
        .catch(err=>alert(err))
  }
  
useEffect(()=>{
  getPosts();
  setTimeout(()=>{
    getUsers()
  },1000)
  
},[]) //componentDidMount

  return(
    <div id='app'>
      {/* <button onClick={getUsers}>Get Users</button> */}
      <Navigation/>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element ={<About/>}/>
          <Route path='/contact' element={<Contact/>}>
            <Route path="us" element={<ChildComponent/>}/>
          </Route>
          <Route path='/users' element={<Users listOfUsers={users}/>}/>
          <Route path='/posts' element={<Posts listOfPosts={posts}/>}/>
          <Route path='/todos' element={<Todos/>}/>
          <Route path='*' element={<NotFound/>} />
          </Routes>
    </div>
  )
}