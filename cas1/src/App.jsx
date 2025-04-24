import React from "react" //const React = require("react"); // es5 
import {Hello} from './components/Hello.jsx';
// import {Goodbye} from './components/Goodbye.jsx';

export function App(){

const broj = 1;
var fraza = 'denes sulsham react';
let karakter = 'c';
let nesto = undefined;


  return(
    <>
    <Hello/>
    <h1>Hello from my React Functionsssssss</h1>
    <Hello/>
    <p>Hi</p>
    <hr/>
    {/* <Goodbye/> */}
    <p>{5+3}</p>
    <h2>Brojot koj sto go imam e {broj}</h2>
    <h4>Frazata e: {fraza}</h4>
    <h6>Karakter random: {karakter}</h6>
    <p>Ova nesto e: {nesto}</p>
    </> //React.Fragment
  )

}

