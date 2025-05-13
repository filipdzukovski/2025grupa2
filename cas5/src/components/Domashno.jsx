import React,{useState} from "react";

export const Domashno = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [age,setAge] = useState(0);
    const [showValues,setShowValues] = useState(true);

  return (
    <div id="domasno">
      <h1>Sign Up Form</h1>
      <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
      <br />
      <br />
      <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
      <br />
      <br />
      <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      <br />
      <br />
      <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <br />
      <br />
      <input type="password" placeholder="Enter Password" value = {password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <br />
      <br />
      <input type="number" placeholder="Enter Age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
      <br />
      <br />

    <button onClick={()=>{setShowValues(!showValues)}}>
        {showValues ? 'Hide Table' : 'Show Table' }
    </button>
    <br />
    <br />

       { showValues && <table border={1}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{username}</td>
                    <td>{password}</td>
                    <td>{age}</td>
                </tr>
            </tbody>
        </table>}

    </div>
  );
};
