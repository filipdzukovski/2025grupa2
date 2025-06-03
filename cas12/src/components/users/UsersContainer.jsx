import React,{useEffect} from 'react';
import {UsersComponent} from './UsersComponent';
import {useDispatch,useSelector} from 'react-redux';
import {fetchUsers} from './duck/operations';

export default function UsersContainer(){

    const dispatch = useDispatch();
    const users = useSelector(state=>state.usersReducer.users);
    const error = useSelector(state=>state.usersReducer.error);
    const isLoading = useSelector(state=>state.usersReducer.isLoading);

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    return(
        <div id='users-container'>
            <UsersComponent listOfUsers={users} error={error} loading={isLoading} />
        </div>
    )
}