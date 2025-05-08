import React,{useEffect,useState} from 'react';

export const StateExamples = () =>{

    const [promenliva,setPromenliva] = useState("Vrednost 1");
    const [inputValue,setInputValue] = useState("")
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [brojac,setBrojac] = useState(0)

    useEffect(()=>{
        console.log("Username: ",username);
        console.log("Password: ",password)
    },[username,password]) //dependecy array ako e prazen ova ke bide componentDidMount,za componentDidUpdate dodavame elementi(promenlivi) od state za koi ke se prati nivnata vrednost

    // function changeValue(){
    //     setPromenliva("Nova vrednost 2")
    // }
    function handleChangedValue(event){
        console.log(event)
        setInputValue(event.target.value)
    }

    return(
        <div id='state-examples'>
            <h2>State: {promenliva}</h2>
            <button onClick={()=>{setPromenliva("Nova vrednost 3")}} >Promeni</button>
            <br/>
            <br/>
            <input
            type='text'
            placeholder='Enter something here'
            value={inputValue}
            onChange={handleChangedValue}
            />
            <br/>
            <br/>
            <input
            type="text"
            placeholder='Enter Username'
            value = {username}
            onChange={(event)=>{setUsername(event.target.value)}}
            />
            <p>{username}</p>
            <br/>
            <br/>
            <input
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <br/>
            <br/>
            {password}
            <h2>Counter: {brojac}</h2>
            <img 
            src = {'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg'}
            alt='Batman'
            onClick={()=>{setBrojac(brojac +1)}}
            onMouseEnter={()=>{setBrojac(brojac +1)}}
            onMouseLeave={()=>{setBrojac(brojac -1)}}
            />
        </div>
    )
}