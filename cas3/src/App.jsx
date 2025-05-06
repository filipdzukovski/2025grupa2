import React from 'react';
import {Domashno} from './components/Domashno';
import {Comments} from './components/Comments';
import {Car} from './components/Car';
import { LinkedIn } from './components/LinkedIn';

let user1 = {ime:"Ivan",prezime:"Ivanov",adresa:"Skopje",godini:22};
let user2 = {ime:"Igor",prezime:"Igorovski",adresa:"Debar",godini:16};
let user3 = {ime:"Petar",prezime:"Dimov",adresa:"Skopje",godini:19};
let user4 = {ime:"Sime",prezime:"Simonov",adresa:"Gostivar",godini:21};

let comments = [
  {id:0, author:'Filip',content: 'Book 1'},
  {id:1, author:'Andrej',content: 'Book 2'},
  {id:2,author:'Ivana',content:'Book 3'}
]

let registracija = [
  {grad:{naselba:"Naselba 1",ulica:"Ulica 1"},oznaka:"SK-0000-AB"},
  {grad:{naselba:"Naselba 2",ulica:"Ulica 2"},oznaka:"GV-0000-AB"},
  {grad:{naselba:"Naselba 3",ulica:"Ulica 3"},oznaka:"TE-0000-AB"}
]

let cars = [
  {brand:'Ford', model: 'Fiesta',year:2012,plates:registracija[0]},
  {brand:'Opel',model:'Astra',year:2015,plates:registracija[1]},
  {brand:'VW',model:'Polo',year: 2020,plates:registracija[2]}
]

const settings = {
  showConnect: true,
  isConnected:true
}

const user = {
name:'Filip Dzukovski',
email:'filipdzukovski@yahoo.com',
image:'https://media.licdn.com/dms/image/v2/C5603AQF8hDZhZZqoBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516929695724?e=1752105600&v=beta&t=5HaA7IWN7CU8WWPoJ6-u9uZB1AmQ5cohLuftvBsMjOg'

}


export function App(){


  
  return(
    <div id='app'>
      <LinkedIn
      user={user}
      settings={settings}
      />
      <hr/>
      <Car
      vozila={cars}
      />
      <hr/>
      <Comments
      listOfComments={comments}
      datum="06/05/2025"
      />
      <hr/>
      <Domashno
      korisnik1={user1}
      korisnik2={user2}
      korisnik3={user3}
      korisnik4={user4}
      />
    </div>
  )
}