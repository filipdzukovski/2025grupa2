import React from 'react';
import {Link} from 'react-router';
import {useDispatch} from 'react-redux';
import {logOut} from './auth/duck/operations';
import "./../css/Nav.css"

export const Nav = () => {

    const dispatch = useDispatch();

    return(
        <ul id='nav'>
            <li><Link to='/'>App</Link></li>
            <li><Link to='/users'>Users</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
            <li><Link to='/albums'>Albums</Link></li>
            <li><Link to='/cities'>Cities</Link></li>
            <li className='log-out'><button onClick={()=>dispatch(logOut())}>Log Out</button></li>
        </ul>
    )
}