import React from 'react';

export const UserLogin = ({isLoggedIn,username,role}) => {

    return(
        isLoggedIn ? <div>
            {role === 'admin' ? <h2>Welcome back Admin {username}</h2>
            : <h2>Welcome back {username}</h2>}
        </div>
        :
        <div>
            <h2>Hello,Guest please log in!!!</h2>
        </div>
    )
}