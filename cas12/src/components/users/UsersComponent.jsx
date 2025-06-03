import React from 'react';

export const UsersComponent = ({listOfUsers,error,loading}) => {
    
    return(
        <div id='users-component'>
            {!error && !loading ? 
            <table border={1}>
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
            </table> :<h1>{error}</h1>}
        </div>
    )
}