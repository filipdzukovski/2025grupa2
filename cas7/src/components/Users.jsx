import React from 'react';

export const Users = ({listOfUsers}) =>{
    console.log(listOfUsers)
    return(
        <div id='users'>
         { listOfUsers.length >0 ?   <table border ={1} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {listOfUsers.map(user=>{
                    return(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        : <h2>Loading...</h2>    
        }
        </div>
    )
}