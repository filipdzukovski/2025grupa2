import React from 'react';
// import {Movies} from './components/Movies';
// import {LifecycleExample} from './components/LifecycleExamples';
import {StateExamples} from './components/StateExamples';
const filmovi = [
  {name:"The Dark Knight",date:"2008",genre:"Action,Crime,Drama",plot:"When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",imdbLink:"https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_the%2520dark%2520kni",imgUrl:"https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"},
  {name:"Back to the Future",date:"1985",genre:"Sci-fi,Comedy",plot:"Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",imdbLink:"https://www.imdb.com/title/tt0088763/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_back%2520to%2520the",imgUrl:"https://m.media-amazon.com/images/M/MV5BMTNlOTRmOTEtMTAyMi00NjFiLTk3NDMtNWI0YzA3ZTZlYjZiXkEyXkFqcGc@._V1_.jpg"},
  {name:"Pulp Fiction",date:"1994",genre:"Dark Comedy,Gagnster",plot:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",imdbLink:"https://www.imdb.com/title/tt0110912/?ref_=fn_all_ttl_1",imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"},
  {name:"Reservoir Dogs",date:"1992",genre:"Crime,Thriller",plot:"When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",imdbLink:"https://www.imdb.com/title/tt0105236/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_reservoi",imgUrl:"https://upload.wikimedia.org/wikipedia/en/0/01/Reservoir_Dogs.png"},
  {name:"A Few Good Men",date:"1992",genre:"Drama,Thriller",plot:"A military lawyer intends to prove that two US Marines charged with murdering a fellow Marine were only following their base commander's orders.",imdbLink:"https://www.imdb.com/title/tt0104257/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_a%2520few",imgUrl:"https://m.media-amazon.com/images/M/MV5BOGVhMTUwYzEtZGQ1ZC00Nzg1LTk0OGUtMDk0NDM0ZmZlN2E0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"}
]

export function App(){

  return(
    <div id='app'>
      <StateExamples/>
      {/* <Movies
      filmovi = {filmovi}/>*/}
      {/* <LifecycleExample/> */}
    </div>
  )
}