import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    DELETE_USERS_REQUEST,
    DELETE_USERS_SUCCESS,
    DELETE_USERS_FAIL
} from './constants';

export const fetchUsersRequest = (requestParams) =>{
    return{
        type:GET_USERS_REQUEST,
        payload: requestParams
    }
}

export const fetchUsersSuccess = (users) =>{
    return{
        type:GET_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFail = (error) => {
    return{
        type:GET_USERS_FAIL,
        payload:error
    }
}


export const removeUserRequest = (requestParams) =>{
    return{
        type:DELETE_USERS_REQUEST,
        payload:requestParams
    }
}

export const removeUserSuccess = (userId) =>{ 
    return{
        type:DELETE_USERS_SUCCESS,
        payload: userId
    }
}

export const removeUserFail = (err) => {
    return{
        type:DELETE_USERS_FAIL,
        payload:err
    }
}